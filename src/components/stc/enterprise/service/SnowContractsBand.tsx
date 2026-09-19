import { snowContracts, snowServicePrefill } from "@/data/snow-page";
import { CtaLink } from "../primitives";

export function SnowContractsBand() {
  const formHref = `?service=${encodeURIComponent(snowServicePrefill.seasonal)}#quote-form`;

  return (
    <section
      className="stc-snow-contracts turner-band turner-band--light turner-band--seam"
      aria-labelledby="snow-contracts-heading"
    >
      <div className="container stc-snow-contracts__inner">
        <div className="stc-snow-contracts__layout">
          <div className="stc-snow-contracts__copy">
            <p className="eyebrow">Seasonal contracts</p>
            <h2 id="snow-contracts-heading" className="text-display text-display--section">
              {snowContracts.headline}
            </h2>
            <p className="wf-type-supporting">{snowContracts.body}</p>
            <ul className="stc-snow-contracts__list">
              {snowContracts.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="stc-snow-contracts__cta">
            <CtaLink href={formHref} className="btn-accent btn-accent--lg cta-inline">
              {snowContracts.ctaLabel}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
