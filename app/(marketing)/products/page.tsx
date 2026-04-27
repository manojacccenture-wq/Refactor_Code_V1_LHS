import type { Metadata } from "next";
import ProductsHero from "@/app/components/sections/products/ProductsHero/ProductsHero";
import ProductsTabs from "@/app/components/sections/products/ProductsTabs/ProductsTabs";
import ProductsSplitSection from "@/app/components/sections/products/ProductsSplitSection/ProductsSplitSection";
import ProductsDeployment from "@/app/components/sections/products/ProductsDeployment/ProductsDeployment";
import ProductsDifferentiators from "@/app/components/sections/products/ProductsDifferentiators/ProductsDifferentiators";
import ProductsCTA from "@/app/components/sections/products/ProductsCTA/ProductsCTA";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/config/site";

// ---------------------------------------------------------------------------
// Page metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = genMeta({
  title: "Software Products — Enterprise Solutions by LHS",
  description:
    "Explore LHS's suite of enterprise software products: POS, franchise management, central kitchen operations, vendor settlement, and BI analytics — built to scale.",
  path: "/products",
  keywords: [
    "enterprise POS software",
    "franchise management system",
    "central kitchen operations",
    "vendor settlement software",
    "BI analytics dashboard",
    "enterprise software products",
    "LHS products",
  ],
});

// ---------------------------------------------------------------------------
// Structured data (JSON-LD)
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "LHS Enterprise Software Products",
  url: `${SITE_URL}/products`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Enterprise POS",
        description: "Real-time order management system for enterprise retail and food service operations.",
        applicationCategory: "BusinessApplication",
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Franchise Management",
        description: "Centralized control platform for managing multi-location franchise operations.",
        applicationCategory: "BusinessApplication",
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Central Kitchen Operations",
        description: "Production planning and ingredient management at scale for central kitchen workflows.",
        applicationCategory: "BusinessApplication",
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "Vendor Settlement",
        description: "Automated accounting and reconciliation for supplier and vendor payments.",
        applicationCategory: "BusinessApplication",
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "SoftwareApplication",
        name: "BI & Analytics",
        description: "Executive dashboards and business intelligence reporting with actionable insights.",
        applicationCategory: "BusinessApplication",
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ProductsHero />
      <ProductsTabs />
      <ProductsSplitSection />
      <ProductsDeployment />
      <ProductsDifferentiators />
      <ProductsCTA />
    </>
  );
}

