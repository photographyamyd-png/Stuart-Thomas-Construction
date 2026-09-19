import { Resend } from "resend";
import { site } from "@/data/site";

/**
 * Contact / quote email delivery.
 *
 * Preferred (Vercel): RESEND_API_KEY (+ optional CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL)
 * Fallback: FormSubmit.co → CONTACT_TO_EMAIL or site.email (no compose window;
 * first send may ask the owner to confirm once via FormSubmit).
 */

export const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

export type ContactFormKind = "snow-quote" | "general-inquiry";

export type SnowQuoteInput = {
  kind: "snow-quote";
  name: string;
  company: string;
  email: string;
  phone: string;
  town: string;
  propertyType: string;
  serviceNeeded: string;
  address: string;
  message?: string;
};

export type GeneralInquiryInput = {
  kind: "general-inquiry";
  name: string;
  email: string;
  phone: string;
  message: string;
  /** Optional project context */
  location?: string;
  projectType?: string;
};

export type ContactInput = SnowQuoteInput | GeneralInquiryInput;

export type FieldErrors = Record<string, string>;

function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function digitsOnly(phone: string) {
  return phone.replace(/\D/g, "");
}

export function validateContactInput(raw: unknown): {
  data?: ContactInput;
  errors?: FieldErrors;
} {
  if (!raw || typeof raw !== "object") {
    return { errors: { form: "Invalid request body." } };
  }

  const body = raw as Record<string, unknown>;
  const kind = trim(body.kind) as ContactFormKind;

  if (kind === "snow-quote") {
    const data: SnowQuoteInput = {
      kind: "snow-quote",
      name: trim(body.name),
      company: trim(body.company),
      email: trim(body.email),
      phone: trim(body.phone),
      town: trim(body.town),
      propertyType: trim(body.propertyType),
      serviceNeeded: trim(body.serviceNeeded),
      address: trim(body.address),
      message: trim(body.message) || undefined,
    };
    const errors: FieldErrors = {};
    if (!data.name) errors.name = "Name is required.";
    if (!data.company) errors.company = "Company is required.";
    if (!data.email) errors.email = "Email is required.";
    else if (!EMAIL_PATTERN.test(data.email)) errors.email = "Enter a valid email address.";
    if (!data.phone) errors.phone = "Phone is required.";
    if (!data.town) errors.town = "Select a town.";
    if (!data.propertyType) errors.propertyType = "Select a property type.";
    if (!data.serviceNeeded) errors.serviceNeeded = "Select a service.";
    if (!data.address) errors.address = "Property address is required.";
    if (Object.keys(errors).length) return { errors };
    return { data };
  }

  if (kind === "general-inquiry") {
    const data: GeneralInquiryInput = {
      kind: "general-inquiry",
      name: trim(body.name),
      email: trim(body.email),
      phone: trim(body.phone),
      message: trim(body.message),
      location: trim(body.location) || undefined,
      projectType: trim(body.projectType) || undefined,
    };
    const errors: FieldErrors = {};
    if (!data.name) errors.name = "Name is required.";
    if (!data.email) errors.email = "Email is required.";
    else if (!EMAIL_PATTERN.test(data.email)) errors.email = "Enter a valid email address.";
    if (!data.phone) errors.phone = "Phone is required.";
    if (!data.message) errors.message = "Message is required.";
    if (Object.keys(errors).length) return { errors };
    return { data };
  }

  return { errors: { form: "Unknown form type." } };
}

const SUBJECT_PREFIX = "[Website submission]";

function formatSnowQuote(data: SnowQuoteInput): { subject: string; text: string } {
  const phoneDigits = digitsOnly(data.phone);
  const lines = [
    "Website form submission — commercial snow removal quote",
    "",
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}${phoneDigits ? ` (${phoneDigits})` : ""}`,
    `Town: ${data.town}`,
    `Property Type: ${data.propertyType}`,
    `Service Needed: ${data.serviceNeeded}`,
    `Property Address: ${data.address}`,
  ];
  if (data.message) lines.push(`Message: ${data.message}`);
  lines.push("", "—", "Sent from stuartthomasconstruction.ca (no mailto / compose window).");
  return {
    subject: `${SUBJECT_PREFIX} Commercial snow quote – ${data.company || data.name}`,
    text: lines.join("\n"),
  };
}

function formatGeneralInquiry(data: GeneralInquiryInput): { subject: string; text: string } {
  const lines = [
    "Website form submission — site consultation / quote inquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
  ];
  if (data.location) lines.push(`Property location: ${data.location}`);
  if (data.projectType) lines.push(`Project type: ${data.projectType}`);
  lines.push("", "Message:", data.message);
  lines.push("", "—", "Sent from stuartthomasconstruction.ca (no mailto / compose window).");
  return {
    subject: `${SUBJECT_PREFIX} Site consultation – ${data.name}`,
    text: lines.join("\n"),
  };
}

export function formatContactEmail(data: ContactInput): { subject: string; text: string } {
  return data.kind === "snow-quote" ? formatSnowQuote(data) : formatGeneralInquiry(data);
}

export async function sendContactEmail(data: ContactInput): Promise<{ ok: true } | { ok: false; error: string }> {
  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const { subject, text } = formatContactEmail(data);
  const replyTo = data.email;

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (apiKey) {
    const from =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      "Stuart Thomas Construction <onboarding@resend.dev>";
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo,
      subject,
      text,
    });
    if (error) {
      console.error("Resend error", error);
      return { ok: false, error: "Could not send your message. Please call us instead." };
    }
    return { ok: true };
  }

  // Fallback when RESEND_API_KEY is not set — FormSubmit from the server often
  // fails (no browser Origin). Prefer client-side FormSubmit via submitContactForm().
  // Keep this path for completeness when Origin can be forwarded.
  try {
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.stuartthomasconstruction.ca";
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: siteUrl,
        Referer: `${siteUrl}/contact`,
      },
      body: JSON.stringify({
        _subject: subject,
        _template: "box",
        _captcha: "false",
        _replyto: replyTo,
        name: data.name,
        email: replyTo,
        phone: data.phone,
        message: text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("FormSubmit error", res.status, detail);
      return { ok: false, error: "Could not send your message. Please call us instead." };
    }

    const payload = (await res.json().catch(() => null)) as
      | { success?: string | boolean; message?: string }
      | null;
    if (payload && (payload.success === false || payload.success === "false")) {
      console.error("FormSubmit rejected", payload);
      const activation =
        typeof payload.message === "string" && /activat/i.test(payload.message);
      return {
        ok: false,
        error: activation
          ? "Form delivery needs a one-time activation email to the business inbox."
          : "Could not send your message. Please call us instead.",
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("Contact email send failed", err);
    return { ok: false, error: "Could not send your message. Please call us instead." };
  }
}
