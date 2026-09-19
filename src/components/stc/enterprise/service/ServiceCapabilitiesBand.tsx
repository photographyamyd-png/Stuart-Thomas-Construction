import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SubService = {
  title: string;
  description: string;
  href?: string;
};

type Props = {
  subServices: SubService[];
  images: string[];
  imageAlts?: string[];
  heroFallback: string;
  eyebrow?: string;
  headlineBefore?: string;
  headlineAccent?: string;
  /** Section ground; tiles stay media overlays regardless of band. */
  band?: "dark" | "light" | "green";
};

/**
 * Immersive scope plane — media-led overlays, no timid card chrome.
 */
export function ServiceCapabilitiesBand({
  subServices,
  images,
  imageAlts,
  heroFallback,
  eyebrow = "Scope",
  headlineBefore = "What We",
  headlineAccent = "Deliver",
  band = "dark",
}: Props) {
  const [lead, ...cards] = subServices;
  const leadImage = images[0] ?? heroFallback;
  const onDark = band === "dark" || band === "green";

  function tileBody(sub: SubService, num: string) {
    return (
      <div className="stc-svc-capabilities__tile-body stc-svc-capabilities__tile-body--overlay">
        <span className="stc-svc-capabilities__num">{num}</span>
        <h3 className="text-display text-display--subsection stc-svc-capabilities__title">{sub.title}</h3>
        <p className="wf-type-supporting">{sub.description}</p>
      </div>
    );
  }

  function wrapTile(sub: SubService, className: string, children: ReactNode, key?: string) {
    if (sub.href) {
      return (
        <Link key={key} href={sub.href} className={`${className} stc-svc-capabilities__tile--link`}>
          {children}
        </Link>
      );
    }
    return (
      <article key={key} className={className}>
        {children}
      </article>
    );
  }

  return (
    <section
      className={`stc-svc-capabilities turner-band turner-band--${band} turner-band--seam`}
      aria-labelledby="svc-capabilities-heading"
    >
      <div className="container stc-svc-capabilities__head">
        <p className={onDark ? "eyebrow eyebrow--on-dark" : "eyebrow"}>{eyebrow}</p>
        <h2 id="svc-capabilities-heading" className="text-display text-display--section">
          {headlineBefore} <span className="text-accent-gold">{headlineAccent}</span>
        </h2>
      </div>
      <div className="stc-svc-capabilities__bento">
        {lead &&
          wrapTile(
            lead,
            "stc-svc-capabilities__tile stc-svc-capabilities__tile--lead",
            <>
              <div className="stc-svc-capabilities__lead-media">
                <Image
                  src={leadImage}
                  alt={imageAlts?.[0] ?? lead.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 900px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="stc-svc-capabilities__tile-scrim" aria-hidden />
                <div className="stc-svc-capabilities__tile-grain" aria-hidden />
              </div>
              {tileBody(lead, "01")}
            </>,
          )}
        {cards.map((sub, i) => {
          const index = i + 1;
          const imageSrc = images[index] ?? heroFallback;
          const num = `0${index + 1}`;
          return wrapTile(
            sub,
            "stc-svc-capabilities__tile stc-svc-capabilities__tile--card",
            <>
              <div className="stc-svc-capabilities__card-media">
                <Image
                  src={imageSrc}
                  alt={imageAlts?.[index] ?? sub.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 900px) 35vw, 100vw"
                  className="object-cover"
                />
                <div className="stc-svc-capabilities__tile-scrim" aria-hidden />
              </div>
              {tileBody(sub, num)}
            </>,
            sub.title,
          );
        })}
      </div>
    </section>
  );
}
