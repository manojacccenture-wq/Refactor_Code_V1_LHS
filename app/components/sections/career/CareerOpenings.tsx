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
    experience: "2 years Experience",
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
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="text-primary uppercase text-sm font-semibold tracking-widest mb-2">
            Process
          </h4>
          <h2 className="mb-4">
            Your path to the perfect remote tech job.
          </h2>
          <p className="text-neutral-600">
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
