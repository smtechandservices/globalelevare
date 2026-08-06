import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppFloater from "@/components/WhatsAppFloater";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const title = "Elevare Global | UAE Company Formation & Business Setup";
const description =
  "Mainland, free zone or offshore company formation in the UAE. Fixed quotes, one advisor from first call through licence, visas and bank account. 15 years in the Emirates.";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalelevare.com"),
  title,
  description,
  keywords: [
    "UAE company formation",
    "business setup UAE",
    "free zone licence",
    "Sharjah business setup",
    "Dubai mainland licence",
    "offshore company UAE",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title,
    description:
      "Elevare, Defining Global Excellence. Fixed quotes, one advisor, 15 years in the Emirates.",
    siteName: "Elevare Global",
    url: "/",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Elevare, Defining Global Excellence. Fixed quotes, one advisor, 15 years in the Emirates.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-text font-sans antialiased">
        {children}
        <WhatsAppFloater />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
