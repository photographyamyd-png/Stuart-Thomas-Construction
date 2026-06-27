import Link from "next/link";
import { BaselineServiceOverlayGrid } from "./blocks/BaselineServiceOverlayGrid";
import { BaselineEnterpriseCtaBand } from "./blocks/BaselineEnterpriseCtaBand";
import { BaselineEnterprisePageHero } from "./blocks/BaselineEnterprisePageHero";
import { COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";

export function BaselineEnterpriseServicesHub() {
  return (
    <>
      <BaselineEnterprisePageHero
        eyebrow="Our Services"
        title="Six Disciplines. One Accountable Team."
        description="Industrial capability meets architectural precision — armour stone, waterfront assemblies, landscaping, hardscaping, excavation, and commercial snow removal across South Georgian Bay."
        breadcrumbs={[
          { name: "Home", path: B },
          { name: "Services", path: `${B}/services` },
        ]}
      />
      <section className="turner-band turner-band--dark turner-band--seam" aria-label="Service offerings">
        <BaselineServiceOverlayGrid />
      </section>
      <section className="stc-svc-page__intro turner-band turner-band--light">
        <div className="container">
          <p className="eyebrow green">How To Explore</p>
          <h2 className="text-display text-display--section stack-title">
            Each Service Has Its <span className="text-accent-green">Own Page</span>
          </h2>
          <p className="stc-enterprise-body prose-narrow stack-body">
            Select a discipline above for scope, process, FAQs, and related services. Every page links to
            the areas we serve and a direct path to request a quote.
          </p>
          <Link href={`${B}/contact`} className="btn-green stack-cta cta-inline">
            Request a Quote
          </Link>
        </div>
      </section>
      <BaselineEnterpriseCtaBand />
    </>
  );
}
