import { services, type ServiceSlug } from "./services";

export type NavService = {
  label: string;
  href: string;
  description: string;
  slug: ServiceSlug;
};

export const navServices: NavService[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
  description: s.shortDescription,
  slug: s.slug,
}));

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", mega: true as const },
  { label: "About", href: "/about" },
  { label: "Areas", href: "/areas" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerColumns = {
  services: navServices.map((s) => ({ label: s.label, href: s.href })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Commitments", href: "/#commitments" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
  areas: [
    { label: "Tiny Township", href: "/areas/tiny-township" },
    { label: "Wasaga Beach", href: "/areas/wasaga-beach" },
    { label: "Collingwood", href: "/areas/collingwood" },
    { label: "Midland", href: "/areas/midland" },
    { label: "Penetanguishene", href: "/areas/penetanguishene" },
  ],
} as const;

export const cta = {
  primaryLabel: "Get a Free Quote",
  primaryHref: "/contact",
  secondaryLabel: "Our Services",
  secondaryHref: "/services",
} as const;
