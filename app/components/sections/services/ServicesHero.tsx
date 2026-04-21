'use client';

import Button from "@/app/components/ui/Button";
import HeroWrapper from "@/app/components/shared/ui/HeroWrapper/HeroWrapper";

export default function ServicesHero() {
  return (
    <HeroWrapper>
      <section className="relative w-full py-16 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-7 text-center">
            <span 
              className="text-primary uppercase mx-auto"
              
            >
              APPROACH BASED ON FIRST PRINCIPLE
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="mx-auto"
            
          >
            Enterprise Technology Services Built for Operational Reality
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-center mb-12 leading-relaxed mx-auto"
            
          >
            {`We don't deliver theoretical frameworks. We deliver running systems — staffed, maintained, and accountable to defined outcomes`}
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Button variant="primary">
              Get started
            </Button>
            <Button 
              variant="outline"
            >
              Learn more →
            </Button>
          </div>
        </div>
      </section>
    </HeroWrapper>
  );
}
