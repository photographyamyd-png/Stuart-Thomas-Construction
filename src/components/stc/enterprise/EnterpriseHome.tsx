import Image from "next/image";
import Link from "next/link";
import { areas } from "@/data/areas";
import { areaCopy, pageHeadlines } from "@/data/copy";
import { conversion } from "@/data/conversion";
import {
  enterpriseFeaturedProject,
  enterpriseHomeShowcase,
  enterpriseQuote,
} from "@/data/enterprise";
import { media } from "@/data/media";
import { cta } from "@/data/nav";
import { site } from "@/data/site";
import { CommitmentsAccordion } from "./blocks/CommitmentsAccordion";
import { TurnerHero } from "./blocks/TurnerHero";
import { HomeLandscapingGallery } from "./blocks/HomeLandscapingGallery";
import { ServiceOverlayGrid } from "./blocks/ServiceOverlayGrid";
import { EnterpriseContactForm } from "./EnterpriseContactForm";
import { LinkArrow } from "./primitives";

export function EnterpriseHome() {
  return (
    <>
      <TurnerHero
        videoSrc={media.landscapingHeroVideo}
        posterSrc={media.serviceDefaults.landscaping}
        clipStartSec={0}
      />

      <HomeLandscapingGallery />

      <section
        className="turner-featured turner-featured--light turner-band turner-band--light turner-band--seam"
        id="featured"
        aria-labelledby="featured-heading"
      >
        <div className="turner-featured__media">
          <Image
            src={enterpriseFeaturedProject.image}
            alt="Featured landscaping project in Tiny Township"
            fill
            loading="lazy"
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="turner-featured__copy container">
          <p className="eyebrow">{enterpriseFeaturedProject.eyebrow}</p>
          <h2 id="featured-heading" className="text-display stack-eyebrow">
            {enterpriseFeaturedProject.title}{" "}
            <span className="text-accent-green">{enterpriseFeaturedProject.titleAccent}</span>
          </h2>
          <p className="wf-type-supporting">{enterpriseFeaturedProject.description}</p>
          <LinkArrow href={enterpriseFeaturedProject.href}>Explore Landscaping</LinkArrow>
        </div>
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
            <span className="text-accent-green">{enterpriseHomeShowcase.headlineAccent}</span>
          </h2>
          <p className="wf-type-supporting stc-showcase__statement">{enterpriseHomeShowcase.statement}</p>
          <p className="wf-type-supporting stc-showcase__body">{enterpriseHomeShowcase.body}</p>
          <Link href={enterpriseHomeShowcase.cta.href} className="btn-accent btn-accent--lg">
            {enterpriseHomeShowcase.cta.label}
          </Link>
        </div>
      </section>

      <section className="stc-built-strong" id="built-strong" aria-labelledby="built-strong-heading">
        <div className="stc-built-strong__bg">
          <Image src={media.integritySection} alt="" fill loading="lazy" sizes="100vw" className="object-cover" />
        </div>
        <div className="stc-built-strong__scrim" aria-hidden />
        <div className="stc-built-strong__inner">
          <h2 id="built-strong-heading">{site.tagline}</h2>
          <p>
            Armour stone, waterfront steps, and full outdoor builds — with straight talk from quote to
            finish.
          </p>
          <Link href={cta.primaryHref} className="btn-accent btn-accent--lg">
            {cta.primaryLabel}
          </Link>
        </div>
      </section>

      <section className="turner-band turner-band--dark turner-band--seam" id="services" aria-label="Our services">
        <ServiceOverlayGrid showHeader />
      </section>

      <section
        className="turner-regional turner-band turner-band--green turner-band--seam"
        id="regional"
        aria-labelledby="regional-heading"
      >
        <div className="turner-regional__media">
          <Image src={media.ctaBanner} alt="" fill loading="lazy" sizes="50vw" className="object-cover" />
        </div>
        <div className="turner-regional__copy">
          <p className="eyebrow eyebrow--on-dark">Simcoe County &amp; South Georgian Bay</p>
          <h2 id="regional-heading" className="text-display">
            Our Work In Your <span className="text-accent-green">Community</span>
          </h2>
          <p>{areaCopy.corridorBlurb()}</p>
          <ul className="area-pills">
            {areas.map((area, i) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}`} className={i === 0 ? "is-active" : undefined}>
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CommitmentsAccordion />

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
          <p className="eyebrow eyebrow--on-dark">{pageHeadlines.ctaEyebrows.startProject}</p>
          <h2 id="contact-heading" className="text-display stack-title">
            Ready to Talk About <span>Your Project?</span>
          </h2>
          <p>{conversion.contactIntro}</p>
          <Link
            href="/contact"
            className="btn-green stack-cta cta-self-start"
          >
            {conversion.serviceCta.button}
          </Link>
        </div>
        <EnterpriseContactForm />
      </section>
    </>
  );
}
