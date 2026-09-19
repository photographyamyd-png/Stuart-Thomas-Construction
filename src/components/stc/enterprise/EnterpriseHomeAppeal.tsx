import Image from "next/image";
import Link from "next/link";
import { conversion } from "@/data/conversion";
import {
  enterpriseFeaturedProject,
  enterpriseHomeShowcase,
  enterpriseQuote,
} from "@/data/enterprise";
import { media } from "@/data/media";
import { site } from "@/data/site";
import { CONTACT_FORM_HREF } from "@/lib/contact-paths";
import { AppealTurnerHero } from "./blocks/AppealTurnerHero";
import { FaqAccordion } from "./blocks/FaqAccordion";
import { ProblemSection } from "./blocks/ProblemSection";
import { ProcessSteps } from "./blocks/ProcessSteps";
import { ServiceOverlayGrid } from "./blocks/ServiceOverlayGrid";
import { EnterpriseContactForm } from "./EnterpriseContactForm";
import { AppealReveal } from "./blocks/AppealReveal";
import { CtaLink, LinkArrow } from "./primitives";

/**
 * Primary homepage composition (Appeal landing).
 * Scoped under `.landing-appeal` for industrial shoreline craft —
 * stronger brand presence, atmosphere, motion, and section rhythm.
 *
 * Flow: Hero → Pathfinder → Featured → Problem → Process → Services →
 * Showcase → Quote → FAQ → Contact.
 * Previous homepage remains at `/design/landing-current` for comparison.
 */
export function EnterpriseHomeAppeal() {
  return (
    <div className="landing-appeal">
      <AppealTurnerHero />

      <AppealReveal>
        <section
          className="turner-pathfinder turner-band turner-band--light turner-band--seam"
          id="pathfinder"
          aria-labelledby="pathfinder-heading"
        >
          <header className="turner-pathfinder__intro container">
            <p className="eyebrow">Start Here</p>
            <h2 id="pathfinder-heading" className="text-display">
              Choose your <span className="text-accent-gold">next step</span>
            </h2>
          </header>
          <ul className="turner-pathfinder__grid">
            <li>
              <Link className="turner-pathfinder__card" href="/projects">
                <h3>See finished waterfront work</h3>
                <p className="wf-type-supporting">
                  Retaining walls, shoreline stairs, and full outdoor builds on Georgian Bay
                  properties — see the finished work.
                </p>
                <span className="link-arrow">
                  View projects{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link className="turner-pathfinder__card" href="#services">
                <h3>What we build</h3>
                <p className="wf-type-supporting">
                  Armour stone, hardscaping, excavation, and landscaping for waterfront properties.
                </p>
                <span className="link-arrow">
                  Our services{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link className="turner-pathfinder__card" href="/about">
                <h3>Owner on the Bay since 2004</h3>
                <p className="wf-type-supporting">
                  Same owner on the same shoreline since 2004. Local knowledge built over 15+ seasons
                  on Georgian Bay.
                </p>
                <span className="link-arrow">
                  About us{" "}
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
              alt={enterpriseFeaturedProject.imageAlt}
              fill
              loading="lazy"
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="turner-featured__copy container">
            <p className="eyebrow eyebrow--on-dark">{enterpriseFeaturedProject.eyebrow}</p>
            <h2 id="featured-heading" className="text-display">
              {enterpriseFeaturedProject.title}{" "}
              <span className="text-accent-gold">{enterpriseFeaturedProject.titleAccent}</span>
            </h2>
            <p className="wf-type-supporting">{enterpriseFeaturedProject.description}</p>
            <LinkArrow href={enterpriseFeaturedProject.href}>View projects</LinkArrow>
          </div>
        </section>
      </AppealReveal>

      {/* dark / green contrast split */}
      <AppealReveal>
        <ProblemSection />
      </AppealReveal>

      {/* light — splits dark mid-page stack */}
      <AppealReveal>
        <ProcessSteps />
      </AppealReveal>

      {/* dark */}
      <AppealReveal>
        <section className="turner-band turner-band--dark turner-band--seam" id="services" aria-label="Our services">
          <ServiceOverlayGrid showHeader />
        </section>
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
            <CtaLink href={enterpriseHomeShowcase.cta.href} className="btn-accent btn-accent--lg">
              {enterpriseHomeShowcase.cta.label}
            </CtaLink>
          </div>
        </section>
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

      {/* light — before contact */}
      <AppealReveal>
        <FaqAccordion band="light" />
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
              Questions about your <span className="text-accent-gold">property?</span>
            </h2>
            <p className="wf-type-supporting">{conversion.contactIntro}</p>
            <div className="stc-contact-actions cta-self-start">
              <a href={`tel:${site.phoneTel}`} className="btn-accent btn-accent--lg stack-cta">
                Call Us
              </a>
              <a href={CONTACT_FORM_HREF} className="btn-green stack-cta">
                Request a Site Consultation
              </a>
            </div>
          </div>
          <EnterpriseContactForm />
        </section>
      </AppealReveal>
    </div>
  );
}
