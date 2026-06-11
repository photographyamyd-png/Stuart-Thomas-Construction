import { BrandLogo } from "@/components/brand/BrandLogo";
import { cn } from "@/lib/utils";

type BrandStampProps = {
  className?: string;
  ring?: "dark" | "beige";
  priority?: boolean;
  /** Set false when the stamp is already inside a parent link (e.g. header). */
  link?: boolean;
};

export function BrandStamp({
  className,
  ring = "dark",
  priority = false,
  link = true,
}: BrandStampProps) {
  return (
    <div
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-full border-2 shadow-md sm:size-14",
        ring === "dark"
          ? "border-stc-white/20 bg-stc-black"
          : "border-stc-black/15 bg-stc-white",
        className,
      )}
    >
      <BrandLogo
        variant="icon"
        priority={priority}
        link={link}
        className="!h-8 !w-8 sm:!h-9 sm:!w-9"
      />
    </div>
  );
}
