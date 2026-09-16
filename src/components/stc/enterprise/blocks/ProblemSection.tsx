import { problemSection } from "@/data/conversion";

function padNum(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ProblemSection() {
  const { fail, hold } = problemSection;

  return (
    <section
      className="stc-problem turner-band turner-band--dark turner-band--seam"
      id="why-waterfront"
      aria-labelledby="problem-fail-heading problem-hold-heading"
    >
      <div className="stc-problem__split">
        <div className="stc-problem__panel stc-problem__panel--fail">
          <div className="stc-problem__panel-inner">
            <p className="eyebrow eyebrow--on-dark">{fail.eyebrow}</p>
            <h2 id="problem-fail-heading" className="text-display">
              {fail.headline}{" "}
              <span className="text-accent-gold">{fail.headlineAccent}</span>
            </h2>
            <ol className="stc-problem__list">
              {fail.items.map((item, i) => (
                <li key={item.title} className="stc-problem__item">
                  <span className="stc-problem__num" aria-hidden="true">
                    {padNum(i)}
                  </span>
                  <div className="stc-problem__item-body">
                    <h3 className="stc-problem__title">{item.title}</h3>
                    <p className="wf-type-supporting">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="stc-problem__panel stc-problem__panel--hold">
          <div className="stc-problem__panel-inner">
            <p className="eyebrow eyebrow--on-dark">{hold.eyebrow}</p>
            <h2 id="problem-hold-heading" className="text-display">
              {hold.headline}{" "}
              <span className="text-accent-gold">{hold.headlineAccent}</span>
            </h2>
            <ol className="stc-problem__list">
              {hold.items.map((item, i) => (
                <li key={item.title} className="stc-problem__item">
                  <span className="stc-problem__num" aria-hidden="true">
                    {padNum(i)}
                  </span>
                  <div className="stc-problem__item-body">
                    <h3 className="stc-problem__title">{item.title}</h3>
                    <p className="wf-type-supporting">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
