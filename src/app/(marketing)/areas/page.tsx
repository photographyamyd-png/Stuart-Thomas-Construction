import type { Metadata } from "next";
import { EnterpriseAreasHub } from "@/components/stc/enterprise/EnterpriseAreasHub";
import { JsonLdScript } from "@/components/seo/JsonLd";
import { areasHubCopy } from "@/data/areas";
import { buildBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: areasHubCopy.title,
  description: areasHubCopy.description,
  path: "/areas",
});

export default function AreasHubPage() {
  return (
    <>
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/areas" },
        ])}
      />
      <EnterpriseAreasHub />
    </>
  );
}
