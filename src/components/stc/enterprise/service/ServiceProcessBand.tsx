type Step = {
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
};

/**
 * Craft timeline — same visual language as homepage ProcessSteps.
 */
export function ServiceProcessBand({ steps }: Props) {
  return (
    <section
      className="stc-process stc-svc-process turner-band turner-band--light turner-band--seam"
      id="process"
      aria-labelledby="process-heading"
    >
      <div className="stc-process__inner container">
        <p className="eyebrow">On Site</p>
        <h2 id="process-heading" className="text-display">
          What happens <span className="text-accent-gold">on your property</span>
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
                  <p className="stc-process__label">Step {id}</p>
                  <h3 className="stc-process__title">{step.title}</h3>
                  <p className="wf-type-supporting">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
