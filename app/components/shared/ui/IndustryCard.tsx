'use client';

import Image from "next/image";

export interface Industry {
  id: number;
  name: string;
  description: string;
  image: string;
  deliverables: string[];
  imagePosition?: "left" | "right";
  showDivider?: boolean;
}

export default function IndustryCard({ industry }: { industry: Industry }) {
  const isImageLeft = industry.imagePosition !== "right";

  return (
    <div className="w-full">
      <div className="rounded-3xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">

          {/* Image Section */}
          <div className={`flex-1 ${isImageLeft ? "md:order-1" : "md:order-2"}`}>
            <div
              className="relative w-full h-75 rounded-3xl"
              style={{
                background: "linear-gradient(180deg, #FDF9FF 0%, rgba(253,249,255,0) 100%)"
              }}
            >
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-contain p-6 rounded-3xl"
              />
            </div>

            {/* Title + Description */}
            <div className="mt-6">
              <h3 className="font-bold-token text-primary mb-3">
                {industry.name}
              </h3>
              <p>
                {industry.description}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className={`flex-1 flex flex-col gap-6 ${isImageLeft ? "md:order-2" : "md:order-1"}`}>

            <p className="inline-block w-fit px-4 py-2 border rounded-2xl font-semibold">
              IMPROVE PRODUCTIVITY
            </p>

            <h2 className="font-bold">
              What we deliver
            </h2>

            <p>
              Get rid of endless spreadsheets and binders collecting dust.
            </p>

            <div className="space-y-5">
              {industry.deliverables.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="font-bold text-primary">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* OPTIONAL Divider */}
      {industry.showDivider && (
        <div className="my-16 text-center">
          <h2>
            Less paper work, more{" "}
            <span className="text-primary">people work!</span>
          </h2>
        </div>
      )}
    </div>
  );
}