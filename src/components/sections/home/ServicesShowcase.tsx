import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { services } from "@/data/services";

export function ServicesShowcase() {
  return (
    <section id="services" className="bg-stc-beige text-stc-black">
      <Container>
        <SectionBlock>
          <SectionEyebrow accent="green">What We Do</SectionEyebrow>
          <h2 className="text-display mt-6">
            Our <span className="text-stc-green">Services</span>
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-stc-black/70">
            From waterfront retaining walls to full-scale commercial snow programs — precision
            craftsmanship on every project across South Georgian Bay.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-stc-black p-8 transition duration-300 hover:-translate-y-1"
                  >
                    <span
                      className="absolute inset-0 bg-stc-green opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <span className="relative z-[1] flex size-12 items-center justify-center border border-stc-gold/30 bg-stc-gold/15 text-stc-gold">
                      <Icon className="size-6" strokeWidth={1.5} />
                    </span>
                    <span className="relative z-[1]">
                      <span className="text-utility block text-lg text-stc-white">{s.title}</span>
                      <span className="mt-3 block font-body text-sm leading-relaxed text-stc-white/65">
                        {s.shortDescription}
                      </span>
                    </span>
                    <span className="relative z-[1] flex size-7 items-center justify-center self-end rounded-full border border-stc-gold/40 text-stc-gold transition group-hover:border-stc-gold group-hover:bg-stc-gold group-hover:text-stc-black">
                      <ArrowRight className="size-3.5" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SectionBlock>
      </Container>
    </section>
  );
}
