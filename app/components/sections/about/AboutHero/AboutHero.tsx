import Button from "@/app/components/ui/Button";
import HeroWrapper from "@/app/components/shared/ui/HeroWrapper/HeroWrapper";
import AboutCards from "@/app/components/sections/about/AboutHero/components/AboutCards/AboutCards";

export default function AboutHero() {
  return (
    <HeroWrapper>
      <section >
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <h6 className="text-primary mx-auto mb-[2%]">
            20+ YEARS MULTIPLE INDUSTRIES ONE FOCUS.
          </h6>

          {/* Main Heading */}
          <h1 className=" mb-[2%]" >
            Making Complex Operations Work Seamlessly
          </h1>

          {/* Description */}
          <p className="text-body-lg mx-auto mb-[2%]">
            From ground-level execution to large-scale systems, built to perform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <Button variant="primary" href="/contact">Let’s Discuss</Button>
            <Button variant="outline" href="/services">
              Learn more →
            </Button>
          </div>
        </div>
        <AboutCards />
      </section>
    </HeroWrapper>
  );
}
