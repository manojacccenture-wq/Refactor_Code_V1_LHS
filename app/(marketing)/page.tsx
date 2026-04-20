import Hero from "@/app/components/sections/Home/Hero";
import Trusted from "@/app/components/sections/Home/Trusted";
import Services from "@/app/components/sections/Home/Services";
import WhyChoose from "@/app/components/sections/Home/WhyChoose";
import Insights from "@/app/components/sections/Home/Insights";
import CTA from "@/app/components/sections/Home/CTA";
import TechStack from "@/app/components/sections/Home/TechStack";
import Testimonial from "@/app/components/sections/Home/Testimonial";
import Contact from "@/app/components/sections/Home/Contact";
import GalleryModal from "@/app/components/sections/Home/GalleryModal"

export default function HomePage() {
  return (
    <>
      <Hero />
      <GalleryModal/>
      <Trusted />
      <Services />
      <WhyChoose />
      <Insights />
      <CTA />
      <TechStack />
      <Testimonial />
      <Contact />
    </>
  );
}