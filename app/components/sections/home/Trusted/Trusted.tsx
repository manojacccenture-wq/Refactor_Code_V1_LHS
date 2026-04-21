import Image from "next/image";

import { logos } from "@/app/components/sections/home/Trusted/data/Trusted.data";

export default function Trusted() {
  return (
    <section className="text-center py-12 md:py-20 overflow-hidden">

      {/* HEADER */}
      <div className="mb-8 md:mb-12">

        {/* Badge */}
        <h6 className="text-heading-sm uppercase tracking-wide text-primary mb-2 md:mb-3">
          — Trusted By
        </h6>

        {/* Title */}
        <h2 className="text-heading-lg">
          Don&apos;t take our word for it
        </h2>

      </div>

      {/* MARQUEE */}
      <div className="relative mt-12 pause-on-hover">

        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="relative mt-12 pause-on-hover">
          <div className="flex w-max scroll-left gap-12 opacity-100 py-6">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center h-16">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={64}
                  className="
                    h-12 md:h-13 lg:h-13 w-auto
                    opacity-40 grayscale
                    hover:opacity-100 hover:grayscale-0 hover:scale-105
                    transition-all duration-700 ease-in-out
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}