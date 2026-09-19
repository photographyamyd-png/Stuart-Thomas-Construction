import Image from "next/image";
import Link from "next/link";
import { getServiceHero } from "@/data/media";
import type { ServiceDetail } from "@/data/services";
import { site } from "@/data/site";
import { snowServicePrefill } from "@/data/snow-page";
import { CtaLink, LinkArrow } from "../primitives";

type Props = {
  service: ServiceDetail;
};

/** Shoreline contour texture — faint L2 overlay for the snow hero. */
function SnowHeroContours() {
  return (
    <svg
      className="stc-snow-hero__contours"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <path
        d="M-40 520 C180 480 320 560 520 500 S860 440 980 490 S1180 560 1240 530"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M-40 580 C220 540 380 620 560 560 S820 500 960 555 S1160 620 1240 590"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M-40 640 C200 610 360 680 540 630 S800 570 940 620 S1140 690 1240 655"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.85"
      />
      <path
        d="M-40 280 C160 240 300 310 480 260 S820 200 1000 250 S1180 320 1240 290"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.55"
      />
    </svg>
  );
}

/**
 * Commercial snow hero — L1 photo, L2 frost/contours, L3 copy/CTAs,
 * L4 Since 2004 badge. Trust strip follows as the next sibling band.
 */
export function SnowHero({ service }: Props) {
  const heroSrc = getServiceHero(service.slug);
  const seasonalHref = `?service=${encodeURIComponent(snowServicePrefill.seasonal)}#quote-form`;

  return (
    <section
      className="stc-snow-hero turner-band turner-band--dark"
      aria-labelledby="svc-heading"
    >
      {/* L1 — full-bleed photo */}
      <div className="stc-snow-hero__media">
        <Image
          src={heroSrc}
          alt={service.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* L2 — frost/charcoal gradient + shoreline contours */}
      <div className="stc-snow-hero__frost" aria-hidden>
        <SnowHeroContours />
      </div>

      {/* L3 — content */}
      <div className="stc-snow-hero__copy">
        <p className="stc-svc-page__breadcrumb stc-snow-hero__enter stc-snow-hero__enter--1">
          <Link href="/services">Services</Link> / Commercial Snow Removal
        </p>
        <p className="eyebrow eyebrow--on-dark stc-snow-hero__enter stc-snow-hero__enter--2">
          {service.shortLabel}
        </p>
        <h1
          id="svc-heading"
          className="text-display stack-eyebrow stc-snow-hero__enter stc-snow-hero__enter--3"
        >
          Commercial & Industrial Snow Removal in{" "}
          <span className="text-accent-gold stc-snow-hero__accent">
            Midland & North Simcoe
          </span>
        </h1>
        <p className="wf-type-supporting stc-snow-hero__enter stc-snow-hero__enter--4">
          {service.shortDescription}
        </p>
        <div className="stc-snow-hero__actions stc-snow-hero__enter stc-snow-hero__enter--5">
          <CtaLink href={seasonalHref} className="btn-accent btn-accent--lg cta-inline">
            {service.heroCtaLabel ?? "Secure Your Seasonal Contract"}
          </CtaLink>
          <LinkArrow href={`tel:${site.phoneTel}`} className="cta-inline">
            Call {site.phoneDisplay}
          </LinkArrow>
        </div>
      </div>

      {/* L4 — badge on photo plane (does not overlap CTAs) */}
      <p className="stc-snow-hero__badge stc-snow-hero__enter stc-snow-hero__enter--5">
        Since 2004
      </p>
    </section>
  );
}
