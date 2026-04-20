"use client";

import { useState } from "react";
import Button from "../../ui/Button";
import FeatureCard from "../../ui/FeatureCard";
import Image from "next/image";



// ✅ reusable icon
const Icon = () => (
  <span className="relative block w-10 h-10">
    <Image
      src="/Circle.png"
      alt="icon"
      fill
      sizes="40px" // ✅ FIX
      className="object-contain"
    />
  </span>
);

// ✅ reusable phone group
const Phones = () => (
  <div className="absolute -top-16 flex items-center gap-0 z-10">
    {["/phone_1.svg", "/phone_2.svg", "/phone_3.svg"].map((src) => (
      <div key={src} className="relative">
        <Image
          src={src}
          alt="phone"
          width={180}
          height={360}
          className="h-[260px] w-auto object-contain"
          style={{ height: "260px", width: "auto" }} // ✅ FIX
        />
      </div>
    ))}
  </div>
);

// ✅ reusable card renderer
const Card = ({
  slide,
  children,
}: {
  slide: (typeof slides)[number];
  children?: React.ReactNode;
}) => (
  <FeatureCard
    variant={slide.variant}
    title={slide.title}
    description={slide.description}
    icon={<Icon />}
  >
    {slide.visual}
  </FeatureCard>
);
const VisualWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute -top-16 flex justify-center w-full z-10 pointer-events-none">
    {children}
  </div>
);

const slides = [
  {
    variant: "green",
    title: "Run Smarter Food Operations Across Every Outlet.",
    description:
      "Streamline kitchen, inventory, and sales with a single ERP solution that scales with your franchise.",
    visual: <Phones />
  },
  {
    variant: "blue",
    title: "Digitize and Monitor Daily Waste Collection Operations",
    description:
      " Enable seamless operations across security, utilities, complaints, and facility management through a unified smart platform.",
    visual: (
      <VisualWrapper>
        <Image
          src="/Ipad.svg"
          alt="ipad"
          width={200}
          height={400}
          className="h-[300px] w-auto object-contain"
        />
      </VisualWrapper>
    )
  },
  {
    variant: "yellow",
    title: "Manage Communities with Integrated Digital Infrastructure",
    description:
      "Enable seamless operations across security, utilities, complaints, and facility management through a unified smart platform.",
    visual: (
      <VisualWrapper>
        <Image
          src="/Ipad2.svg"
          alt="ipad"
          width={200}
          height={400}
          className="h-[300px] w-auto object-contain"
        />
      </VisualWrapper>
    )
  },
  {
    variant: "purple",
    title: "Simplify Workforce Management with One Unified System",
    description:
      "Handle attendance, payroll, performance, and employee lifecycle with a structured system built for growing teams.",
    visual: (
      <VisualWrapper>
        <Image
          src="/Ipad.svg"
          alt="ipad"
          width={200}
          height={400}
          className="h-[300px] w-auto object-contain"
        />
      </VisualWrapper>
    )
  },
] as const;

export default function GalleryModal() {
  const [index, setIndex] = useState(0);

  const prevIndex = (index - 1 + slides.length) % slides.length;
  const nextIndex = (index + 1) % slides.length;

  return (
    <>
      {/* CAROUSEL */}
      <div className="relative flex justify-center items-center mt-6 md:mt-10">

        {/* LEFT */}
        <div className="hidden md:block absolute left-[10%] lg:left-[15%] scale-90 opacity-50 blur-[1px]">
          <Card slide={slides[prevIndex]} />
        </div>

        {/* CENTER */}
        <div key={index} className="z-10 animate-[fade_0.6s_ease] w-full md:w-auto px-2 md:px-0">
          <Card slide={slides[index]}>
            <Phones />
          </Card>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block absolute right-[10%] lg:right-[15%] scale-90 opacity-50 blur-[1px]">
          <Card slide={slides[nextIndex]} />
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="mt-6 md:mt-10 flex justify-center gap-3 md:gap-4">
        {[
          { dir: -1, path: "M15 19l-7-7 7-7" },
          { dir: 1, path: "M9 5l7 7-7 7" },
        ].map(({ dir, path }) => (
          <Button
            key={dir}
            onClick={() =>
              setIndex((i) => (i + dir + slides.length) % slides.length)
            }
            className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition active:scale-95"
          >
            <svg
              className="w-4 md:w-5 h-4 md:h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={path} />
            </svg>
          </Button>
        ))}
      </div>
    </>
  );
}