
import type { Metadata } from "next";
import ContactHero from "@/app/components/sections/contact/ContactHero/ContactHero";
import ContactLayout from "@/app/components/sections/contact/ContactLayout/ContactLayout";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/config/site";

// ---------------------------------------------------------------------------
// Page metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = genMeta({
  title: "Contact LHS — Business Inquiries & Support",
  description:
    "Get in touch with LHS for business inquiries, project discussions, technical support, or partnership opportunities. We're ready to help you build scalable technology solutions.",
  path: "/contact",
  keywords: [
    "contact LHS",
    "LHS support",
    "business inquiry",
    "software project inquiry",
    "LHS contact details",
    "enterprise IT support",
  ],
});

// ---------------------------------------------------------------------------
// Structured data (JSON-LD)
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${SITE_NAME}`,
  description:
    "Reach out to LHS for business inquiries, technical support, or partnership discussions.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: "English",
        areaServed: "Global",
        url: `${SITE_URL}/contact`,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section>
        <ContactHero />
        <ContactLayout />
      </section>
    </>
  );
}
