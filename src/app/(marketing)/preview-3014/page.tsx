import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SnowPreview3014Page } from "@/components/stc/enterprise/service/SnowPreview3014Page";
import {
  getServiceHero,
  getSnowHaulOutImage,
  getSnowQuoteBackdrop,
} from "@/data/media";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "Private preview 3014 | Stuart Thomas Construction",
  description: "Private client preview — not indexed, not linked from the public site.",
  robots: { index: false, follow: false },
  other: {
    googlebot: "noindex, nofollow",
  },
};

/**
 * Private client-only URL. Not in nav, sitemap, or internal links.
 * Local preview: http://localhost:3014/preview-3014
 */
export default function Preview3014Page() {
  const service = getServiceBySlug("commercial-snow-removal");
  if (!service) notFound();

  return (
    <SnowPreview3014Page
      heroSrc={getServiceHero(service.slug)}
      heroAlt={service.heroAlt}
      processSrc={getSnowHaulOutImage()}
      coverageSrc={getSnowQuoteBackdrop()}
    />
  );
}
