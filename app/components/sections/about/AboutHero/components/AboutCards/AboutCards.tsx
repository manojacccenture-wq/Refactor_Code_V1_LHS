"use client";

import Image from "next/image";

import title1 from "@/app/components/sections/about/assets/Title_1.svg";
import title2 from "@/app/components/sections/about/assets/Title_2.svg";
import title3 from "@/app/components/sections/about/assets/Title_3.svg";
import title4 from "@/app/components/sections/about/assets/Title_4.svg";
import titleIcon1 from "@/app/components/sections/about/assets/icon.png";
import titleIcon2 from "@/app/components/sections/about/assets/user-heart.png";
import titleIcon3 from "@/app/components/sections/about/assets/Signal.png";
import titleIcon4 from "@/app/components/sections/about/assets/bot.png";



export default function AboutCards() {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-full mx-auto">
        {/* <div className="flex flex-nowrap gap-6 md:gap-[90px] overflow-x-auto lg:overflow-visible scrollbar-hide pb-4 px-4 "> */}
        <div className="flex flex-nowrap 2xl:flex-wrap 2xl:justify-center gap-6 md:gap-[90px] overflow-x-auto 2xl:overflow-visible scrollbar-hide pb-4 px-4">


          {/* CARD 1 */}
          <div className="shrink-0 w-[266.76px] h-[300.753px] rounded-[19.446px] overflow-hidden bg-white border shadow-sm hover:shadow-md transition"
            style={{ borderColor: "var(--color-neutral-300)" }}
          >
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <Image src={title1.src} alt="Built on Experience" width={160} height={160} />
            </div>

            <div className="flex items-center justify-between gap-3 p-5">
              <div className="flex-1 flex flex-col gap-1">
                <h5 className="font-bold-token text-neutral-700">Built on Experience</h5>
                <p className="text-body-sm">20 years solving problems</p>
              </div>

              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                style={{ backgroundColor: "var(--color-primary-1)", borderColor: "var(--color-primary-1)" }}
              >
                <Image src={titleIcon1.src} alt="icon" width={20} height={20} />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="shrink-0 w-[266.76px] h-[300.753px] rounded-[19.446px] overflow-hidden bg-white border shadow-sm hover:shadow-md transition lg:mt-16"
            style={{ borderColor: "var(--color-neutral-300)" }}
          >
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <Image src={title2.src} alt="People Who Execute" width={160} height={160} />
            </div>

            <div className="flex items-center justify-between gap-3 p-5">
              <div className="flex-1 flex flex-col gap-1">
                <h5 className="font-bold-token text-neutral-700">People Who Execute</h5>
                <p className="text-body-sm">Team delivering results</p>
              </div>

              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                style={{ backgroundColor: "var(--color-primary-1)", borderColor: "var(--color-primary-1)" }}
              >
                <Image src={titleIcon2.src} alt="icon" width={20} height={20} />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="shrink-0 w-[266.76px] h-[300.753px] rounded-[19.446px] overflow-hidden bg-white border shadow-sm hover:shadow-md transition"
            style={{ borderColor: "var(--color-neutral-300)" }}
          >
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <Image src={title4.src} alt="Clarity Through Data" width={160} height={160} />
            </div>

            <div className="flex items-center justify-between gap-3 p-5">
              <div className="flex-1 flex flex-col gap-1">
                <h5 className="font-bold-token text-neutral-700">Clarity Through Data</h5>
                <p className="text-body-sm">Measure Track Improve</p>
              </div>

              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                style={{ backgroundColor: "var(--color-primary-1)", borderColor: "var(--color-primary-1)" }}
              >
                <Image src={titleIcon3.src} alt="icon" width={20} height={20} />
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="shrink-0 w-[266.76px] h-[300.753px] rounded-[19.446px] overflow-hidden bg-white border shadow-sm hover:shadow-md transition lg:mt-16"
            style={{ borderColor: "var(--color-neutral-300)" }}
          >
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <Image src={title3.src} alt="Designed to Scale" width={160} height={160} />
            </div>

            <div className="flex items-center justify-between gap-3 p-5">
              <div className="flex-1 flex flex-col gap-1">
                <h5 className="font-bold-token text-neutral-700">Designed to Scale</h5>
                <p className="text-body-sm">Built for growth complexity</p>
              </div>

              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                style={{ backgroundColor: "var(--color-primary-1)", borderColor: "var(--color-primary-1)" }}
              >
                <Image src={titleIcon4.src} alt="icon" width={20} height={20} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}