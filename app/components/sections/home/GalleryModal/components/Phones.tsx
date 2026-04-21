import Image from "next/image";

export const Phones = () => (
  <div className="absolute -top-16 flex items-center gap-0 z-10">
    {["/phone_1.svg", "/phone_2.svg", "/phone_3.svg"].map((src) => (
      <div key={src} className="relative">
        <Image
          src={src}
          alt="phone"
          width={180}
          height={360}
          className="h-[260px] w-auto object-contain"
          style={{ height: "260px", width: "auto" }} // ✅ FIX
        />
      </div>
    ))}
  </div>
);
