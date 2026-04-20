import Image from "next/image";

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

function FeatureCardComponent({ title, description, icon, highlighted = false }: FeatureCard) {
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
      <h3 className="font-bold text-lg md:text-xl mb-3" style={{ color: highlighted ? "white" : "var(--color-neutral-800)" }}>
        {title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed" style={{ color: highlighted ? "rgba(255, 255, 255, 0.9)" : "var(--color-neutral-600)" }}>
        {description}
      </p>
    </div>
  );
}

export default function WhatSetsUsApart() {
  const imgIcon4 = "/about/gem.svg";

  const features: FeatureCard[] = [
    {
      title: "Domain Depth",
      description: "When your plant needs an MIS that reads SAP data, surfaces production exceptions, and routes approval workflows — you need someone who has built that before. Repeatedly.",
      icon: imgIcon4,
      highlighted: true,
    },
    {
      title: "Operational Continuity",
      description: "We don't handover and disappear. Our manpower model means the same team that built your system can run it with defined SLAs, escalation paths, and executive reporting baked in from day one.",
      icon: imgIcon4,
    },
    {
      title: "Systems Integration Maturity",
      description: "SAP R3, Oracle, .NET/Java, IoT devices, QR/RFID hardware, cloud and on-prem architectures — we operate across the full stack, not within a single layer of it.",
      icon: imgIcon4,
    },
    {
      title: "Platform Experience",
      description: "Three enterprise platforms in production. Not in beta. Not in 'pilot.' In live, operational environments serving real clients with real accountability.",
      icon: imgIcon4,
    },
    {
      title: "Client-First Approach",
      description: "When your plant needs an MIS that reads SAP data, surfaces production exceptions, and routes approval workflows — you need someone who has built that before.",
      icon: imgIcon4,
    },
  ];

  return (
    <section className="py-16 md:py-14 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 
            className="text-xs md:text-xl font-bold uppercase tracking-wider mb-3 md:mb-4 text-primary"
            
          >
        we exceed them. Here’s what sets us apart:"
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ color: "var(--color-neutral-800)" }}>
            What Sets us apart
          </h2>
        </div>

        {/* MOBILE */}
        <div className="mt-10 flex flex-col gap-6 lg:hidden">
          {features.map((item, i) => (
            <FeatureCardComponent key={i} {...item} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex flex-col gap-6 mt-10">
          {/* ROW 1 → 2 cards */}
          <div className="grid grid-cols-2 gap-6">
            {features.slice(0, 2).map((item, i) => (
              <FeatureCardComponent key={i} {...item} />
            ))}
          </div>

          {/* ROW 2 → 3 cards */}
          <div className="grid grid-cols-3 gap-6">
            {features.slice(2, 5).map((item, i) => (
              <FeatureCardComponent key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
