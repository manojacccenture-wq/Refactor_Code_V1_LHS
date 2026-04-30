"use client";

import Button from "../../../ui/Button";

interface CareerCardProps {
  experience: string;
  title: string;
  description: string;
  postedDate: string;
  slug?: string;
}

export default function CareerCard({
  experience,
  title,
  description,
  postedDate,
  slug,
}: CareerCardProps) {
  const jobSlug = slug || title.toLowerCase().replace(/[\s\/]/g, "-");

  return (
    <div className="bg-white border border-neutral-300 rounded-2xl shadow-sm p-6 flex flex-col gap-5 w-full">
      {/* Experience & Title */}
      <div className="flex flex-col gap-1">
        <h5 className="text-primary   font-semibold-token ">
          {experience}
        </h5>
        <h4 className=" font-bold-token">
          {title}
        </h4>
      </div>

      {/* Description */}
      <p className="  font-normal-token">
        {description}
      </p>

      {/* CTA Section */}
      <div className="flex flex-col gap-4 pt-2">
        <Button
          href={`/career/${jobSlug}`}
          className="bg-primary text-white px-6 py-4 rounded-full font-medium-token  hover:opacity-90 transition-opacity w-full"
        >
          Apply now
        </Button>
        <p className="text-neutral-600  font-regular-token text-center">
          Posted on {postedDate}
        </p>
      </div>
    </div>
  );
}
