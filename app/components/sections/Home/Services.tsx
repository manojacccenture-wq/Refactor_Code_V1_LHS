import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  image: string;
};

function ServiceCard({
  title,
  description,
  icon,
  image,
}: ServiceCardProps) {
  return (
    <div className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition ">

      {/* IMAGE */}
 <div className="relative w-full">

  {/* IMAGE CONTAINER (ROUNDED) */}
  <div className="relative h-[160px] sm:h-[180px] overflow-hidden rounded-xl z-0">
    <Image
      src={image}
      alt={title}
      fill
      className="object-contain"
    />
  </div>

  {/* GRADIENT (NOT ROUNDED) */}
  <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-b from-transparent via-[rgba(0,194,168,0.07)] to-[rgba(0,194,168,0.12)] z-10" />

</div>

      {/* CONTENT */}
      <div className=" flex gap-3 items-center py-4 px-4">

        {/* ICON */}
        <div className="w-10 h-10 rounded-lg  flex items-center justify-center">
          <Image src={icon} alt="icon" width={50} height={50} />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-md font-semibold">{title}</h3>
          <p className="text-xs md:text-lg text-neutral-600 mt-1">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}

const services = [
  {
    title: "Managed IT Workforce Solution",
    description: "Skilled IT resources deployed, managed, and aligned to your project needs.",
    image: "/Home_Service_Card_1.svg",
    icon: "/Home_Service_Card_Icon_1.svg",
  },
  {
    title: "Software Development & Maintenance",
    description: "Custom-built systems designed for reliability, scalability, and long-term support.",
    image: "/Home_Service_Card_2.svg",
    icon: "/Home_Service_Card_Icon_2.svg",
  },
  {
    title: "Turnkey Project Development",
    description: "End-to-end project execution from planning to deployment and ongoing operations.",
    image: "/Home_Service_Card_3.svg",
    icon: "/Home_Service_Card_Icon_3.svg",
  },
  {
    title: "Innovation & Emerging Technologies",
    description: "Adoption of new technologies to solve real-world business and operational challenges.",
    image: "/Home_Service_Card_4.svg",
    icon: "/Home_Service_Card_Icon_4.svg",
  },
  {
    title: "Process Automation & Digitization",
    description: "Transforming manual workflows into efficient, trackable, and automated systems.",
    image: "/Home_Service_Card_5.svg",
    icon: "/Home_Service_Card_Icon_5.svg",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto py-16 md:py-20 px-4 md:px-6">

      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16">
        <h3 
          className="text-xs md:text-lg font-bold uppercase tracking-wider mb-2 md:mb-3 text-primary"
          
        >
          — Scaling With
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold" style={{ color: "var(--color-neutral-800)" }}>
          Building the future alongside global pioneers
        </h2>
      </div>

      {/* MOBILE */}
      <div className="mt-10 flex flex-col gap-6 lg:hidden">
        {services.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col gap-6 mt-10">

        {/* ROW 1 → 2 cards */}
        <div className="grid grid-cols-2 gap-6">
          {services.slice(0, 2).map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>

        {/* ROW 2 → 3 cards */}
        <div className="grid grid-cols-3 gap-6">
          {services.slice(2, 5).map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>

      </div>

    </section>
  );
}