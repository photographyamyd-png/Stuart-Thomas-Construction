"use client";

import { useId, useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { snowQuoteMailtoHref } from "@/lib/site-mailto";

const PROPERTY_TYPES = [
  "Plaza",
  "Office Building",
  "Multi-Residential",
  "Municipal",
  "Other",
] as const;

const LOT_SIZES = [
  "<5,000 sq ft",
  "5,000–20,000 sq ft",
  "20,000–50,000 sq ft",
  "50,000+ sq ft",
] as const;

const SERVICE_OPTIONS = [
  "Plowing",
  "Salting/Sanding",
  "Walkway Clearing",
  "Emergency Response",
  "Hauling",
] as const;

const HEAR_ABOUT_OPTIONS = [
  "Google",
  "Referral",
  "Sign",
  "Social Media",
  "Other",
] as const;

const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

type FieldErrors = Partial<
  Record<
    | "businessName"
    | "contactName"
    | "email"
    | "phone"
    | "propertyType"
    | "lotSize"
    | "services"
    | "address",
    string
  >
>;

type FormState = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  propertyType: string;
  lotSize: string;
  services: string[];
  address: string;
  details: string;
  preferredStart: string;
  hearAbout: string;
};

const INITIAL: FormState = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  propertyType: "",
  lotSize: "",
  services: [],
  address: "",
  details: "",
  preferredStart: "",
  hearAbout: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.businessName.trim()) errors.businessName = "Business name is required.";
  if (!values.contactName.trim()) errors.contactName = "Contact name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Phone is required.";
  } else {
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11) {
      errors.phone = "Enter a North American phone number.";
    }
  }
  if (!values.propertyType) errors.propertyType = "Select a property type.";
  if (!values.lotSize) errors.lotSize = "Select an estimated lot size.";
  if (values.services.length === 0) errors.services = "Select at least one service.";
  if (!values.address.trim()) errors.address = "Property address is required.";
  return errors;
}

