
import AboutHero from "@/app/components/sections/about/AboutHero/AboutHero";
import WhyChooseUs from "@/app/components/sections/about/WhyChooseUs/WhyChooseUs";
import WhatSetsUsApart from "@/app/components/sections/about/WhatSetsUsApart/WhatSetsUsApart";
import Leadership from "@/app/components/sections/about/Leadership/Leadership";
import AboutGallery from "@/app/components/sections/about/AboutGallery/AboutGallery";

export default function AboutPage() {
  return (
    <section className="relative w-full min-h-screen ">
      <AboutHero />
      <WhyChooseUs />
      <WhatSetsUsApart />
      <Leadership />
      <AboutGallery />
    </section>
  );
}
