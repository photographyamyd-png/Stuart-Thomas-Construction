import Link from "next/link";
import { cn } from "@/lib/utils";

type ActionProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex min-h-12 items-center justify-center px-8 font-display text-sm font-bold uppercase tracking-[0.1em] transition-colors";

export function ActionSolid({ href, children, className, type, onClick }: ActionProps) {
  const cls = cn(base, "bg-stc-lime text-stc-white hover:bg-stc-lime-hover", className);
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

/** Mockup / Greenick CTA — copper fill, forest hover */
export function ActionCopper({ href, children, className, type, onClick }: ActionProps) {
  const cls = cn(
    base,
    "font-oswald bg-copper px-8 py-4 text-white transition-colors duration-300 hover:border-forest hover:bg-forest",
    className,
  );
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function ActionOutline({
  href,
  children,
  className,
  light = false,
}: ActionProps & { light?: boolean }) {
  const cls = cn(
    base,
    "border-2 bg-transparent",
    light
      ? "border-stc-white text-stc-white hover:bg-stc-white hover:text-stc-charcoal"
      : "border-stc-dark-green text-stc-dark-green hover:bg-stc-dark-green hover:text-stc-white",
    className,
  );
  if (!href) return null;
  return <Link href={href} className={cls}>{children}</Link>;
}

/** Mockup hero primary — forest fill on white panels */
export function ActionForest({ href, children, className, type, onClick }: ActionProps) {
  const cls = cn(
    base,
    "font-oswald bg-forest px-8 py-4 text-white transition-colors duration-300 hover:bg-charcoal",
    className,
  );
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

/** Mockup ghost — charcoal border on white (VIEW PROJECTS) */
export function ActionMockupOutline({ href, children, className }: ActionProps) {
  const cls = cn(
    base,
    "font-oswald border-2 border-charcoal bg-transparent px-8 py-4 text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-white",
    className,
  );
  if (!href) return null;
  return <Link href={href} className={cls}>{children}</Link>;
}

export function ActionGhost({ href, children, className }: ActionProps) {
  const cls = cn(
    base,
    "px-4 text-stc-white/90 hover:text-stc-lime",
    className,
  );
  if (!href) return null;
  return <Link href={href} className={cls}>{children}</Link>;
}
