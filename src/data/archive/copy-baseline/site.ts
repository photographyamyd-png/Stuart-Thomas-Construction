export const site = {
  name: "Stuart Thomas Construction",
  tagline: "LANDSCAPE. BUILD. ELEVATE.",
  description:
    "Premium armour stone, luxury waterfront stone work, landscaping, hardscaping, excavation, and commercial snow removal serving Tiny Township, Wasaga Beach, Collingwood, and South Georgian Bay.",
  /** Production URL — set NEXT_PUBLIC_SITE_URL at deploy time */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.stuartthomasconstruction.ca",
  phoneDisplay: "(705) 727-7308",
  phoneTel: "+17057277308",
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
