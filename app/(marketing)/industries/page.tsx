
import type { Metadata } from "next";
import IndustriesHero from "@/app/components/sections/industries/IndustriesHero/IndustriesHero";
import IndustriesHeroVisual from "@/app/components/sections/industries/IndustriesHeroVisual/IndustriesHeroVisual";
import IndustriesContent from "@/app/components/sections/industries/IndustriesContent/IndustriesContent";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/config/site";

// ---------------------------------------------------------------------------
// Page metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = genMeta({
  title: "Industries We Serve — Technology Solutions Across Sectors",
  description:
    "LHS delivers industry-specific IT solutions and digital transformation across steel & manufacturing, commercial F&B operations, and utilities & infrastructure — built for operational scale.",
  path: "/industries",
  keywords: [
    "industry IT solutions",
    "technology solutions by industry",
    "digital transformation across sectors",
    "manufacturing ERP software",
    "F&B technology solutions",
    "food court management software",
    "utilities infrastructure IT",
    "LHS industries",
  ],
});

// ---------------------------------------------------------------------------
// Structured data (JSON-LD)
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industries Served by LHS",
  description:
    "Industry sectors where LHS delivers enterprise technology solutions and IT consulting services.",
  url: `${SITE_URL}/industries`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Thing",
        name: "Steel & Manufacturing",
        description:
          "ERP integration, shop-floor monitoring, procurement automation, and executive dashboards for high-volume production environments.",
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Thing",
        name: "Commercial Food Courts & F&B Operators",
        description:
          "Centralised billing, revenue reconciliation, inventory control, franchise management, and vendor performance platforms for multi-vendor food environments.",
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Thing",
        name: "Utilities & Infrastructure",
        description:
          "IoT device integration, field asset monitoring, SCADA/IoT management dashboards, and infrastructure IT staffing for utilities and infrastructure operators.",
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full min-h-screen">
        <IndustriesHero />
        <IndustriesHeroVisual />
        <IndustriesContent />
      </section>
    </>
  );
}
