import type { Metadata } from "next";
import DeliveryHero from "@/app/components/sections/delivery-framework/DeliveryHero/DeliveryHero";
import DeliveryTimeline from "@/app/components/sections/delivery-framework/DeliveryTimeline/DeliveryTimeline";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/config/site";

// ---------------------------------------------------------------------------
// Page metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = genMeta({
  title: "Delivery Framework — How LHS Executes at Scale",
  description:
    "Discover the LHS delivery framework: a structured, six-phase execution strategy that ensures on-time, scalable software delivery — from discovery to post-launch support.",
  path: "/delivery-framework",
  keywords: [
    "LHS delivery framework",
    "software delivery process",
    "ERP implementation framework",
    "execution strategy",
    "scalable delivery model",
    "software project methodology",
    "IT delivery approach",
  ],
});

// ---------------------------------------------------------------------------
// Structured data (JSON-LD)
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "LHS Delivery Framework",
  description:
    "A structured, six-phase delivery framework that guides LHS projects from discovery through post-launch — ensuring accountability, quality, and scalability at every stage.",
  url: `${SITE_URL}/delivery-framework`,
  creator: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Software Delivery Methodology",
  },
  genre: "Methodology",
};

export default function DeliveryFrameworkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DeliveryHero />
      <DeliveryTimeline />
    </>
  );
}
