/** On-page / contact form anchors — primary CTAs must link here, never mailto. */
export const CONTACT_FORM_HREF = "/contact#contact" as const;
export const SNOW_QUOTE_FORM_HREF = "#quote-form" as const;

/** Build /contact#contact with optional prefill query params for the inquiry form. */
export function contactFormHref(opts?: {
  project?: string;
  service?: string;
  location?: string;
  message?: string;
}): string {
  if (!opts) return CONTACT_FORM_HREF;
  const params = new URLSearchParams();
  if (opts.project) params.set("project", opts.project);
  if (opts.service) params.set("service", opts.service);
  if (opts.location) params.set("location", opts.location);
  if (opts.message) params.set("message", opts.message);
  const qs = params.toString();
  return qs ? `/contact?${qs}#contact` : CONTACT_FORM_HREF;
}
