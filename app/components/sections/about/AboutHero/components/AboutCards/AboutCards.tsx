import Image from "next/image";
import { cards } from "@/app/components/sections/about/AboutHero/data/About.data";
import { AboutCardProps } from "@/app/components/sections/about/AboutHero/components/AboutCards/AboutCards.types";



function AboutCard({ title, description, image, icon, index }: AboutCardProps) {
  return (
    <div
      className={`
        shrink-0
        min-w-[260px] md:min-w-[280px] lg:min-w-md        
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
      {/* Changed items-start to items-center here */}
      <div className="flex items-center justify-between gap-3 p-4 md:p-5">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-1">
          {/* TITLE */}
          <h5 className="font-bold-token text-neutral-700 text-center" >
            {title}
          </h5>

          {/* DESCRIPTION */}
          <p className="text-center">
            {description}
          </p>
        </div>

        {/* ICON BUTTON */}
        <div className="shrink-0 inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full border-2" style={{ backgroundColor: "var(--color-primary-1)", borderColor: "var(--color-primary-1)" }}>
          <Image src={icon} alt={title} width={18} height={18} className="w-4 md:w-5 h-4 md:h-5" />
        </div>
      </div>
    </div>
  );
}

export default function AboutCards() {
  return (
    <section className="w-full overflow-hidden"> {/* <--- ADD w-full and overflow-hidden here */}
      <div className="max-w-full mx-auto">
        {/* MOBILE & DESKTOP: Horizontal Scroll with Stacking */}
        {/* ADD flex-nowrap, pb-4 (for shadow visibility), and px-4 here ---> */}
        <div className="flex flex-nowrap gap-6 md:gap-9 overflow-x-auto scrollbar-hide pb-4 px-4">
          {cards.map((card, idx) => (
            <AboutCard key={idx} {...card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}