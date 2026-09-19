import Link from "next/link";
import { snowAudience } from "@/data/snow-page";

export function SnowAudienceBand() {
  return (
    <section
      className="stc-snow-audience turner-band turner-band--dark turner-band--seam"
      aria-labelledby="snow-audience-heading"
    >
      <div className="container stc-snow-audience__inner">
        <header className="stc-snow-audience__head">
          <p className="eyebrow eyebrow--on-dark">Who we serve</p>
          <h2 id="snow-audience-heading" className="text-display text-display--section">
            Snow removal built for <span className="text-accent-gold">working properties</span>
          </h2>
        </header>

        <ul className="stc-snow-audience__grid">
          {snowAudience.map((card, i) => (
            <li key={card.title}>
              <Link href="#quote-form" className="stc-snow-audience__card">
                <span className="stc-snow-audience__index" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="stc-snow-audience__title">{card.title}</h3>
                <p className="wf-type-supporting">{card.body}</p>
                <span className="stc-snow-audience__cta text-utility">Request a quote →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
