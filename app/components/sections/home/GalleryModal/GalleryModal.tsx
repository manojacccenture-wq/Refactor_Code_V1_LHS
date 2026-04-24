"use client";
import { useState } from "react";
import Button from "@/app/components/ui/Button";
import { Card } from "@/app/components/sections/home/GalleryModal/components/Card";
import { slides } from "@/app/components/sections/home/GalleryModal/data/slides.data";
import phoneImage from "@/app/components/sections/home/assets/Phone_Group.svg";
import { VisualWrapper } from "@/app/components/sections/home/GalleryModal/components/VisualWrapper";
import Image from "next/image";

export default function GalleryModal() {
  const [index, setIndex] = useState(0);
  const prevIndex = (index - 1 + slides.length) % slides.length;
  const nextIndex = (index + 1) % slides.length;

  function renderVisual(slide: (typeof slides)[number]) {
    switch (slide.type) {
      case "phones":
        return <VisualWrapper>
          <Image
            src={phoneImage}
            alt="ipad"
            width={200}
            height={400}
            loading="eager"
            className="h-[300px] w-auto object-contain"
          />
        </VisualWrapper>;

      case "ipad":
        return (
          <VisualWrapper>
            <Image
              src={slide.image}
              alt="ipad"
              width={200}
              height={400}
              loading="eager"
              className="h-[300px] w-auto object-contain"
            />
          </VisualWrapper>
        );

      default:
        return null;
    }
  }

  return (
    <>
      {/* CAROUSEL */}
      <div className="relative flex justify-center items-center mt-6 md:mt-10">

        {/* LEFT */}
        <div className="hidden md:block absolute left-[10%] lg:left-[15%] scale-90 opacity-50 blur-[1px]">
          {/* 🔥 FIX: Removed renderVisual so the image doesn't show */}
          <Card slide={slides[prevIndex]}  />
        </div>

        {/* CENTER */}
        <div
          key={index}
          className="z-10 animate-[fade_0.6s_ease] w-full md:w-auto px-2 md:px-0"
        >
          {/* 🔥 KEEP: Render the image ONLY on the active center card */}
          <Card slide={slides[index]}>
            {renderVisual(slides[index])}
          </Card>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block absolute right-[10%] lg:right-[15%] scale-90 opacity-50 blur-[1px]">
           {/* 🔥 FIX: Removed renderVisual so the image doesn't show */}
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