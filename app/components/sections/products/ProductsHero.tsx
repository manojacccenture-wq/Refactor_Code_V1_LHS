'use client';

import Button from "@/app/components/ui/Button";
import HeroWrapper from "../Home/HeroWrapper";

export default function ProductsHero() {
  return (
    <HeroWrapper>
      <div className="relative w-full py-12 sm:py-16 md:py-32 px-5 sm:px-6 md:px-12 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-4 sm:mb-7">
            <span 
              className="text-xs sm:text-sm font-semibold uppercase tracking-[1.6px] sm:tracking-[2.24px]"
              style={{ color: "var(--color-primary-1)" }}
            >
              From Concept to Scalable Code
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-7 leading-tight"
            style={{ color: "var(--color-neutral-800)" }}
          >
            The Only ERP Built for How Indian Food Operations Actually Work
          </h1>

          {/* Subtitle */}
          <p 
            className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12 leading-relaxed"
            style={{ color: "var(--color-neutral-600)" }}
          >
            designed from the ground up for multi-outlet F&B operators, not adapted from generic ERP templates.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            <Button variant="primary">
              Get started
            </Button>
            <button 
              className="font-semibold text-base transition-opacity hover:opacity-70 flex items-center gap-2"
              style={{ color: "var(--color-neutral-800)" }}
            >
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}
