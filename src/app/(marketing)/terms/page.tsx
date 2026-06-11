import type { Metadata } from "next";
import { EnterpriseLegalPage } from "@/components/stc/enterprise/EnterpriseLegalPage";
import { termsOfUse } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: termsOfUse.title,
  description: termsOfUse.metaDescription,
  path: "/terms",
});

export default function TermsPage() {
  return <EnterpriseLegalPage content={termsOfUse} path="/terms" />;
}
