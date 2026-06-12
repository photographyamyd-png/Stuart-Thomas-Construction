import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/layout/Container";
import { LayerStack } from "@/components/stc/primitives/LayerStack";
import { ActionSolid } from "@/components/stc/primitives/Action";
import { conversion } from "@/data/conversion";
import { cta, footerColumns, navServices } from "@/data/nav";
import { media } from "@/data/media";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-stc-dark-green text-role-body-on-dark">
      {/* Band 1 — Image CTA slab */}
      <LayerStack
        imageSrc={media.ctaBanner}
        imageAlt=""
        scrim="footer"
        className="border-b-4 border-stc-lime"
        imageSizes="100vw"
        contentClassName="justify-center"
      >
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="stc-label text-stc-lime">Ready to Build</p>
              <h2 className="stc-display-lg mt-3 max-w-xl text-role-headline-on-dark">
                {conversion.stickyBar.headline}
              </h2>
              <a
                href={`tel:${site.phoneTel}`}
                className="stc-display-md mt-6 inline-block text-3xl text-stc-lime hover:text-stc-lime-hover sm:text-4xl"
              >
                {site.phoneDisplay}
              </a>
            </div>
            <ActionSolid href={cta.primaryHref} className="shrink-0 px-10 py-4">
              {conversion.stickyBar.button}
            </ActionSolid>
          </div>
        </Container>
      </LayerStack>

      {/* Band 2 — Brand + compact navigation */}
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <BrandLogo variant="full" />
            <p className="stc-body-sm mt-4 max-w-sm text-role-body-on-dark">
              {site.tagline}. Premium stone, waterfront, and outdoor construction across South
              Georgian Bay.
            </p>
            <p className="stc-body-sm mt-3 text-role-body-on-dark">
              {site.address.area}, {site.address.region}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="stc-label text-stc-lime">Services</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {navServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="border border-stc-white/20 bg-stc-white/5 px-3 py-1.5 stc-body-sm text-role-statement-on-dark transition hover:border-stc-lime hover:bg-stc-lime/10 hover:text-stc-lime"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="stc-label text-stc-lime">Company</p>
                <ul className="mt-3 space-y-2">
                  {footerColumns.company.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="stc-body-sm text-role-body-on-dark hover:text-stc-lime"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="stc-label text-stc-lime">Areas & Legal</p>
                <ul className="mt-3 space-y-2">
                  {[...footerColumns.areas, ...footerColumns.legal].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="stc-body-sm text-role-body-on-dark hover:text-stc-lime"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Band 3 — Legal rail */}
      <div className="stc-divide-lime">
        <Container className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="stc-body-sm text-role-body-on-dark">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="font-display text-lg font-bold tracking-wide text-stc-lime hover:text-stc-lime-hover"
          >
            {site.phoneDisplay}
          </a>
        </Container>
      </div>
    </footer>
  );
}
