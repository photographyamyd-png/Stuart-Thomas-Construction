import Image from "next/image";
import Link from "next/link";
import { areas } from "@/data/archive/copy-baseline/areas";
import { media } from "@/data/media";
import { rediRockLinks } from "@/data/archive/copy-baseline/redi-rock";
import { services } from "@/data/archive/copy-baseline/services";
import { ManufacturerAttribution } from "../blocks/ManufacturerAttribution";
import { site } from "@/data/archive/copy-baseline/site";
import { stats } from "@/data/archive/copy-baseline/sections";
import { BaselineEnterpriseCtaBand } from "./blocks/BaselineEnterpriseCtaBand";
import { BaselineEnterprisePageHero } from "./blocks/BaselineEnterprisePageHero";
import { LinkArrow } from "../primitives";
import { COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";

export function BaselineEnterpriseAboutPage() {
  return (
    <>
      <BaselineEnterprisePageHero
        eyebrow="About STC"
        title="Built On Integrity. Engineered To Last."
        description={`${site.name} delivers armour stone, luxury waterfront assemblies, landscaping, hardscaping, excavation, and commercial snow removal with equipment discipline and architectural finishing standards.`}
        imageSrc={media.aboutHero}
        imageAlt="Stuart Thomas Construction team and project site"
        breadcrumbs={[
          { name: "Home", path: B },
          { name: "About", path: `${B}/about` },
        ]}
      />

      <section className="stc-svc-page__intro turner-band turner-band--light">
        <div className="container stc-svc-page__intro-grid">
          <div>
            <p className="eyebrow green">Our Story</p>
            <h2 className="text-display text-display--section stack-title">{site.tagline}</h2>
            <p className="stc-enterprise-body">
              Stuart Thomas Construction delivers armour stone, luxury waterfront assemblies,
              landscaping, hardscaping, excavation, and commercial snow removal with equipment
              discipline and architectural finishing standards.
            </p>
            <p className="stc-enterprise-body">
              We serve homeowners and commercial clients across{" "}
              {areas.map((a, i) => (
                <span key={a.slug}>
                  {i > 0 ? (i === areas.length - 1 ? ", and " : ", ") : null}
                  <Link href={`${B}/areas/${a.slug}`}>{a.name}</Link>
                </span>
              ))}
              . Whether you need a structural retaining wall or a full outdoor transformation, our
              crews bring unyielding capability and honest communication to every site.
            </p>
          </div>
          <div>
            <p className="eyebrow green">By The Numbers</p>
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
      </section>

      <section className="turner-band turner-band--light turner-band--seam" aria-label="Materials partners">
        <div className="container">
          <p className="eyebrow green">Materials Partners</p>
          <h2 className="text-display text-display--section stack-title">
            Redi-Rock via <span className="text-accent-green">The Sarjeant Co.</span>
          </h2>
          <p className="stc-enterprise-body stack-title">
            Stuart Thomas Construction installs Redi-Rock retaining and freestanding systems.
            Materials are supplied by{" "}
            <a href={rediRockLinks.supplier} target="_blank" rel="noopener noreferrer">
              The Sarjeant Co.
            </a>
            . Product information is courtesy of Redi-Rock.
          </p>
          <ManufacturerAttribution variant="compact" className="stack-title" />
          <Link href={rediRockLinks.materialsPage} className="btn-green stack-section cta-inline">
            Redi-Rock installation services
          </Link>
        </div>
      </section>

      <section className="turner-band turner-band--dark turner-band--seam" aria-label="Our expertise">
        <div className="container">
          <p className="eyebrow eyebrow--on-dark">Expertise</p>
          <h2 className="text-display stack-title">
            What We <span className="text-accent-gold">Build</span>
          </h2>
          <ul className="stc-about-services">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`${B}/services/${s.slug}`} className="stc-about-services__link">
                  <span className="stc-about-services__title">{s.title}</span>
                  <span className="stc-about-services__desc">{s.shortDescription}</span>
                  <span className="link-arrow">View service →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="turner-regional turner-band turner-band--green turner-band--seam" aria-label="Service areas">
        <div className="turner-regional__media">
          <Image src={media.ctaBanner} alt="" fill loading="lazy" sizes="50vw" className="object-cover" />
        </div>
        <div className="turner-regional__copy">
          <p className="eyebrow eyebrow--on-dark">Service Areas</p>
          <h2 className="text-display">
            Rooted In <span className="text-accent-gold">South Georgian Bay</span>
          </h2>
          <p>
            Together we strengthen shorelines, elevate estates, and deliver outdoor builds neighbours
            can trust across Tiny Township, Wasaga Beach, Collingwood, and Muskoka.
          </p>
          <ul className="area-pills">
            {areas.map((area, i) => (
              <li key={area.slug}>
                <Link href={`${B}/areas/${area.slug}`} className={i === 0 ? "is-active" : undefined}>
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <LinkArrow href={`${B}/areas`} className="stack-title">
            View all areas
          </LinkArrow>
        </div>
      </section>

      <BaselineEnterpriseCtaBand />
    </>
  );
}
