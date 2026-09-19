"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { site } from "@/data/site";

const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message" | "location" | "projectType", string>>;

type FormState = {
  name: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  projectType: "",
  message: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Phone is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

function readPrefill(): Partial<FormState> {
  if (typeof window === "undefined") return {};
  const q = new URLSearchParams(window.location.search);
  const next: Partial<FormState> = {};
  const projectType = q.get("project") ?? q.get("service") ?? q.get("topic");
  const location = q.get("location");
  const message = q.get("message");
  if (projectType) next.projectType = projectType;
  if (location) next.location = location;
  if (message) next.message = message;
  return next;
}

/**
 * Main marketing contact form — POSTs to /api/contact (Resend).
 * Prefills from ?project= / ?service= / ?location= / ?message= query params.
 */
export function ContactInquiryForm() {
  const baseId = useId();
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const prefill = readPrefill();
    if (Object.keys(prefill).length) {
      setValues((prev) => ({ ...prev, ...prefill }));
    }
  }, []);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "general-inquiry",
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          location: values.location.trim() || undefined,
          projectType: values.projectType.trim() || undefined,
          message: values.message.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: FieldErrors;
      };
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.error || "Something went wrong. Please call us.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setValues(INITIAL);
    } catch (err) {
      console.error("Contact form submit failed", err);
      setServerError("Something went wrong. Please call us.");
      setStatus("error");
    }
  }

  function fieldClass(key: keyof FieldErrors) {
    return errors[key] ? "stc-snow-quote-form__control is-invalid" : "stc-snow-quote-form__control";
  }

  if (status === "success") {
    return (
      <div className="stc-contact-inquiry" id="contact">
        <p className="stc-snow-quote-form__status stc-snow-quote-form__status--success" role="status">
          Thanks — your message was sent. We&apos;ll reply within one business day.
        </p>
        <a href={`tel:${site.phoneTel}`} className="btn-green stc-snow-quote-form__call">
          Call Us
        </a>
      </div>
    );
  }

  return (
    <form
      id="contact"
      className="stc-contact-inquiry stc-snow-quote-form"
      name="site-consultation"
      noValidate
      onSubmit={handleSubmit}
      aria-label="Request a site consultation"
    >
      <div className="stc-snow-quote-form__grid">
        <div className="stc-snow-quote-form__field">
          <label htmlFor={`${baseId}-name`}>Name *</label>
          <input
            id={`${baseId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
            aria-invalid={errors.name ? "true" : undefined}
            className={fieldClass("name")}
          />
          {errors.name && (
            <p className="stc-snow-quote-form__error" role="alert">
              {errors.name}
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
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            required
            aria-invalid={errors.phone ? "true" : undefined}
            className={fieldClass("phone")}
          />
          {errors.phone && (
            <p className="stc-snow-quote-form__error" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
        <div className="stc-snow-quote-form__field stc-snow-quote-form__field--full">
          <label htmlFor={`${baseId}-email`}>Email *</label>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
            aria-invalid={errors.email ? "true" : undefined}
            className={fieldClass("email")}
          />
          {errors.email && (
            <p className="stc-snow-quote-form__error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div className="stc-snow-quote-form__field">
          <label htmlFor={`${baseId}-location`}>Property location</label>
          <input
            id={`${baseId}-location`}
            name="location"
            type="text"
            placeholder="Town or address area"
            value={values.location}
            onChange={(e) => updateField("location", e.target.value)}
            className={fieldClass("location")}
          />
        </div>
        <div className="stc-snow-quote-form__field">
          <label htmlFor={`${baseId}-project`}>Project type</label>
          <input
            id={`${baseId}-project`}
            name="project"
            type="text"
            placeholder="Armour stone, hardscaping, snow…"
            value={values.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            className={fieldClass("projectType")}
          />
        </div>
        <div className="stc-snow-quote-form__field stc-snow-quote-form__field--full">
          <label htmlFor={`${baseId}-message`}>Message *</label>
          <textarea
            id={`${baseId}-message`}
            name="message"
            rows={4}
            placeholder="Scope, timeline, and any site details…"
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            required
            aria-invalid={errors.message ? "true" : undefined}
            className={fieldClass("message")}
          />
          {errors.message && (
            <p className="stc-snow-quote-form__error" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="stc-snow-quote-form__actions">
        <button type="submit" className="btn-accent btn-accent--lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <a href={`tel:${site.phoneTel}`} className="btn-green stc-snow-quote-form__call">
          Call Us
        </a>
      </div>

      {status === "error" && (
        <p className="stc-snow-quote-form__status stc-snow-quote-form__status--error" role="alert">
          {serverError || `Something went wrong. Please call ${site.phoneDisplay}.`}
        </p>
      )}
    </form>
  );
}
