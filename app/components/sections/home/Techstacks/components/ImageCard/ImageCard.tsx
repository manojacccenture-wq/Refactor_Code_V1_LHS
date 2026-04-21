import clsx from "clsx";
import Image from "next/image";
import { ImageCardProps } from "@/app/components/sections/home/Techstacks/components/ImageCard/ImageCard.types";


export default function ImageCard({
  label,
  icon,
  variant = "medium",
  className,
}: ImageCardProps) {
  return (
    <div
      className={clsx(
        "card",
        "card-image",
        `card-${variant}`,
        className
      )}
    >
      {icon ? (
        <div className="w-full h-full flex items-center justify-center opacity-75">
          <Image
            src={icon}
            alt={label || "icon"}
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      ) : (
        /* ✅ UPDATED */
        <p className="text-heading-sm">
          {label}
        </p>
      )}
    </div>
  );
}