import { site } from "@/data/site";

/** Phone-only contact — STC does not use email for inquiries */
export function EnterpriseContactForm() {
  return (
    <div className="turner-contact__form" aria-label="Phone — call for a free site visit">
      <p className="wf-type-supporting">
        Call about your Tiny Township or Wasaga Beach property. Free site visit. Itemized quote.
      </p>
      <a href={`tel:${site.phoneTel}`} className="btn-green stack-cta">
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
