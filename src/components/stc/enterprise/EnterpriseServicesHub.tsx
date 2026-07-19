import Link from "next/link";
import { AppealReveal } from "./blocks/AppealReveal";
import { ServiceOverlayGrid } from "./blocks/ServiceOverlayGrid";
import { EnterpriseCtaBand } from "./blocks/EnterpriseCtaBand";
import { EnterprisePageHero } from "./blocks/EnterprisePageHero";

export function EnterpriseServicesHub() {
  return (
    <>
      <EnterprisePageHero
        eyebrow="What We Build"
        title="Armour Stone, Hardscaping"
        titleAccent="& Landscaping"
        description="Armour stone and waterfront hardscaping for Tiny Township cottages."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        ctaHref="/contact"
        ctaLabel="Get a Quote"
      />

      {/* light — breaks hero dark → services dark */}
      <AppealReveal>
        <section className="stc-svc-page__intro turner-band turner-band--light turner-band--seam">
          <div className="container">
            <p className="eyebrow">Service Details</p>
            <h2 className="text-display text-display--section stack-title">
              Photos and FAQs on <span className="text-accent-gold">every service</span>
            </h2>
            <p className="wf-type-supporting prose-narrow stack-body">
              Or call for a free site visit — we walk the property before we quote.
            </p>
            <Link href="/contact" className="btn-green stack-cta cta-inline">
              Request a Quote
            </Link>
          </div>
        </section>
      </AppealReveal>

      <AppealReveal>
        <section className="turner-band turner-band--dark turner-band--seam" aria-label="Service offerings">
          <ServiceOverlayGrid />
        </section>
      </AppealReveal>

      <AppealReveal>
        <EnterpriseCtaBand />
      </AppealReveal>
    </>
  );
}
