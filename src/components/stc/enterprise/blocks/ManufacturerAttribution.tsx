import Image from "next/image";
import Link from "next/link";
import { media } from "@/data/media";
import { rediRockAttribution, rediRockLinks } from "@/data/redi-rock";

type Props = {
  variant?: "compact" | "full";
  className?: string;
};

export function ManufacturerAttribution({ variant = "full", className = "" }: Props) {
  const compact = variant === "compact";

  return (
    <aside
      className={`stc-mfr-attribution${compact ? " stc-mfr-attribution--compact" : ""} ${className}`.trim()}
      aria-label="Product and supplier attribution"
    >
      <div className="stc-mfr-attribution__logos">
        <Link href={rediRockLinks.product} target="_blank" rel="noopener noreferrer">
          <Image
            src={media.rediRockLogo}
            alt="Redi-Rock"
            width={compact ? 140 : 180}
            height={compact ? 79 : 101}
            unoptimized
            className="stc-mfr-attribution__logo stc-mfr-attribution__logo--redi-rock"
          />
        </Link>
        <Link href={rediRockLinks.supplier} target="_blank" rel="noopener noreferrer">
          <Image
            src={media.sarjeantCoLogo}
            alt="The Sarjeant Co."
            width={compact ? 120 : 160}
            height={compact ? 40 : 52}
            className="stc-mfr-attribution__logo"
          />
        </Link>
      </div>
      <p className="stc-mfr-attribution__disclaimer">{rediRockAttribution.disclaimer}</p>
      {!compact && (
        <p className="stc-mfr-attribution__supplier">
          {rediRockAttribution.supplierNote}{" "}
          <Link href={rediRockLinks.supplier} target="_blank" rel="noopener noreferrer">
            The Sarjeant Co. Redi-Rock page
          </Link>
        </p>
      )}
    </aside>
  );
}
