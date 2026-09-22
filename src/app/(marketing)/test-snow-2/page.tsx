import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SnowTest2Page } from "@/components/stc/enterprise/service/SnowTest2Page";
import {
  getServiceHero,
  getSnowHaulOutImage,
  getSnowQuoteBackdrop,
} from "@/data/media";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "Test Snow 2 (high-stakes) | Stuart Thomas Construction",
  description: "Temporary high-stakes snow landing sandbox — not indexed.",
  robots: { index: false, follow: false },
};

/** High-stakes redesign sandbox. Production: /services/commercial-snow-removal */
export default function TestSnow2RoutePage() {
  const service = getServiceBySlug("commercial-snow-removal");
  if (!service) notFound();

  return (
    <SnowTest2Page
      heroSrc={getServiceHero(service.slug)}
      heroAlt={service.heroAlt}
      processSrc={getSnowHaulOutImage()}
      coverageSrc={getSnowQuoteBackdrop()}
    />
  );
}
