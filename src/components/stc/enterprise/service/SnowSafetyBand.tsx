import Image from "next/image";
import { snowSafety } from "@/data/snow-page";

type Props = {
  imageSrc: string;
};

export function SnowSafetyBand({ imageSrc }: Props) {
  return (
    <section
      className="stc-snow-safety turner-band turner-band--dark turner-band--seam"
      aria-labelledby="snow-safety-heading"
    >
      {/* L1 — photo */}
      <div className="stc-snow-safety__media">
        <Image
          src={imageSrc}
          alt={snowSafety.imageAlt}
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* L2 — veil */}
      <div className="stc-snow-safety__veil" aria-hidden />

      <div className="container stc-snow-safety__grid">
        {/* L3 — frosted glass panel */}
        <div className="stc-snow-safety__glass">
          <p className="eyebrow eyebrow--on-dark">Safety & liability</p>
          <h2 id="snow-safety-heading" className="text-display text-display--section">
            {snowSafety.headline}
          </h2>
          <div className="stc-snow-safety__copy">
            {snowSafety.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="wf-type-supporting">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* L4 — icon points */}
        <ul className="stc-snow-safety__points">
          {snowSafety.points.map((point, i) => (
            <li key={point.label}>
              <span className="stc-snow-safety__index" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="stc-snow-safety__label">{point.label}</h3>
                <p className="wf-type-supporting">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
