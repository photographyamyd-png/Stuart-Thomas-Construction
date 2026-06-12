"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { BrandStamp } from "@/components/brand/BrandStamp";
import { Container } from "@/components/layout/Container";
import { cta, navServices, primaryNav } from "@/data/nav";
import { services } from "@/data/services";
import { site } from "@/data/site";

/** Pre–mockup header: sticky bar, full logo, icon-grid mega menu, solid gold CTA. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stc-white/10 bg-stc-black/95">
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <BrandStamp priority className="sm:hidden" />
          <BrandLogo variant="full" className="hidden sm:block" priority />
        </div>

        <NavigationMenu className="hidden lg:flex" viewport>
          <NavigationMenuList className="gap-1">
            {primaryNav.map((item) =>
              "mega" in item && item.mega ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger className="text-utility bg-transparent text-role-statement-on-dark hover:bg-stc-white/10 hover:text-role-headline-on-dark data-[state=open]:bg-stc-white/10">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[640px] grid-cols-2 gap-0 p-4 xl:w-[720px] xl:grid-cols-3">
                      {navServices.map((s) => {
                        const service = services.find((x) => x.slug === s.slug);
                        if (!service) return null;
                        const Icon = service.icon;
                        return (
                          <li key={s.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={s.href}
                                className="flex items-center gap-3 px-3 py-3 transition hover:bg-stc-black/5"
                              >
                                <Icon className="size-5 shrink-0 text-accent-gold" strokeWidth={1.25} />
                                <span className="text-utility text-sm text-role-headline-on-light hover:text-stc-green">
                                  {s.label}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="border-t border-stc-black/10 px-6 py-3">
                      <Link href="/services" className="text-utility text-role-link hover:underline">
                        View all services →
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="text-utility inline-flex h-9 items-center px-3 text-role-statement-on-dark transition hover:text-role-headline-on-dark"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="text-utility inline-flex items-center gap-2 text-role-statement-on-dark hover:text-role-headline-on-dark"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
          <Button asChild variant="stcSolid" size="lg">
            <Link href={cta.primaryHref}>{cta.primaryLabel}</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-role-headline-on-dark hover:bg-stc-white/10">
              <Menu className="size-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-stc-black text-role-body-on-dark">
            <SheetHeader>
              <SheetTitle className="text-left text-role-headline-on-dark">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-utility border-b border-stc-white/10 py-3"
                >
                  {item.label}
                </Link>
              ))}
              <p className="label-stamp mt-6 text-accent-gold">Services</p>
              {navServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="py-2 font-body text-sm text-role-statement-on-dark hover:text-role-link"
                >
                  {s.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a href={`tel:${site.phoneTel}`} className="text-sm font-semibold">
                {site.phoneDisplay}
              </a>
              <Button asChild variant="stcSolid" size="lg">
                <Link href={cta.primaryHref} onClick={() => setOpen(false)}>
                  {cta.primaryLabel}
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
