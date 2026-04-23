import { AboutCardProps } from "@/app/components/sections/about/AboutHero/components/AboutCards/AboutCards.types";
import title1 from "@/app/components/sections/about/assets/Title_1.svg";
import title2 from "@/app/components/sections/about/assets/Title_2.svg";
import title3 from "@/app/components/sections/about/assets/Title_3.svg";
import title4 from "@/app/components/sections/about/assets/Title_4.svg";
import titleIcon1 from "@/app/components/sections/about/assets/Title_Icon_1.svg";
import titleIcon2 from "@/app/components/sections/about/assets/Title_Icon_2.svg";
import titleIcon3 from "@/app/components/sections/about/assets/Title_Icon_3.svg";
import titleIcon4 from "@/app/components/sections/about/assets/Title_Icon_4.svg";


export const cards: AboutCardProps[] = [
  {
    title: "Built on Experience",
    description: "Two decades of enterprise work shaping how we approach every problem today.",
    image: title1.src,
    icon: titleIcon1.src
  },
  {
    title: "People Who Execute",
    description: " A team that takes ownership beyond ideas — focused on making things work on ground.",
    image: title2.src,
    icon: titleIcon2.src
  },
  {
    title: " Clarity Through Data",
    description: " We track what matters, measure what works, and improve continuously.",
    image: title4.src,
    icon: titleIcon3.src
  },
  {
    title: " Designed to Scale",
    description: "Every system is built to handle growth — more users, more complexity, more impact.",
    image: title3.src,
    icon: titleIcon4.src
  },
];