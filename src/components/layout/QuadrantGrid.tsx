import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type QuadrantCell =
  | {
      type: "copy";
      headline: string;
      subline?: string;
      tone?: "dark" | "green" | "gold";
    }
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "metric";
      value: string;
      label: string;
      tone?: "green" | "gold";
      cta?: { href: string; label: string };
    };

const toneBg = {
  dark: "bg-stc-black text-stc-white border-stc-white/15",
  green: "bg-stc-green text-stc-white border-stc-white/15",
  gold: "bg-stc-white text-stc-black border-stc-black/10",
};

export function QuadrantGrid({
  quadrants,
  className,
}: {
  quadrants: [QuadrantCell, QuadrantCell, QuadrantCell, QuadrantCell];
  className?: string;
}) {
  return (
    <section className={cn("grid grid-cols-1 md:grid-cols-2", className)}>
      {quadrants.map((q, i) => (
        <QuadrantCellView key={i} cell={q} />
      ))}
    </section>
  );
}

function QuadrantCellView({ cell }: { cell: QuadrantCell }) {
  if (cell.type === "image") {
    return (
      <div className="relative min-h-[280px] border border-stc-black/10 md:min-h-[320px]">
        <Image src={cell.src} alt={cell.alt} fill className="object-cover" sizes="50vw" quality={80} />
      </div>
    );
  }

  if (cell.type === "metric") {
    const tone = cell.tone ?? "green";
    return (
      <div
        className={cn(
          "flex min-h-[280px] flex-col justify-center border p-8 md:min-h-[320px] md:p-10",
          toneBg[tone],
        )}
      >
        <p className="text-stat text-current">{cell.value}</p>
        <p className="text-utility mt-3 opacity-90">{cell.label}</p>
        {cell.cta && (
          <Button
            asChild
            variant={tone === "gold" ? "stc" : "stcSolid"}
            size="lg"
            className={cn("mt-8 w-fit", tone === "gold" && "border-stc-black text-stc-black hover:bg-stc-black hover:text-stc-gold")}
          >
            <Link href={cell.cta.href}>{cell.cta.label}</Link>
          </Button>
        )}
      </div>
    );
  }

  const tone = cell.tone ?? "dark";
  return (
    <div
      className={cn(
        "flex min-h-[280px] flex-col justify-center border p-8 md:min-h-[320px] md:p-10",
        toneBg[tone],
      )}
    >
      <h2 className="text-display text-current">{cell.headline}</h2>
      {cell.subline && (
        <p className="mt-4 max-w-md font-body text-base leading-relaxed opacity-85">{cell.subline}</p>
      )}
    </div>
  );
}
