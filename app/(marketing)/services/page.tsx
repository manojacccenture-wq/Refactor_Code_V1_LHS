
import ServicesHero from "@/app/components/sections/services/ServicesHero/ServicesHero";
import PowerfulFeatures from "@/app/components/sections/services/PowerfulFeatures/PowerfulFeatures";
import ServicesOverview from "@/app/components/sections/services/ServicesOverview/ServicesOverview";
import ServicesCTA from "@/app/components/sections/services/ServicesCTA/ServicesCTA";
import ServicesTestimonials from "@/app/components/sections/services/ServicesTestimonials/ServicesTestimonials";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PowerfulFeatures />
      <ServicesOverview />
      <ServicesCTA />
      <ServicesTestimonials />
    </>
  );
}
