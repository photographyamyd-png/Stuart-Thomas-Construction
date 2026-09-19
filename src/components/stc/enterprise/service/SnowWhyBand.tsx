import { snowWhy } from "@/data/snow-page";

export function SnowWhyBand() {
  return (
    <section
      className="stc-snow-why turner-band turner-band--light turner-band--seam"
      aria-labelledby="snow-why-heading"
    >
      <div className="container stc-snow-why__inner">
        <p className="eyebrow">Why commercial matters</p>
        <h2 id="snow-why-heading" className="text-display text-display--section">
          {snowWhy.headline}
        </h2>
        <div className="stc-snow-why__copy">
          {snowWhy.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="wf-type-supporting">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
