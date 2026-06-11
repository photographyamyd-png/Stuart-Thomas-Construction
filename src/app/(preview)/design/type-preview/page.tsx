import type { Metadata } from "next";
import { HeaderTypePreviewPanel } from "@/components/stc/enterprise/preview/HeaderTypePreviewPanel";

export const metadata: Metadata = {
  title: "Header Typography Preview",
  description: "Internal comparison of header font weights — not indexed.",
  robots: { index: false, follow: false },
};

export default function HeaderTypePreviewPage() {
  return (
    <div className="header-type-preview-page">
      <header className="header-type-preview-page__intro">
        <h1>Header Typography Preview</h1>
        <p>
          Variant C (Open Sans) is now live on the site. Compare all three below, or browse any page
          to see the production header. Adjust sizes and weights in{" "}
          <code>src/styles/enterprise-tokens.css</code>.
        </p>
      </header>

      <HeaderTypePreviewPanel variant="current" />
      <HeaderTypePreviewPanel variant="light-a" />
      <HeaderTypePreviewPanel variant="light-b" />
    </div>
  );
}
