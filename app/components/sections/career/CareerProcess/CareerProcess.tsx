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
        <div className=" text-left mb-16 max-w-7xl mx-auto ">
          <h4 className="text-primary uppercase  font-semibold-token tracking-widest mb-4  ">
            Process
          </h4>
          <h2 className="mb-4">
            How to apply ?
          </h2>
          <h5 className="text-neutral-600 font-regular-token">
            Discover top remote tech opportunities and land your next role with ease, through our streamlined process.
          </h5>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border border-neutral-300 rounded-2xl shadow-sm p-6 flex flex-col gap-3"
            >
              <h6 className="text-primary uppercase  font-semibold-token tracking-widest">
                {step.stepNumber}
              </h6>
              <h3 className=" font-bold-token ">
                {step.title}
              </h3>
              <h5 className="text-neutral-600 font-regular-token">
                {step.description}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
