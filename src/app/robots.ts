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
        "/design/",
        ...(site.projectsGalleryVisible ? [] : ["/projects"]),
      ],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
