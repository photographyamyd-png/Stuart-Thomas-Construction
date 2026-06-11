import type { Metadata } from "next";
import { EnterpriseLegalPage } from "@/components/stc/enterprise/EnterpriseLegalPage";
import { privacyPolicy } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.metaDescription,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <EnterpriseLegalPage content={privacyPolicy} path="/privacy" />;
}
