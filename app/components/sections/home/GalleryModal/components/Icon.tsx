import Image from "next/image";
import circleImg from "@/app/components/sections/home/assets/Circle.png";

export const Icon = () => (
  // Flexbox will now perfectly center the image because it's no longer absolute
  <span className="flex items-center justify-center w-10 h-10 shrink-0">
    <Image
      src={circleImg}
      alt="icon"
      width={40} // ✅ Use explicit width instead of fill
      height={40} // ✅ Use explicit height instead of fill
      className="object-contain" 
    />
  </span>
);