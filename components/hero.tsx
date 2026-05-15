"use client";

import Image from "next/image";
import { HeroProps } from "@/types";

const Hero = ({
    pinRef,
    primaryImageRef,
    complemntaryImageOneRef,
    complemntaryImageTwoRef,
    complemntaryImageThreeRef,
    complemntaryImageFourRef,
    namesRef
}: HeroProps) => {
  return (
    <>
      <div ref={pinRef} className="h-screen w-full relative">
        <div
          ref={primaryImageRef}
          className="absolute inset-0 mx-auto w-[35%] h-[85%] max-h-190 top-[12%]"
        >
          <Image
            src="/images/sam/sam-5.webp"
            alt="Wedding"
            fill
            sizes="85vw"
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>

        <div
          ref={complemntaryImageOneRef}
          className="absolute inset-0 mx-auto w-[25%] h-[46%] top-[12%] right-[63%]"
        >
          <Image
            src="/images/sam/sam-1.webp"
            alt="Wedding"
            fill
            sizes="45vw"
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>

        <div
          ref={complemntaryImageTwoRef}
          className="absolute inset-0 mx-auto w-[25%] h-[36%] top-[61%] right-[63%]"
        >
          <Image
            src="/images/sam/sam-2.webp"
            alt="Wedding"
            fill
            sizes="45vw"
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>

        <div
          ref={complemntaryImageFourRef}
          className="absolute inset-0 mx-auto w-[25%] h-[48%] top-[49%] left-[63%]"
        >
          <Image
            src="/images/sam/sam-4.webp"
            alt="Wedding"
            fill
            sizes="45vw"
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>

        <div
          ref={complemntaryImageThreeRef}
          className="absolute inset-0 mx-auto w-[25%] h-[34%] top-[12%] left-[63%]"
        >
          <Image
            src="/images/sam/sam-3.webp"
            alt="Wedding"
            fill
            sizes="45vw"
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>
      </div>

      <h1
        ref={namesRef}
        className="font-brice text-4xl text-white/55 fixed bottom-26 left-1/10"
      >
        Me casé!
      </h1>
    </>
  );
};

export default Hero;
