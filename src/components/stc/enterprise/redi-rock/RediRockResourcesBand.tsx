import Link from "next/link";
import { rediRockAttribution, rediRockBrochures, rediRockLinks } from "@/data/redi-rock";

export function RediRockResourcesBand() {
  return (
    <section
      id="resources"
      className="stc-rr-resources turner-band turner-band--light turner-band--seam"
      aria-labelledby="rr-resources-heading"
    >
      <div className="container">
        <p className="eyebrow green">Manufacturer Literature</p>
        <h2 id="rr-resources-heading" className="text-display text-display--section stack-title">
          Brochures & <span className="text-accent-green">Specifications</span>
        </h2>
        <p className="lead stc-rr-resources__intro">{rediRockAttribution.brochureLabel}</p>
        <div className="stc-rr-resources__grid">
          {rediRockBrochures.map((brochure) => (
            <article key={brochure.href} className="stc-rr-resources__card">
              <span className="stc-rr-resources__badge">PDF</span>
              <h3 className="text-display text-display--subsection stack-eyebrow">{brochure.shortLabel}</h3>
              <p>{brochure.description}</p>
              <Link href={brochure.href} download className="link-arrow">
                {brochure.label.replace(/^Download — /, "")} →
              </Link>
            </article>
          ))}
        </div>
        <div className="stc-rr-resources__footer stack-section">
          <p className="wf-type-supporting">{rediRockAttribution.supplierNote}</p>
          <div className="stc-rr-resources__links">
            <Link href={rediRockLinks.supplier} target="_blank" rel="noopener noreferrer" className="link-arrow">
              The Sarjeant Co. →
            </Link>
            <Link href={rediRockLinks.product} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Redi-Rock.com →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
