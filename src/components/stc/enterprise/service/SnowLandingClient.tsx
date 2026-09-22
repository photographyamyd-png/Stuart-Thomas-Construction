"use client";

import Image from "next/image";
import { useId, useState, type FormEvent } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Container,
  Footprints,
  Navigation,
  Quote,
  Shield,
  Snowflake,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { snowLanding } from "@/data/snow-page";
import { site } from "@/data/site";
import { EMAIL_PATTERN } from "@/lib/contact-email";
import { submitContactForm } from "@/lib/submit-contact-client";

type Props = {
  heroSrc: string;
  heroAlt: string;
  proofSrc: string;
  coverageSrc: string;
};

const serviceIcons: LucideIcon[] = [Truck, Snowflake, Footprints, Container];
const proofIcons: LucideIcon[] = [CheckCircle2, Navigation, Shield];

const TOWN_PINS = [
  { name: "Penetanguishene", cx: 175, cy: 95 },
  { name: "Midland", cx: 235, cy: 130 },
] as const;

/**
 * Condensed commercial snow landing — six sections + quote form.
 * Uses standard site header/footer via MarketingShell.
 */
export function SnowLandingClient({ heroSrc, heroAlt, proofSrc, coverageSrc }: Props) {
  const formId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [formError, setFormError] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  async function handleQuote(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    const addr = address.trim();
    const mail = email.trim();
    const tel = phone.trim();
    if (!addr) {
      setFormError("Enter your commercial property address.");
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
      setFormError("Include an email so we can send your commercial quote.");
      return;
    }

    const town =
      snowLanding.coverage.towns.find((t) =>
        addr.toLowerCase().includes(t.toLowerCase().split(" ")[0]!),
      ) ?? "North Simcoe";

    setFormStatus("submitting");
    try {
      const result = await submitContactForm({
        kind: "snow-quote",
        name: "Commercial quote request",
        company: "Commercial / industrial property",
        email: mail,
        phone: tel || "Not provided",
        town,
        propertyType: propertyType || "Other commercial",
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
    <div className="stc-snow-landing">
      <section className="stc-snow-landing__hero" aria-labelledby="snow-landing-heading">
        <div className="container stc-snow-landing__hero-grid">
          <div className="stc-snow-landing__hero-copy">
            <p className="eyebrow">{snowLanding.hero.eyebrow}</p>
            <h1 id="snow-landing-heading" className="text-display">
              <span className="stc-snow-landing__hero-line">{snowLanding.hero.headlineLine1}</span>
              <span className="stc-snow-landing__hero-line">{snowLanding.hero.headlineLine2}</span>
              <span className="stc-snow-landing__hero-line">{snowLanding.hero.headlineLine3}</span>
            </h1>
            <p className="wf-type-supporting">{snowLanding.hero.supporting}</p>
            <div className="stc-snow-landing__hero-actions">
              <a href="#quote-form" className="btn-accent btn-accent--lg">
                {snowLanding.hero.primaryCta}
              </a>
              <a href={`tel:${site.phoneTel}`} className="stc-snow-landing__hero-phone">
                {snowLanding.hero.secondaryCta} · {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="stc-snow-landing__hero-media-wrap">
            <div className="stc-snow-landing__hero-media">
              <Image
                src={heroSrc}
                alt={heroAlt || snowLanding.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 899px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <aside className="stc-snow-landing__stat" aria-label="Commercial storm response">
              <strong>{snowLanding.hero.statValue}</strong>
              <span>{snowLanding.hero.statLabel}</span>
            </aside>
          </div>
        </div>
      </section>

      <div className="stc-snow-landing__seam" aria-hidden />

      <section className="stc-snow-landing__trust" aria-labelledby="snow-landing-trust">
        <div className="container">
          <p id="snow-landing-trust" className="eyebrow eyebrow--on-dark stc-snow-landing__trust-eye">
            {snowLanding.trust.eyebrow}
          </p>
          <ul className="stc-snow-landing__trust-row">
            {snowLanding.trust.items.map((item) => (
              <li key={item} className="stc-snow-landing__trust-item">
                <CheckCircle2 size={16} strokeWidth={2} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="stc-snow-landing__seam" aria-hidden />

      <section
        id="services"
        className="stc-snow-landing__services turner-band"
        aria-labelledby="snow-landing-services"
      >
        <div className="container">
          <header className="stc-snow-landing__section-head">
            <p className="eyebrow">{snowLanding.services.eyebrow}</p>
            <h2 id="snow-landing-services" className="text-display text-display--section">
              {snowLanding.services.headline}
            </h2>
            <p className="wf-type-supporting">{snowLanding.services.supporting}</p>
          </header>

          <ul className="stc-snow-landing__service-grid">
            {snowLanding.services.cards.map((card, i) => {
              const Icon = serviceIcons[i] ?? Snowflake;
              return (
                <li key={card.title}>
                  <a href="#quote-form" className="stc-snow-landing__service-card">
                    <span className="stc-snow-landing__icon" aria-hidden>
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <div className="stc-snow-landing__service-body">
                      <h3 className="stc-snow-landing__service-title">{card.title}</h3>
                      <p className="wf-type-supporting">{card.body}</p>
                    </div>
                    <ChevronRight className="stc-snow-landing__service-arrow" size={18} aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="stc-snow-landing__seam" aria-hidden />

      <section
        className="stc-snow-landing__proof turner-band"
        aria-labelledby="snow-landing-proof"
      >
        <div className="container stc-snow-landing__proof-grid">
          <div className="stc-snow-landing__proof-copy">
            <p className="eyebrow">{snowLanding.proof.eyebrow}</p>
            <h2 id="snow-landing-proof" className="text-display text-display--section">
              {snowLanding.proof.headline}
            </h2>
            <ul className="stc-snow-landing__proof-list">
              {snowLanding.proof.points.map((point, i) => {
                const Icon = proofIcons[i] ?? CheckCircle2;
                return (
                  <li key={point.title}>
                    <span className="stc-snow-landing__icon stc-snow-landing__icon--soft" aria-hidden>
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="stc-snow-landing__proof-title">{point.title}</h3>
                      <p className="wf-type-supporting">{point.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="stc-snow-landing__quote-stage">
            <div className="stc-snow-landing__quote-media" aria-hidden>
              <Image
                src={proofSrc}
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 899px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <blockquote className="stc-snow-landing__quote-card">
              <Quote className="stc-snow-landing__quote-mark" size={28} strokeWidth={1.5} aria-hidden />
              <p>{snowLanding.proof.testimonial.quote}</p>
              <footer>
                <span className="stc-snow-landing__avatar" aria-hidden />
                <span>
                  <strong>{snowLanding.proof.testimonial.name}</strong>
                  <em>{snowLanding.proof.testimonial.role}</em>
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="stc-snow-landing__seam" aria-hidden />

      <section
        id="coverage"
        className="stc-snow-landing__coverage turner-band"
        aria-labelledby="snow-landing-coverage"
      >
        <div className="container stc-snow-landing__coverage-grid">
          <div className="stc-snow-landing__coverage-form-wrap">
            <p className="eyebrow eyebrow--on-dark">{snowLanding.coverage.eyebrow}</p>
            <h2 id="snow-landing-coverage" className="text-display text-display--section">
              {snowLanding.coverage.headline}
            </h2>
            <p className="wf-type-supporting stc-snow-landing__coverage-support">
              {snowLanding.coverage.supporting}
            </p>

            <form
              id="quote-form"
              className="stc-snow-landing__form"
              onSubmit={handleQuote}
              noValidate
            >
              <div className="stc-snow-landing__field">
                <label htmlFor={`${formId}-address`}>{snowLanding.coverage.addressLabel}</label>
                <input
                  id={`${formId}-address`}
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  placeholder={snowLanding.coverage.addressPlaceholder}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="stc-snow-landing__field-row">
                <div className="stc-snow-landing__field">
                  <label htmlFor={`${formId}-email`}>Email</label>
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
                <div className="stc-snow-landing__field">
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
              <div className="stc-snow-landing__field">
                <label htmlFor={`${formId}-type`}>Commercial property type</label>
                <select
                  id={`${formId}-type`}
                  name="property-type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Select…</option>
                  {snowLanding.coverage.propertyTypes.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="btn-accent btn-accent--lg"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending…" : snowLanding.coverage.submitLabel}
              </button>
              {formError ? (
                <p className="stc-snow-landing__form-error" role="alert">
                  {formError}
                </p>
              ) : null}
              {formStatus === "success" ? (
                <p className="stc-snow-landing__form-ok" role="status">
                  Thanks — we&apos;ll confirm commercial coverage and reply shortly.
                </p>
              ) : null}
            </form>
          </div>

          <aside className="stc-snow-landing__coverage-panel">
            <div className="stc-snow-landing__coverage-media">
              <Image
                src={coverageSrc}
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 899px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="stc-snow-landing__coverage-cta">
              <p className="eyebrow eyebrow--on-dark">{snowLanding.coverage.panelEyebrow}</p>
              <p className="stc-snow-landing__coverage-panel-title">
                {snowLanding.coverage.panelHeadline}
              </p>
              <p className="wf-type-supporting stc-snow-landing__coverage-panel-body">
                {snowLanding.coverage.panelSupporting}
              </p>
              <p className="stc-snow-landing__coverage-storm">
                <span className="eyebrow eyebrow--on-dark">{snowLanding.coverage.phoneLabel}</span>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </p>
              <div
                className="stc-snow-landing__map stc-snow-landing__map--overlay"
                role="img"
                aria-label={snowLanding.coverage.mapLabel}
              >
                <svg viewBox="0 0 400 220" className="stc-snow-landing__map-svg" aria-hidden>
                  <rect width="400" height="220" className="stc-snow-landing__map-base" />
                  <path
                    className="stc-snow-landing__map-poly"
                    d="M95 145 L130 70 L185 55 L250 80 L280 130 L245 165 L165 170 Z"
                  />
                  {TOWN_PINS.map((pin) => (
                    <g key={pin.name}>
                      <circle
                        cx={pin.cx}
                        cy={Math.max(40, pin.cy - 40)}
                        r="6"
                        className="stc-snow-landing__map-pin"
                      />
                      <text
                        x={pin.cx}
                        y={Math.max(40, pin.cy - 40) - 10}
                        textAnchor="middle"
                        className="stc-snow-landing__map-label"
                      >
                        {pin.name}
                      </text>
                    </g>
                  ))}
                </svg>
                <span className="stc-snow-landing__map-caption">{snowLanding.coverage.mapLabel}</span>
              </div>
              <p className="stc-snow-landing__map-note">
                <a href={`tel:${site.phoneTel}`}>{snowLanding.coverage.unsureLink}</a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <div className="stc-snow-landing__seam stc-snow-landing__seam--before-dark" aria-hidden />

      <section
        id="close"
        className="stc-snow-landing__close"
        aria-labelledby="snow-landing-close"
      >
        <div className="stc-snow-landing__close-split">
          <div className="stc-snow-landing__close-faq-pane">
            <div className="stc-snow-landing__close-pane-inner">
              <header className="stc-snow-landing__faq-head">
                <p className="eyebrow">{snowLanding.faqSection.eyebrow}</p>
                <h2 className="stc-snow-landing__faq-title">{snowLanding.faqSection.headline}</h2>
              </header>
              <div className="stc-snow-landing__faq-stack">
                <div className="stc-snow-landing__faq">
                  {snowLanding.faqs.map((item, i) => {
                    const open = openFaq === i;
                    const n = String(i + 1).padStart(2, "0");
                    return (
                      <div
                        key={item.q}
                        className={`stc-snow-landing__faq-item${open ? " is-open" : ""}`}
                      >
                        <button
                          type="button"
                          className="stc-snow-landing__faq-q"
                          aria-expanded={open}
                          onClick={() => setOpenFaq(open ? null : i)}
                        >
                          <span className="stc-snow-landing__faq-index" aria-hidden>
                            {n}
                          </span>
                          <span className="stc-snow-landing__faq-q-text">{item.q}</span>
                          <span className="stc-snow-landing__faq-toggle" aria-hidden>
                            <ChevronDown className="stc-snow-landing__faq-chevron" size={16} />
                          </span>
                        </button>
                        {open ? (
                          <div className="stc-snow-landing__faq-a">
                            <p className="wf-type-supporting">{item.a}</p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="stc-snow-landing__close-cta-pane">
            <div className="stc-snow-landing__close-pane-inner stc-snow-landing__close-cta">
              <p className="eyebrow eyebrow--on-dark">{snowLanding.close.eyebrow}</p>
              <h2 id="snow-landing-close" className="text-display text-display--section">
                {snowLanding.close.headline}
              </h2>
              <p className="wf-type-supporting stc-snow-landing__close-support">
                {snowLanding.close.supporting}
              </p>
              <a href="#quote-form" className="btn-accent btn-accent--lg">
                {snowLanding.close.primaryCta}
              </a>
              <p className="stc-snow-landing__storm-line">
                <span className="eyebrow eyebrow--on-dark">{snowLanding.close.phoneLabel}</span>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
