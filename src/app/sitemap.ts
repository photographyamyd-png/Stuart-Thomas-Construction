import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getAllAreaSlugs } from "@/data/areas";
import { getAllServiceSlugs } from "@/data/services";

const base = site.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/areas",
    "/privacy",
    "/terms",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const slug of getAllServiceSlugs()) {
    entries.push({
      url: `${base}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  for (const slug of getAllAreaSlugs()) {
    entries.push({
      url: `${base}/areas/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}
