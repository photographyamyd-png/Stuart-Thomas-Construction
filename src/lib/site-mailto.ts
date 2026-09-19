import { site } from "@/data/site";

const DEFAULT_SUBJECT = "Site consultation request";

const DEFAULT_BODY = `Hi Stuart Thomas Construction,

I'd like to request a site consultation / quote.

Property location:
Project type (armour stone, hardscaping, landscaping, etc.):
Preferred timeline:

Thank you.`;

/**
 * Builds a mailto inquiry URL. The address must never be rendered as visible UI text.
 */
export function siteMailtoHref(
  subject: string = DEFAULT_SUBJECT,
  body: string = DEFAULT_BODY,
): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type SnowQuotePayload = {
  name: string;
  company: string;
  email: string;
  /** Digits-only phone for the email body */
  phoneDigits: string;
  /** User-typed display value */
  phoneDisplay: string;
  town: string;
  propertyType: string;
  serviceNeeded: string;
  address: string;
  message?: string;
};

/** Structured commercial snow quote mailto. Address stays non-visible in UI. */
export function snowQuoteMailtoHref(payload: SnowQuotePayload): string {
  const subject = `New Commercial Snow Quote – ${payload.company || payload.name}`;
  const lines = [
    "Commercial snow removal quote request",
    "",
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phoneDisplay}${payload.phoneDigits ? ` (${payload.phoneDigits})` : ""}`,
    `Town: ${payload.town}`,
    `Property Type: ${payload.propertyType}`,
    `Service Needed: ${payload.serviceNeeded}`,
    `Property Address: ${payload.address}`,
  ];
  if (payload.message?.trim()) {
    lines.push(`Message: ${payload.message.trim()}`);
  }
  return siteMailtoHref(subject, lines.join("\n"));
}
