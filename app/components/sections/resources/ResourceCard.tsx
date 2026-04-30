"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import VideoModal from "./VideoModal";

interface ResourceCardProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  date: string;
  type: "case-study" | "blog" | "video";
  videoUrl?: string;
}

export default function ResourceCard({
  id,
  title,
  description,
  image,
  date,
  type,
  videoUrl,
}: ResourceCardProps) {
  const router = useRouter();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleCardClick = () => {
    if (type === "video" && videoUrl) {
      setIsVideoOpen(true);
    } else if (type === "case-study") {
      router.push(`/resources/case-studies/${id}`);
    } else if (type === "blog") {
      router.push(`/resources/blogs/${id}`);
    }
  };

  const cardContent = (
    <div
      className="bg-white h-full rounded-[25px] shadow-[0px_4px_30px_0px_rgba(45,30,133,0.1)] overflow-hidden hover:shadow-[0px_10px_40px_0px_rgba(45,30,133,0.15)] transition-shadow duration-300 flex flex-col cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative w-full h-[227px] overflow-hidden rounded-[20px] m-[5px]">
        <Image
          src={image}
          alt={title}
          width={400}
          height={227}
          className="w-[97%] h-full object-cover rounded-2xl"
        />
        {type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center  transition-colors">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-3xl ml-1">▶</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-4 flex flex-col flex-1">
        {/* Date */}
        <p className="text-neutral-500  font-medium-token leading-[22px] mb-2">
          {date}
        </p>

        {/* Title */}
        <h3 className="font-bold-token text-[22px] leading-[28px] text-neutral-800 mb-3 text-left ">
          {title}
        </h3>

        {/* Description (if present) */}
        {description && (
          <p className="text-neutral-600  ">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (type === "video") {
    return (
      <>
        <div>{cardContent}</div>
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl={videoUrl || ""}
          title={title}
        />
      </>
    );
  }

  return cardContent;
}
