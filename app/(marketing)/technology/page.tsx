import TechnologyHero from "@/app/components/sections/technology/TechnologyHero";
import TechnologyCapabilities from "@/app/components/sections/technology/TechnologyCapabilities";


export const metadata = {
  title: "Technology | LHS",
  description: "Discover our ERP technology stack built for Indian food operations.",
};

export default function TechnologyPage() {
  return (
    <>
      <TechnologyHero />
      <TechnologyCapabilities />

    </>
  );
}
