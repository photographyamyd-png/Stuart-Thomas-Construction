import Image from "next/image";
import type { ServiceDetail } from "@/data/services";
import { siteMailtoHref } from "@/lib/site-mailto";
import { CtaLink } from "../primitives";

type Props = {
  service: ServiceDetail;
  imageSrc: string;
  imageAlt: string;
};

/**
 * Featured-split statement — overview + gold-ruled benefits.
 * Replaces the symmetrical brochure intro grid.
 */
export function ServiceStatementBand({ service, imageSrc, imageAlt }: Props) {
  const [lead, ...rest] = service.overview;
  const facts = service.statementFacts ?? [];
  const { statementEyebrow: eyebrow, statementHeadline, statementCtaLabel } = service;
  const ctaLabel = statementCtaLabel ?? "Get a Quote";
  const mailtoSubject =
    service.slug === "commercial-snow-removal"
      ? "Commercial snow removal quote"
      : undefined;
  const mailtoBody =
    service.slug === "commercial-snow-removal"
      ? `Hi Stuart Thomas Construction,

I'd like a custom quote for commercial snow removal.

Town (Midland, Penetanguishene, Tay, Tiny, or Wasaga Beach):
Property address:
Property type (factory/industrial, warehouse, commercial building/office, retail/plaza):
Lot size / priority areas:
Preferred start:

Thank you.`
      : undefined;

  return (
    <section
      className="stc-svc-statement turner-featured turner-band turner-band--light turner-band--seam"
      aria-labelledby="svc-statement-heading"
    >
      <div className="turner-featured__media">
        <Image src={imageSrc} alt={imageAlt} fill loading="lazy" sizes="55vw" className="object-cover" />
      </div>
      <div className="turner-featured__copy container">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="svc-statement-heading" className="text-display">
          {statementHeadline.before}{" "}
          <span className="text-accent-gold">{statementHeadline.accent}</span>
        </h2>
        {lead ? <p className="wf-type-supporting stc-svc-statement__lead">{lead}</p> : null}
        {facts.length > 0 ? (
          <dl className="stc-svc-statement__facts">
            {facts.map((fact) => (
              <div key={fact.label} className="stc-svc-statement__fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          rest.map((p) => (
            <p key={p.slice(0, 40)} className="wf-type-supporting">
              {p}
            </p>
          ))
        )}
        <p className="eyebrow stack-title">Why STC</p>
        <ul className="stc-svc-statement__benefits">
          {service.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <CtaLink
          href={
            mailtoSubject && mailtoBody
              ? siteMailtoHref(mailtoSubject, mailtoBody)
              : siteMailtoHref()
          }
          className="btn-green stack-cta cta-inline"
        >
          {ctaLabel}
        </CtaLink>
      </div>
    </section>
  );
}
