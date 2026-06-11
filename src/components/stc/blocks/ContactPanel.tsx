import { ActionSolid } from "@/components/stc/primitives/Action";
import { site } from "@/data/site";

export function ContactPanel({ intro }: { intro: string }) {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="stc-body-lg text-stc-charcoal/80">{intro}</p>
        <dl className="mt-10 space-y-6">
          <div>
            <dt className="stc-label text-stc-dark-green">Phone</dt>
            <dd className="mt-2">
              <a
                href={`tel:${site.phoneTel}`}
                className="font-display text-2xl font-bold text-stc-charcoal hover:text-stc-lime"
              >
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="stc-label text-stc-dark-green">Email</dt>
            <dd className="mt-2">
              <a
                href={`mailto:${site.email}`}
                className="stc-body font-medium text-stc-charcoal hover:text-stc-lime"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="stc-label text-stc-dark-green">Service Area</dt>
            <dd className="stc-body mt-2 text-stc-charcoal/75">
              Tiny Township, Wasaga Beach, Collingwood, and South Georgian Bay
            </dd>
          </div>
        </dl>
      </div>
      <div className="border-2 border-stc-border-strong bg-stc-white p-6 sm:p-10">
        <h2 className="stc-display-md text-xl">Request a Quote</h2>
        <form
          className="mt-8 space-y-5"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="stc-label mb-2 block text-stc-charcoal">Name</span>
              <input
                name="name"
                required
                className="w-full border-2 border-stc-border-strong bg-stc-surface px-3 py-3 font-body text-sm outline-none focus:border-stc-lime"
              />
            </label>
            <label className="block">
              <span className="stc-label mb-2 block text-stc-charcoal">Phone</span>
              <input
                name="phone"
                type="tel"
                className="w-full border-2 border-stc-border-strong bg-stc-surface px-3 py-3 font-body text-sm outline-none focus:border-stc-lime"
              />
            </label>
          </div>
          <label className="block">
            <span className="stc-label mb-2 block text-stc-charcoal">Email</span>
            <input
              name="email"
              type="email"
              required
              className="w-full border-2 border-stc-border-strong bg-stc-surface px-3 py-3 font-body text-sm outline-none focus:border-stc-lime"
            />
          </label>
          <label className="block">
            <span className="stc-label mb-2 block text-stc-charcoal">Service</span>
            <input
              name="service"
              placeholder="Armour stone, waterfront, landscaping..."
              className="w-full border-2 border-stc-border-strong bg-stc-surface px-3 py-3 font-body text-sm outline-none focus:border-stc-lime"
            />
          </label>
          <label className="block">
            <span className="stc-label mb-2 block text-stc-charcoal">Project Details</span>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full border-2 border-stc-border-strong bg-stc-surface px-3 py-3 font-body text-sm outline-none focus:border-stc-lime"
            />
          </label>
          <ActionSolid type="submit" className="w-full sm:w-auto">
            Send Message
          </ActionSolid>
        </form>
      </div>
    </div>
  );
}
