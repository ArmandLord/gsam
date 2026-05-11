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
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      // animación de la navbar
      tl.to(
        nav,
        {
          top: "1.5rem", // sube de ~2rem a ~4px
          width: "90vw",
          duration: 0.2,
          backgroundColor: "rgba(255, 255, 255, 0.4)", // fondo blanco semitransparente
          color: "#333357",
          boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
          borderColor: "rgba(255, 255, 255, 0.2)", // borde blanco semitransparente
          borderWidth: "1px",
          borderStyle: "solid",
          backdropFilter: "blur(10px)", // efecto de desenfoque
          ease: "circ.inOut",
        },
        "<",
      );

      // animación de los nombres
      tl.to(
        names,
        {
          duration: 0.2,
          autoAlpha: 0, // opacity + visibility, fade suave
          ease: "power1.out",
        },
        "<",
      );

      // animación de la imagen principal
      tl.from(
        primaryImage,
        {
          width: "85%",
          top: "3rem",
          ease: "power2.out",
        },
        "<",
      );

      // animación de las imágenes complementarias
      tl.from(
        complemntaryImageOne,
        {
          x: -250,
          y: -350,
          scale: 0.7,
          opacity: 0,
          rotation: -4,
          ease: "power3.out",
        },
        "<0.1"
      );
      tl.from(
        complemntaryImageTwo,
        {
          x: -100,
          y: 200,
          scale: 0.7,
          opacity: 0,
          rotation: -2,
          ease: "power3.out",
        },
        "<"  
      );
      tl.from(
        complemntaryImageThree,
        {
          x: 250,
          y: -350,
          scale: 0.7,
          opacity: 0,
          rotation: 4,
          ease: "power3.out",
        },
        "<",
      );
      tl.from(
        complemntaryImageFour,
        {
          x: 100,
          y: 200,
          scale: 0.7,
          opacity: 0,
          rotation: 2,
          ease: "power3.out",
        },
        "<",
      );

      // al finalizar, fontWeight: "600", // de font-semibold → font-bold
      // tl.to(nav, {
      //   fontWeight: "600",
      //   ease: "power1.out",
      // })
    },
    {
      dependencies: [
        primaryImageRef,
        navRef,
        pinRef,
        namesRef,
        complemntaryImageOneRef,
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
