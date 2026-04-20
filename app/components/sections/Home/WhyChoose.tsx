"use client";

import { useState } from "react";
import AccordionItem from "../../ui/AccordionItem";

const items = [
  {
    title: "Client-First Approach",
    icon: "/WhyChooseUs_1.svg",
    content: (
      <>
        <p className="text-primary font-medium">
          Built Around Your Operations, Not Just Requirements
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          We study how your business actually runs before writing a single line of code, ensuring solutions fit real workflows, not assumptions.
        </p>

        <p className="text-primary font-medium mt-4">
          Single Ownership, Zero Confusion
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          A dedicated point of contact ensures faster decisions, fewer delays, and seamless execution across teams.

        </p>
      </>
    ),
  },
  {
    title: "Skilled & Passionate Team",
    icon: "/Insights_Two.svg",
    content: (
      <>
        <p className="text-primary font-medium">
          Engineers Who Think Beyond Code
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          Our team focuses on solving business problems, not just delivering features, bringing both technical depth and operational understanding.
        </p>

        <p className="text-primary font-medium mt-4">
          Experience Across Real-World Systems
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          From enterprise tools to scalable platforms, we’ve built systems that run daily operations, not just prototypes.

        </p>
      </>
    ),

  },
  {
    title: "Transparent Communication",
    icon: "/WhyChooseUs_3.svg",
    content: (
      <>
        <p className="text-primary font-medium">
          Clarity at Every Stage
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          From planning to delivery, you always know what’s happening, what’s next, and why decisions are made.
        </p>

        <p className="text-primary font-medium mt-4">
          No Hidden Dependencies or Delays
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          We communicate risks early and solve them proactively, ensuring smoother project execution.


        </p>
      </>
    ),
  },
  {
    title: "Cost-Effective Solutions",
    icon: "/WhyChooseUs_4.svg",
    content: (
      <>
        <p className="text-primary font-medium">
          Optimized for Long-Term ROI, Not Short-Term Savings
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          We design systems that reduce operational costs over time, avoiding frequent rebuilds and maintenance overhead.
        </p>

        <p className="text-primary font-medium mt-4">
          Right-Sized Technology Choices
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          No overengineering, no unnecessary tools — just what your business actually needs to scale efficiently.



        </p>
      </>
    ),
  },
  {
    title: "Timely Delivery, Every Time",
    icon: "/WhyChooseUs_5.svg",
    content: (
      <>
        <p className="text-primary font-medium">
          Process-Driven Execution
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          Structured workflows and clear milestones ensure predictable delivery timelines.
        </p>

        <p className="text-primary font-medium mt-4">
          Built for Continuity, Not Chaos
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          Even with evolving requirements, we maintain delivery discipline without compromising quality.
        </p>
      </>
    ),
  },
  {
    title: "End-to-End IT Solutions",
    icon: "/WhyChooseUs_6.svg",
    content: (
      <>
        <p className="text-primary font-medium">
          From Idea to Deployment and Beyond
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          We handle architecture, development, deployment, and ongoing support — all under one roof.
        </p>

        <p className="text-primary font-medium mt-4">
          Systems That Scale With You
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          Designed to grow from initial implementation to enterprise-level operations without rework.
        </p>
      </>
    ),
  },
];

export default function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0); // ✅ first open

  return (
    <section className="mx-auto max-w-6xl py-16 md:py-20 px-4 md:px-6">

      {/* HEADER */}
      <h2 className="text-center max-w-4xl text-sm md:text-lg mx-auto mb-4 md:mb-8 text-primary" >
        &ldquo;WE DON&rsquo;T JUST MEET EXPECTATIONS—WE EXCEED THEM. HERE&rsquo;S WHAT SETS US APART:&rdquo;
      </h2>
      <h2 className="text-center text-xl md:text-2xl mb-8 md:mb-12 font-bold" style={{ color: "var(--color-neutral-800)" }}>
        Why Choose Us?
      </h2>

      {/* GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">

        {items.map((item, i) => {
          return (
            <AccordionItem
              key={i}
              title={item.title}
              icon={item.icon}
              isOpen={activeIndex === i}
         onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
            >
              {item.content}
            </AccordionItem>
          );
        })}

      </div>
    </section>
  );
}