import { site } from "@/data/site";
import { CtaLink } from "../primitives";

type Step = {
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
  /** Optional post-process phone CTA (e.g. commercial snow site walk) */
  afterCta?: {
    label: string;
    href: string;
  };
  eyebrow?: string;
  headlineBefore?: string;
  headlineAccent?: string;
};

/**
 * Craft timeline — same visual language as homepage ProcessSteps.
 */
export function ServiceProcessBand({
  steps,
  afterCta,
  eyebrow = "On Site",
  headlineBefore = "What happens",
  headlineAccent = "on your property",
}: Props) {
  return (
    <section
      className="stc-process stc-svc-process turner-band turner-band--light turner-band--seam"
      id="process"
      aria-labelledby="process-heading"
    >
      <div className="stc-process__inner container">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="process-heading" className="text-display">
          {headlineBefore} <span className="text-accent-gold">{headlineAccent}</span>
        </h2>

        <ol className="stc-process__list">
          {steps.map((step, i) => {
            const id = String(i + 1);
            return (
              <li key={step.title} className="stc-process__step">
                <span className="stc-process__num" aria-hidden>
                  {id}
                </span>
                <div className="stc-process__body">
                  <h3 className="stc-process__title">{step.title}</h3>
                  <p className="stc-process__desc">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {afterCta ? (
          <div className="stc-process__after-cta stack-cta">
            <CtaLink href={afterCta.href} className="btn-green cta-inline">
              {afterCta.label}
            </CtaLink>
            <p className="stc-process__after-note text-utility">
              Or call{" "}
              <a href={`tel:${site.phoneTel}`} className="stc-process__phone">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
