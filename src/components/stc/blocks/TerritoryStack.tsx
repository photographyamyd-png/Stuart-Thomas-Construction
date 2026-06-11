import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Band } from "@/components/stc/primitives/Band";
import { SectionTitle } from "@/components/stc/primitives/SectionTitle";
import type { AreaDetail } from "@/data/areas";

export function TerritoryStack({ areas }: { areas: readonly AreaDetail[] }) {
  return (
    <Band tone="white" pad="lg">
      <Container>
        <SectionTitle label="Coverage" title="Service Territories" />
        <ul className="mt-10 divide-y-2 divide-stc-border-strong border-y-2 border-stc-border-strong">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/areas/${area.slug}`}
                className="group flex items-center justify-between gap-4 py-8 sm:py-10"
              >
                <span>
                  <span className="stc-display-md block text-stc-charcoal group-hover:text-stc-dark-green">
                    {area.name}
                  </span>
                  <span className="stc-body-sm mt-2 block max-w-xl text-stc-charcoal/65">
                    {area.intro[0]}
                  </span>
                </span>
                <ArrowRight className="size-6 shrink-0 text-stc-lime" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Band>
  );
}
