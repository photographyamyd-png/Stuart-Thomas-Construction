import Link from "next/link";
import { areas, areasHubCopy } from "@/data/areas";
import { AppealReveal } from "./blocks/AppealReveal";
import { EnterpriseCtaBand } from "./blocks/EnterpriseCtaBand";
import { EnterprisePageHero } from "./blocks/EnterprisePageHero";

export function EnterpriseAreasHub() {
  return (
    <>
      <EnterprisePageHero
        eyebrow="Service Areas"
        title="Service"
        titleAccent="Areas"
        description={areasHubCopy.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/areas" },
        ]}
        ctaHref="/contact"
        ctaLabel="Get a Quote"
      />

      <AppealReveal>
        <section className="stc-areas-hub turner-band turner-band--light turner-band--seam">
          <div className="container">
            <p className="eyebrow">South Georgian Bay</p>
            <h2 className="text-display text-display--section stack-title">
              Tiny Township to <span className="text-accent-gold">Collingwood</span>
            </h2>
            <p className="wf-type-supporting prose-narrow stack-body">
              Call for a free site visit on shoreline and cottage lots across the bay.
            </p>
            <div className="stc-areas-hub__grid stack-title">
              {areas.map((area) => (
                <Link key={area.slug} href={`/areas/${area.slug}`} className="stc-areas-hub__card">
                  <p className="eyebrow">{area.name}</p>
                  <h2 className="text-display text-display--subsection stack-eyebrow">{area.headline}</h2>
                  <p className="wf-type-supporting">{area.intro[0]}</p>
                  <span className="link-arrow stack-title">
                    Request a site visit{" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AppealReveal>

      <AppealReveal>
        <EnterpriseCtaBand />
      </AppealReveal>
    </>
  );
}
