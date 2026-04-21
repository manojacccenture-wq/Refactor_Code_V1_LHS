import Hero from "@/app/components/sections/home/Hero/Hero";
import GalleryModal from "@/app/components/sections/home/GalleryModal/GalleryModal"
import Trusted from "@/app/components/sections/home/Trusted/Trusted";
import Services from "@/app/components/sections/home/Services/Services";
import WhyChoose from "@/app/components/sections/home/WhyChoose/WhyChoose";
import Insights from "@/app/components/sections/home/Insights/Insights";
import CTA from "@/app/components/sections/home/CTA/CTA";
import TechStack from "@/app/components/sections/home/Techstacks/TechStack";
import Testimonial from "@/app/components/sections/home/Testimonial/Testimonial";
import Contact from "@/app/components/sections/home/Contact_Us/Contact";

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