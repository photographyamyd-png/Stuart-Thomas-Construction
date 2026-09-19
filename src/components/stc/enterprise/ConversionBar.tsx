"use client";

import { usePathname } from "next/navigation";
import { conversion } from "@/data/conversion";
import { site } from "@/data/site";
import { CONTACT_FORM_HREF } from "@/lib/contact-paths";

/**
 * Sitewide pre-footer CTA. Hidden on the commercial snow page (that page
 * already ends with its own quote form).
 */
export function ConversionBar() {
  const pathname = usePathname();
  if (pathname?.includes("commercial-snow-removal")) {
    return null;
  }

  return (
    <section
      className="stc-prefooter-cta turner-band turner-band--green turner-band--seam"
      aria-label="Contact call to action"
    >
      <div className="stc-prefooter-cta__inner container">
        <div className="stc-prefooter-cta__copy">
          <p className="eyebrow eyebrow--on-dark">{conversion.homeCta.eyebrow}</p>
          <h2 className="stc-prefooter-cta__headline">{conversion.homeCta.headline}</h2>
          <p className="stc-prefooter-cta__subline">{conversion.homeCta.subline}</p>
        </div>
        <div className="stc-prefooter-cta__actions">
          <a className="btn-accent btn-accent--lg" href={`tel:${site.phoneTel}`}>
            Call Us
          </a>
          <a className="btn-ghost" href={CONTACT_FORM_HREF}>
            {conversion.homeCta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
