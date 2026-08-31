"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  children,
  className,
  cursorLabel,
  href,
  onClick,
  as = "button",
  type,
}: {
  children: ReactNode;
  className?: string;
  cursorLabel?: string;
  href?: string;
  onClick?: () => void;
  as?: "button" | "a";
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.35, y: relY * 0.35 });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const Comp = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
      data-cursor={cursorLabel}
    >
      <Comp
        href={href}
        onClick={onClick}
        type={as === "button" ? type ?? "button" : undefined}
        className={cn(
          "inline-flex items-center justify-center transition-colors",
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
