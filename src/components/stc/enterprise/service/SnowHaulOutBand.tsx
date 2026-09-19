import Image from "next/image";
import { site } from "@/data/site";
import { snowHaulOut, snowServicePrefill } from "@/data/snow-page";
import { CtaLink } from "../primitives";

type Props = {
  imageSrc: string;
};

export function SnowHaulOutBand({ imageSrc }: Props) {
  const formHref = `?service=${encodeURIComponent(snowServicePrefill.haulOut)}#quote-form`;

  return (
    <section
      id="haul-outs"
      className="stc-snow-haul turner-band turner-band--light turner-band--seam"
      aria-labelledby="snow-haul-heading"
    >
      <div className="container stc-snow-haul__grid">
        <div className="stc-snow-haul__media">
          <Image
            src={imageSrc}
            alt={snowHaulOut.imageAlt}
            fill
            loading="lazy"
            sizes="(min-width: 900px) 48vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="stc-snow-haul__copy">
          <p className="eyebrow">{snowHaulOut.eyebrow}</p>
          <h2 id="snow-haul-heading" className="text-display text-display--section stack-eyebrow">
            {snowHaulOut.headline}
          </h2>
          {snowHaulOut.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="wf-type-supporting">
              {p}
            </p>
          ))}
          <ul className="stc-snow-haul__list">
            {snowHaulOut.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="stack-cta">
            <CtaLink href={formHref} className="btn-accent cta-inline">
              {snowHaulOut.ctaLabel}
            </CtaLink>
            <p className="text-utility stc-snow-haul__note">
              Call{" "}
              <a href={`tel:${site.phoneTel}`} className="stc-process__phone">
                {site.phoneDisplay}
              </a>
              . Haul-outs are available when your snow banks get out of control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
