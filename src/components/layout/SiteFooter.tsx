import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/layout/Container";
import { footerColumns, cta } from "@/data/nav";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stc-white/10 bg-stc-black text-stc-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BrandLogo variant="full" link className="brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stc-white/70">
              {site.tagline}
            </p>
            <p className="mt-2 text-sm text-stc-white/60">{site.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className="text-utility text-stc-gold">Services</h3>
              <ul className="mt-4 space-y-2">
                {footerColumns.services.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-stc-white/75 hover:text-stc-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-utility text-stc-gold">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerColumns.company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-stc-white/75 hover:text-stc-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-utility text-stc-gold">Service Areas</h3>
              <ul className="mt-4 space-y-2">
                {footerColumns.areas.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-stc-white/75 hover:text-stc-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-utility text-stc-gold">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-stc-white/75">
                <li>{site.name}</li>
                <li>
                  {site.address.area}, {site.address.region}
                </li>
                <li>
                  <a href={`tel:${site.phoneTel}`} className="hover:text-stc-gold">
                    {site.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-display pointer-events-none mt-12 text-center text-2xl tracking-widest text-stc-white/10 sm:text-3xl lg:text-left">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-col gap-4 border-t border-stc-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-stc-white/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
            <a href={site.social.facebook} className="text-stc-white/60 hover:text-stc-gold">
              Facebook
            </a>
            <a href={site.social.instagram} className="text-stc-white/60 hover:text-stc-gold">
              Instagram
            </a>
            <a href={site.social.youtube} className="text-stc-white/60 hover:text-stc-gold">
              YouTube
            </a>
            <a href={site.social.linkedin} className="text-stc-white/60 hover:text-stc-gold">
              LinkedIn
            </a>
          </div>
          <Link
            href={cta.primaryHref}
            className="text-xs font-bold uppercase tracking-wider text-stc-gold hover:underline"
          >
            {cta.primaryLabel}
          </Link>
        </div>
      </Container>
      <div className="bg-stc-green py-3 text-center text-xs font-semibold uppercase tracking-wider text-stc-white">
        <Container className="flex flex-wrap items-center justify-center gap-4">
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          <span className="hidden sm:inline" aria-hidden>
            |
          </span>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </Container>
      </div>
    </footer>
  );
}
