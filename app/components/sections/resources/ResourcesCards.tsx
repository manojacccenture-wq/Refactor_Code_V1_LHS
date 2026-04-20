"use client";

import { useState } from "react";
import ResourceCard from "./ResourceCard";
import Button from "@/app/components/ui/Button";

const mockResources = [
  {
    id: "1",
    title: "Best practices for showcasing features",
    image: "/Resources/Case_Studies/Image_1.svg",
    date: "Oct 13, 2025",
    type: "case-study" as const,
  },
  {
    id: "2",
    title: "Visual storytelling for complex products",
    image: "/Resources/Case_Studies/Image_2.svg",
    date: "Oct 13, 2025",
    type: "blog" as const,
  },
  {
    id: "3",
    title: "How microinteractions boost user experience",
    image: "/Resources/Case_Studies/Image_1.svg",
    date: "Oct 13, 2025",
    type: "video" as const,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Why performance and accessibility matter",
    image: "/Resources/Case_Studies/Image_2.svg",
    date: "Oct 13, 2025",
    type: "case-study" as const,
  },
  {
    id: "5",
    title: "From idea to launch: SaaS UI/UX guide",
    image: "/Resources/Case_Studies/Image_1.svg",
    date: "Oct 13, 2025",
    type: "blog" as const,
  },
  {
    id: "6",
    title: "Simplifying user journeys for more signups",
    image: "/Resources/Case_Studies/Image_2.svg",
    date: "Oct 13, 2025",
    type: "video" as const,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

interface ResourcesCardsProps {
  type?: "case-study" | "blog" | "video";
}

export default function ResourcesCards({ type }: ResourcesCardsProps) {
  const [displayCount, setDisplayCount] = useState(6);
  const filteredResources = type ? mockResources.filter(r => r.type === type) : mockResources;
  const visibleResources = filteredResources.slice(0, displayCount);
  const hasMore = displayCount < filteredResources.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 3, filteredResources.length));
  };

  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {visibleResources.map((resource) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center">
          <Button
            onClick={handleLoadMore}
            variant="primary"
            className="rounded-full"
          >
            Load more
          </Button>
        </div>
      )}
    </section>
  );
}
