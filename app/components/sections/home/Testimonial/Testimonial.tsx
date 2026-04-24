import Image from "next/image";
import janakaiRamana from "@/app/components/shared/assets/Janakai_Ramana.png";

export default function Testimonial() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Outer Border Layer (NEW) */}
        <div className="relative rounded-[24px] border-t border-neutral-200 p-[6px]">

          {/* Inner Card (EXISTING - DO NOT CHANGE STYLES INSIDE) */}
          <div className="relative overflow-hidden rounded-[20px] bg-(--color-bg-card) border border-neutral-200 shadow-(--shadow-card-sm) px-8 md:px-20 py-10 md:py-16">
            {/* Left teal gradient fade */}
            <div
              className="absolute inset-y-0 left-0 w-1/4 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgb(var(--color-primary-rgb) / 0.09) 13.5%, transparent)",
              }}
            />

            {/* Right teal gradient fade (mirrored) */}
            <div
              className="absolute inset-y-0 right-0 w-1/4 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, rgb(var(--color-primary-rgb) / 0.09) 13.5%, transparent)",
              }}
            />

            {/* Decorative double-quote marks */}
            <div
              aria-hidden="true"
              className="absolute left-[55%] top-1/2 -translate-y-1/2 pointer-events-none select-none leading-none opacity-50"
              style={{
                fontSize: "clamp(80px, 12vw, 180px)",
                color: "var(--color-neutral-300)",
                letterSpacing: "-0.15em",
              }}
            >
              ❝
            </div>

            {/* Content */}
            <div className="relative flex flex-col gap-12">
              {/* Person profile */}
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 overflow-hidden shrink-0 rounded-full">
                  <Image
                    src={janakaiRamana}
                    alt="Jankiraman"
                    width={80}
                    height={112}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <div className="flex flex-col pb-1">
                  <p className="text-body-lg text-neutral-800">Jankiraman</p>
                  <p className="text-body-md text-neutral-600">
                    Managing Director at livelihood System
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-quote font-bold-token text-neutral-500">
                {"\u201C"}Technology is easy. Making it work consistently on the field is the real problem we solve.{"\u201D"}
              </p>
            </div> {/* Inner Card */}
          </div> {/* Outer Border */}
        </div>
      </div>
    </section>
  );
}

