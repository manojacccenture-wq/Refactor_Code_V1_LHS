import { AboutCardProps } from "@/app/components/sections/about/AboutHero/components/AboutCards/AboutCards.types";
import title1 from "@/app/components/sections/about/assets/Title_1.svg";
import title2 from "@/app/components/sections/about/assets/Title_2.svg";
import title3 from "@/app/components/sections/about/assets/Title_3.svg";
import title4 from "@/app/components/sections/about/assets/Title_4.svg";
import titleIcon1 from "@/app/components/sections/about/assets/icon.png";
import titleIcon2 from "@/app/components/sections/about/assets/user-heart.png";
import titleIcon3 from "@/app/components/sections/about/assets/Signal.png";
import titleIcon4 from "@/app/components/sections/about/assets/bot.png";


export const cards: AboutCardProps[] = [
  {
    title: "Built on Experience",
    description: "20 years solving problems",
    image: title1.src,
    icon: titleIcon1.src
  },
  {
    title: "People Who Execute",
    description: "Team delivering real results",
    image: title2.src,
    icon: titleIcon2.src
  },
  {
    title: "Clarity Through Data",
    description: "Measure Track Improve",
    image: title4.src,
    icon: titleIcon3.src
  },
  {
    title: "Designed to Scale",
    description: "Built for growth complexity",
    image: title3.src,
    icon: titleIcon4.src
  },
];