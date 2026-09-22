"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ConversionBar } from "@/components/stc/enterprise/ConversionBar";
import { EnterpriseFooter } from "@/components/stc/enterprise/EnterpriseFooter";
import { EnterpriseHeader } from "@/components/stc/enterprise/EnterpriseHeader";
import { PREVIEW_3014_PATH } from "@/lib/contact-paths";

const OWN_CHROME = new Set([
  PREVIEW_3014_PATH,
  "/test-snow",
  "/test-snow-2",
]);

/**
 * Marketing chrome. Private snow sandboxes that own sticky chrome skip site chrome.
 * /preview-3013 uses the standard site header/footer.
 */
export function MarketingShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ownsChrome = pathname != null && OWN_CHROME.has(pathname);

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
