"use client";

import HeroWrapper from "../Home/HeroWrapper";

export default function CareerHero() {
  return (
    <HeroWrapper>
      <section className="relative w-full md:py-32 overflow-hidden mx-auto">
        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Subtitle */}
          <h4 className="text-primary mx-auto mb-[2%]">
            Career
          </h4>

          {/* Main Heading */}
          <h1 className="mb-[2%]">
            Your gate way to remote tech careers
          </h1>

          {/* Description */}
          <p className="mx-auto">
            Domain depth, not breadth. We deliver in environments where operational failure is not an option.
          </p>
        </div>
      </section>
    </HeroWrapper>
  );
}
