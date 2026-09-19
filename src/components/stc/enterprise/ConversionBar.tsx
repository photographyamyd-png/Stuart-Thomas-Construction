import { conversion } from "@/data/conversion";
import { site } from "@/data/site";
import { CONTACT_FORM_HREF } from "@/lib/contact-paths";
import { PhoneIcon } from "./primitives";

export function ConversionBar() {
  return (
    <section
      className="stc-conversion-bar turner-band turner-band--light turner-band--seam-thin"
      aria-label="Contact call to action"
    >
      <div className="stc-conversion-bar__inner container">
        <p className="stc-conversion-bar__message wf-type-supporting">
          {conversion.homeCta.headline}{" "}
          <a href={CONTACT_FORM_HREF} className="stc-conversion-bar__contact">
            {conversion.homeCta.contactLink}
          </a>
        </p>
        <div className="stc-conversion-bar__actions">
          <a className="stc-conversion-bar__phone" href={`tel:${site.phoneTel}`}>
            <PhoneIcon /> {site.phoneDisplay}
          </a>
          <a className="stc-conversion-bar__email" href={CONTACT_FORM_HREF}>
            Request a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
