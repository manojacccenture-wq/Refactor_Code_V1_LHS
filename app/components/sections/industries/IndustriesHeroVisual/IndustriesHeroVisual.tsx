'use client';

import Image from 'next/image';
import avatarImage3 from "@/app/components/sections/industries/assets/Avatar Image3.svg";
import avatarImageIcon2 from "@/app/components/sections/industries/assets/AvatarImage_Icon_2.svg";
import avatarImageIcon from "@/app/components/sections/industries/assets/AvatarImage_Icon.svg";
import proccessor from "@/app/components/sections/industries/assets/proccessor.svg";
import shield from "@/app/components/sections/industries/assets/shield.svg";

export default function IndustriesHeroVisual() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10 md:py-16">

      {/* ARC CONTAINER */}
      <div className="relative mx-auto w-full max-w-5xl aspect-[2/1] overflow-hidden bg-white">

        {/* Background Grid (Subtle match for image) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] opacity-40" />

        {/* ================= RINGS ================= */}
        {/* We anchor a square to the exact bottom-center so it creates perfect concentric semi-circles */}
        <div className="absolute left-1/2 bottom-0 w-[120%] md:w-[100%] aspect-square -translate-x-1/2 translate-y-1/2">
          {/* Outer Arc */}
          <div className="absolute inset-[0%] rounded-full border-[1.5px] border-neutral-100 shadow-[inset_0_4px_40px_rgba(0,0,0,0.015)] bg-neutral-50/40" />

          {/* Second Arc (The new line you requested) */}
          <div className="absolute inset-[10%] rounded-full border-[1.5px] border-neutral-100 shadow-[inset_0_4px_40px_rgba(0,0,0,0.015)] bg-neutral-50/80" />

          {/* Middle Arc */}
          <div className="absolute inset-[20%] rounded-full border-[1.5px] border-neutral-100 shadow-[inset_0_4px_40px_rgba(0,0,0,0.015)] bg-neutral-200/20" />

          {/* Inner Arc */}
          {/* <div className="absolute inset-[40%] rounded-full border-[1.5px] border-neutral-100 shadow-[inset_0_4px_40px_rgba(0,0,0,0.02)] bg-neutral-300/20" /> */}
        </div>

        {/* ================= AVATARS & ICONS ================= */}
        {/* All elements use -translate-x-1/2 -translate-y-1/2 to center exactly on their percentage coordinates */}

        {/* 1. Top Center Avatar */}
        <div className="absolute left-[50%] top-[5%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white z-10">
          <Image src={avatarImage3} alt="" fill className="object-cover" />
        </div>

        {/* 2. Top-Left Purple Icon */}
        <div className="absolute left-[30%] top-[10%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg z-10"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
          </svg>
        </div>

        {/* 3. Top-Right Yellow Icon */}
        <div className="absolute left-[65%] top-[6%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg z-10"
          style={{ background: 'linear-gradient(135deg, #fde047, #eab308)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
        </div>
        <div className="absolute left-[14%] top-[28%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white z-10">
          <Image src={avatarImageIcon2} alt="" fill className="object-cover" />
        </div>
        <div className="absolute left-[85%] top-[28%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white z-10">
          <Image src={avatarImageIcon2} alt="" fill className="object-cover" />
        </div>

        {/* 4. Mid-Left Avatar */}
        {/* <div className="absolute left-[26%] top-[48%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white z-10">
          <Image src={avatarImageIcon2} alt="" fill className="object-cover" />
        </div> */}

        {/* 5. Mid-Right Avatar */}
        {/* <div className="absolute left-[74%] top-[48%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white z-10">
          <Image src={avatarImageIcon} alt="" fill className="object-cover" />
        </div> */}

        {/* 6. Center Avatar */}
        <div className="absolute left-[50%] top-[38%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white z-10">

          <Image src={avatarImage3} alt="" fill className="object-cover" />
        </div>

        {/* 7. Bottom-Left Red Processor */}
        <div className="absolute left-[30%] top-[60%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg z-10"
          style={{ background: 'linear-gradient(180deg, #d34c44, #a02b24)' }}>
          <Image src={proccessor} alt="processor" width={24} height={24} className="object-contain" style={{ width: "auto", height: "auto" }} />
        </div>

        {/* 8. Bottom-Right Blue Shield */}
        <div className="absolute left-[70%] top-[60%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg z-10"
          style={{ background: 'linear-gradient(180deg, #2563eb, #1d4ed8)' }}>
          <Image src={shield} alt="shield" width={24} height={24} className="object-contain" style={{ width: "auto", height: "auto" }} />
        </div>

      </div>
    </section>
  );
}