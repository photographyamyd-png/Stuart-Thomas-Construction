import { ConversionBar } from "@/components/stc/enterprise/ConversionBar";
import { EnterpriseFooter } from "@/components/stc/enterprise/EnterpriseFooter";
import { EnterpriseHeader } from "@/components/stc/enterprise/EnterpriseHeader";
import { LandingCompareBanner } from "@/components/stc/enterprise/preview/LandingCompareBanner";

type Props = {
  active: "current" | "appeal";
  embed?: boolean;
  children: React.ReactNode;
};

/** Full marketing chrome + compare banner for landing A/B previews. */
export function LandingPreviewShell({ active, embed = false, children }: Props) {
  return (
    <div className={`enterprise-layout${embed ? " landing-preview--embed" : ""}`}>
      <LandingCompareBanner active={active} embed={embed} />
      <EnterpriseHeader />
      <main className="overflow-x-hidden">{children}</main>
      <ConversionBar />
      <EnterpriseFooter />
    </div>
  );
}
