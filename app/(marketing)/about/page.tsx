
import AboutHero from "@/app/components/sections/about/AboutHero";
import AboutCards from "@/app/components/sections/about/AboutCards";
import WhyChooseUs from "@/app/components/sections/about/WhyChooseUs";
import WhatSetsUsApart from "@/app/components/sections/about/WhatSetsUsApart";
import Leadership from "@/app/components/sections/about/Leadership";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* <AboutCards /> */}
      <WhyChooseUs />
      <WhatSetsUsApart />
      <Leadership />
    </>
  );
}
