

import IndustriesHero from "@/app/components/sections/industries/IndustriesHero/IndustriesHero";
import IndustriesHeroVisual from "@/app/components/sections/industries/IndustriesHeroVisual/IndustriesHeroVisual";
import IndustriesContent from "@/app/components/sections/industries/IndustriesContent/IndustriesContent";

export default function IndustriesPage() {
  return (
    <section className="relative w-full min-h-screen">
      <IndustriesHero />
      <IndustriesHeroVisual />
      <IndustriesContent />
    </section>
  );
}
