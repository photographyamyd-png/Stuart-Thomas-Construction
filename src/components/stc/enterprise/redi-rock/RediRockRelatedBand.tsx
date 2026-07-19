import Link from "next/link";
import { rediRockRelatedServices } from "@/data/redi-rock";

export function RediRockRelatedBand() {
  return (
    <section
      className="stc-rr-related turner-band turner-band--dark turner-band--seam"
      aria-labelledby="rr-related-heading"
    >
      <div className="container">
        <p className="eyebrow eyebrow--on-dark">Related Services</p>
        <h2 id="rr-related-heading" className="text-display text-display--section stack-title">
          Where Redi-Rock <span className="text-accent-gold">Fits</span>
        </h2>
        <div className="stc-rr-related__grid">
          {rediRockRelatedServices.map((service) => (
            <Link key={service.href} href={service.href} className="stc-rr-related__card">
              <h3 className="text-display text-display--subsection stack-eyebrow">{service.title}</h3>
              <p className="wf-type-supporting">{service.description}</p>
              <span className="link-arrow">
                {service.linkLabel}{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
        <div className="stc-rr-related__cta stack-section">
          <Link href="/contact" className="btn-green cta-inline">
            Request an Install Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
