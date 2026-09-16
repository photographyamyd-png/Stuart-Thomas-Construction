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
