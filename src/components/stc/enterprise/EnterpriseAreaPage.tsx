import Link from "next/link";
import type { AreaDetail } from "@/data/areas";
import { conversion } from "@/data/conversion";
import { media } from "@/data/media";
import { getServiceBySlug } from "@/data/services";
import { EnterpriseCtaBand } from "./blocks/EnterpriseCtaBand";
import { EnterprisePageHero } from "./blocks/EnterprisePageHero";

type Props = {
  area: AreaDetail;
};

export function EnterpriseAreaPage({ area }: Props) {
  const heroSrc = media.areaHeroes[area.slug];

  return (
    <>
      <EnterprisePageHero
        eyebrow={area.name}
        title={area.headline}
        imageSrc={heroSrc}
        imageAlt={`Construction services in ${area.name}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: area.name, path: `/areas/${area.slug}` },
        ]}
      />

      <section className="stc-svc-page__intro turner-band turner-band--light">
        <div className="container prose-medium">
          {area.intro.map((p) => (
            <p key={p.slice(0, 40)} className="stc-enterprise-body">
              {p}
            </p>
          ))}
          <h2 className="text-display text-display--subsection stack-section">Local Highlights</h2>
          <ul className="stc-svc-page__benefits stack-title">
            {area.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="turner-band turner-band--dark turner-band--seam" aria-label={`Services in ${area.name}`}>
        <div className="container">
          <p className="eyebrow eyebrow--on-dark">Services</p>
          <h2 className="text-display stack-title">What We Build In {area.name}</h2>
          <ul className="stc-area-services">
            {area.relatedServices.map((slug) => {
              const s = getServiceBySlug(slug);
              if (!s) return null;
              return (
                <li key={slug}>
                  <Link href={`/services/${slug}`}>
                    <span className="stc-area-services__title">{s.title}</span>
                    <span className="stc-area-services__desc">{s.shortDescription}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="stc-enterprise-body stc-area-page__footer stack-section text-on-dark-subtle">
            <Link href="/projects" className="text-accent-gold">
              View our project gallery
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-accent-gold">
              request a quote
            </Link>{" "}
            for your {area.name} property.
          </p>
        </div>
      </section>

      <EnterpriseCtaBand
        headline={`Ready to build in ${area.name}?`}
        subline={conversion.serviceCta.subline}
      />
    </>
  );
}
