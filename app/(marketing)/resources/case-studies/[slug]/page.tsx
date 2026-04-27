import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/app/components/sections/resources/CaseStudyDetail";
import { getResourceById, resourcesData } from "@/app/components/sections/resources/detailsData";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/config/site";

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Pre-generate static routes at build time
export function generateStaticParams() {
  return resourcesData.map((item) => ({ slug: item.id }));
}

export async function generateMetadata(
  { params }: CaseStudyDetailPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getResourceById(slug);

  if (!caseStudy) {
    return genMeta({
      title: "Case Study Not Found",
      description: "This case study could not be found.",
      path: "/resources/case-studies",
    });
  }

  return genMeta({
    title: caseStudy.title,
    description: caseStudy.description,
    path: `/resources/case-studies/${slug}`,
    image: caseStudy.authorImage ? `${SITE_URL}${caseStudy.authorImage.startsWith("/") ? caseStudy.authorImage : "/" + caseStudy.authorImage}` : undefined,
    keywords: [caseStudy.category, "LHS case study", "enterprise IT solution"],
  });
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const caseStudy = getResourceById(slug);

  if (!caseStudy) {
    notFound();
  }

  // CreativeWork JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: caseStudy.description,
    author: {
      "@type": "Person",
      name: caseStudy.author,
      jobTitle: caseStudy.authorTitle,
    },
    creator: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    about: caseStudy.client
      ? { "@type": "Organization", name: caseStudy.client }
      : undefined,
    url: `${SITE_URL}/resources/case-studies/${slug}`,
    genre: caseStudy.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyDetail data={caseStudy} />
    </>
  );
}