export function SnowQuoteFormBand() {
  const baseId = useId();
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key as keyof FieldErrors];
      return next;
    });
    if (status !== "idle") setStatus("idle");
  }

  function toggleService(service: string) {
    setValues((prev) => {
      const next = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: next };
    });
    setErrors((prev) => {
      if (!prev.services) return prev;
      const next = { ...prev };
      delete next.services;
      return next;
    });
    if (status !== "idle") setStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    const phoneDigits = values.phone.replace(/\D/g, "");
    try {
      const href = snowQuoteMailtoHref({
        businessName: values.businessName.trim(),
        contactName: values.contactName.trim(),
        email: values.email.trim(),
        phoneDigits,
        phoneDisplay: values.phone.trim(),
        propertyType: values.propertyType,
        lotSize: values.lotSize,
        services: values.services,
        address: values.address.trim(),
        details: values.details,
        preferredStart: values.preferredStart,
        hearAbout: values.hearAbout,
      });
      window.location.href = href;
      setStatus("success");
    } catch (err) {
      console.error("Snow quote mailto failed", err);
      setStatus("error");
    }
  }

  function fieldClass(key: keyof FieldErrors) {
    return errors[key] ? "stc-snow-quote-form__control is-invalid" : "stc-snow-quote-form__control";
  }

  return (
    <section
      id="quote-form"
      className="stc-snow-quote turner-band turner-band--light turner-band--seam"
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="container stc-snow-quote__inner">
        <header className="stc-snow-quote__head">
          <p className="eyebrow">Winter Contracts</p>
          <h2 id={`${baseId}-heading`} className="text-display text-display--section stack-title">
            Request a <span className="text-accent-gold">Winter Contract</span>
          </h2>
          <p className="wf-type-supporting prose-narrow stack-body">
            Tell us about your property and we&apos;ll send a custom snow removal quote.
          </p>
        </header>

        <form
          className="stc-snow-quote-form"
          name="commercial-snow-quote"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="stc-snow-quote-form__grid">
            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-business`}>Business Name *</label>
              <input
                id={`${baseId}-business`}
                name="business"
                type="text"
                autoComplete="organization"
                placeholder="Your business or property name"
                value={values.businessName}
                onChange={(e) => updateField("businessName", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.businessName ? "true" : undefined}
                aria-describedby={errors.businessName ? `${baseId}-business-err` : undefined}
                className={fieldClass("businessName")}
              />
              {errors.businessName && (
                <p id={`${baseId}-business-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.businessName}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-name`}>Contact Name *</label>
              <input
                id={`${baseId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                value={values.contactName}
                onChange={(e) => updateField("contactName", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.contactName ? "true" : undefined}
                aria-describedby={errors.contactName ? `${baseId}-name-err` : undefined}
                className={fieldClass("contactName")}
              />
              {errors.contactName && (
                <p id={`${baseId}-name-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.contactName}
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
              <label htmlFor={`${baseId}-property-type`}>Property Type *</label>
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

            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-lot-size`}>Estimated Lot Size *</label>
              <select
                id={`${baseId}-lot-size`}
                name="lot-size"
                value={values.lotSize}
                onChange={(e) => updateField("lotSize", e.target.value)}
                required
                aria-required="true"
                aria-invalid={errors.lotSize ? "true" : undefined}
                aria-describedby={errors.lotSize ? `${baseId}-lot-size-err` : undefined}
                className={fieldClass("lotSize")}
              >
                <option value="">Select...</option>
                {LOT_SIZES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.lotSize && (
                <p id={`${baseId}-lot-size-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.lotSize}
                </p>
              )}
            </div>

            <div className="stc-snow-quote-form__field stc-snow-quote-form__field--full">
              <label htmlFor={`${baseId}-address`}>Property Address *</label>
              <input
                id={`${baseId}-address`}
                name="address"
                type="text"
                autoComplete="street-address"
                placeholder="Full address or intersection"
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

            <fieldset
              className="stc-snow-quote-form__field stc-snow-quote-form__field--full stc-snow-quote-form__services"
              aria-required="true"
              aria-invalid={errors.services ? "true" : undefined}
              aria-describedby={errors.services ? `${baseId}-services-err` : undefined}
            >
              <legend className="stc-snow-quote-form__legend">Services Needed *</legend>
              <div className="stc-snow-quote-form__checks">
                {SERVICE_OPTIONS.map((service) => {
                  const checkId = `${baseId}-svc-${service.replace(/\W+/g, "-").toLowerCase()}`;
                  return (
                    <label key={service} htmlFor={checkId} className="stc-snow-quote-form__check">
                      <input
                        id={checkId}
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={values.services.includes(service)}
                        onChange={() => toggleService(service)}
                      />
                      <span>{service}</span>
                    </label>
                  );
                })}
              </div>
              {errors.services && (
                <p id={`${baseId}-services-err`} className="stc-snow-quote-form__error" role="alert">
                  {errors.services}
                </p>
              )}
            </fieldset>

            <div className="stc-snow-quote-form__field stc-snow-quote-form__field--full">
              <label htmlFor={`${baseId}-message`}>Additional Details</label>
              <textarea
                id={`${baseId}-message`}
                name="message"
                rows={4}
                placeholder="Tell us about access, gates, priority areas, etc."
                value={values.details}
                onChange={(e) => updateField("details", e.target.value)}
                className="stc-snow-quote-form__control"
              />
            </div>

            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-start`}>Preferred Start Date</label>
              <input
                id={`${baseId}-start`}
                name="preferred-start"
                type="date"
                value={values.preferredStart}
                onChange={(e) => updateField("preferredStart", e.target.value)}
                className="stc-snow-quote-form__control"
              />
            </div>

            <div className="stc-snow-quote-form__field">
              <label htmlFor={`${baseId}-hear`}>How did you hear about us?</label>
              <select
                id={`${baseId}-hear`}
                name="hear-about"
                value={values.hearAbout}
                onChange={(e) => updateField("hearAbout", e.target.value)}
                className="stc-snow-quote-form__control"
              >
                <option value="">Select...</option>
                {HEAR_ABOUT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="stc-snow-quote-form__actions">
            <button type="submit" className="btn-green btn-green--lg">
              Request Winter Contract
            </button>
            <a href={`tel:${site.phoneTel}`} className="btn-beige">
              Call instead
            </a>
          </div>

          {status === "success" && (
            <p className="stc-snow-quote-form__status stc-snow-quote-form__status--success" role="status">
              Thanks! We&apos;ll contact you within 24 hours to schedule your site walk.
            </p>
          )}
          {status === "error" && (
            <p className="stc-snow-quote-form__status stc-snow-quote-form__status--error" role="alert">
              Something went wrong opening your email app. Please try again or call us.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
