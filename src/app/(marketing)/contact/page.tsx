import type { Metadata } from "next";
import Link from "next/link";
import { EnterpriseContactForm } from "@/components/stc/enterprise/EnterpriseContactForm";
import { conversion } from "@/data/conversion";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Request a Quote",
  description: conversion.contactIntro,
  path: "/contact",
});

export default function ContactPage() {
  return (
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
          <div>
            <dt className="text-utility">Email</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
        </dl>
        <Link href="/services" className="btn-ghost btn-ghost--on-green stack-cta cta-self-start">
          View Services
        </Link>
      </div>
      <EnterpriseContactForm />
    </section>
  );
}
