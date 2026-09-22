import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/copy-baseline/",
        "/preview-3012",
        "/preview-3013",
        "/preview-3014",
        "/preview-3015",
        "/test-snow",
        "/test-snow-2",
        "/test-snow-3",
      ],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
