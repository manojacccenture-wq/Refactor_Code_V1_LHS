
import ServicesHero from "@/app/components/sections/_services/ServiceHero/ServiceHero";
import PowerfulFeatures from "@/app/components/sections/services/PowerfulFeatures";
import ServicesOverview from "@/app/components/sections/services/ServicesOverview";
import ServicesCTA from "@/app/components/sections/services/ServicesCTA";
import ServicesTestimonials from "@/app/components/sections/services/ServicesTestimonials";

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
