'use client'

import { HorizontalContainerProps } from "@/types"

const HorizontalContainer = ({ horizontalContainerRef, horizontalWrapperRef }: HorizontalContainerProps) => {
  return (
    <div
        ref={horizontalContainerRef}
        className="h-screen w-full overflow-hidden"
      >
        <div ref={horizontalWrapperRef} className="flex h-full w-[400vw]">
          <div className="w-screen h-full flex items-center justify-center bg-zinc-200">
            <h2 className="text-4xl text-zinc-800">Slide 1</h2>
          </div>
          <div className="w-screen h-full flex items-center justify-center bg-zinc-300">
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
  )
}

export default HorizontalContainer