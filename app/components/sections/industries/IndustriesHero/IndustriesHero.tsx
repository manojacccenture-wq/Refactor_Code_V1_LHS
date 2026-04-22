'use client';

import Image from 'next/image';
import Button from '@/app/components/ui/Button';

const logos = [
  '/TICL_Company.svg',
  '/TCS-logo-black-CMYK.svg',
  '/TICL_Company.svg',
  '/TCS-logo-black-CMYK.svg',
  '/TICL_Company.svg',
  '/TCS-logo-black-CMYK.svg',
];

export default function IndustriesHero() {
  return (
    <section className="hero-bg w-full relative overflow-hidden">
      {/* Hero text content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center pt-(--hero-offset) pb-8 md:pb-10">
        {/* Subtitle */}
        <h6 className="font-semibold uppercase tracking-[2.24px] mb-5 md:mb-7 text-primary">
          From Concept to Scalable Code
        </h6>

        {/* Heading */}
        <h1 className="mb-5 md:mb-7">
          Industries We Serve
        </h1>

        {/* Description */}
        <p className="mb-8 md:mb-10 max-w-lg mx-auto">
          Domain depth, not breadth. We deliver in environments where operational
          failure is not an option.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="primary">Get started</Button>
        </div>
      </div>

      {/* Logo Strip */}
      <div className="relative z-10 overflow-hidden py-6 md:py-10 mb-6 md:mb-10">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-40 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-40 bg-linear-to-l from-white to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-12 md:gap-20 opacity-50 mx-auto">
          {[...logos, ...logos].map((src, i) => (
            <div key={i} className="shrink-0 flex items-center h-10 md:h-14">
              <Image
                src={src}
                alt="partner logo"
                width={128}
                height={56}
                className="w-auto h-28 object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
