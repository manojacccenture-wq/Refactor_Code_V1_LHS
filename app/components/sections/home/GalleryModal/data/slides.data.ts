import ipad from "@/app/components/sections/home/assets/Ipad.svg";
import ipad2 from "@/app/components/sections/home/assets/Ipad2.svg";

export type SlideType = "phones" | "ipad";

export const slides = [
  {
    variant: "green",
    title: "Run Smarter Food Operations Across Every Outlet.",
    description:
      "Streamline kitchen, inventory, and sales with a single ERP solution that scales with your franchise.",
    type: "phones",
  },
  {
    variant: "blue",
    title: "Digitize and Monitor Daily Waste Collection Operations",
    description:
      "Enable seamless operations across security, utilities, complaints, and facility management through a unified smart platform.",
    type: "ipad",
    image: ipad.src,
  },
  {
    variant: "yellow",
    title: "Manage Communities with Integrated Digital Infrastructure",
    description:
      "Enable seamless operations across security, utilities, complaints, and facility management through a unified smart platform.",
    type: "ipad",
    image: ipad2.src,
  },
  {
    variant: "purple",
    title: "Simplify Workforce Management with One Unified System",
    description:
      "Handle attendance, payroll, performance, and employee lifecycle with a structured system built for growing teams.",
    type: "ipad",
    image: ipad.src,
  },
] as const;