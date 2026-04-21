import { AboutCardProps } from "@/app/components/sections/_about/AboutHero/components/AboutCards/AboutCards.types";

const testImage1 = "/about/Title_1.svg"
const testImage2 = "/about/Title_2.svg"
const testImage3 = "/about/Title_3.svg"
const testImage4 = "/about/Title_4.svg"
const imgIcon1 = "/about/Title_Icon_1.svg";
const imgIcon2 = "/about/Title_Icon_2.svg";
const imgIcon3 = "/about/Title_Icon_3.svg";
const imgIcon4 = "/about/Title_Icon_4.svg";




export const cards: AboutCardProps[] = [
  {
    title: "Built on Experience",
    description: "Two decades of enterprise work shaping how we approach every problem today.",
    image: testImage1,
    icon: imgIcon1
  },
  {
    title: "People Who Execute",
    description: " A team that takes ownership beyond ideas — focused on making things work on ground.",
    image: testImage2,
    icon: imgIcon2
  },
  {
    title: " Clarity Through Data",
    description: " We track what matters, measure what works, and improve continuously.",
    image: testImage4,
    icon: imgIcon3
  },
  {
    title: " Designed to Scale",
    description: "Every system is built to handle growth — more users, more complexity, more impact.",
    image: testImage3,
    icon: imgIcon4
  },
];