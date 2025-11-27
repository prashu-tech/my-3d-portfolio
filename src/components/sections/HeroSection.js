"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import HeroBackground3D from "@/components/3d/HeroBackground3D";

export default function HeroSection() {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: false,
      },
    });

    tl.to(titleRef.current, {
      y: -150,
      opacity: 0,
      duration: 1,
    })
    .to(subtitleRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
    }, "<0.2")
    .to(ctaRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
    }, "<0.2");

    gsap.from([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Background */}
      <HeroBackground3D />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Future</span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          A multimedia-rich portfolio experience like never before
        </p>
        
        <button
          ref={ctaRef}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-300"
        >
          Explore My Work
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
