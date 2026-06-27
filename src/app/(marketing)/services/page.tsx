import type { Metadata } from "next";
import { EnterpriseServicesHub } from "@/components/stc/enterprise/EnterpriseServicesHub";
import { JsonLdScript } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description:
    "Construction and landscaping in Tiny Township, Wasaga Beach, and Collingwood — armour stone, waterfront stone work, hardscaping, excavation, and snow removal.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <EnterpriseServicesHub />
    </>
  );
}
