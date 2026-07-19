import Image from "next/image";
import Link from "next/link";
import { areas } from "@/data/archive/copy-baseline/areas";
import { conversion } from "@/data/archive/copy-baseline/conversion";
import {
  enterpriseFeaturedProject,
  enterpriseHomeShowcase,
  enterpriseInsights,
  enterpriseQuote,
} from "@/data/archive/copy-baseline/enterprise";
import { media } from "@/data/media";
import { site } from "@/data/archive/copy-baseline/site";
import { BaselineCapabilityFeatureStrip } from "./blocks/BaselineCapabilityFeatureStrip";
import { BaselineCommitmentsAccordion } from "./blocks/BaselineCommitmentsAccordion";
import { BaselineServiceIconStrip } from "./blocks/BaselineServiceIconStrip";
import { BaselineServiceOverlayGrid } from "./blocks/BaselineServiceOverlayGrid";
import { BaselineTurnerHero } from "./blocks/BaselineTurnerHero";
import { BaselineEnterpriseContactForm } from "./BaselineEnterpriseContactForm";
import { LinkArrow } from "../primitives";
import { COPY_BASELINE_PREFIX as B } from "@/data/archive/copy-baseline/constants";

export function BaselineEnterpriseHome() {
  return (
    <>
      <BaselineTurnerHero />

      <section
        className="turner-pathfinder turner-band turner-band--light turner-band--seam"
        id="pathfinder"
        aria-label="Choose your path"
      >
        <ul className="turner-pathfinder__grid">
          <li>
            <Link className="turner-pathfinder__card" href={`${B}/projects`}>
              <h2>A Project</h2>
              <p>
                Browse completed armour stone, waterfront, and landscape builds across our service
                area.
              </p>
              <span className="link-arrow">
                Browse Our Projects{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link className="turner-pathfinder__card" href="#services">
              <h2>Our Services</h2>
              <p>Armour stone, excavation, hardscaping, landscaping, and commercial snow — planned and built as one project.</p>
              <span className="link-arrow">
                Explore Services{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link className="turner-pathfinder__card" href={`${B}/about`}>
              <h2>About STC</h2>
              <p>Twenty years of honest work, local relationships, and builds engineered to last.</p>
              <span className="link-arrow">
                Learn More{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </li>
        </ul>
      </section>

      <section
        className="turner-featured turner-band turner-band--dark turner-band--seam"
        id="featured"
        aria-labelledby="featured-heading"
      >
        <div className="turner-featured__media">
          <Image src={enterpriseFeaturedProject.image} alt="" fill loading="lazy" sizes="50vw" className="object-cover" />
        </div>
        <div className="turner-featured__copy container">
          <p className="eyebrow eyebrow--on-dark">{enterpriseFeaturedProject.eyebrow}</p>
          <h2 id="featured-heading" className="text-display">
            {enterpriseFeaturedProject.title} <span>{enterpriseFeaturedProject.titleAccent}</span>
          </h2>
          <p>{enterpriseFeaturedProject.description}</p>
          <LinkArrow href={enterpriseFeaturedProject.href}>View Project</LinkArrow>
        </div>
      </section>

      <section
        className="turner-insights turner-band turner-band--light turner-band--seam"
        id="insights"
        aria-labelledby="insights-heading"
      >
        <div className="container">
          <header className="turner-insights__head">
            <p className="eyebrow">From The Field</p>
            <h2 id="insights-heading" className="text-display">
              Recent <span className="text-accent-gold">Highlights</span>
            </h2>
          </header>
          <div className="turner-insights__track" role="list">
            {enterpriseInsights.map((card) => (
              <article key={card.title} className="turner-insight-card" role="listitem">
                <Image src={card.image} alt="" width={320} height={200} loading="lazy" />
                <div className="turner-insight-card__body">
                  <p className="eyebrow eyebrow--plain">{card.category}</p>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <LinkArrow href={card.href}>Read More</LinkArrow>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="turner-band turner-band--dark turner-band--seam" id="services" aria-label="Our services">
        <BaselineServiceOverlayGrid showHeader />
      </section>

      <section
        className="stc-showcase"
        id="showcase"
        aria-labelledby="showcase-heading"
      >
        <div className="stc-showcase__bg">
          <Image
            src={media.homeShowcasePanorama}
            alt={enterpriseHomeShowcase.imageAlt}
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="stc-showcase__scrim" aria-hidden />
        <div className="stc-showcase__inner">
          <p className="eyebrow eyebrow--on-dark">{enterpriseHomeShowcase.eyebrow}</p>
          <h2 id="showcase-heading" className="text-display">
            {enterpriseHomeShowcase.headline}{" "}
            <span className="text-accent-gold">{enterpriseHomeShowcase.headlineAccent}</span>
          </h2>
          <p className="wf-type-supporting stc-showcase__statement">{enterpriseHomeShowcase.statement}</p>
          <p className="wf-type-supporting stc-showcase__body">{enterpriseHomeShowcase.body}</p>
          <Link href={enterpriseHomeShowcase.cta.href} className="btn-accent btn-accent--lg">
            {enterpriseHomeShowcase.cta.label}
          </Link>
        </div>
      </section>

      <BaselineServiceIconStrip />

      <section className="stc-built-strong" id="built-strong" aria-labelledby="built-strong-heading">
        <div className="stc-built-strong__bg">
          <Image src={media.integritySection} alt="" fill loading="lazy" sizes="100vw" className="object-cover" />
        </div>
        <div className="stc-built-strong__scrim" aria-hidden />
        <div className="stc-built-strong__inner">
          <h2 id="built-strong-heading">{site.tagline}</h2>
          <p>
            We deliver armour stone, waterfront assemblies, and full-site outdoor construction with
            the discipline and honesty your property deserves.
          </p>
          <Link href={`${B}/contact`} className="btn-accent btn-accent--lg">
            Get a Quote
          </Link>
        </div>
      </section>

      <BaselineCapabilityFeatureStrip />

      <section
        className="turner-regional turner-band turner-band--green turner-band--seam"
        id="regional"
        aria-labelledby="regional-heading"
      >
        <div className="turner-regional__media">
          <Image src={media.ctaBanner} alt="" fill loading="lazy" sizes="50vw" className="object-cover" />
        </div>
        <div className="turner-regional__copy">
          <p className="eyebrow eyebrow--on-dark">Muskoka &amp; South Georgian Bay</p>
          <h2 id="regional-heading" className="text-display">
            Our Work In Your <span className="accent text-accent-gold">Community</span>
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
        </div>
      </section>

      <BaselineCommitmentsAccordion />

      <section className="turner-quote turner-band turner-band--dark turner-band--seam-thin" id="quote" aria-label="Client testimonial">
        <blockquote>
          &ldquo;Stuart Thomas delivered exactly what they promised —{" "}
          <span className="hl">{enterpriseQuote.highlight}</span>, honest communication, and a shoreline
          we are proud of.&rdquo;
        </blockquote>
        <footer>{enterpriseQuote.attribution}</footer>
      </section>

      <div className="turner-band-divider turner-band-divider--white" aria-hidden />

      <section
        className="turner-contact turner-band turner-band--green"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="turner-contact__copy">
          <p className="eyebrow eyebrow--on-dark">Start Your Project</p>
          <h2 id="contact-heading" className="text-display stack-title">
            Ready To <span>Build?</span>
          </h2>
          <p>{conversion.contactIntro}</p>
          <Link
            href={`${B}/contact`}
            className="btn-green stack-cta cta-self-start"
          >
            Request a Quote
          </Link>
        </div>
        <BaselineEnterpriseContactForm />
      </section>
    </>
  );
}
