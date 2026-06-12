import Image from "next/image";
import Link from "next/link";
import { media } from "@/data/media";
import { rediRockAttribution } from "@/data/redi-rock";
import { ManufacturerAttribution } from "../blocks/ManufacturerAttribution";
import { LinkArrow } from "../primitives";

export function RediRockHero() {
  return (
    <section className="stc-rr-hero turner-band turner-band--dark" aria-labelledby="redi-rock-heading">
      <div className="stc-rr-hero__top container">
        <Link className="stc-page-back" href="/services/armour-stone">
          ← Back to Armour Stone
        </Link>
        <p className="stc-svc-page__breadcrumb">
          <Link href="/services">Services</Link> / Materials / Redi-Rock
        </p>
      </div>
      <div className="stc-rr-hero__split">
        <div className="stc-rr-hero__copy container">
          <p className="eyebrow eyebrow--on-dark">Installation Services</p>
          <h1 id="redi-rock-heading" className="text-display stack-eyebrow">
            Redi-Rock Installation by <span className="text-accent-gold">Stuart Thomas Construction</span>
          </h1>
          <p className="lead-on-dark">
            We install engineered Redi-Rock retaining and freestanding systems sourced through
            The Sarjeant Co. for structural grade changes, waterfront terraces, and outdoor
            living across South Georgian Bay.
          </p>
          <ManufacturerAttribution variant="compact" className="stack-title" />
          <div className="stc-rr-hero__actions stack-cta">
            <Link href="/contact" className="btn-green cta-inline">
              Request an Install Quote
            </Link>
            <LinkArrow href="#install" className="cta-inline">
              Explore This Page
            </LinkArrow>
          </div>
        </div>
        <div className="stc-rr-hero__media">
          <Image
            src={media.rediRockReferenceHero}
            alt="Redi-Rock waterfront retaining wall reference installation"
            fill
            priority
            sizes="55vw"
            className="object-cover"
          />
          <div className="stc-rr-hero__scrim" aria-hidden />
          <p className="stc-rr-hero__credit">{rediRockAttribution.referenceCaption}</p>
        </div>
      </div>
    </section>
  );
}
