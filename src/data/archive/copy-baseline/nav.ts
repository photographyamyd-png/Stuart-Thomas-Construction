import { services, type ServiceSlug } from "./services";
import { COPY_BASELINE_PREFIX } from "./constants";

export type NavService = {
  label: string;
  href: string;
  description: string;
  slug: ServiceSlug;
};

const BASE = COPY_BASELINE_PREFIX;

export const navServices: NavService[] = services.map((s) => ({
  label: s.title,
  href: `${BASE}/services/${s.slug}`,
  description: s.shortDescription,
  slug: s.slug,
}));

export const primaryNav = [
  { label: "Home", href: BASE },
  { label: "Services", href: `${BASE}/services`, mega: true as const },
  { label: "Projects", href: `${BASE}/projects` },
  { label: "About", href: `${BASE}/about` },
  { label: "Areas", href: `${BASE}/areas` },
  { label: "Contact", href: `${BASE}/contact` },
] as const;

export const footerColumns = {
  services: navServices.map((s) => ({ label: s.label, href: s.href })),
  company: [
    { label: "About Us", href: `${BASE}/about` },
    { label: "Our Commitments", href: `${BASE}/#commitments` },
    { label: "Projects", href: `${BASE}/projects` },
    { label: "Contact", href: `${BASE}/contact` },
  ],
  legal: [
    { label: "Privacy Policy", href: `${BASE}/privacy` },
    { label: "Terms of Use", href: `${BASE}/terms` },
  ],
  areas: [
    { label: "Tiny Township", href: `${BASE}/areas/tiny-township` },
    { label: "Wasaga Beach", href: `${BASE}/areas/wasaga-beach` },
    { label: "Collingwood", href: `${BASE}/areas/collingwood` },
  ],
} as const;

export const cta = {
  primaryLabel: "Get a Quote",
  primaryHref: `${BASE}/contact`,
  secondaryLabel: "View Projects",
  secondaryHref: `${BASE}/projects`,
} as const;
