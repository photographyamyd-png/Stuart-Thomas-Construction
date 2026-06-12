import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LayeredSection } from "@/components/layout/LayeredSection";
import { areas } from "@/data/areas";

export function AreasTeaser() {
  return (
    <LayeredSection id="areas-teaser" tone="dark" pad="lg">
      <Container>
        <h2 className="text-display text-role-headline-on-dark">Serving South Georgian Bay</h2>
        <p className="mt-4 max-w-2xl text-base text-role-statement-on-dark">
          From cottage-country shorelines in{" "}
          <Link href="/areas/tiny-township" className="text-role-link underline-offset-2 hover:underline">
            Tiny Township
          </Link>{" "}
          to coastal properties in{" "}
          <Link href="/areas/wasaga-beach" className="text-role-link underline-offset-2 hover:underline">
            Wasaga Beach
          </Link>{" "}
          and luxury builds in{" "}
          <Link href="/areas/collingwood" className="text-role-link underline-offset-2 hover:underline">
            Collingwood
          </Link>
          — we deliver{" "}
          <Link href="/services/armour-stone" className="text-role-link underline-offset-2 hover:underline">
            armour stone
          </Link>
          ,{" "}
          <Link href="/services/waterfront-stone-work" className="text-role-link underline-offset-2 hover:underline">
            waterfront stone work
          </Link>
          , and full outdoor construction.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/areas/${a.slug}`}
                className="text-utility inline-block border border-stc-white/25 px-4 py-2 text-xs text-role-headline-on-dark transition hover:border-stc-gold hover:text-role-link"
              >
                {a.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/services"
              className="text-utility inline-block border border-stc-gold bg-stc-green px-4 py-2 text-xs text-role-headline-on-dark"
            >
              All Services
            </Link>
          </li>
        </ul>
        <p className="mt-8 text-sm text-role-body-on-dark">
          Also serving Perkinsfield, Midland, Penetanguishene, and surrounding areas.
        </p>
      </Container>
    </LayeredSection>
  );
}
