
import ImageCard from "../../ui/ImageCard";


const techStack = [
  { name: "Next.js", icon: "/next-js-svgrepo-com.svg" },
  { name: "React", icon: "/react-svgrepo-com.svg" },
  { name: "Flutter", icon: "/flutter-svgrepo-com.svg" },
  { name: "Angular", icon: "/angular-svgrepo-com.svg" },
  { name: "MySQL", icon: "/mysql-svgrepo-com.svg" },
  { name: "MongoDB", icon: "/mongo-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/js-official-svgrepo-com.svg" },
];

export default function TechStack() {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-6 text-center overflow-visible">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10" />

      {/* TOP LABEL */}
      <p 
        className="mx-auto text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4"
        style={{ color: "var(--color-primary-1)" }}
      >
        — MODERN, SECURE, AND SCALABLE FOR ENTERPRISE-GRADE ENTERPRISE GRADE OPERATIONS.
      </p>

      {/* TITLE */}
      <h2 className="mb-8 md:mb-12 text-2xl md:text-4xl font-bold" style={{ color: "var(--color-neutral-800)" }}>
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
      <p className="mx-auto opacity-5 whitespace-nowrap pointer-events-none">
        With a modern tech stack powering our operations
      </p>

    </section>
  );
}