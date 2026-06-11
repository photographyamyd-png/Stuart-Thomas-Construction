import { services } from "@/data/services";

export function BrandBar() {
  const items = [
    ...services.map((s) => s.shortLabel),
    "Licensed & Insured",
    "South Georgian Bay",
  ];

  return (
    <div className="border-y border-stc-gold/15 bg-stc-black/90 py-6">
      <div className="container mx-auto flex max-w-[80rem] flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 lg:gap-x-10 lg:px-8">
        {items.map((label, i) => (
          <span key={`${label}-${i}`} className="flex items-center gap-3">
            <span className="font-utility text-[0.6875rem] tracking-[0.2em] text-stc-white/40 uppercase">
              {label}
            </span>
            {i < items.length - 1 && (
              <span className="size-1 rounded-full bg-stc-gold/50" aria-hidden />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
