import { ConversionBar } from "@/components/stc/enterprise/ConversionBar";
import { EnterpriseFooter } from "@/components/stc/enterprise/EnterpriseFooter";
import { EnterpriseHeader } from "@/components/stc/enterprise/EnterpriseHeader";
import { HashScrollFix } from "@/components/stc/enterprise/HashScrollFix";
import { Suspense } from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="enterprise-layout landing-appeal">
      <Suspense fallback={null}>
        <HashScrollFix />
      </Suspense>
      <EnterpriseHeader />
      <main className="overflow-x-hidden">{children}</main>
      <ConversionBar />
      <EnterpriseFooter />
    </div>
  );
}
