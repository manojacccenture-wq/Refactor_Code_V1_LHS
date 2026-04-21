'use client';

import { testimonials } from "@/app/components/sections/services/ServicesTestimonials/data/ServicesTestimonials.data";

import { TestimonialCard } from "@/app/components/sections/services/ServicesTestimonials/components/TestimonialCard";



export default function ServicesTestimonials() {

  const row1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const row2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className=""
            // style={{ color: "var(--color-text-title)" }}
          >
            What Our Happy User Says
          </h2>
        </div>

        {/* Testimonials Layout */}
        <div className="space-y-6 overflow-hidden pause-on-hover">

          {/* ROW 1 → RIGHT */}
          <div className="overflow-hidden">
            <div className="flex gap-6 w-max scroll-right">
              {row1.map((t, i) => (
                <div key={i} className="w-[320px] shrink-0">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 → LEFT */}
          <div className="overflow-hidden">
            <div className="flex gap-6 w-max scroll-left">
              {row2.map((t, i) => (
                <div key={i} className="w-[320px] shrink-0">
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
