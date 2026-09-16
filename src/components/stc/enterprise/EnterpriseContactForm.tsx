import { site } from "@/data/site";

/** Phone + email (address not displayed) — call or mailto for a free site visit */
export function EnterpriseContactForm() {
  return (
    <div className="turner-contact__form" aria-label="Contact — call or email for a free site visit">
      <p className="wf-type-supporting">
        Call or email about your Tiny Township or Wasaga Beach property. Free site visit. Itemized
        quote.
      </p>
      <div className="stc-contact-actions">
        <a href={`tel:${site.phoneTel}`} className="btn-green stack-cta">
          Call {site.phoneDisplay}
        </a>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Site consultation request")}`}
          className="btn-green stack-cta"
        >
          Email us
        </a>
      </div>
    </div>
  );
}
