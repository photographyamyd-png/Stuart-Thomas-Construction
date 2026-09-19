import {
  getServiceCapabilityImages,
  getServiceHero,
  getSnowHaulOutImage,
  getSnowQuoteBackdrop,
  getSnowSafetyImage,
} from "@/data/media";
import type { ServiceDetail } from "@/data/services";
import {
  snowServicePrefill,
  snowServicesHeading,
} from "@/data/snow-page";
import { snowQuoteFormHref, SNOW_SERVICE_PATH } from "@/lib/contact-paths";
import { Suspense } from "react";
import { AppealReveal } from "../blocks/AppealReveal";
import { ServiceCapabilitiesBand } from "./ServiceCapabilitiesBand";
import { SnowAudienceBand } from "./SnowAudienceBand";
import { SnowContractsBand } from "./SnowContractsBand";
import { SnowFaqBand } from "./SnowFaqBand";
import { SnowHaulOutBand } from "./SnowHaulOutBand";
import { SnowHero } from "./SnowHero";
import { SnowProcessBand } from "./SnowProcessBand";
import { SnowQuoteFormBand } from "./SnowQuoteFormBand";
import { SnowSafetyBand } from "./SnowSafetyBand";
import { SnowServiceAreaBand } from "./SnowServiceAreaBand";
import { SnowTrustBar } from "./SnowTrustBar";
import { SnowWhyBand } from "./SnowWhyBand";

type Props = {
  service: ServiceDetail;
};

export function SnowServicePage({ service }: Props) {
  const heroSrc = getServiceHero(service.slug);
  const capImages = getServiceCapabilityImages(service.slug);
  const haulImage = getSnowHaulOutImage();
  const safetyImage = getSnowSafetyImage();
  const quoteBackdrop = getSnowQuoteBackdrop();
  const assessmentHref = snowQuoteFormHref(snowServicePrefill.assessment);

  const capabilityServiceByTitle: Record<string, string> = {
    Plowing: "Plowing",
    Salting: "Salting & sanding",
    Sanding: "Salting & sanding",
    "Walkways & entrances": "Seasonal contract",
    "Loading dock & truck court clearing": "Seasonal contract",
    "Snow haul-outs": snowServicePrefill.haulOut,
  };

  const subServices = service.subServices.map((sub) => {
    if (sub.title === "Snow haul-outs") {
      return { ...sub, href: `${SNOW_SERVICE_PATH}#haul-outs` };
    }
    const servicePrefill = capabilityServiceByTitle[sub.title];
    return {
      ...sub,
      href: servicePrefill ? snowQuoteFormHref(servicePrefill) : snowQuoteFormHref(),
    };
  });

  const capabilityAlts = [
    "Commercial lot plowing — illustrative snow stock",
    "Salting a commercial parking lot — illustrative snow stock",
    "Sanding for traction on a commercial lot — illustrative snow stock",
    "Cleared commercial building entrance — illustrative snow stock",
    "Loading dock and truck court clearing — illustrative snow stock",
    "Heavy equipment for snow haul-outs — illustrative snow stock",
  ];

  return (
    <div className="stc-svc-page--snow">
      <SnowHero service={service} />
      <div className="stc-snow-hero-divider" aria-hidden />
      <SnowTrustBar />

      <AppealReveal>
        <SnowWhyBand />
      </AppealReveal>

      <AppealReveal>
        <SnowAudienceBand />
      </AppealReveal>

      <AppealReveal>
        <ServiceCapabilitiesBand
          subServices={subServices}
          images={capImages}
          imageAlts={capabilityAlts}
          heroFallback={heroSrc}
          eyebrow={snowServicesHeading.eyebrow}
          headlineBefore={snowServicesHeading.headlineBefore}
          headlineAccent={snowServicesHeading.headlineAccent}
          band="light"
        />
      </AppealReveal>

      <AppealReveal>
        <SnowHaulOutBand imageSrc={haulImage} />
      </AppealReveal>

      <AppealReveal>
        <SnowProcessBand
          steps={service.process}
          afterCta={{
            label: "Request a Site Assessment",
            href: assessmentHref,
          }}
        />
      </AppealReveal>

      <AppealReveal>
        <SnowContractsBand />
      </AppealReveal>

      <AppealReveal>
        <SnowSafetyBand imageSrc={safetyImage} />
      </AppealReveal>

      <AppealReveal>
        <SnowServiceAreaBand />
      </AppealReveal>

      {service.faqs.length > 0 && (
        <AppealReveal>
          <SnowFaqBand items={service.faqs} />
        </AppealReveal>
      )}

      <AppealReveal>
        <Suspense fallback={null}>
          <SnowQuoteFormBand backdropSrc={quoteBackdrop} />
        </Suspense>
      </AppealReveal>
    </div>
  );
}
