import type { Metadata } from "next";
import { EnterpriseContactForm } from "@/components/stc/enterprise/EnterpriseContactForm";
import { LinkArrow } from "@/components/stc/enterprise/primitives";
import { JsonLdScript } from "@/components/seo/JsonLd";
import { conversion } from "@/data/conversion";
import { site } from "@/data/site";
import { buildBreadcrumbJsonLd, buildContactPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Request a Quote | Tiny Township Construction",
  description: conversion.contactIntro,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        data={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          buildContactPageJsonLd(),
        ]}
      />
      <section
        className="turner-contact turner-band turner-band--green turner-band--seam"
        id="contact"
        aria-labelledby="contact-page-heading"
      >
        <div className="turner-contact__copy">
          <p className="eyebrow eyebrow--on-dark">Get in touch</p>
          <h1 id="contact-page-heading" className="text-display stack-title">
            Contact <span>Us</span>
          </h1>
          <p>{conversion.contactIntro}</p>
          <dl className="stc-contact-details">
            <div>
              <dt className="text-utility">Phone</dt>
              <dd>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </dd>
            </div>
          </dl>
          <LinkArrow href="/services" className="stack-cta cta-self-start">
            View Services
          </LinkArrow>
        </div>
        <EnterpriseContactForm />
      </section>
    </>
  );
}
