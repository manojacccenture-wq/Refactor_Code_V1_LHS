"use client";

import HeroWrapper from "@/app/components/shared/ui/HeroWrapper/HeroWrapper";

export default function CareerHero() {
  return (
    <HeroWrapper>
      <section className="relative w-full overflow-hidden mx-auto py-28 md:ml-[6%] lg:ml-[2%] ">

        {/* Content */}
        <div className="relative  max-w-7xl mx-auto text-center md:text-left">
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
