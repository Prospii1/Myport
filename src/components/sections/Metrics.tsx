"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/data/metrics";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.floor(t * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const hasUnverified = metrics.some((m) => !m.verified);

  return (
    <section className="relative border-y border-line px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {metrics.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-display text-5xl text-cyan md:text-6xl">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <p className="mono-label mt-3 text-muted">{m.label}</p>
            </motion.div>
          ))}
        </div>
        {hasUnverified && (
          <p className="mono-label mt-10 text-white/25">
            * Figures pending final verification
          </p>
        )}
      </div>
    </section>
  );
}
