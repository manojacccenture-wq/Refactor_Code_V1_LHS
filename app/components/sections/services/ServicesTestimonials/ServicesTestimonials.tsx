'use client';

import { testimonials } from "@/app/components/sections/services/ServicesTestimonials/data/ServicesTestimonials.data";
import { TestimonialCard } from "@/app/components/sections/services/ServicesTestimonials/components/TestimonialCard";

export default function ServicesTestimonials() {
  const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
  const row2 = [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      {/* Added max-w-[100vw] to prevent horizontal scrolling issues on mobile */}
      <div className="mx-auto max-w-[100vw]">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h5 className="text-black font-regular-token text-sm md:text-base">
            Rated 4/5 by over 15K users
          </h5>
          <h2 className="mt-2 md:mt-3 text-2xl md:text-4xl">
            What Our Happy User Says
          </h2>
        </div>

        {/* RESPONSIVE MASK: 
            Mobile: Fades only 5% of the edges so cards remain readable.
            Desktop (md:): Fades 15% of the edges for the dramatic effect.
        */}
        <div className="space-y-4 md:space-y-6 overflow-hidden pause-on-hover bg-gray-300/10 py-4 md:py-8 
          [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] 
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] 
          md:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] 
          md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        >

          {/* ROW 1 → RIGHT */}
          <div className="overflow-hidden">
            <div className="flex gap-4 md:gap-6 w-max scroll-right">
              {row1.map((t, i) => (
                // Adjusted card width: 280px on mobile, 320px on desktop
                <div key={i} className="w-[280px] md:w-[320px] shrink-0">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 → LEFT */}
          <div className="overflow-hidden">
            <div className="flex gap-4 md:gap-6 w-max scroll-left">
              {row2.map((t, i) => (
                // Adjusted card width: 280px on mobile, 320px on desktop
                <div key={i} className="w-[280px] md:w-[320px] shrink-0">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}