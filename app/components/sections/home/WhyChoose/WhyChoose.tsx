"use client";

import { useState } from "react";
import AccordionItem from "@/app/components/ui/AccordionItem";
import { whyChooseItems } from "@/app/components/sections/home/WhyChoose/data/WhyChoose.data";

export default function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mx-auto max-w-6xl py-16 md:py-20 px-4 md:px-6">

      {/* HEADER */}
      <h6 className="text-heading-sm text-primary text-center max-w-4xl mx-auto mb-4 md:mb-8">
        &ldquo;WE DON&rsquo;T JUST MEET EXPECTATIONS—WE EXCEED THEM. HERE&rsquo;S WHAT SETS US APART:&rdquo;
      </h6>

      <h2 className="text-heading-lg text-center mb-8 md:mb-12">
        Why Choose Us?
      </h2>

      {/* TWO-COLUMN MASONRY LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
        
        {/* Left Column (Even indices: 0, 2, 4) */}
        <div className="flex flex-col gap-4 md:gap-6">
          {whyChooseItems.map((item, i) => (
            i % 2 === 0 && (
              <AccordionItem
                key={i}
                title={item.title}
                icon={item.icon}
                isOpen={activeIndex === i}
                onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
              >
                {item.content}
              </AccordionItem>
            )
          ))}
        </div>

        {/* Right Column (Odd indices: 1, 3, 5) */}
        <div className="flex flex-col gap-4 md:gap-6">
          {whyChooseItems.map((item, i) => (
            i % 2 !== 0 && (
              <AccordionItem
                key={i}
                title={item.title}
                icon={item.icon}
                isOpen={activeIndex === i}
                onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
              >
                {item.content}
              </AccordionItem>
            )
          ))}
        </div>

      </div>
    </section>
  );
}