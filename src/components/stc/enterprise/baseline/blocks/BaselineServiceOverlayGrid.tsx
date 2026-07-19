import Image from "next/image";
import Link from "next/link";
import { enterpriseServiceGridOrder } from "@/data/archive/copy-baseline/enterprise";
import { media } from "@/data/media";
import { getServiceBySlug } from "@/data/archive/copy-baseline/services";
import { COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";

type Props = {
  id?: string;
  className?: string;
  showHeader?: boolean;
};

export function BaselineServiceOverlayGrid({ id = "services", className = "", showHeader = false }: Props) {
  return (
    <>
      {showHeader ? (
        <header className="stc-svc-overlay-grid__head container">
          <p className="eyebrow eyebrow--on-dark">Our Services</p>
          <h2 className="text-display">
            Armour Stone, Hardscaping <span className="text-accent-gold">&amp; Outdoor Living</span>
          </h2>
        </header>
      ) : null}
      <ul className={`stc-svc-overlay-grid ${className}`.trim()} id={id}>
        {enterpriseServiceGridOrder.map((slug) => {
          const service = getServiceBySlug(slug);
          if (!service) return null;
          const image = media.serviceDefaults[slug];
          return (
            <li key={slug}>
              <Link className="stc-svc-overlay" href={`${B}/services/${slug}`}>
                <span className="stc-svc-overlay__media">
                  <Image src={image} alt="" fill loading="lazy" sizes="33vw" className="object-cover" />
                  <span className="stc-svc-overlay__scrim" aria-hidden />
                </span>
                <span className="stc-svc-overlay__body">
                  <h3 className="stc-svc-overlay__title">{service.title}</h3>
                  <p className="stc-svc-overlay__desc">{service.shortDescription}</p>
                  <span className="btn-accent">{service.gridCtaLabel}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
