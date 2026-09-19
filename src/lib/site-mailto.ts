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
  businessName: string;
  contactName: string;
  email: string;
  /** Digits-only phone for the email body */
  phoneDigits: string;
  /** User-typed display value */
  phoneDisplay: string;
  propertyType: string;
  lotSize: string;
  services: string[];
  address: string;
  details?: string;
  preferredStart?: string;
  hearAbout?: string;
};

/** Structured commercial snow quote mailto. Address stays non-visible in UI. */
export function snowQuoteMailtoHref(payload: SnowQuotePayload): string {
  const subject = `New Commercial Snow Quote – ${payload.businessName}`;
  const lines = [
    "Commercial snow removal quote request",
    "",
    `Business Name: ${payload.businessName}`,
    `Contact Name: ${payload.contactName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phoneDisplay}${payload.phoneDigits ? ` (${payload.phoneDigits})` : ""}`,
    `Property Type: ${payload.propertyType}`,
    `Estimated Lot Size: ${payload.lotSize}`,
    `Services Needed: ${payload.services.join(", ")}`,
    `Property Address: ${payload.address}`,
  ];
  if (payload.details?.trim()) {
    lines.push(`Additional Details: ${payload.details.trim()}`);
  }
  if (payload.preferredStart?.trim()) {
    lines.push(`Preferred Start Date: ${payload.preferredStart.trim()}`);
  }
  if (payload.hearAbout?.trim()) {
    lines.push(`How did you hear about us?: ${payload.hearAbout.trim()}`);
  }
  return siteMailtoHref(subject, lines.join("\n"));
}
