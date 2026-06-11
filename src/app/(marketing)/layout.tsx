import { ConversionBar } from "@/components/stc/enterprise/ConversionBar";
import { EnterpriseFooter } from "@/components/stc/enterprise/EnterpriseFooter";
import { EnterpriseHeader } from "@/components/stc/enterprise/EnterpriseHeader";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="enterprise-layout">
      <EnterpriseHeader />
      <main className="overflow-x-hidden">{children}</main>
      <ConversionBar />
      <EnterpriseFooter />
    </div>
  );
}
