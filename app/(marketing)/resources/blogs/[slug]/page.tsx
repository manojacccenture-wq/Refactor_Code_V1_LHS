import { notFound } from "next/navigation";
import BlogDetail from "@/app/components/sections/resources/BlogDetail";
import { getResourceById } from "@/app/components/sections/resources/detailsData";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getResourceById(slug);
  

  if (!blog) {
    notFound();
  }

  return (
    <>
      
      <BlogDetail data={blog} />
      
    </>
  );
}
