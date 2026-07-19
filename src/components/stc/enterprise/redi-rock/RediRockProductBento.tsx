import Image from "next/image";
import { rediRockProductLines } from "@/data/redi-rock";

export function RediRockProductBento() {
  const [lead, ...cards] = rediRockProductLines;

  return (
    <section
      id="systems"
      className="stc-rr-bento turner-band turner-band--light turner-band--seam"
      aria-labelledby="rr-systems-heading"
    >
      <div className="container">
        <p className="eyebrow">Product Lines</p>
        <h2 id="rr-systems-heading" className="text-display text-display--section stack-title">
          Redi-Rock <span className="text-accent-gold">Systems</span>
        </h2>
        <div className="stc-rr-bento__grid">
          {lead && (
            <article className="stc-rr-bento__tile stc-rr-bento__tile--lead">
              <div className="stc-rr-bento__lead-media">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 900px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="stc-rr-bento__tile-scrim" aria-hidden />
              </div>
              <div className="stc-rr-bento__tile-body stc-rr-bento__tile-body--overlay">
                <span className="stc-rr-bento__num">01</span>
                <h3 className="text-display text-display--subsection stack-eyebrow">{lead.title}</h3>
                <p className="wf-type-supporting">{lead.description}</p>
                {lead.imageCredit && (
                  <p className="stc-rr-bento__credit">{lead.imageCredit}</p>
                )}
              </div>
            </article>
          )}
          {cards.map((line, i) => (
            <article key={line.title} className="stc-rr-bento__tile stc-rr-bento__tile--card">
              <div className="stc-rr-bento__card-media">
                <Image
                  src={line.image}
                  alt={line.title}
                  width={640}
                  height={400}
                  loading="lazy"
                  sizes="(min-width: 900px) 30vw, 100vw"
                  className="stc-rr-bento__card-img"
                />
              </div>
              <div className="stc-rr-bento__tile-body stc-rr-bento__tile-body--card">
                <span className="stc-rr-bento__num">0{i + 2}</span>
                <h3 className="text-display text-display--subsection stack-eyebrow">{line.title}</h3>
                <p className="wf-type-supporting">{line.description}</p>
                {line.imageCredit && !line.isReference && (
                  <p className="stc-rr-bento__credit stc-rr-bento__credit--muted">{line.imageCredit}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
