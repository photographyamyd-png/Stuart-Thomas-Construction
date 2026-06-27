import type { Metadata } from "next";
import { BaselineConversionBar } from "@/components/stc/enterprise/baseline/BaselineConversionBar";
import { BaselineEnterpriseFooter } from "@/components/stc/enterprise/baseline/BaselineEnterpriseFooter";
import { BaselineEnterpriseHeader } from "@/components/stc/enterprise/baseline/BaselineEnterpriseHeader";
import { COPY_BASELINE_CAPTURED } from "@/data/archive/copy-baseline/constants";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function CopyBaselineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="enterprise-layout">
      <div
        className="turner-band turner-band--dark"
        style={{
          padding: "0.5rem 1rem",
          textAlign: "center",
          fontSize: "0.875rem",
          borderBottom: "2px solid var(--ent-accent-gold, #c9a227)",
        }}
        role="note"
      >
        Baseline snapshot — copy as of {COPY_BASELINE_CAPTURED}. Not the live site.{" "}
        <a href="/" style={{ textDecoration: "underline" }}>
          Return to live site
        </a>
      </div>
      <BaselineEnterpriseHeader />
      <main className="overflow-x-hidden">{children}</main>
      <BaselineConversionBar />
      <BaselineEnterpriseFooter />
    </div>
  );
}
