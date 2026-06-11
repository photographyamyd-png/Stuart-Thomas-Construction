import type { GalleryItem } from "@/data/gallery";
import { rediRockAttribution } from "@/data/redi-rock";
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
    <>
      <div className="stc-rr-page">
        <RediRockHero />
        <RediRockSectionNav />
        <RediRockInstallerBand />
        <RediRockProductBento />
        <RediRockCompareBand />
        <RediRockResourcesBand />
        <RediRockReferenceStrip />
        <RediRockPortfolioBand installs={stcInstalls} />
        <RediRockRelatedBand />
        <EnterpriseCtaBand
          headline="Discuss Your Redi-Rock Project"
          subline="Tell us about grade changes, waterfront interfaces, or engineered wall requirements. We coordinate installation with materials sourced through The Sarjeant Co."
          buttonLabel="Request an Install Quote"
        />
        <footer className="stc-rr-page__disclaimer turner-band turner-band--dark">
          <div className="container">
            <p className="wf-type-supporting">{rediRockAttribution.disclaimer}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
