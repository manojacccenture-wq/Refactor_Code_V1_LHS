import ResourcesHero from "@/app/components/sections/resources/ResourcesHero";
import ResourcesCards from "@/app/components/sections/resources/ResourcesCards";

export default function BlogsPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesCards type="blog" />
    </>
  );
}
