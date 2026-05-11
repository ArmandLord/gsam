"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Landing = () => {
  const primaryImageRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const namesRef = useRef<HTMLHeadingElement | null>(null);
  const complemntaryImageOneRef = useRef<HTMLDivElement | null>(null);
  const complemntaryImageTwoRef = useRef<HTMLDivElement | null>(null);
  const complemntaryImageThreeRef = useRef<HTMLDivElement | null>(null);
  const complemntaryImageFourRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!primaryImageRef.current) return;
      if (!navRef.current) return;
      if (!pinRef.current) return;
      if (!namesRef.current) return;
      if (!complemntaryImageOneRef.current) return;
      if (!complemntaryImageTwoRef.current) return;
      if (!complemntaryImageThreeRef.current) return;
      if (!complemntaryImageFourRef.current) return;

      const nav = navRef.current;
      const primaryImage = primaryImageRef.current;
      const pin = pinRef.current;
      const names = namesRef.current;
      const complemntaryImageOne = complemntaryImageOneRef.current;
      const complemntaryImageTwo = complemntaryImageTwoRef.current;
      const complemntaryImageThree = complemntaryImageThreeRef.current;
      const complemntaryImageFour = complemntaryImageFourRef.current;

      gsap.set(nav, {
        color: "rgba(255, 255, 255, 0.7)",
        backgroundColor: "transparent",
        boxShadow: "none",
        backdropFilter: "blur(0px)",
        webkitBackdropFilter: "blur(0px)",
      });

      // navbar — completa en 150px de scroll (independiente del pin)
      gsap.to(nav, {
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: "+=150",
          scrub: true,
        },
        top: "1.5rem",
        width: "90vw",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        color: "#333357",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: "1px",
        borderStyle: "solid",
        backdropFilter: "blur(10px)",
        webkitBackdropFilter: "blur(10px)",
        ease: "circ.inOut",
      });

      // nombres — desaparecen en 150px de scroll
      gsap.to(names, {
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: "+=150",
          scrub: true,
        },
        autoAlpha: 0,
        ease: "power1.out",
      });

      // pin timeline — solo para las imágenes
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      // imagen principal — ocupa todo el pin
      tl.from(
        primaryImage,
        {
          width: "85%",
          top: "3rem",
          ease: "power2.out",
        },
        "<",
      );

      // imágenes complementarias — con duración acotada + stagger
      tl.from(
        [complemntaryImageOne, complemntaryImageTwo, complemntaryImageThree, complemntaryImageFour],
        {
          x: (i: number) => [-250, -100, 250, 100][i],
          y: (i: number) => [-350, 200, -350, 200][i],
          scale: 0.7,
          opacity: 0,
          rotation: (i: number) => [-4, -2, 4, 2][i],
          duration: 0.5,
          ease: "power3.out",
          stagger: { each: 0.1, from: 'random' },
        },
        "<0.1",
      );
    },
    {
      dependencies: [
        primaryImageRef,
        navRef,
        pinRef,
        namesRef,
        complemntaryImageOneRef,
        complemntaryImageTwoRef,
        complemntaryImageThreeRef,
        complemntaryImageFourRef,
      ],
    },
  );

  return (
    <section className="bg-zinc-100 min-h-screen relative">
      {/* pinned hero section */}
      <div ref={pinRef} className="h-screen w-full relative">
        <div
          ref={primaryImageRef}
          className="absolute inset-0 mx-auto w-[35%] h-[85%] top-[12%]"
        >
          <Image
            src="/images/sam/sam-5.webp"
            alt="Wedding"
            fill
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>

        {/* complementary images section left */}
        <div
          ref={complemntaryImageOneRef}
          className="absolute inset-0 mx-auto w-[25%] h-[46%] top-[12%] right-[63%]"
        >
          <Image
            src="/images/sam/sam-1.webp"
            alt="Wedding"
            fill
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
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>

        {/* complementary images section right */}
         <div
          ref={complemntaryImageFourRef}
          className="absolute inset-0 mx-auto w-[25%] h-[48%] top-[49%] left-[63%]"
        >
          <Image
            src="/images/sam/sam-2.webp"
            alt="Wedding"
            fill
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>
        
        <div
          ref={complemntaryImageThreeRef}
          className="absolute inset-0 mx-auto w-[25%] h-[34%] top-[12%] left-[63%]"
        >
          <Image
            src="/images/sam/sam-1.webp"
            alt="Wedding"
            fill
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>
      </div>

      {/* pinned married names section */}
      <h1
        ref={namesRef}
        className="text-4xl text-white/55 fixed bottom-26 left-1/10"
      >
        Samantha & Armando
      </h1>

      {/* fixed navbar */}
      <nav
        ref={navRef}
        className="fixed top-15 left-1/2 -translate-x-1/2 z-50 w-[83%] rounded-4xl px-7 py-4 flex items-center justify-between text-white/65"
      >
        <span className="text-2xl">S.&.A</span>
        <ul className="flex items-center justify-around w-1/4">
          {navigation.map((nav) => (
            <li key={nav.href} className="text-xl">
              {nav.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* spacer for scroll */}
      <div className="h-[250vh] bg-zinc-100" />
    </section>
  );
};

export default Landing;
