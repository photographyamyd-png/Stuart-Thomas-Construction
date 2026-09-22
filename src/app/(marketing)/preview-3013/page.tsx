import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SnowLandingClient } from "@/components/stc/enterprise/service/SnowLandingClient";
import { getServiceHero, getSnowQuoteBackdrop } from "@/data/media";
import { getServiceBySlug } from "@/data/services";
import { PREVIEW_3013_PATH } from "@/lib/contact-paths";

/**
 * Private client preview — port 3013 template.
 * Noindex. Not in nav, footer, or sitemap. Share the URL only.
 */
export const metadata: Metadata = {
  title: "Commercial Snow Preview 3013 | Stuart Thomas Construction",
  description:
    "Private commercial and industrial snow landing preview — not indexed.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: PREVIEW_3013_PATH },
};

export default function Preview3013Page() {
  const service = getServiceBySlug("commercial-snow-removal");
  if (!service) notFound();

  const heroSrc = getServiceHero(service.slug);
  const quoteBackdrop = getSnowQuoteBackdrop();

  return (
    <SnowLandingClient
      heroSrc={heroSrc}
      heroAlt={service.heroAlt}
      proofSrc={quoteBackdrop}
      coverageSrc={heroSrc}
    />
  );
}
