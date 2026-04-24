"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import type { StaticImageData } from "next/image";
import Button from "@/app/components/ui/Button";


interface GalleryImage {
  src: StaticImageData;
  alt: string;
}

interface GalleryModalProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-[rgba(0,0,0,0.82)] p-4 animate-[fadeIn_0.22s_ease_forwards]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery lightbox"
    >
      <div
        className="relative w-full max-w-225 rounded-2xl overflow-hidden bg-black animate-[scaleIn_0.3s_cubic-bezier(0.34,1.36,0.64,1)_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <Button
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(0,0,0,0.5)] border border-white/20 text-white cursor-pointer transition-colors duration-200 hover:bg-[rgba(0,194,168,0.75)]"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Button>

        {/* Image */}
        <div className="relative w-full aspect-16/10">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </div>

        {/* Prev */}
        <Button
          className="absolute top-1/2 -translate-y-1/2 left-3 z-10 w-11 h-11 rounded-full bg-(--color-primary-1) flex items-center justify-center border-0 cursor-pointer transition-all duration-200 hover:opacity-85 hover:scale-105"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <svg
            viewBox="0 0 16.6545 15.756"
            width="16"
            height="16"
            fill="none"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              d="M8.77648 0.827283L15.8272 7.87801L8.77648 14.9287"
              stroke="white"
              strokeWidth="1.65457"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8272 7.87809L0.827283 7.87809"
              stroke="white"
              strokeWidth="1.65457"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        {/* Next */}
        <Button
          className="absolute top-1/2 -translate-y-1/2 right-3 z-10 w-11 h-11 rounded-full bg-(--color-primary-1) flex items-center justify-center border-0 cursor-pointer transition-all duration-200 hover:opacity-85 hover:scale-105"
          onClick={onNext}
          aria-label="Next image"
        >
          <svg
            viewBox="0 0 16.6545 15.756"
            width="16"
            height="16"
            fill="none"
          >
            <path
              d="M8.77648 0.827283L15.8272 7.87801L8.77648 14.9287"
              stroke="white"
              strokeWidth="1.65457"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8272 7.87809L0.827283 7.87809"
              stroke="white"
              strokeWidth="1.65457"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        {/* Counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[rgba(0,0,0,0.5)] text-white text-[14px] whitespace-nowrap select-none">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
