"use client";

import { useState } from "react";
import AccordionItem from "@/app/components/ui/AccordionItem";
import { whyChooseItems } from "@/app/components/sections/home/WhyChoose/data/WhyChoose.data";

export default function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mx-auto max-w-6xl py-16 md:py-20 px-4 md:px-6">

      {/* HEADER */}

      {/* 🔥 subtitle */}
      <h6 className="text-heading-sm text-primary text-center max-w-4xl mx-auto mb-4 md:mb-8">
        &ldquo;WE DON&rsquo;T JUST MEET EXPECTATIONS—WE EXCEED THEM. HERE&rsquo;S WHAT SETS US APART:&rdquo;
      </h6>

      {/* 🔥 title */}
      <h2 className="text-heading-lg text-center mb-8 md:mb-12">
        Why Choose Us?
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">

        {whyChooseItems.map((item, i) => (
          <AccordionItem
            key={i}
            title={item.title}
            icon={item.icon}
            isOpen={activeIndex === i}
            onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
          >
            {item.content}
          </AccordionItem>
        ))}

      </div>
    </section>
  );
}