import Link from "next/link";

/** Small fixed chip — does not alter the archived layout rhythm. */
export function ClassicPreviewBanner() {
  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-[60]">
      <Link
        href="/"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-sm border border-stc-gold/50 bg-stc-black/90 px-3 py-2 font-utility text-[0.625rem] tracking-wide text-role-headline-on-dark uppercase shadow-lg backdrop-blur-sm hover:border-stc-gold"
      >
        <span className="size-1.5 rounded-full bg-stc-gold" aria-hidden />
        Classic preview · View current site
      </Link>
    </div>
  );
}
