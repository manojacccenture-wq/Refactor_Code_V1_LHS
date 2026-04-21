import ImageCard from "@/app/components/sections/home/Techstacks/components/ImageCard/ImageCard";
import { techStack } from "@/app/components/sections/home/Techstacks/data/TechStack.data";

export default function TechStack() {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-6 text-center overflow-visible">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10" />

      {/* TOP LABEL */}
      <p className="text-heading-sm text-primary mx-auto uppercase tracking-wider mb-3 md:mb-4">
        — MODERN, SECURE, AND SCALABLE FOR ENTERPRISE GRADE OPERATIONS.
      </p>

      {/* TITLE */}
      <h2 className="text-heading-lg mb-8 md:mb-12">
        Technology Stack
      </h2>

      {/* TECH ITEMS */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {techStack.map((tech, i) => (
          <ImageCard
            key={i}
            icon={tech.icon}
            label={tech.name}
            variant="tech"

          />
        ))}
      </div>

      {/* FADED BACK TEXT (OPTIONAL ADVANCED) */}
      <p className="text-body-sm mx-auto opacity-5 whitespace-nowrap pointer-events-none">
        With a modern tech stack powering our operations
      </p>
    </section>
  );
}