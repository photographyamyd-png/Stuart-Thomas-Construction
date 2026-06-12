import Link from "next/link";
import { navServices } from "@/data/nav";
import { services } from "@/data/services";

/** Services dropdown panel — icon, title, and short description per item. */
export function ServicesMegaMenu() {
  return (
    <div className="w-[640px] overflow-hidden rounded-sm border border-stc-black/10 bg-stc-white shadow-lg xl:w-[720px]">
      <ul className="grid grid-cols-2 gap-1 p-3 xl:grid-cols-3 xl:gap-2 xl:p-4">
        {navServices.map((s) => {
          const service = services.find((x) => x.slug === s.slug);
          if (!service) return null;
          const Icon = service.icon;
          return (
            <li key={s.href}>
              <Link
                href={s.href}
                className="group flex gap-3 rounded-sm px-3 py-3 transition-colors hover:bg-stc-band-muted/60 xl:gap-4 xl:px-4 xl:py-3.5"
              >
                <Icon
                  className="mt-0.5 size-6 shrink-0 text-stc-green"
                  strokeWidth={1.25}
                />
                <span className="min-w-0 text-left">
                  <span className="font-utility block text-xs font-semibold tracking-wide text-role-headline-on-light uppercase">
                    {s.label}
                  </span>
                  <span className="font-body mt-1 line-clamp-2 text-xs leading-relaxed text-role-body-on-light">
                    {service.shortDescription}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="border-t border-stc-black/10 px-5 py-3">
        <Link
          href="/services"
          className="text-nav font-medium text-stc-lime hover:underline"
        >
          View all services →
        </Link>
      </div>
    </div>
  );
}
