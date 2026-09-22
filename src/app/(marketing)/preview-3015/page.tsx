import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SnowTest3Page } from "@/components/stc/enterprise/service/SnowTest3Page";
import { getServiceHero, getSnowQuoteBackdrop } from "@/data/media";
import { getServiceBySlug } from "@/data/services";
import { PREVIEW_3015_PATH } from "@/lib/contact-paths";

/**
 * Private client preview — port 3015 template.
 * Noindex. Not in nav, footer, or sitemap. Share the URL only.
 */
export const metadata: Metadata = {
  title: "Commercial Snow Preview 3015 | Stuart Thomas Construction",
  description:
    "Private commercial and industrial snow landing preview — not indexed.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: PREVIEW_3015_PATH },
};

export default function Preview3015Page() {
  const service = getServiceBySlug("commercial-snow-removal");
  if (!service) notFound();

  return (
    <SnowTest3Page
      heroSrc={getServiceHero(service.slug)}
      heroAlt={service.heroAlt}
      coverageSrc={getSnowQuoteBackdrop()}
    />
  );
}
