import Link from "next/link";
import { snowServiceAreas } from "@/data/snow-page";
import { snowQuoteFormHref } from "@/lib/contact-paths";

export function SnowServiceAreaBand() {
  return (
    <section
      className="stc-snow-areas turner-band turner-band--light turner-band--seam"
      aria-labelledby="snow-areas-heading"
    >
      <div className="container stc-snow-areas__inner">
        <header className="stc-snow-areas__head">
          <p className="eyebrow">Service area</p>
          <h2 id="snow-areas-heading" className="text-display text-display--section">
            Commercial snow removal across{" "}
            <span className="text-accent-gold">North Simcoe & Georgian Bay</span>
          </h2>
        </header>

        <ul className="stc-snow-areas__list">
          {snowServiceAreas.map((area) => (
            <li key={area.title}>
              <h3 className="stc-snow-areas__town">{area.title}</h3>
              <p className="wf-type-supporting">{area.body}</p>
            </li>
          ))}
        </ul>

        <p className="stc-snow-areas__cta">
          <Link href={snowQuoteFormHref()} className="link-arrow">
            Request a quote for your town →
          </Link>
        </p>
      </div>
    </section>
  );
}
