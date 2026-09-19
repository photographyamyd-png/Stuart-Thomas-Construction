import Image from "next/image";
import Link from "next/link";
import { BackgroundVideo } from "@/components/media/BackgroundVideo";
import { conversion } from "@/data/conversion";
import type { GalleryItem } from "@/data/gallery";
import {
  getServiceCapabilityImages,
  getServiceCtaBanner,
  getServiceHero,
  getServiceWorkShowcase,
  media,
} from "@/data/media";
import { rediRockServiceCallouts } from "@/data/redi-rock";
import type { ServiceDetail, ServiceSlug } from "@/data/services";
import { getAdjacentServices } from "@/data/services";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { AppealReveal } from "../blocks/AppealReveal";
import { CtaLink, LinkArrow } from "../primitives";
import { siteMailtoHref } from "@/lib/site-mailto";
import { ServiceCapabilitiesBand } from "./ServiceCapabilitiesBand";
import { ServiceFaq } from "./ServiceFaq";
import { ServicePager } from "./ServicePager";
import { ServiceProcessBand } from "./ServiceProcessBand";
import { ServiceProofBand } from "./ServiceProofBand";
import { ServiceRediRockCallout } from "./ServiceRediRockCallout";
import { ServiceRelatedBand } from "./ServiceRelatedBand";
import { ServiceStatementBand } from "./ServiceStatementBand";
import { ServiceWorkShowcase } from "./ServiceWorkShowcase";
import { SnowQuoteFormBand } from "./SnowQuoteFormBand";

type RediRockServiceSlug = keyof typeof rediRockServiceCallouts;

const VIDEO_HERO_SLUGS = new Set<ServiceSlug>(["landscaping", "hardscaping"]);

function serviceHeroVideo(slug: ServiceSlug): string {
  if (slug === "hardscaping") return media.hardscapingHeroVideo;
  return media.landscapingHeroVideo;
}

function isRediRockServiceSlug(slug: ServiceSlug): slug is RediRockServiceSlug {
  return slug in rediRockServiceCallouts;
}

/** Split last word for gold punch (Armour Stone → Armour + Stone). */
function titleParts(title: string): { base: string; accent: string | null } {
  const parts = title.trim().split(/\s+/);
  if (parts.length < 2) return { base: title, accent: null };
  const accent = parts[parts.length - 1] ?? null;
  const base = parts.slice(0, -1).join(" ");
  return { base, accent };
}

type Props = {
  service: ServiceDetail;
  rediRockInstallPhoto?: GalleryItem;
};

