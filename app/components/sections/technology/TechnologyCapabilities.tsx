"use client";
import Image from "next/image";
import erpEnterprise from "@/app/components/sections/technology/assets/ERP_Enterprise.svg";
import roundIcon from "@/app/components/sections/technology/assets/Round_Icon.svg";
import infrastructure from "@/app/components/sections/technology/assets/Infrastrcuture.svg";
import platforms from "@/app/components/sections/technology/assets/Platforms.svg";

interface CapabilityCard {
  title: string;
  description: string;
  image: string;
}

const capabilities: CapabilityCard[] = [
  {
    title: "ERP & Enterprise",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image: erpEnterprise.src
  },
  {
    title: "App Development",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image: roundIcon.src
  },
  {
    title: "ERP & Enterprise",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image: infrastructure.src
  },
  {
    title: "Field & IoT",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image: erpEnterprise.src
  },
  {
    title: "Infrastructure",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image: infrastructure.src
  },
  {
    title: "Platform",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image: platforms.src
  },
];

function CapabilityCard({ title, description, image }: CapabilityCard) {
  return (
    <div className="bg-white border border-neutral-300 rounded-3xl p-8 shadow-sm flex flex-col gap-8 h-full">
      <div className="flex flex-col gap-3">
        <h3 className=" font-bold-token leading-[35px]">{title}</h3>
        <p className="  leading-6">{description}</p>
      </div>
      <div className="relative w-full h-[160px] rounded-2xl overflow-hidden">
        <Image
          src={image} // put your image in /public
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function TechnologyCapabilities() {
  return (
    <section className="w-full  px-6 relative bg-white">

      <div
        className="absolute top-[0%] -left-[10%] w-[300px] md:w-[300px] h-[300px] md:h-[500px] rounded-full bg-[var(--color-primary-1)] blur-[100px] md:blur-[140px] opacity-[0.15] pointer-events-none z-0"
      />

      {/* Right Glow */}
      <div
        className="absolute top-[30%] -right-[15%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[var(--color-primary-1)] blur-[100px] md:blur-[160px] opacity-[0.15] pointer-events-none z-0"
      />



      {/* BOTTOM FADE OUT: Smoothly blends the glows into the white background before the footer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none z-[1]"
      />
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="  font-bold-token leading-[46px]">
            INTEGRATION <span className="text-primary">CAPABILITIES</span>
          </h2>
        </div>

        {/* Capabilities Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} title={capability.title} description={capability.description} image={capability.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
