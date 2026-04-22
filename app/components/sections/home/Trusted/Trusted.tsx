import Image from "next/image";

import { logos } from "@/app/components/sections/home/Trusted/data/Trusted.data";
import LogoMarquee from "@/app/components/shared/ui/LogoMarquee/LogoMarquee";

export default function Trusted() {
  return (
    <section className="text-center py-12 md:py-2 overflow-hidden max-w-7xl mx-auto">

      {/* HEADER */}


      <LogoMarquee
        badge="— Trusted By"
        title="Don't take our word for it"
        items={logos}
        // You can inject custom classes here if needed:
        className="bg-transparent"
        marqueeClassName="mt-12"
      />

    
    </section>
  );
}