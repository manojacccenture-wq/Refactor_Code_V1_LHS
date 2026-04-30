"use client";

import CareerCard from "./CareerCard";

interface JobOpening {
  id: string;
  slug: string;
  experience: string;
  title: string;
  description: string;
  postedDate: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "full-stack",
    slug: "full-stack-developer",
    experience: "2 years experience",
    title: "Full-Stack Developer",
    description: "Discover top remote tech opportunities and land your next role with ease.",
    postedDate: "Nov 26, 2024",
  },
  {
    id: "frontend",
    slug: "front-end-developer",
    experience: "Fresher",
    title: "Front end developer",
    description: "Discover top remote tech opportunities and land your next role with ease.",
    postedDate: "Nov 26, 2024",
  },
  {
    id: "uiux",
    slug: "ui-ux-designer",
    experience: "2 years Experience",
    title: "UI/UX Designer",
    description: "Discover top remote tech opportunities and land your next role with ease.",
    postedDate: "Nov 26, 2024",
  },
];

export default function CareerOpenings() {
  return (
    <section className="relative py-0 px-4 md:px-8 mb-[2%] overflow-hidden">

      {/* ================= BACKGROUND GLOWS ================= */}
      {/* Left Glow */}
      <div
        className="absolute top-[10%] -left-[10%] w-[300px] md:w-[300px] h-[300px] md:h-[500px] rounded-full bg-[var(--color-primary-1)] blur-[100px] md:blur-[140px] opacity-[0.30] pointer-events-none z-0"
      />

      {/* Right Glow */}
      <div
        className="absolute top-[30%] -right-[15%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[var(--color-primary-1)] blur-[100px] md:blur-[160px] opacity-[0.30] pointer-events-none z-0"
      />

      {/* BOTTOM FADE OUT: Smoothly blends the glows into the white background before the footer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none z-[1]"
      />
      {/* ================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="text-primary uppercase  font-semibold-token tracking-widest mb-2">
            Process
          </h4>
          <h1 className="mb-4">
            Your path to the perfect remote tech job.
          </h1>
          <p className="">
            Discover top remote tech opportunities and land your next role with ease, through our streamlined process.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobOpenings.map((job) => (
            <CareerCard
              key={job.id}
              slug={job.slug}
              experience={job.experience}
              title={job.title}
              description={job.description}
              postedDate={job.postedDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}