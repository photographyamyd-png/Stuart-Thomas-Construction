import { EditorialSplitPanel } from "@/components/stc/primitives/EditorialSplitPanel";
import { ActionCopper } from "@/components/stc/primitives/Action";
import { conversion } from "@/data/conversion";
import { cta } from "@/data/nav";
import { media } from "@/data/media";

export function SplitCtaBand({
  imageSrc = media.ctaBanner,
  imageAlt = "Construction equipment on site at sunset",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  const { kicker, headline, button } = conversion.homeCta;

  return (
    <EditorialSplitPanel
      copyTone="forest"
      kicker={kicker}
      headline={headline}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      imagePosition="right"
      actions={<ActionCopper href={cta.primaryHref}>{button}</ActionCopper>}
    />
  );
}
