import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scale My Business - 3-Week Intensive with Olubunmi Ojo | Dayari.ng",
  description: "Transform your business from zero to consistent orders in 3 weeks. Learn proven strategies to build a profitable business, create irresistible offers, and master social & paid ads. Limited slots available.",
  keywords: ["business coaching", "entrepreneurship", "sales strategy", "digital marketing", "business growth", "Nigeria", "online business course"],
  authors: [{ name: "Olubunmi Ojo", url: "https://dayari.ng" }],
  creator: "Olubunmi Ojo",
  publisher: "Dayari.ng",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://dayari.ng",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dayari.ng",
    siteName: "Scale My Business - Dayari.ng",
    title: "Scale My Business - 3-Week Intensive | Olubunmi Ojo",
    description: "From ₦30,000 to Consistent Orders. Learn business, sales, and marketing strategies from someone who started with nothing.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://dayari.ng'}/api/og`,
        width: 1200,
        height: 630,
        alt: "Scale My Business - Olubunmi Ojo",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale My Business - 3-Week Intensive | Olubunmi Ojo",
    description: "Transform your business in 3 weeks. Limited slots available for the next cohort.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'https://dayari.ng'}/api/og`],
    creator: "@dayari.ng",
  },
  icons: {
    icon: "/favicon.svg",
  },
  category: "Business & Entrepreneurship",
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="rgb(99,40,210)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Scale My Business" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://dayari.ng" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
