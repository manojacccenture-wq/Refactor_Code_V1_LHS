import type { Metadata } from "next";
import ServicesHero from "@/app/components/sections/services/ServicesHero/ServicesHero";
import PowerfulFeatures from "@/app/components/sections/services/PowerfulFeatures/PowerfulFeatures";
import ServicesOverview from "@/app/components/sections/services/ServicesOverview/ServicesOverview";
import ServicesCTA from "@/app/components/sections/services/ServicesCTA/ServicesCTA";
import ServicesTestimonials from "@/app/components/sections/services/ServicesTestimonials/ServicesTestimonials";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/config/site";

// ---------------------------------------------------------------------------
// Page metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = genMeta({
  title: "Software & Technology Services — LHS",
  description:
    "LHS delivers end-to-end software services — custom development, cloud solutions, IT consulting, and digital transformation — built to scale with your business.",
  path: "/services",
  keywords: [
    "software services",
    "custom software development",
    "IT consulting",
    "cloud solutions",
    "digital transformation services",
    "technology services",
    "enterprise solutions",
  ],
});

// ---------------------------------------------------------------------------
// Structured data (JSON-LD)
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software & Technology Services",
  description:
    "LHS provides custom software development, cloud architecture, IT consulting, and digital transformation services for businesses worldwide.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  url: `${SITE_URL}/services`,
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full min-h-screen ">
        <ServicesHero />
        <PowerfulFeatures />
        <ServicesOverview />
        <ServicesCTA />
        <ServicesTestimonials />
      </section>
    </>
  );
}
