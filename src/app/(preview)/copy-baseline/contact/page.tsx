import { BaselineEnterpriseContactForm } from "@/components/stc/enterprise/baseline/BaselineEnterpriseContactForm";
import { LinkArrow } from "@/components/stc/enterprise/primitives";
import { conversion } from "@/data/archive/copy-baseline/conversion";
import { COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";
import { site } from "@/data/archive/copy-baseline/site";

export default function CopyBaselineContactPage() {
  return (
    <section
      className="turner-contact turner-band turner-band--green turner-band--seam"
      id="contact"
      aria-labelledby="contact-page-heading"
    >
      <div className="turner-contact__copy">
        <p className="eyebrow eyebrow--on-dark">Get in touch</p>
        <h1 id="contact-page-heading" className="text-display stack-title">
          Contact <span>Us</span>
        </h1>
        <p>{conversion.contactIntro}</p>
        <dl className="stc-contact-details">
          <div>
            <dt className="text-utility">Phone</dt>
            <dd>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </dd>
          </div>
        </dl>
        <LinkArrow href={`${B}/services`} className="stack-cta cta-self-start">
          View Services
        </LinkArrow>
      </div>
      <BaselineEnterpriseContactForm />
    </section>
  );
}
