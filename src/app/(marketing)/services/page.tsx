import type { Metadata } from "next";
import { EnterpriseServicesHub } from "@/components/stc/enterprise/EnterpriseServicesHub";
import { JsonLdScript } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description:
    "Armour stone and waterfront hardscaping in Tiny Township.",
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
