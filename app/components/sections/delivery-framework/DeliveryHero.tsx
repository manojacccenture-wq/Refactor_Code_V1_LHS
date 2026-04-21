"use client";

import Button from "../../ui/Button";

export default function DeliveryHero() {
  return (
    <section className="w-full pb-24 px-6 relative bg-gradient-to-b from-primary/5 to-transparent pt-[var(--hero-offset)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 items-center text-center">
          {/* Subtitle */}
          <p className="text-primary text-base font-semibold tracking-widest uppercase mx-auto">FROM CONCEPT TO EXECUTION</p>

          {/* Main Heading */}
          <h1 className="text-neutral-800 text-5xl font-bold leading-[60px] max-w-2xl mx-auto">
            From concept to execution.
          </h1>

          {/* Description */}
          <p className="text-neutral-600 text-lg leading-7 max-w-2xl mx-auto">
            Ensuring the final result meets your goals and exceeds with your audience, ensuring the final result meets your goals and exceeds with your audience.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button variant="primary">Get started</Button>
            <Button variant="outline">
              Learn more →
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
}
