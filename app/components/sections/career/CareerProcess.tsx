"use client";

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    id: "step1",
    stepNumber: "Step 01",
    title: "Year founded",
    description: "Discover top remote tech opportunities and land your next role with ease, through our streamlined process.",
  },
  {
    id: "step2",
    stepNumber: "Step 01",
    title: "Year founded",
    description: "Discover top remote tech opportunities and land your next role with ease, through our streamlined process.",
  },
  {
    id: "step3",
    stepNumber: "Step 01",
    title: "Year founded",
    description: "Discover top remote tech opportunities and land your next role with ease, through our streamlined process.",
  },
];

export default function CareerProcess() {
  return (
    <section className="py-20 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className=" text-center mb-16 max-w-2xl mx-auto ">
          <h4 className="text-primary uppercase text-sm font-semibold tracking-widest mb-4  ">
            Process
          </h4>
          <h2 className="mb-4">
            How to apply ?
          </h2>
          <p className="text-neutral-600 mx-auto ">
            Discover top remote tech opportunities and land your next role with ease, through our streamlined process.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border border-neutral-300 rounded-2xl shadow-sm p-6 flex flex-col gap-3"
            >
              <h4 className="text-primary uppercase text-sm font-semibold tracking-widest">
                {step.stepNumber}
              </h4>
              <h3 className="text-neutral-800 font-bold">
                {step.title}
              </h3>
              <p className="text-neutral-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
