'use client';

import Button from "@/app/components/ui/Button";
import HeroWrapper from "@/app/components/shared/ui/HeroWrapper/HeroWrapper";

export default function ProductsHero() {
  return (
    <HeroWrapper>
      <div className="relative w-full px-5 sm:px-6 md:px-12 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-4 sm:mb-7">

            <p
              className="text-primary uppercase mx-auto tracking-widest font-semibold-token"

            >
             From Concept to Scalable Code
            </p>
 
          </div>

          {/* Main Title */}
          <h1
            
          >
            The Only ERP Built for How Indian Food Operations Actually Work
          </h1>

          {/* Subtitle */}
          <p
            className="text-center mb-8 sm:mb-12 leading-relaxed mt-[5%]"
          >
            designed from the ground up for multi-outlet F&B operators, not adapted from generic ERP templates.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            <Button variant="primary">
              Get started
            </Button>
            <button
              className="font-semibold transition-opacity hover:opacity-70 flex items-center gap-2"
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
