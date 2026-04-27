
import type { Metadata } from "next";
import AboutHero from "@/app/components/sections/about/AboutHero/AboutHero";
import WhyChooseUs from "@/app/components/sections/about/WhyChooseUs/WhyChooseUs";
import WhatSetsUsApart from "@/app/components/sections/about/WhatSetsUsApart/WhatSetsUsApart";
import Leadership from "@/app/components/sections/about/Leadership/Leadership";
import AboutGallery from "@/app/components/sections/about/AboutGallery/AboutGallery";
import AboutCards from "@/app/components/sections/about/AboutHero/components/AboutCards/AboutCards";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME, SITE_LOGO, SITE_DESCRIPTION } from "@/config/site";

// ---------------------------------------------------------------------------
// Page metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = genMeta({
  title: "About LHS — Our Story, Vision & Technology Expertise",
  description:
    "Learn who LHS (Livelihood System) is — a technology company building scalable software solutions. Discover our mission, leadership, and commitment to transforming businesses through innovation.",
  path: "/about",
  keywords: [
    "about LHS",
    "LHS company",
    "Livelihood System",
    "technology company",
    "software company vision",
    "LHS leadership",
    "LHS mission",
  ],
});

// ---------------------------------------------------------------------------
// Structured data (JSON-LD) — Organization schema
// Reinforces brand identity and trust signals for Google Knowledge Panel
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Livelihood System",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: SITE_LOGO,
    width: 200,
    height: 60,
  },
  description: SITE_DESCRIPTION,
  foundingLocation: {
    "@type": "Place",
    name: "Global",
  },
  knowsAbout: [
    "Software Development",
    "Digital Transformation",
    "Enterprise Technology",
    "IT Consulting",
    "Cloud Solutions",
  ],
  sameAs: [
    // Add verified social profile URLs here when available, e.g.:
    // "https://www.linkedin.com/company/lhs-solutions",
    // "https://twitter.com/lhssolutions",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full min-h-screen ">
        <AboutHero />
        <AboutCards/>
        <WhyChooseUs />
        <WhatSetsUsApart />
        <Leadership />
        <AboutGallery />
      </section>
    </>
  );
}
