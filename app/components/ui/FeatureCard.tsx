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
  green: "bg-gradient-green",
  blue: "bg-gradient-blue",
  yellow: "bg-gradient-yellow",
  purple: "bg-gradient-purple",
};

  return (
    <div className="w-full max-w-2xl rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500">

      {/* TOP */}
      <div
        className={`relative h-[160px] md:h-[220px] bg-gradient-to-r ${gradientMap[variant]} rounded-t-2xl md:rounded-t-3xl overflow-visible flex items-center justify-center transition-all duration-700`}
      >
        {children}
      </div>

     {/* BOTTOM */}
      {/* 🔥 FIX 1: Changed items-start to items-center here */}
      <div className="grid grid-cols-[auto_1fr] gap-3 md:gap-4 items-center bg-white p-4 md:p-6 rounded-b-2xl md:rounded-b-3xl">

        {/* ICON */}
        {/* 🔥 FIX 2: Removed w-8 md:w-10 so it doesn't conflict with your Icon's hardcoded 40px size */}
        <div className="flex-shrink-0 flex items-center justify-center">
          {icon}
        </div>

        {/* TEXT */}
        <div className="text-left">

          <h4 className="font-semibold">
            {title}
          </h4>

          <p className="mt-1 text-gray-600 text-sm md:text-base">
            {description}
          </p>

        </div>
      </div>
    </div>
  );
}