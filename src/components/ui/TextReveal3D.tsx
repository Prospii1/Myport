"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered 3D text reveal, built natively on GSAP + ScrollTrigger
 * (no external component registry / paid dependency). Splits `text` into
 * words, sets a perspective on the wrapper, and animates each word in from
 * a rotated, receded position as the element scrolls into view. Falls back
 * to a plain static render when the user prefers reduced motion.
 */
export default function TextReveal3D({
  text,
  as: Tag = "h2",
  className,
  wordClassName,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  wordClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const wordEls = container.querySelectorAll<HTMLElement>("[data-word]");

    if (prefersReduced) {
      gsap.set(wordEls, { opacity: 1, rotateX: 0, y: 0, z: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(wordEls, {
        opacity: 0,
        rotateX: -70,
        y: 60,
        z: -120,
        transformOrigin: "50% 100%",
      });

      gsap.to(wordEls, {
        opacity: 1,
        rotateX: 0,
        y: 0,
        z: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(className)}
      style={{ perspective: "1000px" }}
    >
      <Tag className="flex flex-wrap gap-x-[0.28em]">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            data-word
            className={cn("inline-block will-change-transform", wordClassName)}
            style={{ transformStyle: "preserve-3d" }}
          >
            {word}
          </span>
        ))}
      </Tag>
    </div>
  );
}
