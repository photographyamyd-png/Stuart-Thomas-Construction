import { featuredTestimonial, stats } from "@/data/sections";
import { cn } from "@/lib/utils";

export function TrustQuoteStatsBand() {
  return (
    <section className="w-full bg-beige py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-12 px-6 lg:grid-cols-[2fr_3fr] lg:gap-0 lg:px-12">
        <blockquote className="flex flex-col justify-center lg:pr-12">
          <span
            className="font-oswald text-6xl font-bold leading-none text-forest sm:text-7xl"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="stc-mockup-body -mt-4 text-lg leading-relaxed text-charcoal sm:text-xl">
            {featuredTestimonial.quote}
          </p>
          <cite className="mt-6 font-montserrat text-base not-italic text-charcoal/70">
            — {featuredTestimonial.author}
          </cite>
        </blockquote>

        <div className="grid grid-cols-1 divide-y divide-copper/30 border-t border-copper/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-t-0 lg:border-l lg:border-copper/30 lg:pl-12">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "flex flex-col justify-center px-0 py-8 text-center sm:px-6 sm:py-0",
                index > 0 && "sm:border-l sm:border-copper/30",
              )}
            >
              <p className="font-oswald text-4xl font-bold uppercase leading-[0.85] text-forest sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 font-oswald text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
