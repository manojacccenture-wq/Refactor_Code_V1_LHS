
import ProductsHero from "@/app/components/sections/products/ProductsHero/ProductsHero";
import ProductsTabs from "@/app/components/sections/products/ProductsTabs/ProductsTabs";
import ProductsSplitSection from "@/app/components/sections/products/ProductsSplitSection/ProductsSplitSection";
import ProductsDeployment from "@/app/components/sections/products/ProductsDeployment/ProductsDeployment";
import ProductsDifferentiators from "@/app/components/sections/products/ProductsDifferentiators/ProductsDifferentiators";
import ProductsCTA from "@/app/components/sections/products/ProductsCTA/ProductsCTA";

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

