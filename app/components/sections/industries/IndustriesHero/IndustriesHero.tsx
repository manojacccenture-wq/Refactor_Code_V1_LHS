

import Button from '@/app/components/ui/Button';
import LogoMarquee from '@/app/components/shared/ui/LogoMarquee/LogoMarquee';
import { logos } from '../../home/Trusted/data/Trusted.data';
import IndustriesHeroVisual from '../IndustriesHeroVisual';


export default function IndustriesHero() {
  return (
    <section className="hero-bg w-full relative overflow-hidden">
      {/* Hero text content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center pt-(--hero-offset) pb-8 md:pb-10">
        {/* Subtitle */}
        <h6 className="font-semibold uppercase tracking-[2.24px] mb-5 md:mb-7 text-primary">
          From Concept to Scalable Code
        </h6>

        {/* Heading */}
        <h1 className="mb-5 md:mb-7">
          Industries We Serve
        </h1>

        {/* Description */}
        <p className="mb-8 md:mb-10 max-w-lg mx-auto">
          Domain depth, not breadth. We deliver in environments where operational
          failure is not an option.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="primary" href="/contact">Let’s Discuss</Button>
        </div>
      </div>

      <LogoMarquee
        // badge="— Trusted By"
        // title="Don't take our word for it"
        items={logos}
        // You can inject custom classes here if needed:
        className="bg-transparent max-w-7xl mx-auto"
        marqueeClassName="mt-0"
      />

      <IndustriesHeroVisual />
    </section>
  );
}
