import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/app/components/sections/resources/CaseStudyDetail";
import { getResourceById, resourcesData } from "@/app/components/sections/resources/detailsData";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/config/site";

/**
 * Returns an absolute OG-safe image URL.
 * SVG paths are rejected (not supported by social platforms) — returns undefined,
 * which causes generateMetadata to fall back to the site default OG image.
 */
function toOgImage(path: string | undefined): string | undefined {
  if (!path || /\.svg$/i.test(path)) return undefined;
  const abs = `${SITE_URL}${path.startsWith("/") ? path : "/" + path}`;
  return abs;
}

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

  // Only use cover image for OG if it's a raster format (PNG/JPG).
  // SVGs are not supported by most social platforms and are skipped.
  const ogImage = toOgImage(caseStudy.coverImage);

  return genMeta({
    title: caseStudy.title,
    description: caseStudy.description,
    path: `/resources/case-studies/${slug}`,
    image: ogImage,
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

  const ogImage = toOgImage(caseStudy.coverImage);

  // CreativeWork JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: caseStudy.description,
    ...(ogImage ? { image: ogImage } : {}),
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
