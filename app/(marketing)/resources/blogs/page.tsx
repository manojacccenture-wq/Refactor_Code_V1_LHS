import type { Metadata } from "next";
import ResourcesHero from "@/app/components/sections/resources/ResourcesHero";
import ResourcesCards from "@/app/components/sections/resources/ResourcesCards";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Blog — Technology Insights & Software Development Articles",
  description:
    "Read the LHS blog for expert articles on software development, digital transformation, enterprise technology, UX design, and IT best practices.",
  path: "/resources/blogs",
  keywords: [
    "LHS blog",
    "software development articles",
    "technology insights",
    "digital transformation blog",
    "enterprise IT articles",
  ],
});

export default function BlogsPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesCards type="blog" />
    </>
  );
}
