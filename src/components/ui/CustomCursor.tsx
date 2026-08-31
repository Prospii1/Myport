"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-hidden");

    function move(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const target = (e.target as HTMLElement)?.closest("[data-cursor]");
        setLabel(target ? target.getAttribute("data-cursor") : null);
      });
    }

    function leave() {
      setVisible(false);
    }

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);

    return () => {
      document.documentElement.classList.remove("cursor-hidden");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-cyan/60 bg-black/70 backdrop-blur-sm"
        animate={{
          width: label ? "auto" : 10,
          height: label ? 40 : 10,
          paddingLeft: label ? 16 : 0,
          paddingRight: label ? 16 : 0,
          backgroundColor: label ? "rgba(0,0,0,0.85)" : "rgba(0,255,252,1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {label && (
          <span className="mono-label whitespace-nowrap text-cyan">{label}</span>
        )}
      </motion.div>
    </motion.div>
  );
}
