import { site } from "@/data/site";

/** Phone-only contact — STC does not use email for inquiries */
export function EnterpriseContactForm() {
  return (
    <div className="turner-contact__form" aria-label="Call to request a quote">
      <p className="wf-type-supporting">
        Call us to discuss your project, timeline, and site. We serve Tiny Township, Wasaga Beach,
        Elmvale, Midland, Penetanguishene, Collingwood, and Simcoe County.
      </p>
      <a href={`tel:${site.phoneTel}`} className="btn-green stack-cta">
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
