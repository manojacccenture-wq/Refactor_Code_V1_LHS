"use client";
import Image from "next/image";

interface CapabilityCard {
  title: string;
  description: string;
  image:string;
}

const capabilities: CapabilityCard[] = [
  {
    title: "ERP & Enterprise",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image:"/technology/ERP_Enterprise.svg"
  },
  {
    title: "App Development",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image:"/technology/Round_Icon.svg"
  },
  {
    title: "ERP & Enterprise",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image:"/technology/Infrastrcuture.svg"
  },
  {
    title: "Field & IoT",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image:"/technology/ERP_Enterprise.svg"
  },
  {
    title: "Infrastructure",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image:"/technology/Infrastrcuture.svg"
  },
  {
    title: "Platform",
    description: "SAP R3 (deep integration), Oracle Databases, Enterprise SQL Server",
    image:"/technology/Platforms.svg"
  },
];

function CapabilityCard({ title, description,image }: CapabilityCard) {
  return (
    <div className="bg-white border border-neutral-300 rounded-3xl p-8 shadow-sm flex flex-col gap-8 h-full">
      <div className="flex flex-col gap-3">
        <h3 className="text-neutral-800 text-2xl font-bold leading-[35px]">{title}</h3>
        <p className="text-neutral-600 text-sm leading-6">{description}</p>
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
    <section className="w-full py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-neutral-800 text-4xl font-bold leading-[46px]">
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
