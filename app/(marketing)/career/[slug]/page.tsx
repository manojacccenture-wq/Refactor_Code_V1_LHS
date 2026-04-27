import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/config/site";
import { getJobBySlug, jobDetailsMap } from "./jobsData";
import ApplyPageClient from "./ApplyPageClient";

interface ApplyPageProps {
  params: Promise<{ slug: string }>;
}

// Pre-generate static routes at build time
export function generateStaticParams() {
  return Object.keys(jobDetailsMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ApplyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  return genMeta({
    title: `${job.title} — Careers at LHS`,
    description: `LHS is hiring a ${job.title} (${job.type}) in ${job.location}. ${job.description} Experience required: ${job.experience}.`,
    path: `/career/${slug}`,
    keywords: [
      job.title,
      "jobs at LHS",
      "LHS careers",
      "software jobs Chennai",
      "technology jobs",
      job.mode,
    ],
  });
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { slug } = await params;
  const jobDetails = getJobBySlug(slug);

  // JobPosting JSON-LD — makes this page eligible for Google Jobs rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: jobDetails.title,
    description: `${jobDetails.description} Key Skills: ${jobDetails.keySkills.join(", ")}. Preferences: ${jobDetails.preferences}.`,
    employmentType: jobDetails.type.toUpperCase().replace(" ", "_"), // "FULL_TIME"
    datePosted: new Date().toISOString().split("T")[0], // ISO 8601 date
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: jobDetails.location,
        addressCountry: "IN",
      },
    },
    jobLocationType: jobDetails.mode === "Remote" ? "TELECOMMUTE" : undefined,
    experienceRequirements: jobDetails.experience,
    qualifications: jobDetails.preferences,
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    url: `${SITE_URL}/career/${slug}`,
    directApply: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApplyPageClient jobDetails={jobDetails} />
    </>
  );
}
