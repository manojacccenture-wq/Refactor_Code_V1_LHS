import { notFound } from "next/navigation";

import CaseStudyDetail from "@/app/components/sections/resources/CaseStudyDetail";
import { getResourceById } from "@/app/components/sections/resources/detailsData";

interface CaseStudyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const caseStudy = getResourceById(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
   
      <CaseStudyDetail data={caseStudy} />
  
    </>
  );
}
