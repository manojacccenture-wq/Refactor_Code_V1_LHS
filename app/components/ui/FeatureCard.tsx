type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: "green" | "blue" | "yellow" | "purple";
};

export default function FeatureCard({
  title,
  description,
  icon,
  children,
  variant = "green",
}: FeatureCardProps) {

  const gradientMap = {
    green: "from-teal-400 to-green-500",
    blue: "from-[#0F62FE] to-[#D9D9D9]",
    yellow: "from-[#F5B82E] to-[#F7F7FB]",
    purple: "from-[#6C5CE7] to-[#EDE9FE]",
  };

  return (
    <div className="w-full max-w-4xl rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500">

      {/* TOP */}
      <div
        className={`relative h-[160px] md:h-[220px] bg-gradient-to-r ${gradientMap[variant]} rounded-t-2xl md:rounded-t-3xl overflow-visible flex items-center justify-center transition-all duration-700`}
      >
        {children}
      </div>

      {/* BOTTOM */}
      <div className="grid grid-cols-[auto_1fr] gap-3 md:gap-4 items-start bg-white p-4 md:p-6 rounded-b-2xl md:rounded-b-3xl">

        {/* ICON */}
        <div className="w-8 md:w-10 flex-shrink-0">
          {icon}
        </div>

        {/* TEXT */}
        <div className="text-left">

          {/* 🔥 uses global h3 typography */}
          <h4 className="font-semibold">
            {title}
          </h4>

          {/* 🔥 uses global paragraph typography */}
          <p>
            {description}
          </p>

        </div>
      </div>
    </div>
  );
}