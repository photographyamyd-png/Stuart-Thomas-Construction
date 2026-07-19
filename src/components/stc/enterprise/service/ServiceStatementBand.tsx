import Image from "next/image";
import Link from "next/link";
import type { ServiceDetail } from "@/data/services";

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

  return (
    <section
      className="stc-svc-statement turner-featured turner-band turner-band--light turner-band--seam"
      aria-labelledby="svc-statement-heading"
    >
      <div className="turner-featured__media">
        <Image src={imageSrc} alt={imageAlt} fill loading="lazy" sizes="55vw" className="object-cover" />
      </div>
      <div className="turner-featured__copy container">
        <p className="eyebrow">On Your Property</p>
        <h2 id="svc-statement-heading" className="text-display">
          How this <span className="text-accent-gold">gets built</span>
        </h2>
        {lead ? <p className="wf-type-supporting">{lead}</p> : null}
        {rest.map((p) => (
          <p key={p.slice(0, 40)} className="wf-type-supporting">
            {p}
          </p>
        ))}
        <p className="eyebrow stack-title">Why STC</p>
        <ul className="stc-svc-statement__benefits">
          {service.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <Link href="/contact" className="btn-green stack-cta cta-inline">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
