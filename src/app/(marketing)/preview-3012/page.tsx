import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SnowTestPremiumPage } from "@/components/stc/enterprise/service/SnowTestPremiumPage";
import { getServiceHero, getSnowHaulOutImage, media } from "@/data/media";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "Commercial Snow Preview 3012 | Stuart Thomas Construction",
  description: "Private client preview — commercial & industrial snow landing. Not indexed.",
  robots: { index: false, follow: false },
};

/**
 * Private client preview slug (paired with local `npm run preview:3012`).
 * Not linked from nav, sitemap, or site chrome.
 */
export default function Preview3012Page() {
  const service = getServiceBySlug("commercial-snow-removal");
  if (!service) notFound();

  const coverageSrc =
    media.serviceCapabilityImages["commercial-snow-removal"][0] ??
    getServiceHero(service.slug);

  return (
    <SnowTestPremiumPage
      heroSrc={getServiceHero(service.slug)}
      heroAlt={service.heroAlt}
      processSrc={getSnowHaulOutImage()}
      coverageSrc={coverageSrc}
    />
  );
}
