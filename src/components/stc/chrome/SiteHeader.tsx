"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/layout/Container";
import { ActionForest, ActionSolid } from "@/components/stc/primitives/Action";
import { cn } from "@/lib/utils";
import { cta, navServices, primaryNav } from "@/data/nav";
import { site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const lightHome = isHome && !scrolled;
  const solid = scrolled || !isHome;

  const navLinkClass = lightHome
    ? "stc-mockup-eyebrow text-charcoal/90 hover:text-forest"
    : "stc-label text-stc-white/90 hover:text-stc-lime";

  const phoneClass = lightHome
    ? "stc-mockup-eyebrow hidden text-charcoal/70 hover:text-forest xl:block"
    : "stc-label hidden text-stc-white/80 hover:text-stc-lime xl:block";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-200",
          lightHome
            ? "border-charcoal/10 bg-white"
            : solid
              ? "border-stc-lime/30 bg-stc-charcoal"
              : "border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <BrandLogo variant="full" className="max-h-11 sm:max-h-12" priority />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {primaryNav.map((item) =>
              "mega" in item && item.mega ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={navLinkClass}
                  >
                    {item.label}
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-[min(92vw,640px)] -translate-x-1/2 border-2 border-stc-border-strong bg-stc-white pt-2 shadow-none">
                      <ul className="grid grid-cols-2 gap-px bg-stc-border-strong">
                        {navServices.map((s) => (
                          <li key={s.href} className="bg-stc-white">
                            <Link
                              href={s.href}
                              className="block p-4 hover:bg-stc-surface"
                            >
                              <span className="stc-label block text-stc-charcoal">{s.label}</span>
                              <span className="stc-body-sm mt-1 line-clamp-2 text-stc-charcoal/60">
                                {s.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href={`tel:${site.phoneTel}`} className={phoneClass}>
              {site.phoneDisplay}
            </a>
            {lightHome ? (
              <ActionForest href={cta.primaryHref}>{cta.primaryLabel}</ActionForest>
            ) : (
              <ActionSolid href={cta.primaryHref}>{cta.primaryLabel}</ActionSolid>
            )}
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden",
              lightHome ? "text-charcoal" : "text-stc-white",
            )}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-7" />
          </button>
        </Container>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-stc-charcoal lg:hidden">
          <div className="flex h-16 items-center justify-between border-b-2 border-stc-white/10 px-4 sm:px-6">
            <BrandLogo variant="icon" link={false} />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-stc-white"
            >
              <X className="size-7" />
            </button>
          </div>
          <nav className="flex flex-col px-4 py-6 sm:px-6">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-stc-white/10 py-4 font-display text-2xl font-bold uppercase tracking-wide text-stc-white hover:text-stc-lime"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneTel}`}
              className="stc-label mt-6 text-stc-lime"
            >
              {site.phoneDisplay}
            </a>
            <ActionSolid href={cta.primaryHref} className="mt-6 w-full">
              {cta.primaryLabel}
            </ActionSolid>
          </nav>
        </div>
      )}

      <div className="h-16 sm:h-[4.5rem]" aria-hidden />
    </>
  );
}
