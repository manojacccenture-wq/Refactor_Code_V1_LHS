import Image from "next/image";
import phone1 from "@/app/components/sections/home/assets/phone_1.svg";
import phone2 from "@/app/components/sections/home/assets/phone_2.svg";
import phone3 from "@/app/components/sections/home/assets/phone_3.svg";

const phoneSrcs = [phone1, phone2, phone3];

export const Phones = () => (
  <div className="absolute -top-16 flex items-center gap-0 z-10">
    {phoneSrcs.map((src, i) => (
      <div key={i} className="relative">
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
