import Image from "next/image";

type SubService = {
  title: string;
  description: string;
};

type Props = {
  subServices: SubService[];
  images: string[];
  imageAlts?: string[];
  heroFallback: string;
};

export function ServiceCapabilitiesBand({ subServices, images, imageAlts, heroFallback }: Props) {
  return (
    <section
      className="stc-svc-capabilities turner-band turner-band--light turner-band--seam"
      aria-labelledby="svc-capabilities-heading"
    >
      <div className="container">
        <p className="eyebrow green">Scope</p>
        <h2 id="svc-capabilities-heading" className="text-display text-display--section stack-title">
          What We <span className="text-accent-green">Deliver</span>
        </h2>
        <div className="stc-svc-capabilities__stack">
          {subServices.map((sub, i) => {
            const imageSrc = images[i] ?? heroFallback;
            return (
              <article
                key={sub.title}
                className={`stc-svc-capabilities__item${i > 0 ? " stc-svc-capabilities__item--divider" : ""}`}
              >
                <div className="stc-svc-capabilities__item-head">
                  <span className="stc-svc-capabilities__num">0{i + 1}</span>
                  <span className="stc-svc-capabilities__item-label">{sub.title}</span>
                </div>
                <div
                  className={`stc-svc-capabilities__item-body${i % 2 === 1 ? " stc-svc-capabilities__item-body--flip" : ""}`}
                >
                  <div className="stc-svc-capabilities__copy">
                    <p className="eyebrow eyebrow--plain green">Capability</p>
                    <h3 className="text-display text-display--subsection stack-eyebrow">{sub.title}</h3>
                    <p>{sub.description}</p>
                  </div>
                  <div className="stc-svc-capabilities__media">
                    <Image
                      src={imageSrc}
                      alt={imageAlts?.[i] ?? sub.title}
                      width={640}
                      height={400}
                      loading="lazy"
                      sizes="(min-width: 900px) 40vw, 100vw"
                      className="stc-svc-capabilities__img"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
