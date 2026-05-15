"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { GalleryImage } from "@/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ImageGalleryProps {
  images: GalleryImage[];
}

const gridPositions = [
  "col-span-2 row-span-4",
  "col-span-2 row-span-4 col-start-1 row-start-5",
  "col-span-2 row-span-6 col-start-3 row-start-1",
  "col-span-2 row-span-2 col-start-3 row-start-7",
  "col-span-2 row-span-5 col-start-5 row-start-1",
  "col-span-2 row-span-3 col-start-5 row-start-6",
];

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {
    if (!selectedImage) return;

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    gsap.fromTo(
      imageContainerRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
    );
  }, { dependencies: [selectedImage], revertOnUpdate: true });

  const closeOverlay = contextSafe(() => {
    if (!overlayRef.current || !imageContainerRef.current) {
      setSelectedImage(null);
      return;
    }

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    });
    gsap.to(imageContainerRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setSelectedImage(null),
    });
  });

  useEffect(() => {
    if (!selectedImage) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="w-full h-full grid grid-cols-6 grid-rows-8 gap-2">
        {images.slice(0, 6).map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden cursor-pointer ${gridPositions[index]}`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.href}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && createPortal(
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeOverlay}
        >
          <button
            className="absolute top-4 right-4 z-10 text-white/80 text-3xl hover:text-white transition-colors leading-none"
            onClick={(e) => {
              e.stopPropagation();
              closeOverlay();
            }}
          >
            ✕
          </button>
          <div
            ref={imageContainerRef}
            className="relative w-[90vw] h-[90vh] cursor-default"
          >
            <Image
              src={selectedImage.href}
              alt={selectedImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ImageGallery;
