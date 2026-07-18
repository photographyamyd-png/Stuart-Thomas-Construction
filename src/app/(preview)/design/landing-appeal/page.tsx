import type { Metadata } from "next";
import { EnterpriseHomeAppeal } from "@/components/stc/enterprise/EnterpriseHomeAppeal";
import { LandingPreviewShell } from "@/components/stc/enterprise/preview/LandingPreviewShell";

export const metadata: Metadata = {
  title: "Landing Appeal (Compare)",
  description: "Appeal-refactored landing page preview for visual comparison — not indexed.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ embed?: string }>;
};

export default async function LandingAppealPreviewPage({ searchParams }: Props) {
  const { embed } = await searchParams;

  return (
    <LandingPreviewShell active="appeal" embed={embed === "1"}>
      <EnterpriseHomeAppeal />
    </LandingPreviewShell>
  );
}
