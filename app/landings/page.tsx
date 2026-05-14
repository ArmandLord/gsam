"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero, HorizontalContainer, Navbar } from "@/components";
import { navigationData } from "@/mockData/navigation";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const primaryImageRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const namesRef = useRef<HTMLHeadingElement | null>(null);
  const complemntaryImageOneRef = useRef<HTMLDivElement | null>(null);
  const complemntaryImageTwoRef = useRef<HTMLDivElement | null>(null);
  const complemntaryImageThreeRef = useRef<HTMLDivElement | null>(null);
  const complemntaryImageFourRef = useRef<HTMLDivElement | null>(null);

  const horizontalContainerRef = useRef<HTMLDivElement | null>(null);
  const horizontalWrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!primaryImageRef.current) return;
    if (!navRef.current) return;
    if (!pinRef.current) return;
    if (!namesRef.current) return;
    if (!complemntaryImageOneRef.current) return;
    if (!complemntaryImageTwoRef.current) return;
    if (!complemntaryImageThreeRef.current) return;
    if (!complemntaryImageFourRef.current) return;
    if (!horizontalContainerRef.current) return;
    if (!horizontalWrapperRef.current) return;

    const nav = navRef.current;
    const primaryImage = primaryImageRef.current;
    const pin = pinRef.current;
    const names = namesRef.current;
    const complemntaryImageOne = complemntaryImageOneRef.current;
    const complemntaryImageTwo = complemntaryImageTwoRef.current;
    const complemntaryImageThree = complemntaryImageThreeRef.current;
    const complemntaryImageFour = complemntaryImageFourRef.current;
    const horizontalContainer = horizontalContainerRef.current;
    const horizontalWrapper = horizontalWrapperRef.current;

    gsap.set(nav, {
      color: "rgba(255, 255, 255, 0.7)",
      backgroundColor: "transparent",
      boxShadow: "none",
      backdropFilter: "blur(0px)",
      webkitBackdropFilter: "blur(0px)",
    });

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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pin,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    tl.from(
      primaryImage,
      {
        width: "85%",
        top: "3rem",
        ease: "power2.out",
      },
      "<",
    );

    tl.from(
      [
        complemntaryImageOne,
        complemntaryImageTwo,
        complemntaryImageThree,
        complemntaryImageFour,
      ],
      {
        x: (i: number) => [-250, -100, 250, 100][i],
        y: (i: number) => [-350, 200, -350, 200][i],
        scale: 0.7,
        opacity: 0,
        rotation: (i: number) => [-4, -2, 4, 2][i],
        duration: 0.5,
        ease: "power3.out",
        stagger: { each: 0.1, from: "random" },
      },
      "<0.1",
    );

    gsap.to(horizontalWrapper, {
      xPercent: -75,
      ease: "none",
      scrollTrigger: {
        trigger: horizontalContainer,
        start: "top top",
        end: "+=600vh",
        scrub: 3,
        pin: true,
      },
    });
  });

  return (
    <section className="bg-zinc-100 min-h-screen relative">
      <Hero
        pinRef={pinRef as React.RefObject<HTMLDivElement>}
        primaryImageRef={primaryImageRef as React.RefObject<HTMLDivElement>}
        namesRef={namesRef as React.RefObject<HTMLHeadingElement>}
        complemntaryImageOneRef={
          complemntaryImageOneRef as React.RefObject<HTMLDivElement>
        }
        complemntaryImageTwoRef={
          complemntaryImageTwoRef as React.RefObject<HTMLDivElement>
        }
        complemntaryImageThreeRef={
          complemntaryImageThreeRef as React.RefObject<HTMLDivElement>
        }
        complemntaryImageFourRef={
          complemntaryImageFourRef as React.RefObject<HTMLDivElement>
        }
      />

      <Navbar
        navRef={navRef as React.RefObject<HTMLElement>}
        navigation={navigationData}
      />

      <HorizontalContainer
        horizontalContainerRef={horizontalContainerRef as React.RefObject<HTMLDivElement>}
        horizontalWrapperRef={horizontalWrapperRef as React.RefObject<HTMLDivElement>}
      />
    </section>
  );
};

export default Landing;
