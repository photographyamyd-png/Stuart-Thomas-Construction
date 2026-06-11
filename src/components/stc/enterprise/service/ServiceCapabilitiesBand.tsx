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
  const [lead, ...cards] = subServices;
  const leadImage = images[0] ?? heroFallback;

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
        <div className="stc-svc-capabilities__bento">
          {lead && (
            <article className="stc-svc-capabilities__tile stc-svc-capabilities__tile--lead">
              <div className="stc-svc-capabilities__lead-media">
                <Image
                  src={leadImage}
                  alt={imageAlts?.[0] ?? lead.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 900px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="stc-svc-capabilities__tile-scrim" aria-hidden />
              </div>
              <div className="stc-svc-capabilities__tile-body stc-svc-capabilities__tile-body--overlay">
                <span className="stc-svc-capabilities__num">01</span>
                <h3 className="stc-svc-capabilities__title">{lead.title}</h3>
                <p>{lead.description}</p>
              </div>
            </article>
          )}
          {cards.map((sub, i) => {
            const index = i + 1;
            const imageSrc = images[index] ?? heroFallback;
            return (
              <article key={sub.title} className="stc-svc-capabilities__tile stc-svc-capabilities__tile--card">
                <div className="stc-svc-capabilities__card-media">
                  <Image
                    src={imageSrc}
                    alt={imageAlts?.[index] ?? sub.title}
                    width={640}
                    height={400}
                    loading="lazy"
                    sizes="(min-width: 900px) 30vw, 100vw"
                    className="stc-svc-capabilities__card-img"
                  />
                </div>
                <div className="stc-svc-capabilities__tile-body stc-svc-capabilities__tile-body--card">
                  <span className="stc-svc-capabilities__num">0{index + 1}</span>
                  <h3 className="stc-svc-capabilities__title">{sub.title}</h3>
                  <p>{sub.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
