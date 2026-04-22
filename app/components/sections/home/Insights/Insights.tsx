import { insights } from "@/app/components/sections/home/Insights/data/Insights.data";
import { InsightCard } from "@/app/components/sections/home/Insights/components/InsightCards/insightCard";




export default function Insights() {
  return (
    <section className="py-0 md:py-20 px-4 md:px-6 relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,194,168,0.1),transparent_70%)]" />

      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16">

        {/* ✅ BADGE */}
        <h6 className="text-heading-sm text-primary uppercase tracking-wider mb-2 md:mb-3">
          — OUR NUMBERS
        </h6>

        {/* ✅ TITLE */}
        <h2 className="text-heading-lg">
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