import type { Metadata } from "next";
import { AppealReveal } from "@/components/stc/enterprise/blocks/AppealReveal";
import { ContactActionPanel } from "@/components/stc/enterprise/blocks/ContactActionPanel";
import { EnterprisePageHero } from "@/components/stc/enterprise/blocks/EnterprisePageHero";
import { conversion } from "@/data/conversion";
import { media } from "@/data/media";
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
        title="Request a site"
        titleAccent="consultation"
        description={conversion.contactIntro}
        imageSrc={media.ctaBanner}
        imageAlt=""
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <AppealReveal>
        <ContactActionPanel />
      </AppealReveal>
    </>
  );
}
