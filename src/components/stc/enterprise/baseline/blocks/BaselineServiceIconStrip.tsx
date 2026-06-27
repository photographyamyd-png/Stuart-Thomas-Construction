import Link from "next/link";
import { enterpriseIconStripOrder } from "@/data/archive/copy-baseline/enterprise";
import { getServiceBySlug } from "@/data/archive/copy-baseline/services";
import { serviceStripIcons } from "@/components/stc/enterprise/icons/ServiceStripIcons";

export function BaselineServiceIconStrip() {
  return (
    <nav className="stc-icon-strip stc-icon-strip--beige" aria-label="Service quick links">
      <h2 className="stc-icon-strip__title">Our Services</h2>
      <ul className="stc-icon-strip__grid">
        {enterpriseIconStripOrder.map((slug) => {
          const service = getServiceBySlug(slug);
          if (!service) return null;
          const Icon = serviceStripIcons[slug];
          return (
            <li key={slug} data-service={slug}>
              <Link className="stc-icon-strip__item" href={`/services/${slug}`}>
                <span className="stc-icon-strip__icon" aria-hidden>
                  <Icon />
                </span>
                <span className="stc-icon-strip__label">
                  {service.iconRowLabelLines.map((line, i) => (
                    <span key={line}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
