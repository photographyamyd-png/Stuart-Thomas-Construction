"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
import { BrandStamp } from "@/components/brand/BrandStamp";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { cta, navServices } from "@/data/nav";
import { services } from "@/data/services";
import { site } from "@/data/site";

const mockupNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", mega: true as const },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
] as const;

/** Archived mockup-hybrid header (fixed blur, stamp stack, green CTA). */
export function SiteHeaderMockup() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md transition-colors duration-300",
        scrolled
          ? "border-stc-gold/25 bg-stc-black/95"
          : "border-stc-gold/15 bg-stc-black/90",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <BrandStamp priority ring="beige" link={false} />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-utility text-base font-semibold tracking-wide text-stc-white uppercase">
              Stuart Thomas
            </span>
            <span className="mt-1 font-utility text-[0.625rem] font-medium tracking-[0.2em] text-stc-gold uppercase">
              Construction
            </span>
          </span>
        </Link>

        <NavigationMenu className="hidden lg:flex" viewport>
          <NavigationMenuList className="gap-1">
            {mockupNav.map((item) =>
              "mega" in item && item.mega ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger className="text-utility bg-transparent text-stc-white/90 hover:bg-stc-white/10 hover:text-stc-white data-[state=open]:bg-stc-white/10">
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
                                <Icon className="size-5 shrink-0 text-stc-gold" strokeWidth={1.25} />
                                <span className="text-utility text-sm text-stc-black hover:text-stc-green">
                                  {s.label}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="border-t border-stc-black/10 px-6 py-3">
                      <Link
                        href="/services"
                        className="text-utility text-stc-gold hover:underline"
                      >
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
                      className="text-utility inline-flex h-9 items-center px-3 text-stc-white/90 transition hover:text-stc-white"
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
            className="text-utility inline-flex items-center gap-2 text-stc-white/85 hover:text-stc-white"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
          <Button asChild variant="stcGreen" size="lg">
            <Link href={cta.primaryHref}>{cta.primaryLabel}</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-stc-white hover:bg-stc-white/10">
              <Menu className="size-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-stc-black text-stc-white">
            <SheetHeader>
              <SheetTitle className="text-left text-stc-white">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1">
              {mockupNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-utility border-b border-stc-white/10 py-3"
                >
                  {item.label}
                </Link>
              ))}
              <p className="label-stamp mt-6 text-stc-gold">Services</p>
              {navServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="py-2 font-body text-sm text-stc-white/80 hover:text-stc-gold"
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
