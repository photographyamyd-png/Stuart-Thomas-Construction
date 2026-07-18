import { processSteps } from "@/data/conversion";

export function ProcessSteps() {
  return (
    <section
      className="stc-process turner-band turner-band--light turner-band--seam"
      id="process"
      aria-labelledby="process-heading"
    >
      <div className="stc-process__inner container">
        <p className="eyebrow">Our Process</p>
        <h2 id="process-heading" className="text-display">
          What Happens After You <span className="text-accent-gold">Call</span>
        </h2>

        <ol className="stc-process__list">
          {processSteps.map((step) => (
            <li key={step.id} className="stc-process__step">
              <span className="stc-process__num" aria-hidden>{step.id}</span>
              <div className="stc-process__body">
                <p className="stc-process__label">{step.label}</p>
                <h3 className="stc-process__title">{step.title}</h3>
                <p className="wf-type-supporting">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
