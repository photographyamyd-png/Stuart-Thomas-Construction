import type { Metadata } from "next";
import { site } from "@/data/site";

const defaultTitle = {
  default: `${site.name} | ${site.tagline}`,
  template: `%s | ${site.name}`,
};

/** Default social share image — homepage hero still */
export const DEFAULT_OG_IMAGE = "/images/20260508_110755.jpg";

function absoluteImageUrl(imagePath: string): string {
  const base = site.url.replace(/\/$/, "");
  return imagePath.startsWith("http") ? imagePath : `${base}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
}

function buildSocialImages(imagePath?: string) {
  const src = absoluteImageUrl(imagePath ?? DEFAULT_OG_IMAGE);
  return [{ url: src, width: 1200, height: 630, alt: site.name }];
}

export function rootMetadata(): Metadata {
  const images = buildSocialImages();
  return {
    metadataBase: new URL(site.url),
    title: defaultTitle,
    description: site.description,
    icons: {
      icon: site.logo.iconSrc,
      apple: site.logo.iconSrc,
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      siteName: site.name,
      title: defaultTitle.default,
      description: site.description,
      url: site.url,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle.default,
      description: site.description,
      images: images.map((i) => i.url),
    },
    robots: { index: true, follow: true },
  };
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const base = site.url.replace(/\/$/, "");
  const path = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  const url = `${base}${path}`;
  const images = buildSocialImages(opts.image);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      images,
    },
    twitter: {
      title: opts.title,
      description: opts.description,
      images: images.map((i) => i.url),
    },
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const base = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function buildServiceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  const base = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@type": "LocalBusiness", name: site.name, url: site.url },
    areaServed: ["Tiny Township", "Wasaga Beach", "Collingwood"],
    url: `${base}${opts.path}`,
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url.replace(/\/$/, "")}${site.logo.src}`,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Tiny Township" },
      { "@type": "AdministrativeArea", name: "Wasaga Beach" },
      { "@type": "AdministrativeArea", name: "Collingwood" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.area,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
  };
}

export function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
