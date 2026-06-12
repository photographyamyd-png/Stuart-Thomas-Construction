import Image from "next/image";
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
        <header className="stc-rr-resources__header">
          <div className="stc-rr-resources__header-copy">
            <p className="eyebrow green">Manufacturer Literature</p>
            <h2 id="rr-resources-heading" className="stc-rr-resources__heading stack-title">
              Brochures & <span className="text-accent-green">Specifications</span>
            </h2>
          </div>
          <p className="wf-type-supporting stc-rr-resources__intro">
            {rediRockAttribution.brochureLabel}
          </p>
        </header>

        <div className="stc-rr-resources__rule" aria-hidden />

        <div className="stc-rr-resources__grid">
          {rediRockBrochures.map((brochure) => (
            <Link
              key={brochure.href}
              href={brochure.href}
              download
              className="stc-rr-resources__card"
            >
              <div className="stc-rr-resources__card-media">
                <Image
                  src={brochure.coverImage}
                  alt={brochure.coverAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
                <span className="stc-rr-resources__badge">PDF</span>
              </div>
              <div className="stc-rr-resources__card-body">
                <h3 className="stc-rr-resources__card-title">{brochure.shortLabel}</h3>
                <p className="stc-rr-resources__card-desc">{brochure.description}</p>
                <span className="stc-rr-resources__download link-arrow">Download PDF →</span>
                <p className="stc-rr-resources__card-credit">{brochure.coverCredit}</p>
              </div>
            </Link>
          ))}
        </div>

        <footer className="stc-rr-resources__footer">
          <p className="wf-type-supporting">{rediRockAttribution.supplierNote}</p>
          <div className="stc-rr-resources__links">
            <Link href={rediRockLinks.supplier} target="_blank" rel="noopener noreferrer" className="link-arrow">
              The Sarjeant Co. →
            </Link>
            <Link href={rediRockLinks.product} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Redi-Rock.com →
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}
