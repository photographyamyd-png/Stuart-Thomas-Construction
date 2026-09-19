import Link from "next/link";
import { site } from "@/data/site";
import { CONTACT_FORM_HREF } from "@/lib/contact-paths";

/** Phone + link to contact form — free site visit */
export function EnterpriseContactForm() {
  return (
    <div className="turner-contact__form" aria-label="Contact — call or request a free site visit">
      <p className="wf-type-supporting">
        Call or send a message about your Tiny Township or Wasaga Beach property. Free site visit.
        Itemized quote.
      </p>
      <div className="stc-contact-actions">
        <a href={`tel:${site.phoneTel}`} className="btn-accent btn-accent--lg stack-cta">
          Call Us
        </a>
        <Link href={CONTACT_FORM_HREF} className="btn-green stack-cta">
          Request a Site Consultation
        </Link>
      </div>
    </div>
  );
}
