import Image from "next/image";
import clsx from "clsx";
import { FeatureCard } from "@/app/components/sections/about/WhatSetsUsApart/components/FeatureCardComponent/FeatureCardComponent.type";

export function FeatureCardComponent({ title, description, icon, highlighted = false }: FeatureCard) {
  return (
    <div
      className={clsx(
        "rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition p-6 md:p-8 h-full flex flex-col",
        highlighted 
          ? "bg-primary-gradient border-none" 
          : "bg-white border border-[var(--color-neutral-300)]"
      )}
    >
      {/* Icon */}
      <div
        className={clsx(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          highlighted 
            ? "bg-white/20" 
            : "bg-primary-soft-gradient"
        )}
      >
        <Image
          src={icon}
          alt=""
          width={28}
          height={28}
          className={clsx(
            "w-7 h-7",
            highlighted 
              ? "brightness-0 invert" 
              : "[filter:brightness(100%)_saturate(100%)_invert(47%)_sepia(78%)_saturate(597%)_hue-rotate(120deg)]"
          )}
        />
      </div>

      {/* Content */}
      <h4 
        className={clsx(
          highlighted ? "text-white" : "text-neutral-800"
        )}
      >
        {title}
      </h4>
      <p 
        className={clsx(
          highlighted ? "text-white/90" : "text-neutral-600"
        )}
      >
        {description}
      </p>
    </div>
  );
}