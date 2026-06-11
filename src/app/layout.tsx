import type { Metadata } from "next";
import { Open_Sans, Oswald, Poppins } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { rootMetadata } from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = rootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${poppins.variable} ${openSans.variable} ${oswald.variable} h-full`}
    >
      <body className="min-h-full bg-stc-white font-body text-stc-black">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
