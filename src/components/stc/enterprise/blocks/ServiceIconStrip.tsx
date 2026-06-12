import type { CSSProperties } from "react";
import Link from "next/link";
import { enterpriseServiceGridOrder } from "@/data/enterprise";
import { getServiceBySlug } from "@/data/services";

export function ServiceIconStrip() {
  return (
    <nav className="stc-icon-strip stc-icon-strip--beige stc-icon-strip--divided" aria-label="Service quick links">
      <ul className="stc-icon-strip__grid">
        {enterpriseServiceGridOrder.slice(0, 5).map((slug) => {
          const service = getServiceBySlug(slug);
          if (!service) return null;
          const Icon = service.icon;
          return (
            <li key={slug} data-service={slug}>
              <Link
                className="stc-icon-strip__item"
                href={`/services/${slug}`}
                style={{ "--icon-strip-accent": service.iconStripAccent } as CSSProperties}
              >
                <span className="stc-icon-strip__icon" aria-hidden>
                  <Icon strokeWidth={1.5} />
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
