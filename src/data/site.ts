export const site = {
  name: "Stuart Thomas Construction",
  tagline: "LANDSCAPE. BUILD. ELEVATE.",
  description:
    "Premium armour stone, luxury waterfront stone work, landscaping, hardscaping, excavation, and commercial snow removal serving Tiny Township, Wasaga Beach, Collingwood, and South Georgian Bay.",
  /** Production URL — set NEXT_PUBLIC_SITE_URL at deploy time */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stuartthomasconstruction.com",
  /** Replace with client phone before launch */
  phoneDisplay: "(705) 555-0142",
  phoneTel: "+17055550142",
  email: "info@stuartthomasconstruction.com",
  /** Contact form uses mailto: until a backend (Resend/Formspree) is added post-launch */
  address: {
    street: "",
    area: "Tiny Township",
    region: "ON",
    postalCode: "",
    country: "CA",
  },
  logo: {
    src: "/brand/logo.png",
    iconSrc: "/brand/logo-icon.png",
    width: 1024,
    height: 682,
    iconWidth: 128,
    iconHeight: 128,
  },
  /** Replace with real profile URLs before launch */
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
} as const;
