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
  title: "Scale My Business - 3-Week Intensive with Olubunmi Ojo",
  description: "Transform your business from zero to consistent orders in 3 weeks. Learn proven strategies to build a profitable business, create irresistible offers, and master social & paid ads. Limited slots available.",
  keywords: ["business coaching", "entrepreneurship", "sales strategy", "digital marketing", "business growth", "Nigeria", "online business course"],
  authors: [{ name: "Olubunmi Ojo", url: "https://olubunmiojo.com" }],
  creator: "Olubunmi Ojo",
  publisher: "Olubunmi Ojo",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://olubunmiojo.com",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://olubunmiojo.com",
    siteName: "Scale My Business - Olubunmi Ojo",
    title: "Scale My Business - 3-Week Intensive | Olubunmi Ojo",
    description: "From ₦30,000 to Consistent Orders. Learn business, sales, and marketing strategies from someone who started with nothing.",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale My Business - 3-Week Intensive | Olubunmi Ojo",
    description: "Transform your business in 3 weeks. Limited slots available for the next cohort.",
    images: [],
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
        <link rel="canonical" href="https://olubunmiojo.com" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
