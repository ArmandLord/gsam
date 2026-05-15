"use client";

import { HorizontalContainerProps, GalleryImage } from "@/types";
import Image from "next/image";
import ImageGallery from "./imageGallery";

const galleryImages: GalleryImage[] = [
  { id: 1, href: "/images/sam/sam-7.webp", alt: "Sam horizontal" },
  { id: 2, href: "/images/sam/sam-8.webp", alt: "Sam horizontal" },
  { id: 3, href: "/images/sam/sam-9.webp", alt: "Sam vertical" },
  { id: 4, href: "/images/sam/sam-10.webp", alt: "Sam horizontal" },
  { id: 5, href: "/images/sam/sam-11.webp", alt: "Sam vertical" },
  { id: 6, href: "/images/sam/sam-12.webp", alt: "Sam horizontal" },
];
const galleryImages2: GalleryImage[] = [
  { id: 7, href: "/images/sam/sam-13.webp", alt: "Sam horizontal" },
  { id: 8, href: "/images/sam/sam-14.webp", alt: "Sam horizontal" },
  { id: 9, href: "/images/sam/sam-15.webp", alt: "Sam vertical" },
  { id: 10, href: "/images/sam/sam-16.webp", alt: "Sam horizontal" },
  { id: 11, href: "/images/sam/sam-17.webp", alt: "Sam vertical" },
  { id: 12, href: "/images/sam/sam-18.webp", alt: "Sam horizontal" },
];
const galleryImages3: GalleryImage[] = [
  { id: 13, href: "/images/sam/sam-19.webp", alt: "Sam horizontal" },
  { id: 14, href: "/images/sam/sam-20.webp", alt: "Sam horizontal" },
  { id: 15, href: "/images/sam/sam-21.webp", alt: "Sam vertical" },
  { id: 16, href: "/images/sam/sam-22.webp", alt: "Sam horizontal" },
  { id: 17, href: "/images/sam/sam-23.webp", alt: "Sam vertical" },
  { id: 18, href: "/images/sam/sam-24.webp", alt: "Sam horizontal" },
];

const HorizontalContainer = ({
  horizontalContainerRef,
  horizontalWrapperRef,
}: HorizontalContainerProps) => {
  return (
    <div
      ref={horizontalContainerRef}
      className="h-screen w-full overflow-hidden"
    >
      <div
        ref={horizontalWrapperRef}
        className="relative flex h-full w-[532vw]"
      >
        <div
          className="
            absolute
            left-[100vw]
            -bottom-5/12
            -translate-x-1/2
            -translate-y-1/2
            z-20
            px-6 pt-6 bg-stone-50 shadow-lg
          "
        >
          <Image
            src="/images/sam/sam-6.webp"
            alt="Sam Image"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>

        <div className="w-screen h-full flex items-center bg-[#CDB0A1] pl-12 md:pl-16 lg:pl-24">
          <div className="max-w-xl">
            <h2 className="font-brice font-semibold text-5xl md:text-6xl lg:text-7xl text-indigo-950 leading-[1.1]">
              Nuestro Comienzo
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-indigo-900/70 mt-3 md:mt-4 font-sans">
              Un día lleno de amor, recuerdos y gratitud
            </p>
            <div className="w-16 h-0.5 bg-indigo-950/25 mt-5 md:mt-6 mb-4 md:mb-5" />
            <div className="text-indigo-950/80 text-md md:text-base leading-relaxed space-y-3 pt-4">
              <p>
                Hoy mi corazón está más lleno que nunca. No solo porque voy a
                casarme con la persona que amo, sino porque al mirar a mi
                alrededor los veo a ustedes, a todos los que han sido parte de
                mi historia.
              </p>
              <p>
                A mi familia, gracias por enseñarme el amor verdadero, por
                sostenerme en los momentos difíciles y por celebrar conmigo cada
                alegría. Todo lo que soy es gracias a ustedes.
              </p>
              <p>
                A mis amigos, gracias por sus abrazos, sus consejos y por
                caminar a mi lado todos estos años. Su cariño ha hecho este
                viaje más hermoso.
              </p>
              <p className="font-semibold text-indigo-950">
                Gracias por ser parte de nuestra historia.
              </p>
            </div>
          </div>
        </div>

        <div className="w-screen h-full flex flex-col items-end justify-center bg-[#CDB0A1] gap-6 px-6">
          <h2 className="font-brice font-bold text-6xl md:text-7xl lg:text-8xl text-indigo-950 text-end leading-[1.1] max-w-4xl">
            Ven a conocer Nuestra historia
          </h2>
          <p className="font-sans text-lg md:text-xl lg:text-2xl text-indigo-900/70 text-end max-w-2xl">
            Cada imagen guarda un recuerdo, y cada recuerdo tiene tu nombre
          </p>
        </div>

        <div className="w-screen h-full bg-[#CDB0A1]">
          <ImageGallery images={galleryImages} />
        </div>

        <div className="w-screen h-full bg-[#CDB0A1] pl-2">
          <ImageGallery images={galleryImages2} />
        </div>

        <div className="w-screen h-full bg-[#CDB0A1] pl-2">
          <ImageGallery images={galleryImages3} />
        </div>
      </div>
    </div>
  );
};

export default HorizontalContainer;
