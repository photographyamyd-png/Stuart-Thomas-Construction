import type { Metadata } from "next";
import { EnterpriseHome } from "@/components/stc/enterprise/EnterpriseHome";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${site.tagline} | Premium Construction`,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return <EnterpriseHome />;
}
