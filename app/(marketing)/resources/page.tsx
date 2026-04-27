import type { Metadata } from "next";
import ResourcesHero from "@/app/components/sections/resources/ResourcesHero";
import ResourcesCards from "@/app/components/sections/resources/ResourcesCards";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Resources — Insights, Case Studies & Videos",
  description:
    "Explore LHS resources: in-depth case studies, technology blogs, and expert videos covering software development, digital transformation, and enterprise IT solutions.",
  path: "/resources",
  keywords: [
    "LHS resources",
    "technology insights",
    "software case studies",
    "IT blog",
    "enterprise technology videos",
  ],
});

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesCards />
    </>
  );
}
