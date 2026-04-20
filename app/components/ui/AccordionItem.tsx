"use client";

import Image from "next/image";
import Button from "./Button";
import clsx from "clsx";

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
        className="w-full flex items-center justify-between p-3 md:p-5 text-left bg-transparent border-none cursor-pointer outline-none"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-neutral-200 flex items-center justify-center flex-shrink-0">
            <Image src={icon} alt="icon" width={65} height={44} />
          </div>

          <h4 className="text-sm md:text-base font-semibold">{title}</h4>
        </div>

        {/* ARROW */}
        <span
          className={clsx(
            "transition-transform duration-300 text-neutral-600 flex-shrink-0",
            isOpen && "rotate-180 text-primary"
          )}
        >
          ▼
        </span>
      </button>

      {/* CONTENT */}
      <div
        className={clsx(
          "transition-all duration-300 overflow-hidden px-3 md:px-5 text-xs md:text-sm",
          isOpen ? "max-h-[300px] pb-3 md:pb-5" : "max-h-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}