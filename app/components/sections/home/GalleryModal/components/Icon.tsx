import Image from "next/image";

export const Icon = () => (
  <span className="relative block w-10 h-10">
    <Image
      src="/Circle.png"
      alt="icon"
      fill
      sizes="40px" // ✅ FIX
      className="object-contain"
    />
  </span>
);