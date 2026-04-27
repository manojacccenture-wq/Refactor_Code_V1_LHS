import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_KEYWORDS,
  SITE_LOGO,
} from "@/config/site";

// ---------------------------------------------------------------------------
// Module-level aliases — consumed only within this file
// ---------------------------------------------------------------------------
const DEFAULT_DESCRIPTION = SITE_DESCRIPTION;
const DEFAULT_OG_IMAGE = SITE_OG_IMAGE;
const DEFAULT_KEYWORDS = [...SITE_KEYWORDS];

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface SeoOptions {
  /** Page title — will also appear in og:title and twitter:title */
  title: string;
  /** Page description (≤ 160 chars ideal) */
  description?: string;
  /** URL path, e.g. "/" or "/about" — canonical is derived automatically */
  path?: string;
  /** Absolute URL to OG image (1200×630). Falls back to DEFAULT_OG_IMAGE. */
  image?: string;
  /** Extra keywords to merge with site defaults */
  keywords?: string[];
}

// ---------------------------------------------------------------------------
// generateMetadata — call from any page's `export const metadata`
// ---------------------------------------------------------------------------
export function generateMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  keywords = [],
}: SeoOptions): Metadata {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;

  const mergedKeywords = Array.from(
    new Set([...DEFAULT_KEYWORDS, ...keywords])
  );

  return {
    title,
    description,
    keywords: mergedKeywords,

    // -----------------------------------------------------------------------
    // Canonical URL
    // -----------------------------------------------------------------------
    alternates: {
      canonical: canonicalUrl,
    },

    // -----------------------------------------------------------------------
    // Open Graph
    // -----------------------------------------------------------------------
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Twitter / X
    // -----------------------------------------------------------------------
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    // -----------------------------------------------------------------------
    // Robots
    // -----------------------------------------------------------------------
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
}

// ---------------------------------------------------------------------------
// Structured data helpers — call from page components
// ---------------------------------------------------------------------------

/** Organization schema — place on the home page */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "LHS",
    alternateName: "Livelihood System",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO,
      width: 200,
      height: 60,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${SITE_URL}/contact`,
    },
  };
}

/** WebSite schema with SearchAction — place on the home page */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "LHS",
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
