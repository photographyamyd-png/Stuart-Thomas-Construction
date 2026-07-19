import Image from "next/image";
import Link from "next/link";
import { areas } from "@/data/areas";
import { media } from "@/data/media";
import { rediRockLinks } from "@/data/redi-rock";
import { services } from "@/data/services";
import { ManufacturerAttribution } from "./blocks/ManufacturerAttribution";
import { site } from "@/data/site";
import { stats } from "@/data/sections";
import { AppealReveal } from "./blocks/AppealReveal";
import { EnterprisePageHero } from "./blocks/EnterprisePageHero";
import { LinkArrow } from "./primitives";

export function EnterpriseAboutPage() {
  return (
    <>
      <EnterprisePageHero
        eyebrow="About STC"
        title="Tiny Township Construction Built for the"
        titleAccent="Bay"
        description={`${site.name} builds armour stone and outdoor work for Tiny Township and Georgian Bay — clear communication and careful work on every site.`}
        imageSrc={media.aboutHero}
        imageAlt="Stuart Thomas Construction team and project site"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        ctaHref="/contact"
        ctaLabel="Get a Quote"
      />

      <AppealReveal>
        <section className="stc-svc-page__intro turner-band turner-band--light turner-band--seam">
          <div className="container">
            <p className="eyebrow">Our Story</p>
            <h2 className="text-display text-display--section stack-title">
              Built for the <span className="text-accent-gold">Bay</span>.
            </h2>
            <div className="stc-svc-page__intro-grid stack-title">
              <div>
                <p className="wf-type-supporting">
                  We&apos;re a Tiny Township construction company that handles outdoor work from the ground
                  up — grading, stone, landscaping, and winter snow routes. We serve homeowners and
                  commercial clients across{" "}
                  {areas.map((a, i) => (
                    <span key={a.slug}>
                      {i > 0 ? (i === areas.length - 1 ? ", and " : ", ") : null}
                      <Link href={`/areas/${a.slug}`}>{a.name}</Link>
                    </span>
                  ))}
                  . Whether you need a retaining wall or a full yard rebuild, we bring capable equipment
                  and honest communication to every site.
                </p>
              </div>
              <div>
                <p className="eyebrow">On the Bay since 2004</p>
                <ul className="stc-about-stats stack-title">
                  {stats.map((s) => (
                    <li key={s.label}>
                      <span className="stc-about-stats__value">{s.value}</span>
                      <span className="stc-about-stats__label">{s.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AppealReveal>

      <AppealReveal>
        <section className="turner-band turner-band--dark turner-band--seam" aria-label="Materials partners">
          <div className="container">
            <p className="eyebrow eyebrow--on-dark">Materials Partners</p>
            <h2 className="text-display text-display--section stack-title">
              Redi-Rock via <span className="text-accent-gold">The Sarjeant Co.</span>
            </h2>
            <p className="wf-type-supporting stack-title">
              Stuart Thomas Construction installs Redi-Rock retaining and freestanding systems.
              Materials are supplied by{" "}
              <a href={rediRockLinks.supplier} target="_blank" rel="noopener noreferrer">
                The Sarjeant Co.
              </a>
              . Product information is courtesy of Redi-Rock.
            </p>
            <ManufacturerAttribution variant="compact" className="stack-title" />
            <Link href={rediRockLinks.materialsPage} className="btn-accent stack-section cta-inline">
              Redi-Rock installation services
            </Link>
          </div>
        </section>
      </AppealReveal>

      <AppealReveal>
        <section className="turner-band turner-band--light turner-band--seam" aria-label="What we build">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h2 className="text-display stack-title">
              Armour stone to <span className="text-accent-gold">snow routes</span>
            </h2>
            <ul className="stc-about-services">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="stc-about-services__link">
                    <span className="stc-about-services__title">{s.title}</span>
                    <span className="stc-about-services__desc">{s.shortDescription}</span>
                    <span className="link-arrow">
                      Request a Quote{" "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AppealReveal>

      <AppealReveal>
        <section className="turner-regional turner-band turner-band--green turner-band--seam" aria-label="Service areas">
          <div className="turner-regional__media">
            <Image src={media.ctaBanner} alt="" fill loading="lazy" sizes="50vw" className="object-cover" />
          </div>
          <div className="turner-regional__copy">
            <p className="eyebrow eyebrow--on-dark">Service Areas</p>
            <h2 className="text-display">
              Rooted In <span className="text-accent-gold">South Georgian Bay</span>
            </h2>
            <p className="wf-type-supporting">
              Shoreline walls that hold up through Georgian Bay winters in Tiny Township. Patios and
              landscaping for Wasaga Beach and Collingwood properties too.
            </p>
            <ul className="area-pills">
              {areas.map((area, i) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className={i === 0 ? "is-active" : undefined}>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <LinkArrow href="/areas" className="stack-title">
              Areas we serve
            </LinkArrow>
            <Link href="/contact" className="btn-green stack-cta cta-inline">
              Request a Site Consultation
            </Link>
          </div>
        </section>
      </AppealReveal>

      {/* CTA is on the regional green band — no second green finale */}
    </>
  );
}
