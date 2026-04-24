"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface Step {
  phase: number;
  title: string;
  duration: string;
  whatHappens: string;
  output: string;
  side: "left" | "right";
}

const steps: Step[] = [
  {
    phase: 1,
    title: "Discovery & Scoping",
    duration: "Day 1 to 5",
    whatHappens: "Operational environment assessment. Stakeholder interviews. Technical audit of existing systems.",
    output: "Scoping document, integration map, risk register",
    side: "right",
  },
  {
    phase: 2,
    title: "Architecture & Design",
    duration: "Day 6 to 15",
    whatHappens: "Solution architecture. Integration design. Data model. UI wireframes for custom applications.",
    output: "Technical specification, signed-off architecture",
    side: "left",
  },
  {
    phase: 3,
    title: "Development & Configuration",
    duration: "Day 16 to 40",
    whatHappens: "Custom development. System configuration. Data migration setup. API integrations.",
    output: "Configured system, custom modules, test data",
    side: "right",
  },
  {
    phase: 4,
    title: "Integration & Testing",
    duration: "Day 41 to 50",
    whatHappens: "System integration testing. UAT preparation. Performance optimization. Security audit.",
    output: "Test reports, UAT cases, optimization plan",
    side: "left",
  },
  {
    phase: 5,
    title: "Deployment & Training",
    duration: "Day 51 to 60",
    whatHappens: "User acceptance testing. Staff training. Go-live preparation. Hot-fix procedures.",
    output: "Trained teams, deployment checklist, runbooks",
    side: "right",
  },
  {
    phase: 6,
    title: "Support & Optimization",
    duration: "Ongoing",
    whatHappens: "Post-go-live support. Performance monitoring. Process optimization. Continuous improvement.",
    output: "Support plan, optimization roadmap",
    side: "left",
  },
];

interface StepCardProps {
  step: Step;
  isActive: boolean;
}

function StepCard({ step, isActive }: StepCardProps) {
  return (
    <div
      className={`rounded-3xl p-6 md:p-8 transition-all duration-300 backdrop-blur-sm w-full ${isActive
          ? "bg-white/90 shadow-xl shadow-neutral-200/60 border border-neutral-200"
          : "bg-white/70 border border-neutral-200"
        }`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="  font-semibold-token ">
          {step.title}
        </h3>

        {/* Duration Badge */}
        <div className="px-4 py-1  w-half  text-center rounded-full bg-emerald-100 text-primary  font-medium-token">
          {step.duration}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-neutral-200 mb-5" />

      {/* WHAT HAPPENS */}
      <div className="mb-5">
        <h4 className=" font-semibold-token  mb-2">
          What Happens
        </h4>
        <p className=" leading-6">
          {step.whatHappens}
        </p>
      </div>

      {/* OUTPUT */}
      <div>
        <h4 className=" font-semibold-token  mb-2">
          Output
        </h4>
        <p className=" leading-6">
          {step.output}
        </p>
      </div>
    </div>
  );
}

interface StepRowProps {
  step: Step;
  index: number;
  isActive: boolean;
}

const StepRow = React.forwardRef<HTMLDivElement, StepRowProps>(
  ({ step, index, isActive }, ref) => {
    if (step.side === "right") {
      return (
        <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-start">
          {/* Left spacer */}
          <div className="hidden lg:block" />

          {/* Center - Timeline Marker */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:flex justify-center -mt-6">
            <div
              className={`w-12 h-12 rounded-full  flex items-center justify-center  font-semibold-token transition-all duration-300 ${isActive
                ? "bg-primary-gradient border-transparent text-white shadow-lg shadow-primary/40"
                : "bg-white border-neutral-300 text-neutral-400"
                }`}
            >
              {String(step.phase).padStart(2, "0")}
            </div>
          </div>

          {/* Right card */}
          <div className="flex justify-start lg:pl-8">
            <div className={`w-full md:max-w-md lg:max-w-lg xl:max-w-xl transform transition-all duration-500 ${isActive
              ? "opacity-100 translate-y-0"
              : "opacity-60 translate-y-5"
              }`}>
              {/* Phase number */}
              
              <h1 className={` font-bold-token leading-none mb-4 transition-colors duration-300  ${isActive ? "text-neutral-200" : "text-neutral-300"
                }`}>
                Phase {String(step.phase).padStart(2, "0")}
              </h1>

              {/* Card */}
              <StepCard step={step} isActive={isActive} />
            </div>
          </div>
        </div>
      );
    }

    // Left side
    return (
      <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-start">
        {/* Left card */}
        <div className="flex justify-end lg:pr-8">
          <div className={`w-full md:max-w-md lg:max-w-lg xl:max-w-xl transform transition-all duration-500 ${isActive
            ? "opacity-100 translate-y-0"
            : "opacity-60 translate-y-5"
            }`}>
            {/* Phase number */}
            <h1 className={`font-bold-token leading-none mb-4 transition-colors duration-300 ${isActive ? "text-neutral-200" : "text-neutral-300"
              }`}>
              Phase {String(step.phase).padStart(2, "0")}
            </h1>

            {/* Card */}
            <StepCard step={step} isActive={isActive} />
          </div>
        </div>

        {/* Center - Timeline Marker */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:flex justify-center -mt-6">
          <div
            className={`w-12 h-12 rounded-full  flex items-center justify-center text-sm font-semibold transition-all duration-300 ${isActive
              ? "bg-primary-gradient border-transparent text-white shadow-lg shadow-primary/40"
              : "bg-white border-neutral-300 text-neutral-400"
              }`}
          >
            {String(step.phase).padStart(2, "0")}
          </div>
        </div>

        {/* Right spacer */}
        <div className="hidden lg:block" />
      </div>
    );
  }
);
StepRow.displayName = "StepRow";

export default function DeliveryTimeline() {
  const [activeSteps, setActiveSteps] = useState<boolean[]>(steps.map(() => false));
  const [fillPercentage, setFillPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

const updateProgress = useCallback(() => {
  if (!containerRef.current) return;

  const rect = containerRef.current.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const totalHeight = rect.height;

  // Start when top hits bottom of viewport
  const start = windowHeight;

  // End when bottom hits top of viewport
  const end = -totalHeight;

  // Current position
  const current = rect.top;

  const progress = (start - current) / (start - end);

  const clampedProgress = Math.max(0, Math.min(1, progress));

  setFillPercentage(clampedProgress * 100);

  // ✅ Active steps (this part is fine, just slightly improved)
  const newActiveSteps = stepsRefs.current.map((ref) => {
    if (!ref) return false;
    const stepRect = ref.getBoundingClientRect();
    return stepRect.top < windowHeight * 0.6 && stepRect.bottom > 0;
  });

  setActiveSteps(newActiveSteps);
}, []);

  useEffect(() => {
    // Initial update
    updateProgress();

    // Use throttled scroll listener
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  return (
    <section id="timeline" className="w-full py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Timeline Container */}
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 pointer-events-none">
            {/* Background Line (Inactive) */}
            <div className="absolute inset-0 bg-neutral-300" />

            {/* Fill Line (Active Progress) */}
            <div
              className="absolute top-0 left-0 right-0 will-change-[height]"
              style={{
                height: `${fillPercentage}%`,
                transition: "height 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                background: "linear-gradient(180deg, #10b981 0%, #059669 100%)",
              }}
            />
          </div>

          {/* Steps Container */}
          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, index) => (
              <StepRow
                key={step.phase}
                step={step}
                index={index}
                isActive={activeSteps[index]}
                ref={(el) => { stepsRefs.current[index] = el; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


interface StepCardProps {
  step: Step;
  isActive: boolean;
}


