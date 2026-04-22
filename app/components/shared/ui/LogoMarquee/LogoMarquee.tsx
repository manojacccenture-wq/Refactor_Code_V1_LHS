"use client";

import Image from "next/image";
import clsx from "clsx";

export type LogoItem = {
  src: string;
  name: string;
};

export type LogoMarqueeProps = {
  /** Optional badge text above the title */
  badge?: string;
  /** Optional main title */
  title?: string;
  /** Array of objects containing src and name for the images */
  items: LogoItem[];
  /** Outer section class name */
  className?: string;
  /** Inner marquee container class name */
  marqueeClassName?: string;
  /** Image class name overrides */
  imageClassName?: string;
  /** Toggle pausing the animation on hover */
  pauseOnHover?: boolean;
};

export default function LogoMarquee({
  badge,
  title,
  items,
  className,
  marqueeClassName,
  imageClassName,
  pauseOnHover = true,
}: LogoMarqueeProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={clsx("py-6 md:py-20 overflow-hidden w-full", className)}>
      
      {/* HEADER (Only renders if badge or title is provided) */}
      {(badge || title) && (
        <div className="mb-8 md:mb-12 text-center max-w-7xl mx-auto px-4">
          {badge && (
            <h6 className="text-heading-sm uppercase tracking-wide text-primary mb-2 md:mb-3">
              {badge}
            </h6>
          )}
          {title && (
            <h2 className="text-heading-lg">{title}</h2>
          )}
        </div>
      )}

      {/* MARQUEE WRAPPER */}
      <div 
        className={clsx(
          "relative max-w-7xl mx-auto", 
          pauseOnHover && "pause-on-hover",
          marqueeClassName
        )}
      >
        {/* FADE GRADIENTS */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* TRACK */}
        <div className="flex w-max scroll-left gap-14 opacity-100 py-6">
          {/* Duplicating items array to create the infinite scroll illusion */}
          {[...items, ...items].map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex items-center h-16">
              <Image
                src={logo.src}
                alt={logo.name || "Partner Logo"}
                width={280}
                height={64}
                className={clsx(
                  "h-28 md:h-13 lg:h-28 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-in-out",
                  imageClassName
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}