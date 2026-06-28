import Link from "next/link";
import { conversion } from "@/data/conversion";
import { pageHeadlines } from "@/data/copy";
import { ServiceOverlayGrid } from "./blocks/ServiceOverlayGrid";
import { EnterpriseCtaBand } from "./blocks/EnterpriseCtaBand";
import { EnterprisePageHero } from "./blocks/EnterprisePageHero";

export function EnterpriseServicesHub() {
  return (
    <>
      <EnterprisePageHero
        eyebrow="Our Services"
        title={pageHeadlines.servicesHub.title}
        description={pageHeadlines.servicesHub.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <section className="turner-band turner-band--dark turner-band--seam" aria-label="Service offerings">
        <ServiceOverlayGrid />
      </section>
      <section className="stc-svc-page__intro turner-band turner-band--light">
        <div className="container">
          <p className="eyebrow green">How To Explore</p>
          <h2 className="text-display text-display--section stack-title">
            Each Service Has Its <span className="text-accent-green">Own Page</span>
          </h2>
          <p className="stc-enterprise-body prose-narrow stack-body">
            Pick a service above for details, photos, and common questions. Every page links to the
            areas we serve and a direct path to request a quote.
          </p>
          <Link href="/contact" className="btn-green stack-cta cta-inline">
            {conversion.serviceCta.button}
          </Link>
        </div>
      </section>
      <EnterpriseCtaBand />
    </>
  );
}
