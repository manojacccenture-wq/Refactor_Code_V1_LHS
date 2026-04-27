import type { Metadata } from "next";
import CareerHero from "@/app/components/sections/career/CareerHero/CareerHero";
import CareerTestimonials from "@/app/components/sections/career/CareerTestimonials/CareerTestimonials";
import CareerProcess from "@/app/components/sections/career/CareerProcess/CareerProcess";
import CareerOpenings from "@/app/components/sections/career/CareerOpenings/CareerOpenings";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Careers at LHS — Join Our Technology Team",
  description:
    "Explore open positions at LHS. We're hiring software developers, UI/UX designers, and technology professionals. Build scalable enterprise solutions with a team that values growth.",
  path: "/career",
  keywords: [
    "LHS careers",
    "jobs at LHS",
    "software developer jobs Chennai",
    "front-end developer jobs",
    "UI UX designer jobs",
    "technology jobs India",
    "full-stack developer hiring",
  ],
});

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <CareerTestimonials />
      <CareerProcess />
      <CareerOpenings />
    </>
  );
}
