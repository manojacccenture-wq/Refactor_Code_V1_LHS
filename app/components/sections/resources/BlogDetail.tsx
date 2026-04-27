"use client";

import Link from "next/link";
import Image from "next/image";
import { DetailContent } from "./detailsData";

interface BlogDetailProps {
  data: DetailContent;
}

export default function BlogDetail({ data }: BlogDetailProps) {
  console.log('data: ', data)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-3 to-white py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/resources/blogs"
            className="text-primary font-medium-token  mb-8 flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            ← Go back
          </Link>

          {/* Category */}
          <p className="text-primary font-semibold-token  tracking-[2.24px] uppercase mb-7">
            {data.category}
          </p>

          {/* Title */}
          <h1 className="text-neutral-800   font-bold-token leading-tight mb-7">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-neutral-600  leading-relaxed mb-12">
            {data.description}
          </p>

          {/* Author Section */}
          <div className="flex items-center gap-4">
            {data.authorImage && (
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={data.authorImage}
                  alt={data.author}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-bold-token text-primary ">
                {data.author}
              </p>
              <p className="text-neutral-600 ">
                {data.authorTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-0 px-6  mb-[4%]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[25px] shadow-[0px_4px_30px_0px_rgba(45,30,133,0.1)] p-8 md:p-12">
            <div className="space-y-8 text-neutral-600">
              <p className=" leading-relaxed">
                This is a blog post about "{data.title}". Content would be
                displayed here with rich formatting, images, and interactive
                elements.
              </p>

              <p className=" leading-relaxed">
                Blog posts provide in-depth insights and practical guidance on
                topics relevant to our industry and expertise. Each post is
                carefully crafted to deliver value to our readers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}