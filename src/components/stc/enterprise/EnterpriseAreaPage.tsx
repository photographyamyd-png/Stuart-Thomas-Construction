import Link from "next/link";
import type { AreaDetail } from "@/data/areas";
import { conversion } from "@/data/conversion";
import { media } from "@/data/media";
import { getServiceBySlug } from "@/data/services";
import { AppealReveal } from "./blocks/AppealReveal";
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
        description={area.intro[0]}
        imageSrc={heroSrc}
        imageAlt={`Construction services in ${area.name}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: area.name, path: `/areas/${area.slug}` },
        ]}
        ctaHref="/contact"
        ctaLabel="Get a Quote"
      />

      <AppealReveal>
        <section className="stc-svc-page__intro turner-band turner-band--light turner-band--seam">
          <div className="container">
            <p className="eyebrow">Local Context</p>
            <h2 className="text-display text-display--section stack-title">
              Why this work matters in{" "}
              <span className="text-accent-gold">{area.name}</span>
            </h2>
            <div className="prose-medium stack-title">
              {area.intro.slice(1).map((p) => (
                <p key={p.slice(0, 40)} className="wf-type-supporting">
                  {p}
                </p>
              ))}
              <h3 className="text-display text-display--subsection stack-section">Local Highlights</h3>
              <ul className="stc-svc-page__benefits stack-title">
                {area.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </AppealReveal>

      <AppealReveal>
        <section className="turner-band turner-band--dark turner-band--seam" aria-label={`Services in ${area.name}`}>
          <div className="container">
            <p className="eyebrow eyebrow--on-dark">Services</p>
            <h2 className="text-display stack-title">
              What We Build In <span className="text-accent-gold">{area.name}</span>
            </h2>
            <ul className="stc-area-services">
              {area.relatedServices.map((slug) => {
                const s = getServiceBySlug(slug);
                if (!s) return null;
                return (
                  <li key={slug}>
                    <Link href={`/services/${slug}`}>
                      <span className="stc-area-services__title">{s.title}</span>
                      <span className="stc-area-services__desc">{s.shortDescription}</span>
                      <span className="link-arrow">
                        Request a Quote{" "}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="wf-type-supporting stc-area-page__footer stack-section text-on-dark-subtle">
              <Link href="/contact" className="text-accent-gold">
                Request a quote
              </Link>{" "}
              or{" "}
              <Link href="/projects" className="text-accent-gold">
                finished job photos
              </Link>{" "}
              for your {area.name} property.
            </p>
          </div>
        </section>
      </AppealReveal>

      <AppealReveal>
        <EnterpriseCtaBand
          headline={`Ready to build in ${area.name}?`}
          subline={conversion.serviceCta.subline}
        />
      </AppealReveal>
    </>
  );
}
