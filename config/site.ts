/**
 * config/site.ts
 *
 * Single source of truth for all site-wide SEO constants.
 * Every other file (lib/seo.ts, app/layout.tsx, sitemaps, etc.) imports
 * from here — nothing is hard-coded anywhere else.
 *
 * In production, set NEXT_PUBLIC_SITE_URL in your environment variables.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lhssolutions.com"
).replace(/\/$/, "");

export const SITE_NAME = "LHS";

export const SITE_TITLE_TEMPLATE = "%s | LHS";

export const SITE_TITLE_DEFAULT = "LHS — Livelihood System";

export const SITE_DESCRIPTION =
  "LHS builds smart, scalable software that transforms ideas into real-world solutions. Enterprise-grade technology services for startups and growing businesses.";

export const SITE_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const SITE_LOGO = `${SITE_URL}/logolhs.svg`;

export const SITE_KEYWORDS = [
  "LHS",
  "Livelihood System",
  "technology solutions",
  "software services",
  "scalable software",
  "software development",
  "digital transformation",
  "enterprise software",
  "IT consulting",
] as const;

export const SITE_TWITTER_HANDLE = "@lhssolutions";
