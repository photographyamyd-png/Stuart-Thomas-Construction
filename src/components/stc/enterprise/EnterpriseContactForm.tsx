"use client";

import { site } from "@/data/site";

/** mailto: form — replace with Resend/Formspree API route post-launch (see site.ts) */
export function EnterpriseContactForm() {
  return (
    <form
      className="turner-contact__form"
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      aria-label="Quote request"
    >
      <div>
        <label htmlFor="ent-name">Name</label>
        <input id="ent-name" type="text" name="name" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="ent-email">Email</label>
        <input id="ent-email" type="email" name="email" autoComplete="email" required />
      </div>
      <div>
        <label htmlFor="ent-message">Project details</label>
        <textarea id="ent-message" name="message" rows={3} required />
      </div>
      <button type="submit" className="btn-ghost btn-ghost--on-green">
        Send Inquiry
      </button>
    </form>
  );
}
