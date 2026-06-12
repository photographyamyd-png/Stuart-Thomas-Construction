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
            <dt className="stc-label text-stc-dark-green">Service Area</dt>
            <dd className="stc-body mt-2 text-stc-charcoal/75">
              Tiny Township, Wasaga Beach, Collingwood, and South Georgian Bay
            </dd>
          </div>
        </dl>
      </div>
      <div className="border-2 border-stc-border-strong bg-stc-white p-6 sm:p-10">
        <h2 className="stc-display-md text-xl">Request a Quote</h2>
        <p className="stc-body mt-4 text-stc-charcoal/75">
          Call us to discuss your project scope, timeline, and site conditions.
        </p>
        <a
          href={`tel:${site.phoneTel}`}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center bg-stc-lime px-8 font-display text-sm font-bold uppercase tracking-[0.1em] text-role-headline-on-dark transition-colors hover:bg-stc-lime-hover sm:w-auto"
        >
          Call {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
