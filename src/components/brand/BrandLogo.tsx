import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type BrandLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  priority?: boolean;
  link?: boolean;
};

export function BrandLogo({
  variant = "full",
  className,
  priority = false,
  link = true,
}: BrandLogoProps) {
  const isIcon = variant === "icon";
  const src = isIcon ? site.logo.iconSrc : site.logo.src;
  const width = isIcon ? site.logo.iconWidth : 160;
  const height = isIcon ? site.logo.iconHeight : Math.round(160 * (site.logo.height / site.logo.width));

  const isSvg = src.endsWith(".svg");

  const img = (
    <Image
      src={src}
      alt={site.name}
      width={width}
      height={height}
      priority={priority}
      unoptimized={isSvg}
      className={cn("h-auto w-auto object-contain", isIcon ? "h-10 w-10 sm:h-11 sm:w-11" : "h-12 w-auto sm:h-14", className)}
    />
  );

  if (!link) return img;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stc-gold">
      {img}
    </Link>
  );
}
