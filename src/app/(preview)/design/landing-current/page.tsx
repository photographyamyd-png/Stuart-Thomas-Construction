import type { Metadata } from "next";
import { EnterpriseHome } from "@/components/stc/enterprise/EnterpriseHome";
import { LandingPreviewShell } from "@/components/stc/enterprise/preview/LandingPreviewShell";

export const metadata: Metadata = {
  title: "Landing Current (Compare)",
  description: "Current live landing page snapshot for visual comparison — not indexed.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ embed?: string }>;
};

export default async function LandingCurrentPreviewPage({ searchParams }: Props) {
  const { embed } = await searchParams;

  return (
    <LandingPreviewShell active="current" embed={embed === "1"}>
      <EnterpriseHome />
    </LandingPreviewShell>
  );
}
