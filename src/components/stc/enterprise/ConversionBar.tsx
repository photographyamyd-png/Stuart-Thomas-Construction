import { conversion } from "@/data/conversion";
import { site } from "@/data/site";
import { CONTACT_FORM_HREF } from "@/lib/contact-paths";

export function ConversionBar() {
  return (
    <section
      className="stc-conversion-bar turner-band turner-band--dark turner-band--seam-thin"
      aria-label="Contact call to action"
    >
      <div className="stc-conversion-bar__inner container">
        <div className="stc-conversion-bar__copy">
          <p className="eyebrow eyebrow--on-dark">{conversion.homeCta.eyebrow}</p>
          <p className="stc-conversion-bar__headline">{conversion.homeCta.headline}</p>
          <p className="wf-type-supporting stc-conversion-bar__subline">
            {conversion.homeCta.subline}
          </p>
        </div>
        <div className="stc-conversion-bar__actions">
          <a
            className="btn-accent btn-accent--lg stc-conversion-bar__phone"
            href={`tel:${site.phoneTel}`}
          >
            Call Us
          </a>
          <a className="btn-green stc-conversion-bar__email" href={CONTACT_FORM_HREF}>
            {conversion.homeCta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
