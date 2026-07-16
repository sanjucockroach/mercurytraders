import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mercuryparts.in";
const siteName = "Mercury";
const description =
  "Mercury — India's premium marketplace for genuine automotive spare parts. Search by car make, model and year. OEM, OEM-equivalent and aftermarket parts from 20+ trusted brands. Fast pan-India delivery, 10-day returns, real warranty.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mercury — Genuine Automotive Spare Parts Marketplace",
    template: "%s · Mercury",
  },
  description,
  keywords: [
    "automotive spare parts",
    "car parts online",
    "genuine auto parts India",
    "OEM spare parts",
    "aftermarket car parts",
    "Mercury auto parts",
    "car spare parts marketplace",
    "brake pads",
    "engine parts",
    "suspension parts",
    "car filters",
    "spark plugs",
  ],
  authors: [{ name: "Mercury" }],
  creator: "Mercury",
  publisher: "Mercury",
  applicationName: "Mercury",
  category: "Automotive",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: "Mercury — Genuine Automotive Spare Parts Marketplace",
    description,
    images: [
      {
        url: "/images/hero-poster.png",
        width: 1440,
        height: 720,
        alt: "Mercury — automotive spare parts marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercury — Genuine Automotive Spare Parts",
    description,
    images: ["/images/hero-poster.png"],
    creator: "@mercuryparts",
  },
  icons: {
    icon: [
      { url: "/mercury-mark.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/mercury-mark.svg" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#FF5722",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "Mercury",
  description,
  url: siteUrl,
  logo: `${siteUrl}/mercury-logo.svg`,
  image: `${siteUrl}/images/hero-poster.png`,
  telephone: "+91-90000-12345",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mercury House, Sector 32",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122002",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  openingHours: "Mo-Sa 09:00-19:00",
  sameAs: [
    "https://www.facebook.com/mercuryparts",
    "https://www.instagram.com/mercuryparts",
    "https://twitter.com/mercuryparts",
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased bg-canvas text-ink min-h-screen flex flex-col`}
      >
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
