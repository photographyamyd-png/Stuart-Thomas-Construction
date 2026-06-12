import Image from "next/image";
import Link from "next/link";
import { BackgroundVideo } from "@/components/media/BackgroundVideo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { areas } from "@/data/areas";
import { conversion } from "@/data/conversion";
import type { GalleryItem } from "@/data/gallery";
import { getServiceCapabilityImages, getServiceHero, getServiceWorkShowcase, media } from "@/data/media";
import { rediRockServiceCallouts } from "@/data/redi-rock";
import type { ServiceDetail, ServiceSlug } from "@/data/services";
import { getAdjacentServices, getServiceBySlug } from "@/data/services";
import { ServiceCapabilitiesBand } from "./ServiceCapabilitiesBand";
import { ServicePager } from "./ServicePager";
import { ServiceRediRockCallout } from "./ServiceRediRockCallout";
import { ServiceWorkShowcase } from "./ServiceWorkShowcase";

type RediRockServiceSlug = keyof typeof rediRockServiceCallouts;

function isRediRockServiceSlug(slug: ServiceSlug): slug is RediRockServiceSlug {
  return slug in rediRockServiceCallouts;
}

type Props = {
  service: ServiceDetail;
  rediRockInstallPhoto?: GalleryItem;
};

export function EnterpriseServicePage({ service, rediRockInstallPhoto }: Props) {
  const heroSrc = getServiceHero(service.slug);
  const capImages = getServiceCapabilityImages(service.slug);
  const workShowcase = getServiceWorkShowcase(service.slug);
  const { prev, next } = getAdjacentServices(service.slug);
  const isImmersiveHero = service.slug === "landscaping";

  return (
    <>
      <section
        className={`stc-svc-page__hero turner-band turner-band--dark${isImmersiveHero ? " stc-svc-page__hero--immersive" : ""}`}
        aria-labelledby="svc-heading"
      >
        {isImmersiveHero ? (
          <BackgroundVideo
            mp4Src={media.landscapingHeroVideo}
            posterSrc={heroSrc}
            posterAlt=""
          />
        ) : (
          <Image src={heroSrc} alt={service.heroAlt} fill priority sizes="100vw" className="object-cover" />
        )}
        <div className="stc-svc-page__hero-scrim" aria-hidden />
        {isImmersiveHero ? (
          <>
            <div className="stc-svc-page__hero-nav">
              <Link className="stc-page-back" href="/">
                ← Back to homepage
              </Link>
              <p className="stc-svc-page__breadcrumb">
                <Link href="/services">Services</Link> / {service.title}
              </p>
            </div>
            <div className="stc-svc-page__hero-copy">
              <p className="eyebrow eyebrow--on-dark">Structural Stone</p>
              <h1 id="svc-heading" className="text-display stack-eyebrow">
                {service.title}
              </h1>
              <p className="wf-type-supporting">{service.shortDescription}</p>
              <Link href="/contact" className="btn-green stack-cta cta-inline">
                Get a Quote
              </Link>
            </div>
          </>
        ) : (
          <div className="stc-svc-page__hero-copy">
            <Link className="stc-page-back" href="/">
              ← Back to homepage
            </Link>
            <p className="stc-svc-page__breadcrumb">
              <Link href="/services">Services</Link> / {service.title}
            </p>
            <p className="eyebrow eyebrow--on-dark">Structural Stone</p>
            <h1 id="svc-heading" className="text-display stack-eyebrow">
              {service.title}
            </h1>
            <p className="wf-type-supporting">{service.shortDescription}</p>
            <Link href="/contact" className="btn-green stack-cta cta-inline">
              Get a Quote
            </Link>
          </div>
        )}
      </section>

      <section className="stc-svc-page__intro turner-band turner-band--light turner-band--seam">
        <div className="container">
          <div className="stc-svc-page__intro-grid">
            <div>
              <p className="eyebrow green">Overview</p>
              <h2 className="text-display text-display--section stack-title">
                Built To Read As <span className="text-accent-green">Permanent</span>
              </h2>
              {service.overview.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div>
              <p className="eyebrow green">Why STC</p>
              <ul className="stc-svc-page__benefits stack-title">
                {service.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceCapabilitiesBand
        subServices={service.subServices}
        images={capImages}
        imageAlts={service.subServices.map((sub) => `${sub.title} — ${service.title}`)}
        heroFallback={heroSrc}
      />

      {isRediRockServiceSlug(service.slug) && (
        <ServiceRediRockCallout
          callout={rediRockServiceCallouts[service.slug]}
          installPhoto={rediRockInstallPhoto}
        />
      )}

      <section
        className="stc-svc-page__process turner-band turner-band--dark turner-band--seam"
        aria-labelledby="process-heading"
      >
        <div className="container">
          <p className="eyebrow eyebrow--on-dark">Our Process</p>
          <h2 id="process-heading" className="text-display stack-title">
            How We <span className="text-accent-gold">Build</span>
          </h2>
          <ol className="stc-svc-page__process-grid">
            {service.process.map((step, i) => (
              <li key={step.title} className="stc-svc-page__process-step">
                <span className="num">0{i + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {workShowcase && <ServiceWorkShowcase data={workShowcase} />}

      {service.faqs.length > 0 && (
        <section className="stc-svc-page__faq turner-band turner-band--light turner-band--seam">
          <div className="container">
            <p className="eyebrow green">FAQ</p>
            <h2 className="text-display text-display--faq stack-title">
              Common <span className="text-accent-green">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="enterprise-faq">
              {service.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="enterprise-faq__item">
                  <AccordionTrigger className="enterprise-faq__trigger">{f.q}</AccordionTrigger>
                  <AccordionContent className="enterprise-faq__content">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="stc-svc-page__related turner-band turner-band--dark turner-band--seam">
        <div className="container">
          <p className="eyebrow eyebrow--on-dark">Related Services</p>
          <ul className="stc-svc-page__related-pills">
            {service.relatedSlugs.map((rel) => {
              const r = getServiceBySlug(rel);
              if (!r) return null;
              return (
                <li key={rel}>
                  <Link href={`/services/${rel}`}>{r.title}</Link>
                </li>
              );
            })}
            {isRediRockServiceSlug(service.slug) && (
              <li>
                <Link href="/materials/redi-rock">Redi-Rock Installation</Link>
              </li>
            )}
          </ul>
          <p className="eyebrow eyebrow--on-dark stack-section-lg">Areas We Serve</p>
          <ul className="stc-svc-page__related-pills">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="stc-svc-page__cta turner-regional turner-band turner-band--green turner-band--seam"
        aria-label="Contact call to action"
      >
        <div className="turner-regional__media">
          <Image src={media.ctaBanner} alt="" fill loading="lazy" sizes="50vw" className="object-cover" />
        </div>
        <div className="turner-regional__copy">
          <p className="eyebrow eyebrow--on-dark">Start Your Project</p>
          <h2 className="text-display stack-title">
            {conversion.serviceCta.headline}
          </h2>
          <p>{conversion.serviceCta.subline}</p>
          <Link href="/contact" className="btn-green stack-cta cta-self-start">
            {conversion.serviceCta.button}
          </Link>
        </div>
      </section>

      <ServicePager prev={prev} next={next} />
    </>
  );
}
