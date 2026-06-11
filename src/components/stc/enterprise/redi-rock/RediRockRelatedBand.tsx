import Link from "next/link";
import { rediRockRelatedServices } from "@/data/redi-rock";

export function RediRockRelatedBand() {
  return (
    <section
      className="stc-rr-related turner-band turner-band--light turner-band--seam"
      aria-labelledby="rr-related-heading"
    >
      <div className="container">
        <p className="eyebrow green">Related Services</p>
        <h2 id="rr-related-heading" className="text-display text-display--section stack-title">
          Where Redi-Rock <span className="text-accent-green">Fits</span>
        </h2>
        <div className="stc-rr-related__grid">
          {rediRockRelatedServices.map((service) => (
            <Link key={service.href} href={service.href} className="stc-rr-related__card">
              <h3 className="text-display text-display--subsection stack-eyebrow">{service.title}</h3>
              <p>{service.description}</p>
              <span className="link-arrow">Explore service →</span>
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
