import type { Metadata } from "next";
import ResourcesHero from "@/app/components/sections/resources/ResourcesHero";
import ResourcesCards from "@/app/components/sections/resources/ResourcesCards";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Case Studies — Real-World LHS Technology Solutions",
  description:
    "Explore LHS case studies showcasing how we solve real enterprise challenges in steel manufacturing, F&B operations, and utilities with scalable software solutions.",
  path: "/resources/case-studies",
  keywords: [
    "LHS case studies",
    "software project case studies",
    "enterprise technology results",
    "IT solutions examples",
    "digital transformation case studies",
  ],
});

export default function CaseStudiesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesCards type="case-study" />
    </>
  );
}
