"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ConversionBar } from "@/components/stc/enterprise/ConversionBar";
import { EnterpriseFooter } from "@/components/stc/enterprise/EnterpriseFooter";
import { EnterpriseHeader } from "@/components/stc/enterprise/EnterpriseHeader";
import { PREVIEW_3013_PATH, PREVIEW_3014_PATH, PREVIEW_3015_PATH } from "@/lib/contact-paths";

const OWN_CHROME = new Set([
  PREVIEW_3013_PATH,
  PREVIEW_3014_PATH,
  PREVIEW_3015_PATH,
  "/preview-3012",
  "/test-snow",
  "/test-snow-2",
]);

/**
 * Marketing chrome. Private preview-* snow sandboxes own sticky chrome.
 * Production /services/* uses the normal site header/footer.
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
