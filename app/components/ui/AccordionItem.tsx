"use client";

import Image from "next/image";
import Button from "./Button";
import clsx from "clsx";
import Chevron_Down from "@/app/components/sections/home/assets/Chevron_Down.png";

type Props = {
  title: string;
  icon: string;
  isOpen: boolean;
  onClick: () => void;
  children?: React.ReactNode;
};

export default function AccordionItem({
  title,
  icon,
  isOpen,
  onClick,
  children,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300",
        isOpen ? "btn-accordion-active" : "btn-accordion"
      )}
    >
      {/* HEADER */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-7 px-3 md:py-7 md:px-6 text-left bg-transparent border-none cursor-pointer outline-none"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-neutral-200 flex items-center justify-center flex-shrink-0">
            <Image src={icon} alt="icon" width={65} height={44} />
          </div>

          <h4 className={clsx(isOpen ? "font-bold-token" : "font-medium-token text-neutral-600")}>
            {title}
          </h4>
        </div>

        {/* 🔥 ARROW WITH IMAGE 🔥 */}
        <div
          className={clsx(
            "transition-transform duration-300 flex-shrink-0 flex items-center justify-center",
            isOpen && "rotate-90"
          )}
        >
          <Image 
            src={Chevron_Down} 
            alt="Toggle accordion" 
            width={24} 
            height={24} 
            className="w-5 h-5 md:w-6 md:h-6 object-contain"
          />
        </div>
      </button>

      {/* CONTENT */}
      <div
        className={clsx(
          "transition-all duration-300 overflow-hidden px-3 md:px-5 text-xs md:text-sm",
          isOpen ? " pb-3 md:pb-5" : "max-h-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}