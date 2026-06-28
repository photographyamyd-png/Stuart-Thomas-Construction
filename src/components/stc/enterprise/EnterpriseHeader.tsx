"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { areas } from "@/data/areas";
import { media } from "@/data/media";
import { footerColumns, navServices, cta } from "@/data/nav";
import { useEnterpriseNav } from "@/hooks/use-enterprise-nav";
import { LinkArrow, Wordmark } from "./primitives";

const MEGA_PROJECTS = [
  {
    image: media.featuredGalleryPaths[0],
    category: "Waterfront",
    title: "Georgian Bay Shoreline",
    href: "/projects",
  },
  {
    image: media.featuredGalleryPaths[1],
    category: "Armour Stone",
    title: "Armour Stone Retaining Wall",
    href: "/projects",
  },
  {
    image: media.featuredGalleryPaths[2],
    category: "Hardscaping",
    title: "Stone Patio Terrace",
    href: "/projects",
  },
] as const;

export function EnterpriseHeader() {
  const {
    luxOpen,
    drawerOpen,
    openLux,
    closeLux,
    scheduleCloseLux,
    cancelLuxClose,
    toggleLux,
    toggleDrawer,
    closeDrawer,
    isPanelOpen,
  } = useEnterpriseNav();

  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !target ||
        !(target instanceof Element) ||
        target.closest(".stc-lux-nav") ||
        target.closest("#lux-wrap")
      ) {
        closeLux();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [closeLux]);

  return (
    <>
      <header className="turner-header" id="site-header">
        <div className="container turner-header__inner">
          <Wordmark href="/" className="turner-header__logo" />

          <nav className="stc-lux-nav" aria-label="Primary">
            <div
              className="stc-lux-nav__item"
              data-lux="services"
              onMouseEnter={() => openLux("services")}
              onMouseLeave={scheduleCloseLux}
            >
              <button
                type="button"
                className="stc-lux-nav__trigger"
                aria-expanded={isPanelOpen("services")}
                aria-controls="lux-services"
                onClick={(e) => {
                  e.preventDefault();
                  toggleLux("services");
                }}
              >
                Services <span className="stc-lux-nav__caret" aria-hidden />
              </button>
            </div>
            <div
              className="stc-lux-nav__item"
              data-lux="projects"
              onMouseEnter={() => openLux("projects")}
              onMouseLeave={scheduleCloseLux}
            >
              <button
                type="button"
                className="stc-lux-nav__trigger"
                aria-expanded={isPanelOpen("projects")}
                aria-controls="lux-projects"
                onClick={(e) => {
                  e.preventDefault();
                  toggleLux("projects");
                }}
              >
                Projects <span className="stc-lux-nav__caret" aria-hidden />
              </button>
            </div>
            <div
              className="stc-lux-nav__item"
              data-lux="company"
              onMouseEnter={() => openLux("company")}
              onMouseLeave={scheduleCloseLux}
            >
              <button
                type="button"
                className="stc-lux-nav__trigger"
                aria-expanded={isPanelOpen("company")}
                aria-controls="lux-company"
                onClick={(e) => {
                  e.preventDefault();
                  toggleLux("company");
                }}
              >
                Company <span className="stc-lux-nav__caret" aria-hidden />
              </button>
            </div>
            <Link className="stc-lux-nav__link" href="/about">
              About
            </Link>
            <Link className="stc-lux-nav__link" href="/contact">
              Contact
            </Link>
          </nav>

          <div className="turner-header__actions">
            <Link href={cta.primaryHref} className="btn-header-cta">
              {cta.primaryLabel}
            </Link>
            <button
              type="button"
              className="turner-header__toggle"
              id="nav-toggle"
              aria-expanded={drawerOpen}
              aria-controls="nav-drawer"
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              onClick={toggleDrawer}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div
        className={`stc-lux-backdrop${luxOpen ? " is-visible" : ""}`}
        id="lux-backdrop"
        aria-hidden={!luxOpen}
        onClick={closeLux}
      />

      <div
        ref={wrapRef}
        className={`stc-lux-wrap${luxOpen ? " is-open" : ""}`}
        id="lux-wrap"
        aria-hidden={!luxOpen}
        onMouseEnter={cancelLuxClose}
        onMouseLeave={scheduleCloseLux}
      >
        <div
          className={`stc-lux-panel${isPanelOpen("services") ? " is-open" : ""}`}
          id="lux-services"
          role="region"
          aria-label="Services"
        >
          <div className="stc-lux-panel__inner">
            <div className="stc-lux-panel__grid stc-lux-panel__grid--services">
              <ul className="stc-lux-panel__links">
                {navServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={s.href} onClick={closeLux}>
                      <span className="stc-lux-link__title">{s.label}</span>
                      <span className="stc-lux-link__desc">{s.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <aside className="stc-lux-panel__feature">
                <p className="eyebrow eyebrow--plain eyebrow--on-dark">Featured</p>
                <p className="text-utility text-utility-on-dark stack-eyebrow">
                  Georgian Bay Shoreline
                </p>
                <Image
                  src={media.featuredGalleryPaths[0]}
                  alt=""
                  width={400}
                  height={260}
                  loading="lazy"
                />
                <p>Armour stone retaining and shoreline protection on Georgian Bay.</p>
                <LinkArrow href="/projects" className="link-arrow stack-cta" onClick={closeLux}>
                  View project
                </LinkArrow>
              </aside>
            </div>
            <div className="stc-lux-panel__foot">
              <LinkArrow href="/services" onClick={closeLux}>
                View all services
              </LinkArrow>
            </div>
          </div>
        </div>

        <div
          className={`stc-lux-panel${isPanelOpen("projects") ? " is-open" : ""}`}
          id="lux-projects"
          role="region"
          aria-label="Projects"
        >
          <div className="stc-lux-panel__inner">
            <div className="stc-lux-panel__grid stc-lux-panel__grid--projects">
              {MEGA_PROJECTS.map((p) => (
                <Link key={p.title} className="stc-lux-project" href={p.href} onClick={closeLux}>
                  <Image src={p.image} alt="" width={320} height={200} loading="lazy" />
                  <span className="stc-lux-project__cap">
                    <span className="cat">{p.category}</span>
                    <span className="title">{p.title}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="stc-lux-panel__foot">
              <LinkArrow href="/projects" onClick={closeLux}>
                Browse our portfolio
              </LinkArrow>
            </div>
          </div>
        </div>

        <div
          className={`stc-lux-panel${isPanelOpen("company") ? " is-open" : ""}`}
          id="lux-company"
          role="region"
          aria-label="Company"
        >
          <div className="stc-lux-panel__inner">
            <div className="stc-lux-panel__grid stc-lux-panel__grid--company">
              <div className="stc-lux-panel__col">
                <h3>Who We Are</h3>
                <ul>
                  {footerColumns.company.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={closeLux}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="stc-lux-panel__col">
                <h3>Service Areas</h3>
                <ul>
                  {areas.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/areas/${a.slug}`} onClick={closeLux}>
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="stc-lux-panel__col">
                <p className="eyebrow eyebrow--plain eyebrow--on-dark">Since 2004</p>
                <p className="stc-lux-panel__blurb">
                  Outdoor construction across South Georgian Bay — armour stone, landscaping, and full outdoor builds from our base in Tiny Township.
                </p>
                <LinkArrow href="/about" className="stack-cta" onClick={closeLux}>
                  Get to know us
                </LinkArrow>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`turner-drawer-backdrop${drawerOpen ? " is-visible" : ""}`}
        id="nav-backdrop"
        aria-hidden={!drawerOpen}
        onClick={closeDrawer}
      />
      <aside
        className={`turner-drawer${drawerOpen ? " is-open" : ""}`}
        id="nav-drawer"
        aria-hidden={!drawerOpen}
        aria-label="Mobile navigation"
      >
        <div className="turner-drawer__wordmark">
          <Wordmark compact href="/" />
        </div>
        <nav className="turner-drawer__nav">
          <span className="turner-drawer__section-label">Services</span>
          {navServices.map((s) => (
            <Link key={s.slug} href={s.href} className="stc-lux-drawer__sub" onClick={closeDrawer}>
              {s.label}
            </Link>
          ))}
          <Link href="/services" onClick={closeDrawer}>
            All Services
          </Link>
          <span className="turner-drawer__section-label">Areas</span>
          {areas.map((a) => (
            <Link key={a.slug} href={`/areas/${a.slug}`} className="stc-lux-drawer__sub" onClick={closeDrawer}>
              {a.name}
            </Link>
          ))}
          <Link href="/projects" onClick={closeDrawer}>
            Projects
          </Link>
          <Link href="/about" onClick={closeDrawer}>
            About
          </Link>
          <Link href="/contact" onClick={closeDrawer}>
            Contact
          </Link>
        </nav>
        <Link href={cta.primaryHref} className="btn-header-cta" onClick={closeDrawer}>
          {cta.primaryLabel}
        </Link>
      </aside>
    </>
  );
}
