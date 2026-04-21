import Image from "next/image";
import { FeatureCard } from "@/app/components/sections/_about/WhatSetsUsApart/components/FeatureCardComponent/FeatureCardComponent.type";

export function FeatureCardComponent({ title, description, icon, highlighted = false }: FeatureCard) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition p-6 md:p-8 h-full flex flex-col"
      style={{
        backgroundColor: highlighted ? "var(--color-primary-1)" : "var(--color-neutral-100)",
        borderColor: "var(--color-neutral-300)",
        border: highlighted ? "none" : "1px solid var(--color-neutral-300)",
        color: highlighted ? "white" : undefined,
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{
          backgroundColor: highlighted ? "rgba(255, 255, 255, 0.2)" : "var(--color-neutral-800-rgb)",
        }}
      >
        <Image
          src={icon}
          alt=""
          width={28}
          height={28}
          className="w-7 h-7"
          style={{ filter: highlighted ? "brightness(0) invert(1)" : "brightness(100%) saturate(100%) invert(47%) sepia(78%) saturate(597%) hue-rotate(120deg)" }}
        />
      </div>

      {/* Content */}
      <h4 style={{ color: highlighted ? "white" : "var(--color-neutral-800)" }}>
        {title}
      </h4>
      <p  style={{ color: highlighted ? "rgba(255, 255, 255, 0.9)" : "var(--color-neutral-600)" }}>
        {description}
      </p>
    </div>
  );
}
