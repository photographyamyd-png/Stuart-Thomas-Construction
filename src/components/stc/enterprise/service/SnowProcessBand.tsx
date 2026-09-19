import { site } from "@/data/site";
import { snowProcessHeading } from "@/data/snow-page";
import { CtaLink } from "../primitives";

type Step = {
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
  afterCta: {
    label: string;
    href: string;
  };
};

/**
 * Snow-only process — connected timeline, not boxed wireframe cards.
 */
export function SnowProcessBand({ steps, afterCta }: Props) {
  return (
    <section
      className="stc-snow-process turner-band turner-band--dark turner-band--seam"
      id="process"
      aria-labelledby="process-heading"
    >
      <div className="container stc-snow-process__inner">
        <header className="stc-snow-process__head">
          <p className="eyebrow eyebrow--on-dark">{snowProcessHeading.eyebrow}</p>
          <h2 id="process-heading" className="text-display text-display--section">
            {snowProcessHeading.headlineBefore}{" "}
            <span className="text-accent-gold">{snowProcessHeading.headlineAccent}</span>
          </h2>
        </header>

        <ol className="stc-snow-process__track">
          {steps.map((step, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <li key={step.title} className="stc-snow-process__step">
                <div className="stc-snow-process__rail" aria-hidden>
                  <span className="stc-snow-process__node">{num}</span>
                </div>
                <div className="stc-snow-process__body">
                  <h3 className="stc-snow-process__title">{step.title}</h3>
                  <p className="wf-type-supporting">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="stc-snow-process__cta">
          <CtaLink href={afterCta.href} className="btn-accent btn-accent--lg cta-inline">
            {afterCta.label}
          </CtaLink>
          <p className="stc-snow-process__note text-utility text-utility-on-dark">
            Or call{" "}
            <a href={`tel:${site.phoneTel}`} className="stc-snow-process__phone">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
