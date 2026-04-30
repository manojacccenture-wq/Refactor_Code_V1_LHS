"use client";
import Image from "next/image";
import heroScreen from "@/app/components/sections/technology/assets/Hero_Screeen.svg";

import Button from "../../ui/Button";
import HeroWrapper from "../../shared/ui/HeroWrapper/HeroWrapper";

export default function TechnologyHero() {
  return (
    <HeroWrapper>
      <section className="w-full py-5  pb-24 px-6 relative bg-gradient-to-b from-primary/5 to-transparent ">
        <div className="max-w-7xl mx-auto">

          {/* TEXT ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-16 " >

            {/* LEFT - Heading */}
            <h2 className="text-center lg:text-left  font-bold-token  max-w-[650px] md:mx-auto lg:mx-0">
              The Only ERP Built for How Indian Food Operations Actually Work
            </h2>

            {/* RIGHT - Paragraph + Button */}
            <div className="flex flex-col gap-6 text-center lg:text-left max-w-[650px] md:mx-auto lg:mx-0">
              <h5 className="font-regular-token  text-neutral-600">
                Our four-stage process keeps you informed and engaged at every step, ensuring the final result meets your goals and exceeds with your audience.
              </h5>

              <Button className="mx-auto lg:mx-0" variant="primary" href="/contact">Let’s Discuss</Button>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={heroScreen}
              alt="Technology Hero"
              fill
              priority
              sizes="100vw"
              className="object-none"
            />
          </div>

        </div>
      </section>
    </HeroWrapper>
  );
}