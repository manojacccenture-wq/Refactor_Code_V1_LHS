'use client';

import Image from "next/image";
import Button from "@/app/components/ui/Button";
import HeroWrapper from "@/app/components/shared/ui/HeroWrapper/HeroWrapper";

// Adjust this import path depending on where your image actually lives.
// If it's in the public folder, you can remove this import and use src="/UI_Graphic.png" instead.
import uiGraphic from "@/app/components/sections/services/assets/UI_Graphic.png";

export default function ServicesHero() {
  return (
    <HeroWrapper>
      <section>
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-7 text-center">
            <p className="text-primary uppercase mx-auto tracking-widest font-semibold-token">
              APPROACH BASED ON FIRST PRINCIPLE
            </p>
          </div>

          {/* Main Title */}
          <h1 className="mx-auto">
            Enterprise Technology Services Built for Operational Reality
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-center mt-[2%] mb-12 leading-relaxed mx-auto">
            {`We don't deliver theoretical frameworks. We deliver running systems — staffed, maintained, and accountable to defined outcomes`}
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Button variant="primary" href="/contact">Let’s Discuss</Button>
            <Button variant="outline">
              Learn more →
            </Button>
          </div>
        </div>

        {/* Hero Graphic */}
        {/* Hero Graphic - Centered, with strong fade */}
        <div className="flex justify-center max-w-full mx-auto px-6 mt-10 " >
          <div id="services-hero-dashboard" className="relative w-full h-auto">
            <Image
              src={uiGraphic}
              alt="Services Operational Reality Dashboard"
              width={1000}
              height={600}
              // Basic responsive scaling
              className="w-full h-auto object-contain drop-shadow-xl"
              priority // Added priority since it's above the fold
            />
            {/* The strong, aligned fade overlay. 
                - Changed bottom-2 to bottom-0 to align it perfectly with the bottom edge.
                - Increased h-24 to h-32 to make the fade more noticeable and prominent.
                - form-white and pointer-events-none are good and kept. */}
            <div className="absolute top-120 left-0 right-0 w-full h-96 bg-gradient-to-t z-50 from-white via-white via-60% to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
    </HeroWrapper>
  );
}