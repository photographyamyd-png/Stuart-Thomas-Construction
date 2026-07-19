"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryItem, GalleryCategoryId } from "@/data/gallery";
import { galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

type Props = {
  items: GalleryItem[];
  initialCategory?: GalleryCategoryId;
};

export function ProjectsExplorer({ items, initialCategory }: Props) {
  const [filter, setFilter] = useState<GalleryCategoryId | "all">(initialCategory ?? "all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.categories.includes(filter));
  }, [items, filter]);

  return (
    <>
      <div className="stc-projects-filters" role="toolbar" aria-label="Filter projects">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn("stc-projects-filter", filter === "all" && "is-active")}
        >
          All ({items.length})
        </button>
        {galleryCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setFilter(c.id)}
            className={cn("stc-projects-filter", filter === c.id && "is-active")}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="stc-projects-grid">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightbox(item)}
            className="stc-projects-card"
          >
            <span className="stc-projects-card__media">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={70}
              />
            </span>
            <span className="stc-projects-card__title text-utility">{item.title}</span>
          </button>
        ))}
      </div>
      {lightbox && (
        <div
          className="stc-projects-lightbox"
          role="dialog"
          aria-modal
          aria-label={lightbox.title}
        >
          <button
            type="button"
            className="stc-projects-lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="size-8" />
          </button>
          <div className="stc-projects-lightbox__frame">
            <Image
              src={lightbox.image}
              alt={lightbox.alt}
              width={1920}
              height={1280}
              className="stc-projects-lightbox__img"
              quality={85}
            />
          </div>
        </div>
      )}
    </>
  );
}
