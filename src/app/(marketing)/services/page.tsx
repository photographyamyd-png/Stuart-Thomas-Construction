import type { Metadata } from "next";
import { EnterpriseServicesHub } from "@/components/stc/enterprise/EnterpriseServicesHub";
import { JsonLdScript } from "@/components/seo/JsonLd";
import { areaCopy } from "@/data/copy";
import { buildBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description: areaCopy.hubDescription,
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
