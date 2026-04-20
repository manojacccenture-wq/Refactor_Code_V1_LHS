import Image from "next/image";

type InsightCardProps = {
  icon: string;
  label: string;
  value: string;
  description: string;
};

function InsightCard({
  icon,
  label,
  value,
  description,
}: InsightCardProps) {
  return (
    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">

      {/* TOP */}
      <div className="flex items-center gap-3 mb-6">

        {/* ICON */}
        <div className="w-12 h-12 rounded-xl  flex items-center justify-center">
          <Image src={icon} alt={label} width={35} height={35} />
        </div>

        {/* LABEL */}
        <p className="font-medium">{label}</p>
      </div>

      {/* VALUE */}
      <h2 className="mb-2">{value}</h2>

      {/* DESCRIPTION */}
      <p className="text-sm">
        {description}
      </p>
    </div>
  );
}
const insights = [
  {
    icon: "/Insights_One.svg",
    label: "Avg. Team Age",
    value: "35 Years",
    description:
      "Experienced workforce with deep understanding of field operations, municipal systems, and long-term project execution.",
  },
  {
    icon: "/Insights_Two.svg",
    label: "Team members",
    value: "175 +",
    description:
      "A strong team supporting large-scale deployments, field operations, and system management across multiple locations.",
  },
  {
    icon: "/Insights_Three.svg",
    label: "Years of experience",
    value: "14+ Years",
    description:
      "Proven track record in building and maintaining reliable, scalable systems for real-world operational challenges.",
  },
  {
    icon: "/Insights_Four.svg",
    label: "Retained for 15 Years",
    value: "5 Clients",
    description:
      "Long-term client relationships built on consistent delivery, reliability, and operational trust.",
  },
  {
    icon: "/Insights_Five.svg",
    label: "Industry Verticals Served",
    value: "20 +",
    description:
      "Experience across diverse sectors, enabling adaptable solutions for complex operational environments like municipal systems.",
  },
  {
    icon: "/Insights_Six.svg",
    label: "Projects via Referrals",
    value: "93%",
    description:
      "High referral rate reflects client satisfaction, trust, and proven execution capability in mission-critical projects.",
  },
];

export default function Insights() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,194,168,0.1),transparent_70%)]" />

      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16">
        <h3 
          className="text-xs md:text-sm font-bold uppercase tracking-wider mb-2 md:mb-3"
          style={{ color: "var(--color-primary-1)" }}
        >
          — OUR NUMBERS
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold" style={{ color: "var(--color-neutral-800)" }}>
          Our Insights
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((item, i) => (
          <InsightCard key={i} {...item} />
        ))}
      </div>

    </section>
  );
}