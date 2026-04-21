import { FeatureCardComponent } from "@/app/components/sections/_about/WhatSetsUsApart/components/FeatureCardComponent/FeatureCardComponent";
import { features } from "@/app/components/sections/_about/WhatSetsUsApart/data/WhatSetsUsApart.data";



export default function WhatSetsUsApart() {

  return (
    <section className="py-16 md:py-14 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h6 
            className=" text-primary tracking-widest mb-[2%]"
            
          >
        WE EXCEED THEM. HERE'S WHAT SETS US APART:"
          </h6>
          <h2 >
            What Sets us apart
          </h2>
        </div>

        {/* MOBILE */}
        <div className="mt-10 flex flex-col gap-6 lg:hidden">
          {features.map((item, i) => (
            <FeatureCardComponent key={i} {...item} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex flex-col gap-6 mt-10">
          {/* ROW 1 → 2 cards */}
          <div className="grid grid-cols-2 gap-6">
            {features.slice(0, 2).map((item, i) => (
              <FeatureCardComponent key={i} {...item} />
            ))}
          </div>

          {/* ROW 2 → 3 cards */}
          <div className="grid grid-cols-3 gap-6">
            {features.slice(2, 5).map((item, i) => (
              <FeatureCardComponent key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
