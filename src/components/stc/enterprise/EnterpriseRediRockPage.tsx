import type { GalleryItem } from "@/data/gallery";
import { rediRockAttribution } from "@/data/redi-rock";
import { AppealReveal } from "./blocks/AppealReveal";
import { EnterpriseCtaBand } from "./blocks/EnterpriseCtaBand";
import { RediRockCompareBand } from "./redi-rock/RediRockCompareBand";
import { RediRockHero } from "./redi-rock/RediRockHero";
import { RediRockInstallerBand } from "./redi-rock/RediRockInstallerBand";
import { RediRockPortfolioBand } from "./redi-rock/RediRockPortfolioBand";
import { RediRockProductBento } from "./redi-rock/RediRockProductBento";
import { RediRockReferenceStrip } from "./redi-rock/RediRockReferenceStrip";
import { RediRockRelatedBand } from "./redi-rock/RediRockRelatedBand";
import { RediRockResourcesBand } from "./redi-rock/RediRockResourcesBand";
import { RediRockSectionNav } from "./redi-rock/RediRockSectionNav";

type Props = {
  stcInstalls?: GalleryItem[];
};

export function EnterpriseRediRockPage({ stcInstalls = [] }: Props) {
  return (
    <div className="stc-rr-page">
      <RediRockHero />
      <AppealReveal>
        <RediRockSectionNav />
      </AppealReveal>
      <AppealReveal>
        <RediRockInstallerBand />
      </AppealReveal>
      <AppealReveal>
        <RediRockProductBento />
      </AppealReveal>
      <AppealReveal>
        <RediRockCompareBand />
      </AppealReveal>
      <AppealReveal>
        <RediRockResourcesBand />
      </AppealReveal>
      <AppealReveal>
        <RediRockReferenceStrip />
      </AppealReveal>
      <div className="turner-band-divider turner-band-divider--white" aria-hidden />
      <AppealReveal>
        <RediRockPortfolioBand installs={stcInstalls} />
      </AppealReveal>
      <AppealReveal>
        <RediRockRelatedBand />
      </AppealReveal>
      <AppealReveal>
        <EnterpriseCtaBand
          headline="Call about a Redi-Rock wall"
          subline="Call about grade changes, waterfront work, or retaining walls. We install; The Sarjeant Co. supplies."
          buttonLabel="Request an Install Quote"
        />
      </AppealReveal>
      <AppealReveal>
        <footer className="stc-rr-page__disclaimer turner-band turner-band--dark turner-band--seam">
          <div className="container">
            <p className="wf-type-supporting">{rediRockAttribution.disclaimer}</p>
          </div>
        </footer>
      </AppealReveal>
    </div>
  );
}