export function EnterpriseServicePage({ service, rediRockInstallPhoto }: Props) {
  const heroSrc = getServiceHero(service.slug);
  const capImages = getServiceCapabilityImages(service.slug);
  const workShowcase = getServiceWorkShowcase(service.slug);
  const ctaBannerSrc = getServiceCtaBanner(service.slug);
  const { prev, next } = getAdjacentServices(service.slug);
  const isImmersiveHero = VIDEO_HERO_SLUGS.has(service.slug);
  const isSnow = service.slug === "commercial-snow-removal";
  const { base: titleBase, accent: titleAccent } = titleParts(service.title);
  const statementImage = workShowcase?.leadImage ?? capImages[0] ?? heroSrc;
  const statementAlt = workShowcase?.leadAlt ?? `${service.title} — ${service.heroAlt}`;
  const scrollTarget = workShowcase ? "#work" : "#process";
  const scrollLabel = workShowcase
    ? isSnow
      ? "See winter service"
      : "Finished work on site"
    : "What happens on site";
  const heroCtaLabel = service.heroCtaLabel ?? "Get a Quote";
  const heroMailto =
    isSnow
      ? siteMailtoHref(
          "Commercial snow — winter contract request",
          `Hi Stuart Thomas Construction,

I'd like to request a winter snow removal contract.

Property address / area:
Property type:
Lot size / priority areas:

Thank you.`,
        )
      : siteMailtoHref();
  const closing = service.closingCta;
  const snowTestimonial = isSnow ? testimonials.find((t) => /snow/i.test(t.quote)) : undefined;

  return (
    <>
      <section
        className={`stc-svc-page__hero stc-svc-page__hero--cinematic turner-band turner-band--dark${isImmersiveHero ? " stc-svc-page__hero--immersive" : ""}`}
        aria-labelledby="svc-heading"
      >
        {isImmersiveHero ? (
          <BackgroundVideo
            mp4Src={serviceHeroVideo(service.slug)}
            posterSrc={heroSrc}
            posterAlt={service.heroAlt}
          />
        ) : (
          <Image src={heroSrc} alt={service.heroAlt} fill priority sizes="100vw" className="object-cover" />
        )}
        <div className="stc-svc-page__hero-scrim" aria-hidden />
        <div className="stc-svc-page__hero-grain" aria-hidden />
        <div className="stc-svc-page__hero-seam" aria-hidden />
        <div className="stc-svc-page__hero-copy">
          <p className="stc-svc-page__breadcrumb stc-svc-page__hero-enter stc-svc-page__hero-enter--1">
            <Link href="/services">Services</Link> / {service.title}
          </p>
          <p className="eyebrow eyebrow--on-dark stc-svc-page__hero-enter stc-svc-page__hero-enter--2">
            {service.shortLabel}
          </p>
          <h1
            id="svc-heading"
            className="text-display stack-eyebrow stc-svc-page__hero-enter stc-svc-page__hero-enter--3"
          >
            {titleAccent ? (
              <>
                {titleBase} <span className="text-accent-gold">{titleAccent}</span>
              </>
            ) : (
              service.title
            )}
          </h1>
          <p className="wf-type-supporting stc-svc-page__hero-enter stc-svc-page__hero-enter--4">
            {service.shortDescription}
          </p>
          <div className="stc-svc-page__hero-actions stc-svc-page__hero-enter stc-svc-page__hero-enter--5">
            <CtaLink href={heroMailto} className="btn-accent btn-accent--lg cta-inline">
              {heroCtaLabel}
            </CtaLink>
            {service.heroSecondaryTel ? (
              <LinkArrow href={`tel:${site.phoneTel}`} className="cta-inline">
                Call {site.phoneDisplay}
              </LinkArrow>
            ) : (
              <LinkArrow href={scrollTarget} className="cta-inline">
                {scrollLabel}
              </LinkArrow>
            )}
          </div>
        </div>
      </section>

      <AppealReveal>
        <ServiceStatementBand service={service} imageSrc={statementImage} imageAlt={statementAlt} />
      </AppealReveal>

      <AppealReveal>
        <ServiceCapabilitiesBand
          subServices={service.subServices}
          images={capImages}
          imageAlts={service.subServices.map((sub) =>
            isSnow ? `${sub.title} — illustrative commercial snow imagery` : `${sub.title} — ${service.title}`,
          )}
          heroFallback={heroSrc}
        />
      </AppealReveal>

      {isSnow && (
        <AppealReveal>
          <SnowQuoteFormBand />
        </AppealReveal>
      )}

      {isRediRockServiceSlug(service.slug) && (
        <AppealReveal>
          <ServiceRediRockCallout
            callout={rediRockServiceCallouts[service.slug]}
            installPhoto={rediRockInstallPhoto}
          />
        </AppealReveal>
      )}

      <AppealReveal>
        <ServiceProcessBand
          steps={service.process}
          afterCta={
            isSnow
              ? {
                  label: "Book a Site Walk",
                  href: `tel:${site.phoneTel}`,
                }
              : undefined
          }
        />
      </AppealReveal>

      {workShowcase && (
        <AppealReveal>
          <ServiceWorkShowcase data={workShowcase} />
        </AppealReveal>
      )}

      {snowTestimonial && (
        <AppealReveal>
          <ServiceProofBand
            quote={snowTestimonial.quote}
            name={snowTestimonial.name}
            context={snowTestimonial.context}
          />
        </AppealReveal>
      )}

      {service.faqs.length > 0 && (
        <AppealReveal>
          <ServiceFaq items={service.faqs} band={workShowcase ? "light" : "dark"} />
        </AppealReveal>
      )}

      <AppealReveal>
        <ServiceRelatedBand
          relatedSlugs={service.relatedSlugs}
          showRediRock={isRediRockServiceSlug(service.slug)}
          band={workShowcase ? "dark" : "light"}
        />
      </AppealReveal>

      <AppealReveal>
        <section
          className="stc-svc-page__cta turner-regional turner-band turner-band--green turner-band--seam"
          aria-label="Contact call to action"
        >
          <div className="turner-regional__media">
            <Image
              src={ctaBannerSrc}
              alt={isSnow ? "Commercial snow plow truck in winter — illustrative stock imagery" : ""}
              fill
              loading="lazy"
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="turner-regional__copy">
            <p className="eyebrow eyebrow--on-dark">{closing?.eyebrow ?? "Free Site Visit"}</p>
            <h2 className="text-display stack-title">
              {closing ? (
                <>
                  {closing.headlineBefore}{" "}
                  <span className="text-accent-gold">{closing.headlineAccent}</span>
                </>
              ) : (
                <>
                  Book a free <span className="text-accent-gold">site visit</span>
                </>
              )}
            </h2>
            <p className="wf-type-supporting">{closing?.subline ?? conversion.serviceCta.subline}</p>
            <div className="stc-svc-page__cta-actions stack-cta">
              <CtaLink href={heroMailto} className="btn-green cta-self-start">
                {closing?.button ?? conversion.serviceCta.button}
              </CtaLink>
              {isSnow && (
                <>
                  <LinkArrow href={`tel:${site.phoneTel}`} className="cta-inline">
                    Call {site.phoneDisplay}
                  </LinkArrow>
                  <LinkArrow href="#quote-form" className="cta-inline">
                    Request a winter contract
                  </LinkArrow>
                </>
              )}
            </div>
          </div>
        </section>
      </AppealReveal>

      <AppealReveal>
        <ServicePager prev={prev} next={next} />
      </AppealReveal>
    </>
  );
}
