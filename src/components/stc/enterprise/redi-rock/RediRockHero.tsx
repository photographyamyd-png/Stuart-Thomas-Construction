import Image from "next/image";
import Link from "next/link";
import { media } from "@/data/media";
import { rediRockAttribution } from "@/data/redi-rock";
import { ManufacturerAttribution } from "../blocks/ManufacturerAttribution";
import { LinkArrow } from "../primitives";

/**
 * Appeal-aligned full-bleed hero — centered stack, grain, gold seam.
 * Matches EnterprisePageHero / service heroes under `.landing-appeal`.
 */
export function RediRockHero() {
  return (
    <section
      className="stc-rr-hero stc-rr-hero--appeal turner-band turner-band--dark"
      aria-labelledby="redi-rock-heading"
    >
      <Image
        src={media.rediRockReferenceHero}
        alt="Redi-Rock waterfront retaining wall reference installation"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="stc-rr-hero__scrim" aria-hidden />
      <div className="stc-rr-hero__grain" aria-hidden />
      <div className="stc-rr-hero__seam" aria-hidden />
      <div className="stc-rr-hero__copy container">
        <p className="stc-svc-page__breadcrumb stc-rr-hero__enter stc-rr-hero__enter--1">
          <Link href="/services">Services</Link> / Materials / Redi-Rock
        </p>
        <p className="eyebrow eyebrow--on-dark stc-rr-hero__enter stc-rr-hero__enter--2">
          Installation Services
        </p>
        <h1
          id="redi-rock-heading"
          className="text-display stack-eyebrow stc-rr-hero__enter stc-rr-hero__enter--3"
        >
          Redi-Rock Installation by{" "}
          <span className="text-accent-gold">Stuart Thomas Construction</span>
        </h1>
        <p className="wf-type-supporting stc-rr-hero__enter stc-rr-hero__enter--4">
          We install Redi-Rock retaining and freestanding walls for slopes, waterfront terraces, and
          outdoor spaces across Tiny Township and South Georgian Bay. Materials supplied by The
          Sarjeant Co.
        </p>
        <ManufacturerAttribution
          variant="compact"
          className="stack-title stc-rr-hero__enter stc-rr-hero__enter--4"
        />
        <div className="stc-rr-hero__actions stack-cta stc-rr-hero__enter stc-rr-hero__enter--5">
          <Link href="/contact" className="btn-accent btn-accent--lg cta-inline">
            Request an Install Quote
          </Link>
          <LinkArrow href="#install" className="cta-inline">
            Request install details
          </LinkArrow>
        </div>
        <p className="stc-rr-hero__credit stc-rr-hero__enter stc-rr-hero__enter--5">
          {rediRockAttribution.referenceCaption}
        </p>
      </div>
    </section>
  );
}
