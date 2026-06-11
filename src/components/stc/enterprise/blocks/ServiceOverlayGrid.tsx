import Image from "next/image";
import Link from "next/link";
import { enterpriseServiceGridOrder } from "@/data/enterprise";
import { media } from "@/data/media";
import { getServiceBySlug } from "@/data/services";

type Props = {
  id?: string;
  className?: string;
};

export function ServiceOverlayGrid({ id = "services", className = "" }: Props) {
  return (
    <ul className={`stc-svc-overlay-grid ${className}`.trim()} id={id}>
      {enterpriseServiceGridOrder.map((slug) => {
        const service = getServiceBySlug(slug);
        if (!service) return null;
        const image = media.serviceDefaults[slug];
        return (
          <li key={slug}>
            <Link className="stc-svc-overlay" href={`/services/${slug}`}>
              <span className="stc-svc-overlay__media">
                <Image src={image} alt="" fill loading="lazy" sizes="33vw" className="object-cover" />
                <span className="stc-svc-overlay__scrim" aria-hidden />
              </span>
              <span className="stc-svc-overlay__body">
                <span className="stc-svc-overlay__title">{service.title}</span>
                <span className="stc-svc-overlay__desc">{service.shortDescription}</span>
                <span className="btn-green">Get a Quote</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
