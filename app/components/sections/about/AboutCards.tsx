import Image from "next/image";

interface AboutCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
  index?: number; // ⚠️ added for stagger control
}

function AboutCard({ title, description, image, icon, index }: AboutCardProps) {
  return (
    <div
      className={`
        min-w-[260px] md:min-w-[280px] lg:min-w-[240px]
        rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-md transition
        ${index !== undefined && index % 2 !== 0 ? "lg:mt-8" : "lg:-mt-0"}
      `}
      style={{
        borderColor: "var(--color-neutral-300)",
      }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[180px] md:h-[200px] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex items-start justify-between gap-3 p-4 md:p-5">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-1">
          {/* TITLE */}
          <h3 className="font-bold text-sm md:text-base" style={{ color: "var(--color-neutral-800)" }}>
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--color-neutral-600)" }}>
            {description}
          </p>
        </div>

        {/* ICON BUTTON */}
        <div className="shrink-0 inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border-2" style={{ backgroundColor: "var(--color-primary-1)", borderColor: "var(--color-primary-1)" }}>
          <Image src={icon} alt={title} width={18} height={18} className="w-4 md:w-5 h-4 md:h-5" />
        </div>
      </div>
    </div>
  );
}

export default function AboutCards() {
  const testImage1 = "/about/Title_1.svg"
  const testImage2 = "/about/Title_2.svg"
  const testImage3 = "/about/Title_3.svg"
  const testImage4 = "/about/Title_4.svg"
  const imgIcon1 = "/about/Title_Icon_1.svg";
  const imgIcon2 = "/about/Title_Icon_2.svg";
  const imgIcon3 = "/about/Title_Icon_3.svg";
  const imgIcon4 = "/about/Title_Icon_4.svg";



  const cards: AboutCardProps[] = [
    {
      title: "Built on Experience",
      description: "Two decades of enterprise work shaping how we approach every problem today.",
      image: testImage1,
      icon: imgIcon1
    },
    {
      title: "People Who Execute",
      description: " A team that takes ownership beyond ideas — focused on making things work on ground.",
      image: testImage2,
      icon: imgIcon2
    },
    {
      title: " Clarity Through Data",
      description: " We track what matters, measure what works, and improve continuously.",
      image: testImage4,
      icon: imgIcon3
    },
    {
      title: " Designed to Scale",
      description: "Every system is built to handle growth — more users, more complexity, more impact.",
      image: testImage3,
      icon: imgIcon4
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* MOBILE & DESKTOP: Horizontal Scroll with Stacking */}
        <div className="flex gap-6 md:gap-9 overflow-x-auto scrollbar-hide">
          {cards.map((card, idx) => (
            <AboutCard key={idx} {...card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}