import type { Metadata } from "next";
import { EnterpriseHomeAppeal } from "@/components/stc/enterprise/EnterpriseHomeAppeal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${site.tagline} | Tiny Township Construction & Landscaping`,
  description: site.description,
  path: "/",
});

/** Primary homepage — Appeal landing (continue revisions on this branch). */
export default function HomePage() {
  return <EnterpriseHomeAppeal />;
}
