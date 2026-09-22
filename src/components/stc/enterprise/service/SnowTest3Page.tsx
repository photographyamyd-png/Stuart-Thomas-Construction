"use client";

import Image from "next/image";
import { useId, useState, type FormEvent } from "react";
import { snowTest3 as copy } from "@/data/snow-test-3-page";
import { site } from "@/data/site";
import { EMAIL_PATTERN } from "@/lib/contact-email";
import { submitContactForm } from "@/lib/submit-contact-client";

type Props = {
  heroSrc: string;
  heroAlt: string;
  coverageSrc: string;
};

/**
 * /preview-3015 — commercial/industrial snow sandbox.
 * Uses standard site header/footer via MarketingShell.
 */
export function SnowTest3Page({ heroSrc, heroAlt, coverageSrc }: Props) {
  const formId = useId();
  const [propertyType, setPropertyType] = useState<string>(copy.quote.propertyTypes[0]);
  const [location, setLocation] = useState("");
  const [timeline, setTimeline] = useState<string>(copy.quote.timelines[0]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [formError, setFormError] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  async function handleQuote(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    const addr = location.trim();
    const fullName = name.trim();
    const companyName = company.trim();
    const tel = phone.trim();
    const mail = email.trim();

    if (!fullName) {
      setFormError("Enter your name.");
      return;
    }
    if (!companyName) {
      setFormError("Enter your company or property name.");
      return;
    }
    if (!addr) {
      setFormError("Enter your property address or postal code.");
      return;
    }
    if (!tel) {
      setFormError("Enter a phone number.");
      return;
    }
    if (!mail) {
      setFormError("Include an email so we can send your quote.");
      return;
    }
    if (!EMAIL_PATTERN.test(mail)) {
      setFormError("Enter a valid email address.");
      return;
    }

    const towns = [
      "Midland",
      "Penetanguishene",
      "Tay Township",
      "Tiny Township",
      "Wasaga Beach",
    ];
    const town =
      towns.find((t) => addr.toLowerCase().includes(t.toLowerCase().split(" ")[0]!)) ??
      "North Simcoe";

    setFormStatus("submitting");
    try {
      const result = await submitContactForm({
        kind: "snow-quote",
        name: fullName,
        company: companyName,
        email: mail,
        phone: tel,
        town,
        propertyType,
        serviceNeeded: timeline,
        address: addr,
        message: notes.trim() || undefined,
      });
      if (!result.ok) {
        setFormError(result.error);
        setFormStatus("error");
        return;
      }
      setFormStatus("success");
      setLocation("");
      setName("");
      setCompany("");
      setPhone("");
      setEmail("");
      setNotes("");
      setPropertyType(copy.quote.propertyTypes[0]);
      setTimeline(copy.quote.timelines[0]);
    } catch {
      setFormError(`Something went wrong. Call ${site.phoneDisplay}.`);
      setFormStatus("error");
    }
  }

  return (
    <div className="stc-snow-test-3">
      {/* 1 — Hero */}
      <section className="stc-snow-test-3__hero" aria-labelledby="snow-test-3-heading">
        <div className="stc-snow-test-3__hero-media" aria-hidden={!heroAlt}>
          <Image
            src={heroSrc}
            alt={heroAlt || copy.hero.imageAlt}
            fill
            priority
            sizes="100vw"
          />
          <div className="stc-snow-test-3__hero-overlay" aria-hidden />
        </div>
        <div className="stc-snow-test-3__hero-inner">
          <p className="stc-snow-test-3__eyebrow stc-snow-test-3__eyebrow--on-dark">
            {copy.hero.eyebrow}
          </p>
          <h1 id="snow-test-3-heading">{copy.hero.headline}</h1>
          <p className="stc-snow-test-3__support">{copy.hero.supporting}</p>
          <div className="stc-snow-test-3__hero-actions">
            <a href="#quote" className="btn-accent btn-accent--lg">
              {copy.hero.primaryCta}
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-ghost btn-ghost--lg">
              {copy.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* 2 — Services */}
      <section
        id="services"
        className="stc-snow-test-3__section stc-snow-test-3__section--services"
        aria-labelledby="snow-test-3-services"
      >
        <div className="stc-snow-test-3__shell">
          <div className="stc-snow-test-3__head">
            <p className="stc-snow-test-3__eyebrow stc-snow-test-3__eyebrow--on-light">
              {copy.services.eyebrow}
            </p>
            <h2 id="snow-test-3-services">{copy.services.headline}</h2>
            <p className="stc-snow-test-3__support">{copy.services.supporting}</p>
          </div>
          <div className="stc-snow-test-3__services-grid">
            {copy.services.cards.map((card, i) => (
              <article
                key={card.title}
                className={`stc-snow-test-3__card${i === 1 ? " stc-snow-test-3__card--offset" : ""}`}
              >
                <span className="stc-snow-test-3__label">{card.label}</span>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#quote" className="stc-snow-test-3__card-link">
                  {card.link}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Process */}
      <section
        id="process"
        className="stc-snow-test-3__section stc-snow-test-3__section--process"
        aria-labelledby="snow-test-3-process"
      >
        <div className="stc-snow-test-3__shell">
          <div className="stc-snow-test-3__head">
            <p className="stc-snow-test-3__eyebrow stc-snow-test-3__eyebrow--gold">
              {copy.howItWorks.eyebrow}
            </p>
            <h2 id="snow-test-3-process">{copy.howItWorks.headline}</h2>
            <p className="stc-snow-test-3__support">{copy.howItWorks.supporting}</p>
          </div>
          <div className="stc-snow-test-3__steps">
            {copy.howItWorks.steps.map((item) => (
              <div key={item.step} className="stc-snow-test-3__step">
                <div className="stc-snow-test-3__step-marker">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Quote 40/60 */}
      <section
        id="quote"
        className="stc-snow-test-3__section--quote"
        aria-labelledby="snow-test-3-quote"
      >
        <div className="stc-snow-test-3__quote-split">
          <div className="stc-snow-test-3__form-card">
            <p className="stc-snow-test-3__eyebrow stc-snow-test-3__eyebrow--on-light">
              {copy.quote.eyebrow}
            </p>
            <h2 id="snow-test-3-quote">{copy.quote.headline}</h2>
            <p className="stc-snow-test-3__support">{copy.quote.supporting}</p>

            {formStatus === "success" ? (
              <p className="stc-snow-test-3__form-success" role="status">
                {copy.quote.successMessage}
              </p>
            ) : (
              <form className="stc-snow-test-3__form" onSubmit={handleQuote} noValidate>
                <div className="stc-snow-test-3__field">
                  <label htmlFor={`${formId}-name`}>Name</label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="stc-snow-test-3__field">
                  <label htmlFor={`${formId}-company`}>Company / property</label>
                  <input
                    id={`${formId}-company`}
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
                <div className="stc-snow-test-3__field">
                  <label htmlFor={`${formId}-location`}>Property address or postal code</label>
                  <input
                    id={`${formId}-location`}
                    name="location"
                    type="text"
                    autoComplete="street-address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="stc-snow-test-3__field-row">
                  <div className="stc-snow-test-3__field">
                    <label htmlFor={`${formId}-phone`}>Phone</label>
                    <input
                      id={`${formId}-phone`}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="stc-snow-test-3__field">
                    <label htmlFor={`${formId}-email`}>Email</label>
                    <input
                      id={`${formId}-email`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="stc-snow-test-3__field-row">
                  <div className="stc-snow-test-3__field">
                    <label htmlFor={`${formId}-type`}>Property type</label>
                    <select
                      id={`${formId}-type`}
                      name="propertyType"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      {copy.quote.propertyTypes.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="stc-snow-test-3__field">
                    <label htmlFor={`${formId}-timeline`}>Timeline</label>
                    <select
                      id={`${formId}-timeline`}
                      name="timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                    >
                      {copy.quote.timelines.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="stc-snow-test-3__field">
                  <label htmlFor={`${formId}-notes`}>Notes (optional)</label>
                  <textarea
                    id={`${formId}-notes`}
                    name="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                {formError ? (
                  <p className="stc-snow-test-3__form-error" role="alert">
                    {formError}
                  </p>
                ) : null}
                <button
                  type="submit"
                  className="btn-accent btn-accent--lg stc-snow-test-3__btn--full"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Sending…" : copy.quote.submitLabel}
                </button>
                <p className="stc-snow-test-3__form-note">{copy.quote.disclaimer}</p>
              </form>
            )}
          </div>

          <aside className="stc-snow-test-3__quote-panel" aria-label="Quote callout">
            <div className="stc-snow-test-3__quote-panel-media" aria-hidden>
              <Image src={coverageSrc} alt="" fill sizes="(max-width: 900px) 100vw, 60vw" />
              <div className="stc-snow-test-3__quote-panel-overlay" />
            </div>
            <div className="stc-snow-test-3__quote-panel-copy">
              <p className="stc-snow-test-3__eyebrow stc-snow-test-3__eyebrow--on-dark">
                {copy.quote.panelEyebrow}
              </p>
              <h3>{copy.quote.panelHeadline}</h3>
              <p className="stc-snow-test-3__support">{copy.quote.panelBody}</p>
              <div className="stc-snow-test-3__quote-panel-phone">
                <span>{copy.quote.panelCta}</span>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 5 — Proof */}
      <section
        id="proof"
        className="stc-snow-test-3__section stc-snow-test-3__section--proof"
        aria-labelledby="snow-test-3-proof"
      >
        <div className="stc-snow-test-3__shell">
          <div className="stc-snow-test-3__proof-grid">
            <div className="stc-snow-test-3__proof-copy">
              <p className="stc-snow-test-3__eyebrow stc-snow-test-3__eyebrow--gold">
                {copy.proof.eyebrow}
              </p>
              <h2 id="snow-test-3-proof">{copy.proof.headline}</h2>
              <p className="stc-snow-test-3__support">{copy.proof.supporting}</p>
              <div className="stc-snow-test-3__testimonials">
                {copy.proof.testimonials.map((t) => (
                  <div key={t.attribution} className="stc-snow-test-3__testimonial">
                    <span className="stc-snow-test-3__star" aria-hidden>
                      ★
                    </span>
                    <p>
                      “{t.quote}” – {t.attribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="stc-snow-test-3__area-card">
              <span className="stc-snow-test-3__label">{copy.proof.area.label}</span>
              <h3>{copy.proof.area.title}</h3>
              <p>{copy.proof.area.body}</p>
              <div className="stc-snow-test-3__area-media">
                <Image
                  src={coverageSrc}
                  alt="Commercial snow clearing equipment serving North Simcoe properties"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Close CTA (site ConversionBar + footer follow) */}
      <section
        className="stc-snow-test-3__section stc-snow-test-3__section--close"
        aria-labelledby="snow-test-3-close"
      >
        <div className="stc-snow-test-3__footer-cta">
          <p className="stc-snow-test-3__eyebrow stc-snow-test-3__eyebrow--on-dark">
            {copy.footerCta.eyebrow}
          </p>
          <h2 id="snow-test-3-close">{copy.footerCta.headline}</h2>
          <p className="stc-snow-test-3__support">{copy.footerCta.supporting}</p>
          <a href="#quote" className="btn-accent btn-accent--lg">
            {copy.footerCta.cta}
          </a>
        </div>
      </section>
    </div>
  );
}
