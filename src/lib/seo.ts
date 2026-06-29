import type { Metadata } from "next";
import {
  getAreaServedForService,
  localBusinessAreaServed,
  localBusinessKnowsAbout,
} from "@/data/geo";
import type { ServiceSlug } from "@/data/services";
import { site } from "@/data/site";

const defaultTitle = {
  default: `${site.name} | ${site.tagline}`,
  template: `%s | ${site.name}`,
};

import { media } from "@/data/media";

/** Default social share image — homepage hero still */
export const DEFAULT_OG_IMAGE = media.serviceDefaults.landscaping;

function absoluteImageUrl(imagePath: string): string {
  const base = site.url.replace(/\/$/, "");
  return imagePath.startsWith("http") ? imagePath : `${base}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
}

function buildSocialImages(imagePath?: string) {
  const src = absoluteImageUrl(imagePath ?? DEFAULT_OG_IMAGE);
  return [{
    url: src,
    width: 1200,
    height: 630,
    alt: `${site.name} — Tiny Township construction and landscaping, Simcoe County`,
  }];
}

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

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
    ...(googleSiteVerification
      ? { verification: { google: googleSiteVerification } }
      : {}),
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
  serviceSlug: ServiceSlug;
}) {
  const base = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@type": "LocalBusiness", name: site.name, url: site.url },
    areaServed: getAreaServedForService(opts.serviceSlug),
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
    image: `${site.url.replace(/\/$/, "")}${site.logo.src}`,
    areaServed: localBusinessAreaServed,
    knowsAbout: [...localBusinessKnowsAbout],
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.area,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
      ...(site.address.street ? { streetAddress: site.address.street } : {}),
      ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    },
  };
}

export function buildAreaJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  containedInPlace?: string;
}) {
  const base = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: opts.name,
    description: opts.description,
    url: `${base}${opts.path.startsWith("/") ? opts.path : `/${opts.path}`}`,
    containedInPlace: {
      "@type": "Place",
      name: opts.containedInPlace ?? "South Georgian Bay, Ontario",
    },
  };
}

export function buildContactPageJsonLd() {
  const base = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    description: site.description,
    url: `${base}/contact`,
    mainEntity: {
      "@type": "GeneralContractor",
      name: site.name,
      telephone: site.phoneTel,
      url: site.url,
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
