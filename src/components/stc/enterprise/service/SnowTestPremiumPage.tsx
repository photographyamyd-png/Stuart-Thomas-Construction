"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  ClipboardList,
  Headphones,
  MapPin,
  Menu,
  Phone,
  Shield,
  Snowflake,
  X,
  type LucideIcon,
} from "lucide-react";
import { snowTest } from "@/data/snow-test-page";
import { site } from "@/data/site";
import { EMAIL_PATTERN } from "@/lib/contact-email";
import { submitContactForm } from "@/lib/submit-contact-client";
import { Wordmark } from "../primitives";
import { SnowTestReveal } from "./SnowTestReveal";

type Props = {
  heroSrc: string;
  heroAlt: string;
  processSrc: string;
  coverageSrc: string;
};

const processIcons: LucideIcon[] = [MapPin, ClipboardList, Snowflake, Headphones];

/**
 * /test-snow — premium 8-section sandbox (own sticky chrome).
 * Production: /services/commercial-snow-removal
 */
export function SnowTestPremiumPage({
  heroSrc,
  heroAlt,
  processSrc,
  coverageSrc,
}: Props) {
  const formId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [formError, setFormError] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const ctaBandRef = useRef<HTMLElement>(null);
  const ctaParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const band = ctaBandRef.current;
    const layer = ctaParallaxRef.current;
    if (!band || !layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = band.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = (vh / 2 - (rect.top + rect.height / 2)) / vh;
        const offset = Math.max(-15, Math.min(15, progress * 20));
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  async function handleQuote(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    const addr = address.trim();
    const mail = email.trim();
    const tel = phone.trim();
    if (!addr) {
      setFormError("Enter your property address.");
      return;
    }
    if (!mail && !tel) {
      setFormError("Enter a phone number or email.");
      return;
    }
    if (mail && !EMAIL_PATTERN.test(mail)) {
      setFormError("Enter a valid email address.");
      return;
    }
    if (!mail) {
      setFormError("Include an email so we can send your quote.");
      return;
    }

    const town =
      snowTest.coverage.towns.find((t) =>
        addr.toLowerCase().includes(t.toLowerCase().split(" ")[0]!),
      ) ?? "North Simcoe";

    setFormStatus("submitting");
    try {
      const result = await submitContactForm({
        kind: "snow-quote",
        name: "Commercial quote request",
        company: "Commercial property",
        email: mail,
        phone: tel || "Not provided",
        town,
        propertyType: propertyType || "Other",
        serviceNeeded: "Seasonal contract",
        address: addr,
      });
      if (!result.ok) {
        setFormError(result.error);
        setFormStatus("error");
        return;
      }
      setFormStatus("success");
      setAddress("");
      setEmail("");
      setPhone("");
      setPropertyType("");
    } catch {
      setFormError(`Something went wrong. Call ${site.phoneDisplay}.`);
      setFormStatus("error");
    }
  }

  return (
    <div className="stc-snow-test">
      <header className="stc-snow-test__bar">
        <div className="stc-snow-test__bar-inner">
          <div className="stc-snow-test__bar-logo">
            <Wordmark />
          </div>

          <nav className="stc-snow-test__bar-nav" aria-label="Page">
            {snowTest.nav.links.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href} className="stc-snow-test__nav-link">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="stc-snow-test__nav-link">
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="stc-snow-test__bar-actions">
            <a href={`tel:${site.phoneTel}`} className="stc-snow-test__bar-phone">
              {site.phoneDisplay}
            </a>
            <a href="#coverage" className="stc-snow-test__btn stc-snow-test__bar-cta">
              {snowTest.nav.cta}
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="stc-snow-test__bar-phone-icon"
              aria-label={`Call ${site.phoneDisplay}`}
            >
              <Phone size={18} strokeWidth={1.75} aria-hidden />
            </a>
            <button
              type="button"
              className="stc-snow-test__bar-toggle"
              aria-expanded={menuOpen}
              aria-controls="snow-test-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav id="snow-test-menu" className="stc-snow-test__bar-drawer" aria-label="Mobile">
            {snowTest.nav.links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="stc-snow-test__nav-link"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="stc-snow-test__nav-link"
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href="#coverage"
              className="stc-snow-test__btn"
              onClick={() => setMenuOpen(false)}
            >
              {snowTest.nav.cta}
            </a>
          </nav>
        ) : null}
      </header>

      {/* 2 — Cinematic hero: photo + dark scrim + gold seam · type L1–L3 */}
      <section className="stc-snow-test__hero" aria-labelledby="snow-test-heading">
        <div className="stc-snow-test__hero-media" aria-hidden={!heroAlt}>
          <div className="stc-snow-test__ken">
            <div className="stc-snow-test__ken-img">
              <Image
                src={heroSrc}
                alt={heroAlt || snowTest.hero.imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="stc-snow-test__hero-scrim" aria-hidden />
        </div>

        <div className="stc-snow-test__shell stc-snow-test__hero-copy">
          <SnowTestReveal>
            <p className="stc-snow-test__eyebrow">{snowTest.hero.eyebrow}</p>
          </SnowTestReveal>
          <SnowTestReveal delay={90}>
            <h1 id="snow-test-heading" className="stc-snow-test__display">
              <span className="stc-snow-test__hero-line">{snowTest.hero.headlineLine1}</span>
              <span className="stc-snow-test__hero-line">{snowTest.hero.headlineLine2}</span>
              <span className="stc-snow-test__hero-line">{snowTest.hero.headlineLine3}</span>
            </h1>
          </SnowTestReveal>
          <SnowTestReveal delay={180}>
            <p className="stc-snow-test__support stc-snow-test__support--on-dark">
              {snowTest.hero.supporting}
            </p>
          </SnowTestReveal>
          <SnowTestReveal delay={270}>
            <div className="stc-snow-test__hero-actions">
              <a href="#coverage" className="stc-snow-test__btn stc-snow-test__btn--on-dark">
                {snowTest.hero.primaryCta}
              </a>
              <a href={`tel:${site.phoneTel}`} className="stc-snow-test__text-link stc-snow-test__text-link--on-dark">
                {snowTest.hero.secondaryCta}
                <span className="stc-snow-test__text-link-arrow" aria-hidden>
                  →
                </span>
                <span className="stc-snow-test__text-link-meta">{site.phoneDisplay}</span>
              </a>
            </div>
          </SnowTestReveal>
        </div>
        <div className="stc-snow-test__hero-accent" aria-hidden />
      </section>

      {/* 3 — Statement LIGHT (after dark hero) */}
      <section
        id="statement"
        className="stc-snow-test__statement"
        aria-labelledby="snow-test-statement"
      >
        <div className="stc-snow-test__layer-ground" aria-hidden />
        <div className="stc-snow-test__shell stc-snow-test__statement-grid">
          <div className="stc-snow-test__statement-rail" aria-hidden />
          <div className="stc-snow-test__statement-inner">
            <SnowTestReveal>
              <p className="stc-snow-test__eyebrow stc-snow-test__eyebrow--on-light">
                {snowTest.statement.eyebrow}
              </p>
            </SnowTestReveal>
            <SnowTestReveal delay={90}>
              <h2 id="snow-test-statement" className="stc-snow-test__section-display">
                {snowTest.statement.headline}
              </h2>
            </SnowTestReveal>
            <SnowTestReveal delay={160}>
              <p className="stc-snow-test__support">{snowTest.statement.supporting}</p>
            </SnowTestReveal>
            <SnowTestReveal delay={240}>
              <ul className="stc-snow-test__trust" aria-label="Commercial credentials">
                {snowTest.statement.trust.map((item) => (
                  <li key={item}>
                    <Shield size={14} strokeWidth={1.75} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </SnowTestReveal>
          </div>
        </div>
      </section>

      {/* 4 — Process DARK (hard contrast from light statement) */}
      <section
        id="process"
        className="stc-snow-test__process"
        aria-labelledby="snow-test-process"
      >
        <div className="stc-snow-test__process-texture" aria-hidden />
        <div className="stc-snow-test__shell stc-snow-test__split">
          <SnowTestReveal className="stc-snow-test__split-media stc-snow-test__reveal--media" delay={0}>
            <div className="stc-snow-test__media-frame stc-snow-test__media-frame--on-dark">
              <div className="stc-snow-test__ken">
                <div className="stc-snow-test__ken-img">
                  <Image
                    src={processSrc}
                    alt="Heavy equipment clearing snow on a North Simcoe commercial industrial site"
                    fill
                    loading="lazy"
                    sizes="(max-width: 899px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="stc-snow-test__media-badge">Industrial storm response</span>
            </div>
          </SnowTestReveal>

          <div className="stc-snow-test__split-copy">
            <SnowTestReveal>
              <p className="stc-snow-test__eyebrow">{snowTest.process.eyebrow}</p>
            </SnowTestReveal>
            <SnowTestReveal delay={90}>
              <h2 id="snow-test-process" className="stc-snow-test__section-display stc-snow-test__section-display--on-dark">
                {snowTest.process.headline}
              </h2>
            </SnowTestReveal>
            <SnowTestReveal delay={180}>
              <p className="stc-snow-test__support stc-snow-test__support--on-dark">
                {snowTest.process.supporting}
              </p>
            </SnowTestReveal>
            <ul className="stc-snow-test__feature-rows stc-snow-test__feature-rows--on-dark">
              {snowTest.process.steps.map((step, i) => {
                const Icon = processIcons[i] ?? Snowflake;
                return (
                  <li key={step.title}>
                    <SnowTestReveal delay={220 + i * 90}>
                      <div className="stc-snow-test__feature-row">
                        <span className="stc-snow-test__feature-icon" aria-hidden>
                          <Icon size={22} strokeWidth={1.5} />
                        </span>
                        <div className="stc-snow-test__feature-body">
                          <h3 className="stc-snow-test__feature-title">{step.title}</h3>
                          <p className="stc-snow-test__feature-text">{step.body}</p>
                        </div>
                      </div>
                    </SnowTestReveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 — Coverage LIGHT · form 40% / imagery+CTA 60% */}
      <section
        id="coverage"
        className="stc-snow-test__coverage"
        aria-labelledby="snow-test-coverage"
      >
        <div className="stc-snow-test__shell stc-snow-test__quote-grid">
          <div className="stc-snow-test__quote-form-col">
            <SnowTestReveal>
              <p className="stc-snow-test__eyebrow stc-snow-test__eyebrow--on-light">
                {snowTest.coverage.eyebrow}
              </p>
            </SnowTestReveal>
            <SnowTestReveal delay={80}>
              <h2 id="snow-test-coverage" className="stc-snow-test__section-display">
                {snowTest.coverage.headline}
              </h2>
            </SnowTestReveal>
            <SnowTestReveal delay={140}>
              <p className="stc-snow-test__support">{snowTest.coverage.supporting}</p>
            </SnowTestReveal>
            <SnowTestReveal delay={200}>
              <ul className="stc-snow-test__towns" aria-label="Commercial towns served">
                {snowTest.coverage.towns.map((town) => (
                  <li key={town}>{town}</li>
                ))}
              </ul>
            </SnowTestReveal>

            <SnowTestReveal delay={260}>
              <div className="stc-snow-test__form-panel">
                <form className="stc-snow-test__form" onSubmit={handleQuote} noValidate>
                  <div className={`stc-snow-test__field${address ? " is-filled" : ""}`}>
                    <label htmlFor={`${formId}-address`}>Commercial site address</label>
                    <input
                      id={`${formId}-address`}
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      placeholder="Lot / building address, town"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="stc-snow-test__field-row">
                    <div className={`stc-snow-test__field${email ? " is-filled" : ""}`}>
                      <label htmlFor={`${formId}-email`}>Work email</label>
                      <input
                        id={`${formId}-email`}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className={`stc-snow-test__field${phone ? " is-filled" : ""}`}>
                      <label htmlFor={`${formId}-phone`}>Phone</label>
                      <input
                        id={`${formId}-phone`}
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(705) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={`stc-snow-test__field${propertyType ? " is-filled" : ""}`}>
                    <label htmlFor={`${formId}-type`}>Commercial property type</label>
                    <select
                      id={`${formId}-type`}
                      name="property-type"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="">Select…</option>
                      {snowTest.coverage.propertyTypes.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="stc-snow-test__btn stc-snow-test__btn--lg"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending…" : snowTest.coverage.submitLabel}
                  </button>
                  {formError ? (
                    <p className="stc-snow-test__form-error" role="alert">
                      {formError}
                    </p>
                  ) : null}
                  {formStatus === "success" ? (
                    <p className="stc-snow-test__form-ok" role="status">
                      Thanks — we&apos;ll confirm commercial coverage and reply shortly.
                    </p>
                  ) : null}
                  <p className="stc-snow-test__form-note">
                    <a href={`tel:${site.phoneTel}`} className="stc-snow-test__text-link">
                      {snowTest.coverage.unsureLink}
                      <span className="stc-snow-test__text-link-arrow" aria-hidden>
                        →
                      </span>
                    </a>
                  </p>
                </form>
              </div>
            </SnowTestReveal>
          </div>

          <SnowTestReveal className="stc-snow-test__quote-visual stc-snow-test__reveal--media" delay={120}>
            <div className="stc-snow-test__quote-visual-frame">
              <div className="stc-snow-test__ken">
                <div className="stc-snow-test__ken-img">
                  <Image
                    src={coverageSrc}
                    alt="Loader clearing deep snow at a commercial site in the Wasaga Beach area"
                    fill
                    loading="lazy"
                    sizes="(max-width: 899px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="stc-snow-test__quote-visual-scrim" aria-hidden />
              <div className="stc-snow-test__quote-visual-cta">
                <p className="stc-snow-test__eyebrow">{snowTest.coverage.panelTitle}</p>
                <p className="stc-snow-test__quote-visual-body">{snowTest.coverage.panelBody}</p>
                <a href={`tel:${site.phoneTel}`} className="stc-snow-test__btn stc-snow-test__btn--on-dark">
                  {snowTest.coverage.panelCta}
                </a>
              </div>
            </div>
          </SnowTestReveal>
        </div>
      </section>

      {/* 6 — Testimonial DARK */}
      <section
        className="stc-snow-test__quote"
        aria-labelledby="snow-test-quote"
      >
        <div className="stc-snow-test__quote-glow" aria-hidden />
        <div className="stc-snow-test__shell stc-snow-test__quote-inner">
          <SnowTestReveal className="stc-snow-test__quote-block">
            <span className="stc-snow-test__quote-mark" aria-hidden>
              “
            </span>
            <blockquote>
              <p id="snow-test-quote">{snowTest.testimonial.quote}</p>
              <div className="stc-snow-test__quote-rule" aria-hidden />
              <footer>
                <strong>{snowTest.testimonial.name}</strong>
                <span>{snowTest.testimonial.role}</span>
              </footer>
            </blockquote>
          </SnowTestReveal>
        </div>
      </section>

      {/* 7 — Closing CTA GREEN (hard contrast from dark quote) */}
      <section
        ref={ctaBandRef}
        className="stc-snow-test__close"
        aria-labelledby="snow-test-close"
      >
        <div className="stc-snow-test__close-parallax" ref={ctaParallaxRef} aria-hidden />
        <div className="stc-snow-test__close-seam" aria-hidden />
        <div className="stc-snow-test__shell stc-snow-test__close-inner">
          <SnowTestReveal>
            <p className="stc-snow-test__eyebrow">{snowTest.close.eyebrow}</p>
          </SnowTestReveal>
          <SnowTestReveal delay={100}>
            <h2 id="snow-test-close" className="stc-snow-test__section-display stc-snow-test__section-display--on-dark">
              {snowTest.close.headline}
            </h2>
          </SnowTestReveal>
          <SnowTestReveal delay={200}>
            <a href="#coverage" className="stc-snow-test__btn stc-snow-test__btn--on-dark stc-snow-test__btn--lg">
              {snowTest.close.primaryCta}
            </a>
          </SnowTestReveal>
        </div>
      </section>

      {/* 8 — Footer */}
      <footer className="stc-snow-test__foot">
        <div className="stc-snow-test__shell stc-snow-test__foot-inner">
          <div className="stc-snow-test__foot-brand">
            <Wordmark />
            <p>{snowTest.footer.tagline}</p>
          </div>
          <ul className="stc-snow-test__foot-links">
            {snowTest.footer.links.map((link, i) => (
              <li key={link.href}>
                {i > 0 ? <span className="stc-snow-test__foot-sep" aria-hidden /> : null}
                {link.href.startsWith("/") ? (
                  <Link href={link.href} className="stc-snow-test__text-link stc-snow-test__text-link--on-dark">
                    {link.label}
                    <span className="stc-snow-test__text-link-arrow" aria-hidden>
                      →
                    </span>
                  </Link>
                ) : (
                  <a href={link.href} className="stc-snow-test__text-link stc-snow-test__text-link--on-dark">
                    {link.label}
                    <span className="stc-snow-test__text-link-arrow" aria-hidden>
                      →
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <p className="stc-snow-test__foot-copy">{snowTest.footer.copyright}</p>
        </div>
        <div className="stc-snow-test__foot-signature" aria-hidden />
      </footer>
    </div>
  );
}
