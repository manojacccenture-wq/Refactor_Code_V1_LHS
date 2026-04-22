import Image from "next/image";
import { ServiceCardProps } from "@/app/components/sections/home/Services/component/ServiceCard/ServiceCard.types";

export function ServiceCard({
  title,
  description,
  icon,
  image,
}: ServiceCardProps) {
  return (
    <div className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition flex flex-col">

      {/* IMAGE CONTAINER */}
      <div className="relative w-full">
        <div className="relative h-[160px] sm:h-[180px] w-full flex items-center justify-center overflow-hidden rounded-xl z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain object-center p-2"
          />
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-20 bg-primary-soft-gradient z-10 pointer-events-none" />
      </div>

      {/* CONTENT - GRID LAYOUT */}
      {/* 2 Columns: Auto width for the icon, 1fr (remaining space) for the text */}
      <div className="grid grid-cols-[auto_1fr] gap-3 items-center py-4 px-4">

        {/* COLUMN 1: ICON */}
        <div className="w-12 h-10 rounded-lg flex items-center justify-center shrink-0">
          <Image
            src={icon}
            alt="icon"
            width={120}
            height={24}
            className="object-contain"
          />
        </div>

        {/* COLUMN 2: TEXT */}
        {/* 2 Rows: Auto height for header, Auto height for description */}
        <div className="grid grid-rows-[auto_auto] gap-1">
          
          {/* ROW 1: HEADER TEXT */}
          <h3 className="text-heading-md font-semibold">
            {title}
          </h3>
          
          {/* ROW 2: DESCRIPTION */}
          <p className="text-body-sm text-gray-600">
            {description}
          </p>
          
        </div>

      </div>
      
    </div>
  );
}