
import CareerHero from "@/app/components/sections/career/CareerHero/CareerHero";
import CareerTestimonials from "@/app/components/sections/career/CareerTestimonials/CareerTestimonials";
import CareerProcess from "@/app/components/sections/career/CareerProcess/CareerProcess";
import CareerOpenings from "@/app/components/sections/career/CareerOpenings/CareerOpenings";

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <CareerTestimonials />
      <CareerProcess />
      <CareerOpenings />
    </>
  );
}
