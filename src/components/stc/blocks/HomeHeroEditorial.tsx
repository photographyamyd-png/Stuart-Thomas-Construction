import { EditorialSplitPanel } from "@/components/stc/primitives/EditorialSplitPanel";
import { ActionForest, ActionMockupOutline } from "@/components/stc/primitives/Action";
import { conversion } from "@/data/conversion";
import { cta } from "@/data/nav";
import { media } from "@/data/media";

export function HomeHeroEditorial() {
  const { kicker, headline, subline } = conversion.hero;

  return (
    <EditorialSplitPanel
      copyTone="white"
      kicker={kicker}
      imageSrc={media.homeHero}
      imageAlt="Luxury waterfront stone construction"
      imagePriority
      headline={
        <>
          <span className="text-charcoal">{headline[0]}</span>
          <br />
          <span className="text-forest">{headline[1]}</span>
        </>
      }
      body={subline}
      actions={
        <>
          <ActionForest href="/services">Our services</ActionForest>
          <ActionMockupOutline href={cta.secondaryHref}>View projects</ActionMockupOutline>
        </>
      }
    />
  );
}
