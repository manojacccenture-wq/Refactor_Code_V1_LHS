import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

/**
 * app/robots.ts
 *
 * Generates /robots.txt via the Next.js Metadata API.
 *
 * Environment-aware:
 *   - Non-production environments return a full disallow to prevent
 *     staging/preview builds from being indexed by search engines.
 *   - Production returns targeted disallow rules only.
 */

const IS_PRODUCTION = process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  // Block all crawlers on non-production environments (staging, preview, dev)
  if (!IS_PRODUCTION) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        // General crawlers — allow everything except private/system routes
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",       // server-side API routes
          "/admin/",     // admin panel (future)
          "/_next/",     // Next.js internals
          "/private/",   // any private content
          "/login",      // auth pages
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
