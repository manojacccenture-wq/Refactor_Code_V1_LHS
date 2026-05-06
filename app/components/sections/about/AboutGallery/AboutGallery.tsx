"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "./GalleryModal";
import img1 from "@/app/components/sections/about/assets/snap_photos/1.jpg";
import img2 from "@/app/components/sections/about/assets/snap_photos/2.jpg";
import img3 from "@/app/components/sections/about/assets/snap_photos/3.jpg";
import img4 from "@/app/components/sections/about/assets/snap_photos/4.jpg";
import img5 from "@/app/components/sections/about/assets/snap_photos/5.jpg";
import img6 from "@/app/components/sections/about/assets/snap_photos/6.jpg";
import img7 from "@/app/components/sections/about/assets/snap_photos/7.jpg";
import img8 from "@/app/components/sections/about/assets/snap_photos/8.jpg";
import img9 from "@/app/components/sections/about/assets/snap_photos/9.jpg";
import img10 from "@/app/components/sections/about/assets/snap_photos/10.jpg";
import img11 from "@/app/components/sections/about/assets/snap_photos/11.jpg";
import Button from "@/app/components/ui/Button";

const galleryImages = [
  { src: img1, alt: "Gallery image 1" },
  { src: img2, alt: "Gallery image 2" },
  { src: img3, alt: "Gallery image 3" },
  { src: img4, alt: "Gallery image 4" },
  { src: img5, alt: "Gallery image 5" },
  { src: img6, alt: "Gallery image 6" },
  { src: img7, alt: "Gallery image 7" },
  { src: img8, alt: "Gallery image 8" },
  { src: img9, alt: "Gallery image 9" },
  { src: img10, alt: "Gallery image 10" },
  { src: img11, alt: "Gallery image 11" },
];

const CARD_BASE =
  "group relative overflow-hidden rounded-none cursor-pointer border-0 p-0 bg-transparent " +
  "transition-transform duration-300 ease-out hover:scale-[1.025] hover:shadow-[0_12px_36px_rgba(0,0,0,0.14)]";

const CARD_OVERLAY =
  "absolute inset-0 rounded-none bg-[rgba(0,194,168,0)] " +
  "transition-colors duration-300 group-hover:bg-[rgba(0,194,168,0.06)] pointer-events-none";

export default function AboutGallery() {
  // 1. State for the on-page carousel/gallery navigation
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. State for the popup Modal
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // Modal Handlers
  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const prevImageModal = () =>
    setModalIndex((i) =>
      i !== null
        ? (i - 1 + galleryImages.length) % galleryImages.length
        : galleryImages.length - 1
    );
  const nextImageModal = () =>
    setModalIndex((i) => (i !== null ? (i + 1) % galleryImages.length : 0));

  // On-Page Gallery Nav Handlers
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Calculate indices for the 3 visible desktop cards
  const leftIndex = currentIndex;
  const centerIndex = (currentIndex + 1) % galleryImages.length;
  const rightIndex = (currentIndex + 2) % galleryImages.length;

  return (
    <>
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-full mx-auto">
          <p className="uppercase font-bold-token tracking-[0.14em]  mb-3 text-primary">
            {`"Built on Execution, Not Assumptions"`}
          </p>
          <h2 className="font-bold-token">Our gallery</h2>
        </div>

        {/* Gallery Grid — Desktop */}
        <div className="max-w-full mx-auto">
          <div className="hidden md:grid md:grid-cols-3 md:gap-18 md:items-start">
            {/* Left image */}
            <Button
              className={`${CARD_BASE} mt-12 aspect-458/234 w-full`}
              onClick={() => openModal(leftIndex)}
              aria-label="Open left image"
            >
              <Image
                src={galleryImages[leftIndex].src}
                alt={galleryImages[leftIndex].alt}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className={CARD_OVERLAY} />
            </Button>

            {/* Center image */}
            <Button
              className={`${CARD_BASE} aspect-419/347 w-full`}
              onClick={() => openModal(centerIndex)}
              aria-label="Open center image"
            >
              <Image
                src={galleryImages[centerIndex].src}
                alt={galleryImages[centerIndex].alt}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className={CARD_OVERLAY} />
            </Button>

            {/* Right image */}
            <Button
              className={`${CARD_BASE} mt-12 aspect-440/234 w-full`}
              onClick={() => openModal(rightIndex)}
              aria-label="Open right image"
            >
              <Image
                src={galleryImages[rightIndex].src}
                alt={galleryImages[rightIndex].alt}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className={CARD_OVERLAY} />
            </Button>
          </div>

          {/* Gallery Grid — Mobile: single column carousel */}
          <div className="flex flex-col gap-4 md:hidden">
            <Button
              className={`${CARD_BASE} aspect-video w-full`}
              onClick={() => openModal(currentIndex)}
              aria-label={`Open image`}
            >
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className={CARD_OVERLAY} />
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 items-center justify-center mt-10">
          {/* Prev */}
          <Button
            className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition active:scale-95"
            onClick={prevSlide}
            aria-label="Previous gallery image"
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
            className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition active:scale-95"
            onClick={nextSlide}
            aria-label="Next gallery image"
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
        </div>
      </section>

      {/* Modal */}
      {modalIndex !== null && (
        <GalleryModal
          images={galleryImages}
          currentIndex={modalIndex}
          onClose={closeModal}
          onPrev={prevImageModal}
          onNext={nextImageModal}
        />
      )}
    </>
  );
}