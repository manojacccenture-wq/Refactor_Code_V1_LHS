import { Outfit, Afacad } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE_TEMPLATE,
  SITE_TITLE_DEFAULT,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_TWITTER_HANDLE,
} from "@/config/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  // metadataBase is required so Next.js can resolve absolute URLs for
  // OG images, Twitter images, and canonical links in production.
  metadataBase: new URL(SITE_URL),

  title: {
    template: SITE_TITLE_TEMPLATE,
    default: SITE_TITLE_DEFAULT,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,

  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630 }],
  },

  twitter: {
    card: "summary_large_image",
    site: SITE_TWITTER_HANDLE,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${afacad.variable}`}>{children}</body>
    </html>
  );
}