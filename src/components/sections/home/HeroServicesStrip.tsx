import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { services } from "@/data/services";

export function HeroServicesStrip() {
  return (
    <section
      id="hero-services"
      className="border-y border-stc-black/15 bg-stc-white"
      aria-label="Our services"
    >
      <Container className="py-0">
        <div className="border-b border-stc-black/15 px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="label-stamp text-stc-green">Our Services</h2>
        </div>
        <ul className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.slug} className="border-b border-stc-black/15 sm:border-r lg:[&:nth-child(3n)]:border-r-0">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-3 p-6 transition hover:bg-stc-white/40 sm:p-8"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center text-stc-gold">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="text-utility block text-stc-black group-hover:text-stc-green">
                      {s.shortLabel}
                    </span>
                    <span className="mt-1 block font-body text-xs leading-relaxed text-stc-black/65">
                      {s.shortDescription}
                    </span>
                  </span>
                  <ArrowRight className="mt-1 size-4 shrink-0 text-stc-gold opacity-0 transition group-hover:opacity-100" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
