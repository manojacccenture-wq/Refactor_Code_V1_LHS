"use client";
import Image from "next/image";
import heroScreen from "@/app/components/sections/technology/assets/Hero_Screeen.svg";

import Button from "../../ui/Button";

export default function TechnologyHero() {
  return (
    <section className="w-full py-24  pb-24 px-6 relative bg-gradient-to-b from-primary/5 to-transparent ">
      <div className="max-w-7xl mx-auto">

        {/* TEXT ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-16">

          {/* LEFT - Heading */}
          <h2 className="  font-bold-token leading-[60px] max-w-[650px]">
            The Only ERP Built for How Indian Food Operations Actually Work
          </h2>

          {/* RIGHT - Paragraph + Button */}
          <div className="flex flex-col gap-6 max-w-[650px]">
            <p className="  leading-7">
              Our four-stage process keeps you informed and engaged at every step, ensuring the final result meets your goals and exceeds with your audience.
            </p>

            <Button
              className="ml-auto"
            >
              Get started
            </Button>
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
  );
}