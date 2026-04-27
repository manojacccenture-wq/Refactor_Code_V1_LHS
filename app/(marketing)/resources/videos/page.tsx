import type { Metadata } from "next";
import ResourcesHero from "@/app/components/sections/resources/ResourcesHero";
import ResourcesCards from "@/app/components/sections/resources/ResourcesCards";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Videos — LHS Technology Demos & Expert Talks",
  description:
    "Watch LHS videos featuring product demos, technology walkthroughs, and expert discussions on enterprise software, digital transformation, and IT solutions.",
  path: "/resources/videos",
  keywords: [
    "LHS videos",
    "technology demo videos",
    "software product demos",
    "enterprise IT videos",
    "digital transformation talks",
  ],
});

export default function CaseStudiesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesCards type="video" />
    </>
  );
}
