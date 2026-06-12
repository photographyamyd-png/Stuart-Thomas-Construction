import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PromoCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  bullets?: string[];
  ctaLabel?: string;
  /** Gallery-only: image + optional caption, no footer band */
  variant?: "promo" | "gallery";
  caption?: string;
  className?: string;
};

export function PromoCard({
  href,
  imageSrc,
  imageAlt,
  title,
  bullets,
  ctaLabel = "Get a Quote",
  variant = "promo",
  caption,
  className,
}: PromoCardProps) {
  if (variant === "gallery") {
    return (
      <Link
        href={href}
        className={cn(
          "group block overflow-hidden border border-stc-black/15 bg-stc-white",
          className,
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75}
          />
        </div>
        {caption && (
          <div className="bg-stc-black px-4 py-3">
            <p className="text-utility text-sm text-role-headline-on-dark">{caption}</p>
          </div>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden border border-stc-black/15 bg-stc-white",
        className,
      )}
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={75}
        />
      </div>
      <div className="flex flex-1 flex-col bg-stc-black p-5 sm:p-6">
        <h3 className="text-utility text-role-headline-on-dark">{title}</h3>
        {bullets && bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5 font-body text-sm text-role-statement-on-dark">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-accent-gold" aria-hidden>
                  •
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        <span
          className={cn(
            buttonVariants({ variant: "stcSolid", size: "sm" }),
            "mt-4 inline-flex",
          )}
        >
          {ctaLabel}
        </span>
      </div>
    </Link>
  );
}
