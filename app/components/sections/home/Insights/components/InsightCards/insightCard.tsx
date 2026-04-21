import Image from "next/image";
import { InsightCardProps } from "./InsightCard.types";

export function InsightCard({
  icon,
  label,
  value,
  description,
}: InsightCardProps) {
  return (
    <div className="card card-default rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">

      {/* TOP */}
      <div className="flex items-center gap-3 mb-6">

        {/* ICON */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center">
          <Image src={icon} alt={label} width={35} height={35} />
        </div>

        {/* ✅ LABEL */}
        <p className="text-heading-sm">
          {label}
        </p>
      </div>

      {/* ✅ VALUE */}
      <h3 className="text-heading-lg mb-2">
        {value}
      </h3>

      {/* ✅ DESCRIPTION */}
      <p className="text-body-sm">
        {description}
      </p>
    </div>
  );
}