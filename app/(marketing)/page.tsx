import type { Metadata } from "next";
import Hero from "@/app/components/sections/home/Hero/Hero";
import GalleryModal from "@/app/components/sections/home/GalleryModal/GalleryModal"
import Trusted from "@/app/components/sections/home/Trusted/Trusted";
import Services from "@/app/components/sections/home/Services/Services";
import WhyChoose from "@/app/components/sections/home/WhyChoose/WhyChoose";
import Insights from "@/app/components/sections/home/Insights/Insights";
import CTA from "@/app/components/sections/home/CTA/CTA";
import TechStack from "@/app/components/sections/home/Techstacks/TechStack";
import Testimonial from "@/app/components/sections/home/Testimonial/Testimonial";
import Contact from "@/app/components/sections/home/Contact_Us/Contact";
import {
  generateMetadata as genMeta,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/seo";

// ---------------------------------------------------------------------------
// Page metadata — Task 1 & 2
// ---------------------------------------------------------------------------
export const metadata: Metadata = genMeta({
  title: "LHS — Turning Vision Into Scalable Reality",
  description:
    "LHS builds smart, scalable software that transforms ideas into streamlined, real-world solutions. Technology services covering software development, IT consulting, and digital transformation.",
  path: "/",
  keywords: [
    "LHS solutions",
    "Livelihood System software",
    "scalable technology",
    "custom software development",
    "digital solutions",
  ],
});

// ---------------------------------------------------------------------------
// Structured data (JSON-LD) — Task 3
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [buildOrganizationSchema(), buildWebSiteSchema()],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data — invisible, read by search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full min-h-screen  mx-auto">
        <Hero />
        <GalleryModal/>
        <Trusted />
        <Services />
        <WhyChoose />
        <Insights />
        <CTA />
        <TechStack />
        <Testimonial />
        <Contact />
      </section>
    </>
  );
}