import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "@/app/components/sections/resources/BlogDetail";
import { getResourceById, resourcesData } from "@/app/components/sections/resources/detailsData";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/config/site";

/**
 * Returns an absolute OG-safe image URL.
 * SVG paths are rejected — returns undefined so generateMetadata falls back
 * to the site default OG image.
*/
function toOgImage(path: string | undefined): string | undefined {
  if (!path) return undefined;

  const abs = `${SITE_URL}${path.startsWith("/") ? path : "/" + path}`;
  return abs;
}

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Pre-generate static routes at build time
export function generateStaticParams() {
  return resourcesData.map((item) => ({ slug: item.id }));
}

export async function generateMetadata(
  { params }: BlogDetailPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const blog = getResourceById(slug);
  
  if (!blog) {
    return genMeta({
      title: "Blog Post Not Found",
      description: "This blog post could not be found.",
      path: "/resources/blogs",
    });
  }
  
  // Only use cover image for OG if it's a raster format (PNG/JPG).
  
  
  const ogImage = toOgImage(blog.coverImage);

  
  return genMeta({
    title: blog.title,
    description: blog.description,
    path: `/resources/blogs/${slug}`,
    image: ogImage,
    keywords: [blog.category, "LHS blog", "software insights"],
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getResourceById(slug);
  
  if (!blog) {
    notFound();
  }
  
  const ogImage = toOgImage(blog.coverImage);
  
  // Article JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    ...(ogImage ? { image: ogImage } : {}),
    author: {
      "@type": "Person",
      name: blog.author,
      jobTitle: blog.authorTitle,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    url: `${SITE_URL}/resources/blogs/${slug}`,
    articleSection: blog.category,
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <BlogDetail data={blog} />
    </>
  );
}
