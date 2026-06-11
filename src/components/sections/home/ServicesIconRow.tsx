import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { services } from "@/data/services";

/** Our Services — Gemini May 2026 spec: white band, beige square tiles, green icons. */
export function ServicesIconRow() {
  return (
    <section id="services-icons" className="bg-stc-white py-16 md:py-24">
      <Container>
        <h2 className="text-utility mb-12 text-center text-2xl font-medium tracking-[0.08em] text-stc-black uppercase md:text-3xl">
          Our Services
        </h2>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex aspect-square flex-col items-center justify-start border border-stc-black/10 bg-stc-white p-6 text-center transition-opacity hover:opacity-90"
                >
                  <Icon
                    className="mb-4 size-10 text-stc-green md:size-12"
                    strokeWidth={1.5}
                  />
                  <span className="font-utility mx-auto max-w-[100px] text-xs leading-[1.35] font-medium tracking-[0.04em] text-stc-black uppercase">
                    {s.iconRowLabelLines.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
