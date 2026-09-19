"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { snowFinalCta } from "@/data/snow-page";
import { site } from "@/data/site";
import { submitContactForm } from "@/lib/submit-contact-client";

const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

const PROPERTY_TYPES = [
  "Factory / Industrial",
  "Warehouse / Logistics",
  "Commercial Building / Office",
  "Retail / Plaza",
  "Other",
] as const;

const TOWNS = [
  "Midland",
  "Penetanguishene",
  "Tay Township",
  "Tiny Township",
  "Wasaga Beach",
] as const;

const SERVICE_NEEDED = [
  "Seasonal contract",
  "Plowing",
  "Salting & sanding",
  "Snow haul-out",
  "Other",
] as const;

type FieldErrors = Partial<
  Record<"name" | "company" | "email" | "phone" | "town" | "propertyType" | "serviceNeeded" | "address", string>
>;

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  town: string;
  propertyType: string;
  serviceNeeded: string;
  address: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  town: "",
  propertyType: "",
  serviceNeeded: "",
  address: "",
  message: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.company.trim()) errors.company = "Company is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone is required.";
  if (!values.town) errors.town = "Select a town.";
  if (!values.propertyType) errors.propertyType = "Select a property type.";
  if (!values.serviceNeeded) errors.serviceNeeded = "Select a service.";
  if (!values.address.trim()) errors.address = "Property address is required.";
  return errors;
}

