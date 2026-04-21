import HeroWrapper from "@/app/components/shared/ui/HeroWrapper/HeroWrapper";

export default function ResourcesHero() {
  return (
    <HeroWrapper>
      <section className="relative w-full overflow-hidden mx-auto">
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Subtitle */}
          <h3 className="text-primary mx-auto mb-7">
            From Concept to Scalable Code
          </h3>

          {/* Main Heading */}
          <h1 className="mb-7">Case Studies</h1>

          {/* Description */}
          <p className="mx-auto text-neutral-600 max-w-2xl">
            Domain depth, not breadth. We deliver in environments where operational failure is not an option.
          </p>
        </div>
      </section>
    </HeroWrapper>
  );
}
