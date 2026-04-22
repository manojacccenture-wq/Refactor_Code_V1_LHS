'use client';

import Image from 'next/image';

export default function IndustriesHeroVisual() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10 md:py-16">

      {/* ARC CONTAINER */}
      <div className="relative mx-auto w-full max-w-225 aspect-2/1 overflow-hidden">

        {/* Arc Wrapper */}
        <div className="absolute inset-0 flex items-start justify-center">

          {/* Rings */}
          <div className="relative w-full aspect-square">

            {/* Outer Arc */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, transparent 68%, rgba(0,0,0,0.06) 70%, transparent 72%)',
              }}
            />

            {/* Arc 2 */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                transform: 'scale(0.8)',
                background:
                  'radial-gradient(circle, transparent 68%, rgba(0,0,0,0.05) 70%, transparent 72%)',
              }}
            />

            {/* Arc 3 */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                transform: 'scale(0.6)',
                background:
                  'radial-gradient(circle, transparent 68%, rgba(0,0,0,0.04) 70%, transparent 72%)',
              }}
            />
          </div>
        </div>

        {/* ================= AVATARS ================= */}

        {/* Top */}
        <div className="absolute left-1/2 top-[8%] -translate-x-1/2">
          <Image
            src="/Industries/Avatar Image3.svg"
            alt=""
            width={48}
            height={48}
            className="md:w-12 md:h-12 object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Left */}
        <div className="absolute left-[12%] top-[35%]">
          <Image
            src="/Industries/AvatarImage_Icon_2.svg"
            alt=""
            width={48}
            height={48}
            className="md:w-12 md:h-12 object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Right */}
        <div className="absolute right-[12%] top-[35%]">
          <Image
            src="/Industries/AvatarImage_Icon.svg"
            alt=""
            width={48}
            height={48}
            className="md:w-12 md:h-12 object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* ================= ICONS ================= */}

        {/* Red */}
        <div
          className="absolute left-[28%] top-[60%] w-10 h-10 md:w-13 md:h-13 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(180deg, #ff5e4f, #99382f)',
          }}
        >
          <Image
            src="/Industries/proccessor.svg"
            alt=""
            width={48}
            height={48}
            className="md:w-12 md:h-12 object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
           <div
          className="absolute right-[47%] top-[40%] w-10 h-10 md:w-13 md:h-13 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(180deg, #0f62fe, #093b98)',
          }}
        >
          <Image
            src="/Industries/shield.svg"
            alt=""
            width={48}
            height={48}
            className="md:w-12 md:h-12 object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Blue */}
        <div
          className="absolute right-[28%] top-[60%] w-10 h-10 md:w-13 md:h-13 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(180deg, #0f62fe, #093b98)',
          }}
        >
          <Image
            src="/Industries/shield.svg"
            alt=""
            width={48}
            height={48}
            className="md:w-12 md:h-12 object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Center */}
        {/* <div className="absolute left-1/2 top-[75%] -translate-x-1/2 w-10 h-10 md:w-13 md:h-13 rounded-xl bg-purple-600 flex items-center justify-center text-white">
          +
        </div> */}
      </div>
    </section>
  );
}
