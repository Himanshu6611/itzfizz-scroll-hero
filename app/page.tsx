"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InteractiveNav } from "@/components/interactive-nav";
import { CarIllustration } from "@/components/car-illustration";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { AccordionApp } from "@/components/card-split-accordian";
import { ProcessTimeline } from "@/components/process-timeline";
import { TestimonialsGrid } from "@/components/testimonials-grid";
import { InteractiveContact } from "@/components/interactive-contact";
import { Sparkles, ArrowDown, Activity, ChevronRight, Layers } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const carWrapRef = useRef<HTMLDivElement>(null);
  const gridFloorRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const welcomeChars = ["W", "E", "L", "C", "O", "M", "E"];
  const itzfizzChars = ["I", "T", "Z", "F", "I", "Z", "Z"];

  useEffect(() => {
    // Isomorphic check
    if (typeof window === "undefined" || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial Load Animation Timeline
      const loadTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Eyebrow badge
      loadTimeline.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      );

      // Staggered letter reveal for letter-spaced headline
      loadTimeline.fromTo(
        ".headline-char",
        {
          opacity: 0,
          y: 45,
          scale: 0.9,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.045,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Hero subtitle
      loadTimeline.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65 },
        "-=0.5"
      );

      // Impact metrics / statistics staggered reveal
      loadTimeline.fromTo(
        ".hero-stat-card",
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "back.out(1.4)",
        },
        "-=0.4"
      );

      // Car stage entrance
      loadTimeline.fromTo(
        carWrapRef.current,
        { opacity: 0, scale: 0.88, y: 35 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power2.out" },
        "-=0.7"
      );

      // 2. Core Scroll-Based Animation (Tied strictly to scroll progress)
      // Car acceleration & 3D perspective glide
      gsap.to(carWrapRef.current, {
        x: () => (window.innerWidth < 768 ? 90 : 260),
        y: -65,
        rotationZ: -3.2,
        scale: 0.76,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // Synchronized wheel rotation tied strictly to scroll progress
      gsap.to(".wheel-spokes-front, .wheel-spokes-rear", {
        rotation: 720,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Perspective floor grid animation
      if (gridFloorRef.current) {
        gsap.to(gridFloorRef.current, {
          y: 80,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }

      // Parallax glowing background orbs
      gsap.to(".parallax-orb-1", {
        y: -140,
        x: 60,
        scale: 1.25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.6,
        },
      });

      gsap.to(".parallax-orb-2", {
        y: -90,
        x: -40,
        scale: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      // Fade out scroll indicator on scroll
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          opacity: 0,
          y: 20,
          ease: "power1.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "15% top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0d09] text-[#f5f7ee] selection:bg-[#d8fa4b] selection:text-[#0b0d09] overflow-x-hidden">
      {/* Interactive Sticky Navigation Header */}
      <InteractiveNav />

      {/* 
        ========================================================================
        1. HERO SECTION (OCCUPIES FIRST SCREEN ABOVE THE FOLD - 100svh)
        ========================================================================
      */}
      <section
        id="hero"
        ref={heroRef}
        className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden flex flex-col justify-between pt-24 pb-8 px-6 lg:px-16 isolate bg-radial-[at_75%_48%] from-[#87af1e]/15 via-transparent to-[#0b0d09]"
      >
        {/* Subtle SVG Noise Filter */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        {/* Ambient Parallax Energy Orbs */}
        <div
          className="parallax-orb-1 absolute -top-10 right-[5%] w-[420px] h-[420px] rounded-full border border-[#d8fa4b]/15 bg-radial from-[#d8fa4b]/10 to-transparent blur-2xl pointer-events-none z-0"
          aria-hidden="true"
        />
        <div
          className="parallax-orb-2 absolute top-[30%] right-[18%] w-[260px] h-[260px] rounded-full border border-[#d8fa4b]/10 pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* TOP CONTENT: Eyebrow + Letter-Spaced Headline */}
        <div className="relative z-10 max-w-6xl">
          {/* Eyebrow Studio Tag */}
          <div className="hero-eyebrow inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] text-[#d8fa4b] mb-4">
            <span className="w-6 h-[1px] bg-[#d8fa4b]" />
            <span>INDEPENDENT KINETIC STUDIO</span>
            <span className="text-[#8b9282]">— EST. 2020</span>
          </div>

          {/* Letter-Spaced Headline: W E L C O M E   I T Z F I Z Z */}
          <h1
            ref={headlineRef}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-[0.22em] sm:tracking-[0.28em] md:tracking-[0.32em] lg:tracking-[0.36em] leading-[1.05] uppercase select-none my-1"
            aria-label="WELCOME ITZFIZZ"
          >
            {/* Word: W E L C O M E */}
            <span className="inline-block whitespace-nowrap text-[#f5f7ee] mr-4 sm:mr-6">
              {welcomeChars.map((char, index) => (
                <span
                  key={`w-${index}`}
                  className="headline-char inline-block will-change-transform"
                >
                  {char}
                </span>
              ))}
            </span>

            {/* Word: I T Z F I Z Z */}
            <span className="inline-block whitespace-nowrap text-[#d8fa4b] drop-shadow-[0_0_35px_rgba(216,250,75,0.4)]">
              {itzfizzChars.map((char, index) => (
                <span
                  key={`i-${index}`}
                  className="headline-char inline-block will-change-transform"
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>

          {/* Subtitle / Positioning Statement */}
          <p className="hero-subtitle text-xs sm:text-sm md:text-base text-[#b4baa9] max-w-xl font-medium leading-relaxed mt-3">
            We turn ambitious digital ideas into fluid, unforgettable kinetic experiences. Powered by GSAP performance, Next.js architecture, and interaction design.
          </p>

          {/* Impact Metrics / Statistics (Directly below headline) */}
          <div
            ref={statsContainerRef}
            className="stats-container grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6 max-w-3xl"
          >
            {/* Stat 1 */}
            <div className="hero-stat-card rounded-xl border border-white/10 bg-[#141810]/75 backdrop-blur-md p-3.5 sm:p-4 hover:border-[#d8fa4b]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                98<span className="text-[#d8fa4b] text-base ml-0.5">%</span>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-[#8b9282] uppercase mt-1 leading-snug">
                Client Satisfaction & Retention
              </div>
            </div>

            {/* Stat 2 */}
            <div className="hero-stat-card rounded-xl border border-white/10 bg-[#141810]/75 backdrop-blur-md p-3.5 sm:p-4 hover:border-[#d8fa4b]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                250<span className="text-[#d8fa4b] text-base ml-0.5">+</span>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-[#8b9282] uppercase mt-1 leading-snug">
                Kinetic Projects Delivered
              </div>
            </div>

            {/* Stat 3 */}
            <div className="hero-stat-card rounded-xl border border-white/10 bg-[#141810]/75 backdrop-blur-md p-3.5 sm:p-4 hover:border-[#d8fa4b]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                4.9<span className="text-[#d8fa4b] text-base ml-0.5">/5</span>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-[#8b9282] uppercase mt-1 leading-snug">
                Average Partner Rating
              </div>
            </div>

            {/* Stat 4 */}
            <div className="hero-stat-card rounded-xl border border-white/10 bg-[#141810]/75 backdrop-blur-md p-3.5 sm:p-4 hover:border-[#d8fa4b]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                2.4<span className="text-[#d8fa4b] text-base ml-0.5">x</span>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-[#8b9282] uppercase mt-1 leading-snug">
                Velocity & Impact Multiplier
              </div>
            </div>
          </div>
        </div>

        {/* 
          CORE VISUAL STAGE: 3D GRID HORIZON & SCROLL-DRIVEN HYPERCAR
        */}
        <div className="car-stage-container" aria-hidden="true">
          {/* Perspective 3D Grid Floor */}
          <div ref={gridFloorRef} className="car-floor-grid" />

          {/* Glowing laser horizon line */}
          <div className="car-laser-line" />

          {/* Hypercar Visual Wrapper (Controlled smoothly by GSAP ScrollTrigger) */}
          <div
            ref={carWrapRef}
            className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[92vw] max-w-[880px] pointer-events-none will-change-transform z-10"
          >
            <CarIllustration />
          </div>
        </div>

        {/* BOTTOM HERO CONTROLS & SCROLL CUE */}
        <div className="relative z-20 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-[#8b9282]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#d8fa4b] animate-ping" />
            <span className="text-[#d8fa4b] font-bold">STATUS:</span>
            <span>EXPERIENCE READY // SCROLL-DRIVEN MOTION</span>
          </div>

          <div
            ref={scrollIndicatorRef}
            className="hidden sm:flex items-center gap-2 text-[#a8b394] hover:text-[#d8fa4b] transition-colors"
          >
            <span>SCROLL TO ENGAGE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#d8fa4b] animate-bounce" />
          </div>

          <div className="text-[11px] font-mono">
            [ 01 / 06 HERO ]
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. SELECTED WORK / SHOWCASE SECTION
        ========================================================================
      */}
      <ProjectsShowcase />

      {/* 
        ========================================================================
        3. CAPABILITIES & INTERACTIVE ACCORDION SECTION
        ========================================================================
      */}
      <section
        id="capabilities"
        className="relative py-28 px-6 lg:px-16 bg-[#0a0d08] border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8fa4b] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d8fa4b]" />
              <span>03 // CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white">
              Every detail engineered to <br />
              <span className="text-[#d8fa4b]">elevate the digital medium.</span>
            </h2>
            <p className="mt-4 text-[#8b9282] text-sm md:text-base leading-relaxed">
              Explore our technical capabilities below. From GSAP scroll kinetics to zero-overhead Next.js infrastructure.
            </p>
          </div>

          {/* Interactive Card-Split Accordion Component */}
          <AccordionApp />
        </div>
      </section>

      {/* 
        ========================================================================
        4. METHODOLOGY & KINETIC PROCESS
        ========================================================================
      */}
      <ProcessTimeline />

      {/* 
        ========================================================================
        5. CLIENT REVIEWS & INDUSTRY ACCLAIM
        ========================================================================
      */}
      <TestimonialsGrid />

      {/* 
        ========================================================================
        6. PROJECT INQUIRY & CONTACT LAUNCHER
        ========================================================================
      */}
      <InteractiveContact />
    </div>
  );
}
