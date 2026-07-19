import type { Metadata } from "next";
import { EnterpriseContactForm } from "@/components/stc/enterprise/EnterpriseContactForm";
import { AppealReveal } from "@/components/stc/enterprise/blocks/AppealReveal";
import { EnterprisePageHero } from "@/components/stc/enterprise/blocks/EnterprisePageHero";
import { LinkArrow } from "@/components/stc/enterprise/primitives";
import { conversion } from "@/data/conversion";
import { media } from "@/data/media";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Request a Quote | Tiny Township Construction",
  description: conversion.contactIntro,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <EnterprisePageHero
        eyebrow="Free Site Visit"
        title="Call for a free site visit"
        description={conversion.contactIntro}
        imageSrc={media.ctaBanner}
        imageAlt=""
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      >
        <dl className="stc-contact-details">
          <div>
            <dt className="text-utility">Phone</dt>
            <dd>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </dd>
          </div>
        </dl>
        <LinkArrow href="/services" className="stack-cta">
          Armour stone &amp; hardscaping
        </LinkArrow>
      </EnterprisePageHero>

      <AppealReveal>
        <section
          className="turner-contact turner-band turner-band--green turner-band--seam"
          id="contact"
          aria-labelledby="contact-form-heading"
        >
          <div className="turner-contact__copy">
            <p className="eyebrow eyebrow--on-dark">Request a Quote</p>
            <h2 id="contact-form-heading" className="text-display stack-title">
              Call about your <span className="text-accent-gold">shoreline or yard</span>
            </h2>
            <p className="wf-type-supporting">{conversion.homeCta.subline}</p>
          </div>
          <EnterpriseContactForm />
        </section>
      </AppealReveal>
    </>
  );
}
