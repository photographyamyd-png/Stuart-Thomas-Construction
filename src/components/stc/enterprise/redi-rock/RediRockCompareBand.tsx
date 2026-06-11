import Link from "next/link";
import { rediRockComparison } from "@/data/redi-rock";

export function RediRockCompareBand() {
  const { natural, engineered } = rediRockComparison;

  return (
    <section
      id="compare"
      className="stc-rr-compare turner-band turner-band--dark turner-band--seam"
      aria-labelledby="rr-compare-heading"
    >
      <div className="container">
        <p className="eyebrow eyebrow--on-dark">Material Choice</p>
        <h2 id="rr-compare-heading" className="text-display text-display--section stack-title">
          Natural Mass vs. <span className="text-accent-gold">Engineered System</span>
        </h2>
        <p className="lead-on-dark stc-rr-compare__intro">
          STC installs both. The right choice depends on engineering requirements, timeline, and
          the character you want on site.
        </p>
        <div className="stc-rr-compare__grid">
          <article className={`stc-rr-compare__panel stc-rr-compare__panel--${natural.accent}`}>
            <p className="eyebrow eyebrow--on-dark">{natural.eyebrow}</p>
            <h3 className="text-display text-display--subsection stack-eyebrow">{natural.title}</h3>
            <p className="stc-rr-compare__tagline">{natural.tagline}</p>
            <ul className="stc-svc-page__benefits">
              {natural.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={natural.href} className="btn-ghost btn-ghost--on-dark cta-inline">
              Explore Armour Stone
            </Link>
          </article>
          <article className={`stc-rr-compare__panel stc-rr-compare__panel--${engineered.accent}`}>
            <p className="eyebrow eyebrow--on-dark">{engineered.eyebrow}</p>
            <h3 className="text-display text-display--subsection stack-eyebrow">{engineered.title}</h3>
            <p className="stc-rr-compare__tagline">{engineered.tagline}</p>
            <ul className="stc-svc-page__benefits">
              {engineered.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={engineered.href} className="btn-green cta-inline">
              View Brochures
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
