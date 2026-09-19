import { site } from "@/data/site";
import {
  VISITOR_SEND_FAILED,
  type ContactInput,
} from "@/lib/contact-email";

export type SubmitContactResult = { ok: true } | { ok: false; error: string };

function formatMessage(data: ContactInput): { subject: string; text: string } {
  if (data.kind === "snow-quote") {
    const lines = [
      "Website form submission — commercial snow removal quote",
      "",
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Town: ${data.town}`,
      `Property Type: ${data.propertyType}`,
      `Service Needed: ${data.serviceNeeded}`,
      `Property Address: ${data.address}`,
    ];
    if (data.message) lines.push(`Message: ${data.message}`);
    return {
      subject: `[Website submission] Commercial snow quote – ${data.company || data.name}`,
      text: lines.join("\n"),
    };
  }

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
  return {
    subject: `[Website submission] Site consultation – ${data.name}`,
    text: lines.join("\n"),
  };
}

/**
 * Prefer POST /api/contact (Resend when RESEND_API_KEY is set).
 * On delivery failure or network error, try FormSubmit from the browser once.
 * Never surface FormSubmit “Activate Form” / owner-setup copy to visitors.
 */
export async function submitContactForm(data: ContactInput): Promise<SubmitContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const payload = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };
    if (res.ok && payload.ok) return { ok: true };
    // Validation errors — do not fall back
    if (res.status === 400) {
      return {
        ok: false,
        error: payload.error || "Please fix the highlighted fields.",
      };
    }
    // Delivery failed on API (often missing RESEND_API_KEY) — try browser FormSubmit
  } catch {
    // Network failure on API — try FormSubmit below
  }

  return sendViaFormSubmitBrowser(data);
}

async function sendViaFormSubmitBrowser(data: ContactInput): Promise<SubmitContactResult> {
  const to = site.email;
  const { subject, text } = formatMessage(data);
  const replyTo = data.email;

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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

    const payload = (await res.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
    } | null;

    const successFalse =
      payload && (payload.success === false || payload.success === "false");

    if (!res.ok || successFalse) {
      const activation =
        typeof payload?.message === "string" && /activat/i.test(payload.message);
      if (activation) {
        console.error(
          "[submit-contact-client] FormSubmit needs owner Activate Form — set RESEND_API_KEY on Vercel instead",
          payload,
        );
      } else {
        console.error("FormSubmit browser fallback failed", res.status, payload);
      }
      return { ok: false, error: VISITOR_SEND_FAILED };
    }

    return { ok: true };
  } catch (err) {
    console.error("FormSubmit browser fallback error", err);
    return { ok: false, error: VISITOR_SEND_FAILED };
  }
}
