"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(useGSAP, SplitText);

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const lineTopRef = useRef<HTMLDivElement | null>(null);
  const imgRefs = useRef<HTMLDivElement[]>([]);
  const centeredImageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    if (!lineRef.current) return;
    if (!lineTopRef.current) return;
    if (imgRefs.current.length === 0) return;
    if (!centeredImageRef.current) return;

    const split = SplitText.create(titleRef.current, {
      type: "chars",
      charsClass: "char",
    });

    const tl = gsap.timeline();

    tl.from(split.chars, {
      y: -300,
      duration: 0.8,
      ease: "bounce",
      stagger: {
        each: 0.06,
        from: "start",
      },
    });

    tl.from(lineRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1,
      ease: "power2.out",
    });

    tl.from(
      lineTopRef.current,
      {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
      },
      "<",
    );

    tl.fromTo(
      imgRefs.current,
      { scale: 0, opacity: 0, rotation: (i) => [-20, 20, -25, -25][i] || 0 },
      {
        scale: 1,
        rotation: (i) => [-8, 12, -15, 10][i] || 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(2)",
        stagger: 0.15,
      },
    );

    tl.fromTo(
      centeredImageRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(2)",
      },
    );

    return () => split.revert();
  });

  const setImgRef = (el: HTMLDivElement | null, index: number) => {
    if (el) imgRefs.current[index] = el;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    gsap.to(imgRefs.current, {
      x: (i) => x * [30, -25, 20, -20][i] || 0,
      y: (i) => y * [-20, 25, -15, 20][i] || 0,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(centeredImageRef.current, {
      x: x * 12,
      y: y * 12,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <section onMouseMove={handleMouseMove} className="h-screen bg-amber-50 flex items-end justify-between flex-col overflow-hidden relative">
      <div className="flex items-center w-full pt-12">
        <div ref={lineTopRef} className="h-1 w-full bg-indigo-950 -mr-5" />
      </div>

      <div className="h-125 w-full" />

      <div className="flex items-center w-full">
        <div ref={lineRef} className="h-1 w-full bg-indigo-950 -mr-5" />
        <h1
          ref={titleRef}
          className="whitespace-nowrap text-indigo-950 font-rammetto text-6xl md:text-8xl lg:text-9xl"
        >
          ME CASÉ!
        </h1>
      </div>

      <div
        ref={(el) => setImgRef(el, 0)}
        className="absolute top-[10%] left-[8%] w-40 h-40 md:w-52 md:h-52"
      >
        <Image
          src="/images/sam/sam-1.webp"
          alt="Wedding"
          width={208}
          height={208}
          className="w-full h-full object-cover rounded-2xl shadow-xl"
        />
      </div>
      <div
        ref={(el) => setImgRef(el, 1)}
        className="absolute top-[5%] right-[12%] w-36 h-38 md:w-48 md:h-48"
      >
        <Image
          src="/images/sam/sam-2.webp"
          alt="Wedding"
          width={192}
          height={192}
          className="w-full h-full object-cover rounded-2xl shadow-xl"
        />
      </div>
      <div
        ref={(el) => setImgRef(el, 2)}
        className="absolute bottom-[22%] left-[13%] w-44 h-44 md:w-56 md:h-56"
      >
        <Image
          src="/images/sam/sam-3.webp"
          alt="Wedding"
          width={224}
          height={224}
          className="w-full h-full object-cover rounded-2xl shadow-xl"
        />
      </div>
      <div
        ref={(el) => setImgRef(el, 3)}
        className="absolute bottom-[32%] right-[18%] w-44 h-44 md:w-56 md:h-56"
      >
        <Image
          src="/images/sam/sam-4.webp"
          alt="Wedding"
          width={224}
          height={224}
          className="w-full h-full object-cover rounded-2xl shadow-xl"
        />
      </div>
      <div
        ref={centeredImageRef}
        className="absolute bottom-[25%] right-[38%] w-44 h-44 md:w-96 md:h-125"
      >
        <Image
          src="/images/sam/sam.webp"
          alt="Wedding"
          width={224}
          height={224}
          className="w-full h-full object-cover rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Home;
