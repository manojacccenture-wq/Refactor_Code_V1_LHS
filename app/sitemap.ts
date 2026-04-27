import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

/**
 * app/sitemap.ts
 *
 * Served at /sitemap.xml by Next.js automatically.
 *
 * Priority guide:
 *   1.0  → homepage (highest business value)
 *   0.9  → primary conversion pages (services, products, contact)
 *   0.8  → important informational pages (about, industries)
 *   0.7  → supporting pages (technology, career, resources hub)
 *   0.6  → resource sub-pages (blogs, case-studies, videos)
 *   0.5  → deep / ancillary pages
 *
 * To add dynamic routes (e.g. blog posts), fetch slugs from your API
 * and spread them into the returned array below the static entries.
 */

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const STATIC_ROUTES: Route[] = [
  // ── Tier 1: Homepage ─────────────────────────────────────────────────────
  { path: "/",                  changeFrequency: "weekly",  priority: 1.0 },

  // ── Tier 2: Primary conversion pages ─────────────────────────────────────
  { path: "/services",          changeFrequency: "monthly", priority: 0.9 },
  { path: "/products",          changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact",           changeFrequency: "monthly", priority: 0.9 },

  // ── Tier 3: Important informational pages ─────────────────────────────────
  { path: "/about",             changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries",        changeFrequency: "monthly", priority: 0.8 },

  // ── Tier 4: Supporting pages ──────────────────────────────────────────────
  { path: "/technology",        changeFrequency: "monthly", priority: 0.7 },
  { path: "/delivery-framework",changeFrequency: "monthly", priority: 0.7 },
  { path: "/career",            changeFrequency: "weekly",  priority: 0.7 },
  { path: "/resources",         changeFrequency: "weekly",  priority: 0.7 },

  // ── Tier 5: Resource sub-pages ────────────────────────────────────────────
  { path: "/resources/blogs",         changeFrequency: "weekly",  priority: 0.6 },
  { path: "/resources/case-studies",  changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/videos",        changeFrequency: "weekly",  priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  // ---------------------------------------------------------------------------
  // Dynamic entries — uncomment and extend when APIs are available
  // ---------------------------------------------------------------------------
  // const blogPosts = await fetchBlogSlugs();
  // const dynamicEntries: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
  //   url: `${SITE_URL}/resources/blogs/${slug}`,
  //   lastModified: now,
  //   changeFrequency: "weekly",
  //   priority: 0.5,
  // }));

  return [
    ...staticEntries,
    // ...dynamicEntries,
  ];
}
