import type { Metadata } from "next";
import { EnterpriseAboutPage } from "@/components/stc/enterprise/EnterpriseAboutPage";
import { JsonLdScript } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { buildBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: `Learn about ${site.name} — Tiny Township construction and landscaping since 2004.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <EnterpriseAboutPage />
    </>
  );
}
