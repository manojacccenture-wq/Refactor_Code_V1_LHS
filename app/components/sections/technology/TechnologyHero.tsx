"use client";
import Image from "next/image";

import Button from "../../ui/Button";

export default function TechnologyHero() {
  return (
    <section className="w-full pb-24 px-6 relative bg-gradient-to-b from-primary/5 to-transparent pt-[var(--hero-offset)]">
      <div className="max-w-7xl mx-auto">

        {/* TEXT ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

          {/* LEFT - Heading */}
          <h1 className="text-neutral-800 text-5xl font-bold leading-[60px] max-w-[650px]">
            The Only ERP Built for How Indian Food Operations Actually Work
          </h1>

          {/* RIGHT - Paragraph + Button */}
          <div className="flex flex-col gap-6 max-w-[650px]">
            <p className="text-neutral-600 text-lg leading-7">
              Our four-stage process keeps you informed and engaged at every step, ensuring the final result meets your goals and exceeds with your audience.
            </p>

            <Button

              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg w-fit"
            >
              Get started
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/technology/Hero_Screeen.svg"
            alt="Technology Hero"
            fill
            priority
            sizes="100vw"
            className="object-none"
          />
        </div>




      </div>
    </section>
  );
}