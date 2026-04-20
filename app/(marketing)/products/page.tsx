
import ProductsHero from "@/app/components/sections/products/ProductsHero";
import ProductsTabs from "@/app/components/sections/products/ProductsTabs";
import ProductsSplitSection from "@/app/components/sections/products/ProductsSplitSection";
import ProductsDeployment from "@/app/components/sections/products/ProductsDeployment";
import ProductsDifferentiators from "@/app/components/sections/products/ProductsDifferentiators";
import ProductsCTA from "@/app/components/sections/products/ProductsCTA";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsTabs />
      <ProductsSplitSection />
      <ProductsDeployment />
      <ProductsDifferentiators />
      <ProductsCTA />
    </>
  );
}

