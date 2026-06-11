import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-*",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/service-areas", destination: "/areas", permanent: true },
      { source: "/services/armor-stone-retaining-walls", destination: "/services/armour-stone", permanent: true },
      { source: "/services/waterfront-construction", destination: "/services/waterfront-stone-work", permanent: true },
      { source: "/services/landscape-construction", destination: "/services/landscaping", permanent: true },
      { source: "/services/excavation-grading", destination: "/services/excavation", permanent: true },
      { source: "/services/skid-steer-backhoe", destination: "/services/excavation", permanent: true },
      { source: "/services/site-preparation", destination: "/services/excavation", permanent: true },
    ];
  },
};

export default nextConfig;
