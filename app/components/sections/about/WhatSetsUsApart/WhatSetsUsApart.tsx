import { FeatureCardComponent } from "@/app/components/sections/about/WhatSetsUsApart/components/FeatureCardComponent/FeatureCardComponent";
import { features } from "@/app/components/sections/about/WhatSetsUsApart/data/WhatSetsUsApart.data";

export default function WhatSetsUsApart() {
  return (
    <section className="py-16 md:py-14 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h6 className=" text-primary tracking-widest mb-[2%]">
            WE EXCEED THEM. HERE&apos;S WHAT SETS US APART:&quot;
          </h6>
          <h2>What Sets us apart</h2>
        </div>

        {/* MOBILE */}
        <div className="mt-10 flex flex-col gap-6 lg:hidden">
          {features.map((item, i) => (
            <FeatureCardComponent key={`mobile-${i}`} {...item} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex flex-col gap-6 mt-10">
          {/* ROW 1 → 3 cards */}
          <div className="grid grid-cols-3 gap-6">
            {features.slice(0, 3).map((item, i) => (
              <FeatureCardComponent key={`row1-${i}`} {...item} />
            ))}
          </div>

          {/* ROW 2 → 2 cards (Centered) */}
          <div className="flex justify-center gap-6">
            {features.slice(3, 5).map((item, i) => (
              // w-[calc(33.3333%-16px)] ensures these cards match the exact width of the grid-cols-3 cards above (accounting for the 24px/gap-6 spacing).
              <div key={`row2-${i}`} className="w-[calc(33.3333%-16px)]">
                <FeatureCardComponent {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}