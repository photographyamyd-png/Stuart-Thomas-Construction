import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  href: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
  variant?: "grid" | "compact" | "immersive" | "masonry";
  /** Alternating tone index for masonry variant (0 = black, 1 = beige, 2 = green) */
  toneIndex?: number;
  className?: string;
};

const masonryTones = [
  {
    bg: "bg-stc-black",
    border: "border-white/20",
    title: "text-stc-white group-hover:text-stc-gold",
  },
  {
    bg: "bg-stc-beige",
    border: "border-stc-black/20",
    title: "text-stc-black group-hover:text-stc-green",
  },
  {
    bg: "bg-stc-green",
    border: "border-white/20",
    title: "text-stc-white group-hover:text-stc-gold",
  },
] as const;

export function ServiceCard({
  href,
  title,
  description,
  icon: Icon,
  imageSrc,
  imageAlt,
  variant = "grid",
  toneIndex = 0,
  className,
}: ServiceCardProps) {
  if (variant === "masonry") {
    const tone = masonryTones[toneIndex % 3];
    return (
      <Link
        href={href}
        className={cn(
          "group flex aspect-square flex-col justify-between border p-8 transition hover:border-stc-gold/50",
          tone.bg,
          tone.border,
          className,
        )}
      >
        <Icon className="size-8 text-stc-gold" strokeWidth={1.25} />
        <h3 className={cn("text-utility", tone.title)}>{title}</h3>
      </Link>
    );
  }

  if (variant === "immersive" && imageSrc) {
    return (
      <Link
        href={href}
        className={cn(
          "group relative aspect-[4/5] overflow-hidden border border-stc-black/15 bg-stc-black",
          className,
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={75}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stc-black/95 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <Icon className="mb-3 size-8 text-stc-gold" strokeWidth={1.25} />
          <h3 className="text-utility text-stc-white">{title}</h3>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className={cn(
          "group flex gap-3 border border-stc-black/15 bg-stc-white p-4 transition hover:border-stc-gold/50",
          className,
        )}
      >
        <span className="flex size-10 shrink-0 items-center justify-center bg-stc-beige text-stc-gold">
          <Icon className="size-5" strokeWidth={1.25} />
        </span>
        <span className="min-w-0">
          <span className="text-utility block text-stc-black group-hover:text-stc-green">
            {title}
          </span>
          {description && (
            <span className="mt-1 block font-body text-xs leading-relaxed text-stc-black/65">
              {description}
            </span>
          )}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col border border-stc-black/15 bg-stc-white transition hover:border-stc-gold/50",
        className,
      )}
    >
      {imageSrc && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-stc-black/10">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <span className="flex size-10 items-center justify-center bg-stc-beige text-stc-gold">
          <Icon className="size-5" strokeWidth={1.25} />
        </span>
        <h3 className="text-utility mt-4 text-stc-black group-hover:text-stc-green">{title}</h3>
        {description && (
          <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-stc-black/70">
            {description}
          </p>
        )}
        <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-stc-gold">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
