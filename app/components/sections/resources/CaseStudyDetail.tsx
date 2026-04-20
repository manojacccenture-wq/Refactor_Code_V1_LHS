"use client";

import Link from "next/link";
import Image from "next/image";
import { DetailContent } from "./detailsData";

interface CaseStudyDetailProps {
  data: DetailContent;
}

export default function CaseStudyDetail({ data }: CaseStudyDetailProps) {
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-3 to-white py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Back Button */}
          <Link
            href="/resources/case-studies"
            className="text-primary-1 font-medium text-base mb-8 flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            ← Go back
          </Link>

          {/* Category */}
          <p className="text-primary-1 font-semibold text-base tracking-[2.24px] uppercase mb-7 mx-auto">
            {data.category}
          </p>

          {/* Title */}
          <h1 className="text-neutral-800 text-4xl md:text-[42px] font-bold leading-tight mb-7">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-neutral-600 text-lg leading-relaxed mb-12">
            {data.description}
          </p>

          {/* Author Section */}
          <div className="flex items-center gap-4 mx-auto text-center">
            {data.authorImage && (
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  // src={null}
                  src={data.authorImage}
                  alt={data.author}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-bold text-primary-1 text-sm mx-auto">
                {data.author}
              </p>
              <p className="text-neutral-600 text-base">
                {data.authorTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[25px] shadow-[0px_4px_30px_0px_rgba(45,30,133,0.1)] p-8 md:p-12">
            <div className="space-y-8">
              {/* Client */}
              {data.client && (
                <div>
                  <h3 className="text-neutral-800 text-2xl font-bold leading-[35px] mb-3">
                    Client
                  </h3>
                  <p className="text-neutral-600 text-base leading-[24px]">
                    {data.client}
                  </p>
                </div>
              )}

              {/* Challenge */}
              {data.challenge && (
                <div>
                  <h3 className="text-neutral-800 text-2xl font-bold leading-[35px] mb-3">
                    Challenge
                  </h3>
                  <p className="text-neutral-600 text-base leading-[24px]">
                    {data.challenge}
                  </p>
                </div>
              )}

              {/* Objective */}
              {data.objective && (
                <div>
                  <h3 className="text-neutral-800 text-2xl font-bold leading-[35px] mb-3">
                    Objective
                  </h3>
                  <p className="text-neutral-600 text-base leading-[24px]">
                    {data.objective}
                  </p>
                </div>
              )}

              {/* Solution */}
              {data.solution && data.solution.length > 0 && (
                <div>
                  <h3 className="text-neutral-800 text-2xl font-bold leading-[35px] mb-3">
                    Solution
                  </h3>
                  <ul className="list-disc space-y-2 ml-5">
                    {data.solution.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-600 text-base leading-[24px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {data.results && data.results.length > 0 && (
                <div>
                  <h3 className="text-neutral-800 text-2xl font-bold leading-[35px] mb-3">
                    Results
                  </h3>
                  <ul className="list-disc space-y-2 ml-5">
                    {data.results.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-600 text-base leading-[24px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Deliverables */}
              {data.keyDeliverables && data.keyDeliverables.length > 0 && (
                <div>
                  <h3 className="text-neutral-800 text-2xl font-bold leading-[35px] mb-3">
                    Key Deliverables
                  </h3>
                  <ul className="list-disc space-y-2 ml-5">
                    {data.keyDeliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-600 text-base leading-[24px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}