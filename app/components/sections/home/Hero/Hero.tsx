import HeroWrapper from "@/app/components/shared/ui/HeroWrapper/HeroWrapper";
import Button from "@/app/components/ui/Button";

export default function Hero() {
  return (
    <HeroWrapper>
      <section className="relative w-full ">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6">
            <h6 className=" font-semibold uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full text-primary">
              From Concept to Scalable Code
            </h6>
          </div>

          {/* Main Title */}
          <h1 className="text-heading-xl font-bold tracking-tight mb-4 md:mb-6">
            Turning Vision Into <br className="hidden sm:block" />
            Scalable Reality
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            We build smart, scalable software that transforms ideas into streamlined, real-world solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
         <Button variant="primary" href="/contact">Let’s Discuss</Button>
            <Button variant="outline" href="/services">Learn More →</Button>
          </div>

        </div>
      </section>
    </HeroWrapper>
  );
}