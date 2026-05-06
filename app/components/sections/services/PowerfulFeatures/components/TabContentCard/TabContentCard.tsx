import { Props } from "@/app/components/sections/services/PowerfulFeatures/PowerfulFeatures.types";
import Image from "next/image";

export function TabContentCard({
  badge,
  title,
  description,
  differencePoints,
  features,
}: Props) {
  return (
    <div className="relative bg-white rounded-3xl border border-neutral-300 p-8 md:p-12">
      {/* GLOW (Positioned on the far right edge of the main card) */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-[150px] md:-right-[100px] w-[300px] md:w-[400px] h-[600px] md:h-[800px] rounded-full bg-[var(--color-primary-1)] blur-[80px] md:blur-[120px] opacity-[0.10] pointer-events-none z-0"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Column - Text Content */}
        <div className="space-y-8">

          {/* Badge */}
          <h6
            className="inline-block px-[20px] py-[2.5px] rounded-2xl font-regular-token tracking-wider text-neutral-200  bg-primary-gradient"

          >
            {badge}
          </h6>

          {/* Title */}
          <h3
            className="font-bold-token"

          >
            {title}
          </h3>

          {/* Description */}
          <p
            className=" leading-relaxed"

          >
            {description}
          </p>

          {/* What makes us different */}
          <div className="pt-4">
            <h4
              className="text-primary font-bold-token mb-4"

            >
              What makes us different
            </h4>

            <div className="space-y-4">
              {differencePoints.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <h4
                    className=" text-primary"
                  // style={{ color: "var(--color-primary-1)" }}
                  >
                    {point.number}
                  </h4>

                  <div>
                    <p
                      className=""

                    >
                      {point.title}
                    </p>
                    <p
                    // className="text-sm"

                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Feature Cards */}
        <div className="realtive space-y-6 lg:mt-[11%]">



          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-neutral-300 rounded-2xl p-6 shadow-sm overflow-hidden"
            >
              {/* GLOW (Positioned inside each individual card) */}

              <div className="relative z-10 flex flex-col items-start gap-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="shrink-0 object-contain"
                />

                <div>
                  <h4
                    className="font-bold-token"
                  >
                    {feature.title}
                  </h4>

                  <p className="font-regular-token">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div >
  );
}
