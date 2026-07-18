import Image from "next/image";
import Link from "next/link";
import { areas } from "@/data/areas";
import { conversion } from "@/data/conversion";
import {
  enterpriseFeaturedProject,
  enterpriseHomeShowcase,
  enterpriseQuote,
} from "@/data/enterprise";
import { media } from "@/data/media";
import { AppealTurnerHero } from "./blocks/AppealTurnerHero";
import { CommitmentsAccordion } from "./blocks/CommitmentsAccordion";
import { FaqAccordion } from "./blocks/FaqAccordion";
import { ProblemSection } from "./blocks/ProblemSection";
import { ProcessSteps } from "./blocks/ProcessSteps";
import { ServiceOverlayGrid } from "./blocks/ServiceOverlayGrid";
import { TrustBar } from "./blocks/TrustBar";
import { EnterpriseContactForm } from "./EnterpriseContactForm";
import { AppealReveal } from "./preview/AppealReveal";
import { LinkArrow } from "./primitives";

/**
 * Primary homepage composition (Appeal landing).
 * Scoped under `.landing-appeal` for industrial shoreline craft —
 * stronger brand presence, atmosphere, motion, and section rhythm.
 *
 * Band rhythm: dark → light → dark → light … through contact.
 * Previous homepage remains at `/design/landing-current` for comparison.
 */
export function EnterpriseHomeAppeal() {
  return (
    <div className="landing-appeal">
      <AppealTurnerHero />

      <AppealReveal>
        <TrustBar />
      </AppealReveal>

      <AppealReveal>
        <section
          className="turner-pathfinder turner-pathfinder--overlap turner-band turner-band--light"
          id="pathfinder"
          aria-label="Choose your path"
        >
          <ul className="turner-pathfinder__grid">
            <li>
              <Link className="turner-pathfinder__card" href="/projects">
                <h2>Completed Waterfront Builds</h2>
                <p>
                  Retaining walls, shoreline stairs, and full outdoor builds on Georgian Bay
                  properties — see the finished work.
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
                <h2>What We Build</h2>
                <p>
                  Armour stone, excavation, hardscaping, and landscaping across your waterfront
                  property — one crew, one contract.
                </p>
                <span className="link-arrow">
                  Explore Services{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link className="turner-pathfinder__card" href="/about">
                <h2>15+ Seasons on the Bay</h2>
                <p>
                  Same owner, same crew, same shoreline since 2004. Local knowledge built over 15+
                  seasons on Georgian Bay.
                </p>
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
      </AppealReveal>

      {/* dark */}
      <AppealReveal>
        <section
          className="turner-featured turner-band turner-band--dark turner-band--seam appeal-featured"
          id="featured"
          aria-labelledby="featured-heading"
        >
          <div className="turner-featured__media">
            <Image
              src={enterpriseFeaturedProject.image}
              alt=""
              fill
              loading="lazy"
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="turner-featured__copy container">
            <p className="eyebrow eyebrow--on-dark">{enterpriseFeaturedProject.eyebrow}</p>
            <h2 id="featured-heading" className="text-display">
              {enterpriseFeaturedProject.title} <span>{enterpriseFeaturedProject.titleAccent}</span>
            </h2>
            <p className="wf-type-supporting">{enterpriseFeaturedProject.description}</p>
            <LinkArrow href={enterpriseFeaturedProject.href}>View Project</LinkArrow>
          </div>
        </section>
      </AppealReveal>

      {/* light — breaks featured → services dark stack */}
      <AppealReveal>
        <ProblemSection band="light" />
      </AppealReveal>

      {/* dark */}
      <AppealReveal>
        <section className="turner-band turner-band--dark turner-band--seam" id="services" aria-label="Our services">
          <ServiceOverlayGrid showHeader />
        </section>
      </AppealReveal>

      {/* light */}
      <AppealReveal>
        <ProcessSteps />
      </AppealReveal>

      {/* dark (image plane) */}
      <AppealReveal>
        <section className="stc-showcase appeal-showcase" id="showcase" aria-labelledby="showcase-heading">
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
      </AppealReveal>

      {/* light — breaks showcase → regional dark/green stack */}
      <AppealReveal>
        <CommitmentsAccordion />
      </AppealReveal>

      {/* green */}
      <AppealReveal>
        <section
          className="turner-regional turner-band turner-band--green turner-band--seam"
          id="regional"
          aria-labelledby="regional-heading"
        >
          <div className="turner-regional__media">
            <Image src={media.ctaBanner} alt="" fill loading="lazy" sizes="50vw" className="object-cover" />
          </div>
          <div className="turner-regional__copy">
            <p className="eyebrow eyebrow--on-dark">Wasaga Beach &amp; Tiny Township</p>
            <h2 id="regional-heading" className="text-display">
              Our Work In Your <span className="accent text-accent-gold">Community</span>
            </h2>
            <p className="wf-type-supporting">
              Retaining walls, waterfront stairs, patios, and full site builds across Wasaga Beach,
              Tiny Township, Elmvale, Midland, Penetanguishene, and Collingwood — including Balm Beach,
              Thunder Beach, and Perkinsfield.
            </p>
            <ul className="area-pills">
              {[...areas]
                .sort((a, b) => {
                  const order = ["wasaga-beach", "tiny-township", "collingwood"];
                  return order.indexOf(a.slug) - order.indexOf(b.slug);
                })
                .map((area, i) => (
                  <li key={area.slug}>
                    <Link href={`/areas/${area.slug}`} className={i === 0 ? "is-active" : undefined}>
                      {area.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </AppealReveal>

      {/* light — breaks regional green → quote dark */}
      <AppealReveal>
        <FaqAccordion band="light" />
      </AppealReveal>

      {/* dark */}
      <AppealReveal>
        <section
          className="turner-quote turner-band turner-band--dark turner-band--seam-thin appeal-quote"
          id="quote"
          aria-label="Client testimonial"
        >
          <blockquote>
            &ldquo;They engineered our retaining tiers like a structural trade — clean lines, real
            mass, and <span className="hl">{enterpriseQuote.highlight}</span>.&rdquo;
          </blockquote>
          <footer>{enterpriseQuote.attribution}</footer>
        </section>
      </AppealReveal>

      <div className="turner-band-divider turner-band-divider--white" aria-hidden />

      {/* green */}
      <AppealReveal>
        <section
          className="turner-contact turner-band turner-band--green"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="turner-contact__copy">
            <p className="eyebrow eyebrow--on-dark">Free Site Consultation</p>
            <h2 id="contact-heading" className="text-display stack-title">
              Let&apos;s Look at Your <span>Shoreline</span>
            </h2>
            <p className="wf-type-supporting">{conversion.contactIntro}</p>
            <Link href="/contact" className="btn-green stack-cta cta-self-start">
              Request a Site Consultation
            </Link>
            <p className="turner-contact__areas">
              Wasaga Beach · Tiny Township · Elmvale · Midland · Penetanguishene · Collingwood
            </p>
          </div>
          <EnterpriseContactForm />
        </section>
      </AppealReveal>
    </div>
  );
}
