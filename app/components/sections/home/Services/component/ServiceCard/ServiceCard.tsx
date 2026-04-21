import Image from "next/image";

import {ServiceCardProps} from "@/app/components/sections/home/Services/component/ServiceCard/ServiceCard.types";

export function ServiceCard({
  title,
  description,
  icon,
  image,
}: ServiceCardProps) {
  return (
    <div className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition">

      {/* IMAGE */}
      <div className="relative w-full">
        <div className="relative h-[160px] sm:h-[180px] overflow-hidden rounded-xl z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

<div className="absolute left-0 right-0 bottom-0 h-20 bg-primary-soft-gradient z-10" />
      </div>

      {/* CONTENT */}
      <div className="flex gap-3 items-center py-4 px-4">

        {/* ICON */}
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <Image src={icon} alt="icon" width={50} height={50} />
        </div>

        {/* TEXT */}
        <div>
          {/* ✅ use semantic + utility */}
          <h3 className="text-heading-md font-semibold">
            {title}
          </h3>

          {/* ✅ use body utility */}
          <p className="text-body-sm mt-1">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}
