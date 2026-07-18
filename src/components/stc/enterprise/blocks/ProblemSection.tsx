import { problemSection } from "@/data/conversion";

type Props = {
  /** Band fill — defaults to dark. Use light when the previous section is already dark. */
  band?: "dark" | "light";
};

export function ProblemSection({ band = "dark" }: Props) {
  const onDark = band === "dark";
  const eyebrowClass = onDark ? "eyebrow eyebrow--on-dark" : "eyebrow";

  return (
    <section
      className={`stc-problem turner-band turner-band--${band} turner-band--seam`}
      id="why-waterfront"
      aria-labelledby="problem-heading"
    >
      <div className="stc-problem__inner container">
        <p className={eyebrowClass}>{problemSection.eyebrow}</p>
        <h2 id="problem-heading" className="text-display">
          {problemSection.headline}
        </h2>

        <div className="stc-problem__grid">
          <div className="stc-problem__col">
            {problemSection.problems.map((item) => (
              <div key={item.title} className="stc-problem__item">
                <h3 className="stc-problem__title">{item.title}</h3>
                <p className="wf-type-supporting">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="stc-problem__col stc-problem__col--solutions">
            <p className={eyebrowClass}>{problemSection.solutionEyebrow}</p>
            {problemSection.solutions.map((item) => (
              <div key={item.title} className="stc-problem__item">
                <h3 className="stc-problem__title">{item.title}</h3>
                <p className="wf-type-supporting">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