export function SnowQuoteFormBand({ backdropSrc }: { backdropSrc: string }) {
  const baseId = useId();
  const searchParams = useSearchParams();
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  // Sync when CTAs navigate with ?service=… (same-page client nav must update).
  useEffect(() => {
    const fromQuery = searchParams.get("service");
    if (fromQuery && (SERVICE_NEEDED as readonly string[]).includes(fromQuery)) {
      setValues((prev) =>
        prev.serviceNeeded === fromQuery ? prev : { ...prev, serviceNeeded: fromQuery },
      );
    }
  }, [searchParams]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key as keyof FieldErrors]) return prev;
      const next = { ...prev };
      delete next[key as keyof FieldErrors];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setServerError("");
    try {
      const result = await submitContactForm({
        kind: "snow-quote",
        name: values.name.trim(),
        company: values.company.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        town: values.town,
        propertyType: values.propertyType,
        serviceNeeded: values.serviceNeeded,
        address: values.address.trim(),
        message: values.message.trim() || undefined,
      });
      if (!result.ok) {
        setServerError(result.error);
        setStatus("error");
        return;
      }
      setStatus("success");
      setValues(INITIAL);
    } catch (err) {
      console.error("Snow quote submit failed", err);
      setServerError("Something went wrong. Please call us.");
      setStatus("error");
    }
  }

  function fieldClass(key: keyof FieldErrors) {
    return errors[key] ? "stc-snow-quote-form__control is-invalid" : "stc-snow-quote-form__control";
  }

  return (
    <section
      id="quote-form"
      className="stc-snow-quote turner-band turner-band--dark turner-band--seam"
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="stc-snow-quote__media" aria-hidden>
        <Image
          src={backdropSrc}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover stc-snow-quote__img"
        />
      </div>
      <div className="stc-snow-quote__veil" aria-hidden />

      <div className="container stc-snow-quote__inner">
        <header className="stc-snow-quote__head">
          <p className="eyebrow eyebrow--on-dark">Get a Quote</p>
          <h2 id={`${baseId}-heading`} className="text-display text-display--section stack-title">
            {snowFinalCta.headline}
          </h2>
          <p className="wf-type-supporting stc-snow-quote__cta-line">{snowFinalCta.subline}</p>
        </header>

        <form
          className="stc-snow-quote-form"
          name="commercial-snow-quote"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="stc-snow-quote-form__grid">
            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-name`}>Name *</label>
              <input
                id={`${baseId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                value={values.name}
                onChange={(e) => updateField("name", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? `${baseId}-name-err` : undefined}
                className={fieldClass("name")}
              />
              {errors.name && (
                <p id={`${baseId}-name-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-company`}>Company *</label>
              <input
                id={`${baseId}-company`}
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Your business or property name"
                value={values.company}
                onChange={(e) => updateField("company", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.company ? "true" : undefined}
                aria-describedby={errors.company ? `${baseId}-company-err` : undefined}
                className={fieldClass("company")}
              />
              {errors.company && (
                <p id={`${baseId}-company-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.company}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-phone`}>Phone *</label>
              <input
                id={`${baseId}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(705) 555-0199"
                value={values.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.phone ? "true" : undefined}
                aria-describedby={errors.phone ? `${baseId}-phone-err` : undefined}
                className={fieldClass("phone")}
              />
              {errors.phone && (
                <p id={`${baseId}-phone-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-email`}>Email *</label>
              <input
                id={`${baseId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                value={values.email}
                onChange={(e) => updateField("email", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={errors.email ? `${baseId}-email-err` : undefined}
                className={fieldClass("email")}
              />
              {errors.email && (
                <p id={`${baseId}-email-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field stc-snow-quote-form__field--full">
              <label htmlFor={`${baseId}-address`}>Property address *</label>
              <input
                id={`${baseId}-address`}
                name="address"
                type="text"
                autoComplete="street-address"
                placeholder="Street address"
                value={values.address}
                onChange={(e) => updateField("address", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.address ? "true" : undefined}
                aria-describedby={errors.address ? `${baseId}-address-err` : undefined}
                className={fieldClass("address")}
              />
              {errors.address && (
                <p id={`${baseId}-address-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.address}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-town`}>Town *</label>
              <select
                id={`${baseId}-town`}
                name="town"
                value={values.town}
                onChange={(e) => updateField("town", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.town ? "true" : undefined}
                aria-describedby={errors.town ? `${baseId}-town-err` : undefined}
                className={fieldClass("town")}
              >
                <option value="">Select...</option>
                {TOWNS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.town && (
                <p id={`${baseId}-town-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.town}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-property-type`}>Property type *</label>
              <select
                id={`${baseId}-property-type`}
                name="property-type"
                value={values.propertyType}
                onChange={(e) => updateField("propertyType", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.propertyType ? "true" : undefined}
                aria-describedby={errors.propertyType ? `${baseId}-property-type-err` : undefined}
                className={fieldClass("propertyType")}
              >
                <option value="">Select...</option>
                {PROPERTY_TYPES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.propertyType && (
                <p id={`${baseId}-property-type-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.propertyType}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field stc-snow-quote-form__field--full">
              <label htmlFor={`${baseId}-service`}>Service needed *</label>
              <select
                id={`${baseId}-service`}
                name="service-needed"
                value={values.serviceNeeded}
                onChange={(e) => updateField("serviceNeeded", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.serviceNeeded ? "true" : undefined}
                aria-describedby={errors.serviceNeeded ? `${baseId}-service-err` : undefined}
                className={fieldClass("serviceNeeded")}
              >
                <option value="">Select...</option>
                {SERVICE_NEEDED.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.serviceNeeded && (
                <p id={`${baseId}-service-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.serviceNeeded}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field stc-snow-quote-form__field--full">
              <label htmlFor={`${baseId}-message`}>Message</label>
              <textarea
                id={`${baseId}-message`}
                name="message"
                rows={4}
                placeholder="Lot details, priority areas, timing…"
                value={values.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="stc-snow-quote-form__control"
              />
            </div>
          </div>

          <div className="stc-snow-quote-form__actions">
            <button
              type="submit"
              className="btn-accent btn-accent--lg"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : snowFinalCta.button}
            </button>
            <a href={`tel:${site.phoneTel}`} className="btn-solid stc-snow-quote-form__call">
              Call Us
            </a>
          </div>

          {status === "success" && (
            <p className="stc-snow-quote-form__status stc-snow-quote-form__status--success" role="status">
              Thanks — your quote request was sent. We&apos;ll reply within one business day.
            </p>
          )}
          {status === "error" && (
            <p className="stc-snow-quote-form__status stc-snow-quote-form__status--error" role="alert">
              {serverError || `Something went wrong. Please call ${site.phoneDisplay}.`}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
