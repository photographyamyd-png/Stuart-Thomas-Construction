import Image from "next/image";
import Link from "next/link";
import { enterpriseCapabilityStrip } from "@/data/enterprise";
import { media } from "@/data/media";
import { getServiceBySlug } from "@/data/services";

export function CapabilityFeatureStrip() {
  return (
    <section
      className="stc-capability-strip turner-band turner-band--light turner-band--seam"
      id="capabilities"
      aria-labelledby="capabilities-tagline"
    >
      <div className="stc-capability-strip__inner container">
        <ul className="stc-capability-strip__grid">
          {enterpriseCapabilityStrip.map((slug) => {
            const service = getServiceBySlug(slug);
            if (!service) return null;
            const Icon = service.icon;
            return (
              <li key={slug}>
                <Link className="stc-capability-card" href={`/services/${slug}`}>
                  <span className="stc-capability-card__media">
                    <Image
                      src={media.serviceDefaults[slug]}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(min-width: 900px) 25vw, (min-width: 640px) 50vw, 50vw"
                      className="object-cover"
                    />
                    <span className="stc-capability-card__scrim" aria-hidden />
                  </span>
                  <span className="stc-capability-card__badge" aria-hidden>
                    <Icon strokeWidth={1.5} />
                  </span>
                  <h3 className="stc-capability-card__title">{service.title}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
        <p id="capabilities-tagline" className="stc-capability-strip__tagline">
          <span className="stc-capability-strip__tagline-text">
            Built Carefully. <span className="text-accent-gold">Finished Right.</span>
          </span>
        </p>
      </div>
    </section>
  );
}
