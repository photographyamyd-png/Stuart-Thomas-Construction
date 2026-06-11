import { QuadrantGrid } from "@/components/layout/QuadrantGrid";
import { media } from "@/data/media";
import { stats } from "@/data/sections";
import { conversion } from "@/data/conversion";
import { cta } from "@/data/nav";

export function HomeQuadrant() {
  return (
    <QuadrantGrid
      quadrants={[
        {
          type: "copy",
          headline: "Structural Mass. Refined Finish.",
          subline:
            "Armour stone, waterfront assemblies, and full-site outdoor builds across South Georgian Bay.",
          tone: "dark",
        },
        {
          type: "image",
          src: media.featuredGalleryPaths[1],
          alt: "Premium armour stone and retaining wall detail",
        },
        {
          type: "image",
          src: media.featuredGalleryPaths[4],
          alt: "Excavation and landscape construction in progress",
        },
        {
          type: "metric",
          value: stats[1].value,
          label: stats[1].label,
          tone: "green",
          cta: { href: cta.primaryHref, label: conversion.homeCta.button },
        },
      ]}
    />
  );
}
