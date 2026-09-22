"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ConversionBar } from "@/components/stc/enterprise/ConversionBar";
import { EnterpriseFooter } from "@/components/stc/enterprise/EnterpriseFooter";
import { EnterpriseHeader } from "@/components/stc/enterprise/EnterpriseHeader";

/**
 * Marketing chrome. Private /preview-3012 owns sticky chrome for client review.
 * Live commercial snow keeps the normal site header/footer on this branch.
 */
export function MarketingShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ownsChrome = pathname === "/preview-3012";

  if (ownsChrome) {
    return <main className="overflow-x-hidden stc-snow-landing-main">{children}</main>;
  }

  return (
    <>
      <EnterpriseHeader />
      <main className="overflow-x-hidden">{children}</main>
      <ConversionBar />
      <EnterpriseFooter />
    </>
  );
}
