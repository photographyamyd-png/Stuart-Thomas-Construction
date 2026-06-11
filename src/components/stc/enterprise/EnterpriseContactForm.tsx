import { site } from "@/data/site";

/** Phone-only contact — STC does not use email for inquiries */
export function EnterpriseContactForm() {
  return (
    <div className="turner-contact__form" aria-label="Call to request a quote">
      <p className="wf-type-supporting">
        Call us to discuss your project, timeline, and site conditions. We&apos;ll walk through scope
        and next steps by phone.
      </p>
      <a href={`tel:${site.phoneTel}`} className="btn-ghost btn-ghost--on-green stack-cta">
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
