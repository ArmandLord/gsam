"use client";

import { HorizontalContainerProps } from "@/types";
import Image from "next/image";

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
    className="relative flex h-full w-[400vw]"
  >
    {/* IMAGEN ENTRE SLIDE 1 Y 2 */}
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

    <div className="w-screen h-full flex items-center justify-center bg-[#CDB0A1]">
      <h2 className="text-4xl text-zinc-800">Slide 1</h2>
    </div>

    <div className="w-screen h-full flex items-center justify-center bg-[#CDB0A1]">
      <h2 className="text-4xl text-zinc-800">Slide 2</h2>
    </div>

    <div className="w-screen h-full flex items-center justify-center bg-zinc-400">
      <h2 className="text-4xl text-zinc-800">Slide 3</h2>
    </div>

    <div className="w-screen h-full flex items-center justify-center bg-zinc-500">
      <h2 className="text-4xl text-zinc-800">Slide 4</h2>
    </div>
  </div>
</div>
  );
};

export default HorizontalContainer;
