interface TimelineItem {
  year: string;
  period: string;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const timelineItems: TimelineItem[] = [
    {
      year: "2006",
      period: "year 1 to 3",
      title: "Where It Started",
      description: "Entered enterprise tech through real-world deployments — not labs, not prototypes. Early focus on systems that had to work daily without failure.",
    },
    {
      year: "2011",
      period: "year 5 to 7",
      title: "Entering Large Enterprise Systems",
      description: "Began working with large organizations, navigating complex workflows, approvals, and operational dependencies.",
    },
    {
      year: "2016",
      period: "year 10+",
      title: "Mastering Execution at Scale",
      description: "Handled multiple large-scale deployments across locations. Strengthened ability to deliver, maintain, and evolve systems over time.",
    },
    {
      year: "2021",
      period: "Years 15+",
      title: "Earning Enterprise Trust",
      description: "Built long-term working relationships within the Tata ecosystem, including companies like JUSCO and Tata Steel.",
    },
    {
      year: "2026",
      period: "Year 20 +",
      title: "Next Phase: Structured Platforms",
      description: "Moving from custom execution to building scalable, structured systems. Backed by years of real-world validation, not assumptions.",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">

          <p className="text-primary font-bold uppercase mx-auto tracking-widest">
            {"We don't just meet expectations—we exceed them. Here's what sets us apart:"}
          </p>

          <h2>

            Why Choose Us?
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile, positioned left on desktop */}
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 timeline-line" />


          {/* Mobile vertical line - positioned on left */}
<div className="md:hidden absolute left-2 top-0 bottom-0 w-0.5 timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-6 md:space-y-12">
            {timelineItems.map((item, idx) => {
              const isLeft = idx % 2 == 0;
              const cardLeft = idx % 2 !== 0;

              return (
                <div
                  key={idx}
                  className="relative pl-8 md:pl-0"
                >
                  {/* DOT - Mobile: left side, Desktop: center */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-4 flex items-center justify-center">
                    <div className="hidden md:block absolute w-10 h-10 rounded-full" style={{ backgroundColor: "var(--color-primary-1)", opacity: 0.1 }} />
                    <div className="relative w-4 h-4 rounded-full border-4 border-white" style={{ backgroundColor: "var(--color-primary-1)" }} />
                  </div>

                  {/* MOBILE VIEW */}
                  <div className="flex flex-col md:hidden mt-0">
                    {/* PERIOD */}
                    <p className="px-2 py-1 font-bold rounded-md  text-white bg-primary-gradient">
                      {item.period}
                    </p>

                    {/* YEAR */}
                    <p className="text-lg font-bold mb-3" style={{ color: "var(--color-primary-1)" }}>
                      {item.year}
                    </p>
                  </div>

                  {/* LEFT SIDE (Period OR Year) - Desktop only */}
                  <div
                    className={`hidden md:block absolute top-2 text-sm md:text-base ${isLeft ? "left-0 md:left-[calc(50%-24px)] md:-translate-x-full text-right pr-4" : "left-0 md:left-[calc(50%-24px)] md:-translate-x-full text-right pr-4"
                      }`}
                  >
                    {isLeft ? (
                      <p className="px-6 py-1 font-bold rounded-md  text-white bg-primary-gradient">
                        {item.period}
                      </p>
                    ) : (
                      <h2 className="font-bold-token text-primary" >{item.year}</h2>
                    )}
                  </div>

                  {/* RIGHT SIDE (Year OR Period) - Desktop only */}
                  <div
                    className={`hidden md:block absolute top-2 text-sm md:text-base ${isLeft ? "left-0 md:left-[calc(50%+24px)] pl-4" : "left-0 md:left-[calc(50%+24px)] pl-4"
                      }`}
                  >
                    {isLeft ? (
                      <h2 className="font-bold-token text-primary" >{item.year}</h2>
                    ) : (
                      <p className="px-4 py-2 rounded-md  font-bold text-white bg-primary-gradient">
                        {item.period}
                      </p>
                    )}
                  </div>

                  {/* CARD - Mobile: full width, Desktop: offset */}
                  <div className={`w-full md:w-5/12 ${cardLeft ? "md:ml-auto" : "md:mr-auto"} pt-2 md:pt-12 `}>
                    <div className=" mt-[0%] sm:mt-[0%] md:mt-[2%] lg:mt-[4%] p-4 md:p-6 rounded-2xl md:rounded-xl bg-white border shadow-sm  border-[var(--color-border)]" >
                      <h4 >
                        {item.title}
                      </h4>
                      <p className="mt-[2%]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
