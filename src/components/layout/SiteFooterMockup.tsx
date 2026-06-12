import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/layout/Container";
import { footerColumns, cta } from "@/data/nav";
import { site } from "@/data/site";

/** Archived mockup-hybrid footer (watermark tagline + green bottom bar). */
export function SiteFooterMockup() {
  return (
    <footer className="border-t border-stc-white/10 bg-stc-black text-role-body-on-dark">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BrandLogo variant="full" link className="brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-role-body-on-dark">
              {site.tagline}
            </p>
            <p className="mt-2 text-sm text-role-body-on-dark">{site.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className="text-utility text-accent-gold">Services</h3>
              <ul className="mt-4 space-y-2">
                {footerColumns.services.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-role-statement-on-dark hover:text-role-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-utility text-accent-gold">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerColumns.company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-role-statement-on-dark hover:text-role-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-utility text-accent-gold">Service Areas</h3>
              <ul className="mt-4 space-y-2">
                {footerColumns.areas.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-role-statement-on-dark hover:text-role-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-utility text-accent-gold">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-role-statement-on-dark">
                <li>{site.name}</li>
                <li>
                  {site.address.area}, {site.address.region}
                </li>
                <li>
                  <a href={`tel:${site.phoneTel}`} className="hover:text-role-link">
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
          <p className="text-xs text-role-body-on-dark">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
            <a href={site.social.facebook} className="text-role-body-on-dark hover:text-role-link">
              Facebook
            </a>
            <a href={site.social.instagram} className="text-role-body-on-dark hover:text-role-link">
              Instagram
            </a>
            <a href={site.social.youtube} className="text-role-body-on-dark hover:text-role-link">
              YouTube
            </a>
            <a href={site.social.linkedin} className="text-role-body-on-dark hover:text-role-link">
              LinkedIn
            </a>
          </div>
          <Link
            href={cta.primaryHref}
            className="text-xs font-bold uppercase tracking-wider text-role-link hover:underline"
          >
            {cta.primaryLabel}
          </Link>
        </div>
      </Container>
      <div className="bg-stc-green py-3 text-center text-xs font-semibold uppercase tracking-wider text-role-headline-on-dark">
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
