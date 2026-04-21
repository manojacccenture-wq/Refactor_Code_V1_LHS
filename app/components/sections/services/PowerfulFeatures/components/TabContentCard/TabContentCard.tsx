import { Props } from "@/app/components/sections/services/PowerfulFeatures/PowerfulFeatures.types";

export function TabContentCard({
  badge,
  title,
  description,
  differencePoints,
  features,
}: Props) {
  return (
    <div className="bg-white rounded-3xl border border-neutral-300 p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Column - Text Content */}
        <div className="space-y-8">

          {/* Badge */}
          <div
            className="inline-block px-4 py-2 rounded-2xl font-regular-token tracking-wider text-neutral-200  bg-primary-gradient"
            // style={{
            //   backgroundColor: "var(--color-primary-1)",
            //   color: "white",
            // }}
          >
            {badge}
          </div>

          {/* Title */}
          <h3
            className="font-bold-token"
            // style={{ color: "var(--color-text-title)" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className=" leading-relaxed"
            // style={{ color: "var(--color-text-subtitle)" }}
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
        <div className="space-y-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-300 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl shrink-0"
                  style={{
                    backgroundColor: "var(--color-primary-1)",
                    opacity: 0.1,
                  }}
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
    </div>
  );
}
