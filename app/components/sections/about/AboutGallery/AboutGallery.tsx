"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "./GalleryModal";
import galleryLeft from "@/app/components/sections/about/assets/jsk1.webp";
import galleryCenter from "@/app/components/sections/about/assets/diwali3.webp";
import galleryRight from "@/app/components/sections/about/assets/lunch.webp";
import Button from "@/app/components/ui/Button";


const galleryImages = [
  { src: galleryLeft, alt: "LHS team collaboration" },
  { src: galleryCenter, alt: "LHS professionals at work" },
  { src: galleryRight, alt: "LHS office environment" },
    { src: galleryRight, alt: "LHS office environment" },
];

const CARD_BASE =
  "group relative overflow-hidden rounded-2xl cursor-pointer border-0 p-0 bg-transparent " +
  "transition-transform duration-300 ease-out hover:scale-[1.025] hover:shadow-[0_12px_36px_rgba(0,0,0,0.14)]";

const CARD_OVERLAY =
  "absolute inset-0 rounded-2xl bg-[rgba(0,194,168,0)] " +
  "transition-colors duration-300 group-hover:bg-[rgba(0,194,168,0.06)] pointer-events-none";

const NAV_BTN =
  "w-10 h-10 rounded-full flex items-center justify-center shrink-0 " +
  "bg-(--color-primary-1) border-0 cursor-pointer " +
  "transition-all duration-200 hover:opacity-85 hover:scale-105";

export default function AboutGallery() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const prevImage = () =>
    setModalIndex((i) =>
      i !== null
        ? (i - 1 + galleryImages.length) % galleryImages.length
        : galleryImages.length - 1
    );
  const nextImage = () =>
    setModalIndex((i) =>
      i !== null ? (i + 1) % galleryImages.length : 0
    );

  return (
    <>
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-5xl mx-auto">
          <p
            className="uppercase font-bold-token tracking-[0.14em]  mb-3 text-primary"
            
          >
            {`"Built on Execution, Not Assumptions"`}
          </p>
          <h2
            className="font-bold-token"
            
          >
            Our gallery
          </h2>
        </div>

        {/* Gallery Grid — Desktop */}
        <div className="max-w-347.5 mx-auto">
          <div className="hidden md:grid md:grid-cols-3 md:gap-18 md:items-start">
            {/* Left image — offset 48px from top */}
            <Button
              className={`${CARD_BASE} mt-12 aspect-458/234 w-full`}
              onClick={() => openModal(0)}
              aria-label="Open image 1"
            >
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className={CARD_OVERLAY} />
            </Button>

            {/* Center image — tallest, starts at top */}
            <Button
              className={`${CARD_BASE} aspect-419/347 w-full`}
              onClick={() => openModal(1)}
              aria-label="Open image 2"
            >
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className={CARD_OVERLAY} />
            </Button>

            {/* Right image — offset 48px from top */}
            <Button
              className={`${CARD_BASE} mt-12 aspect-440/234 w-full`}
              onClick={() => openModal(2)}
              aria-label="Open image 3"
            >
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className={CARD_OVERLAY} />
            </Button>
          </div>

          {/* Gallery Grid — Mobile: single column */}
          <div className="flex flex-col gap-4 md:hidden">
            {galleryImages.map((img, i) => (
              <Button
                key={i}
                className={`${CARD_BASE} aspect-video w-full`}
                onClick={() => openModal(i)}
                aria-label={`Open image ${i + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className={CARD_OVERLAY} />
              </Button>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 items-center justify-center mt-10">
          {/* Prev */}
          <Button
            className={NAV_BTN}
            onClick={() =>
              setModalIndex((i) =>
                i !== null
                  ? (i - 1 + galleryImages.length) % galleryImages.length
                  : galleryImages.length - 1
              )
            }
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
            className={NAV_BTN}
            onClick={() =>
              setModalIndex((i) =>
                i !== null ? (i + 1) % galleryImages.length : 0
              )
            }
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
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
