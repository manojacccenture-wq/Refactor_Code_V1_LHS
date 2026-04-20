import clsx from "clsx";
import Image from "next/image";

type ImageCardProps = {
  label?: string;
  icon?: string;
  variant?: "short" | "medium" | "long" | "tech";
  className?: string;
};

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
        <p className="font-medium">{label}</p>
      )}
    </div>
  );
}