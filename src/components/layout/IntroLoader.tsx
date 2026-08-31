"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroLoader({
  onDone,
}: {
  onDone: () => void;
}) {
  const [prefersReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) {
      onDone();
      return;
    }

    const start = performance.now();
    const duration = 1400;
    let raf = 0;

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.floor(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHide(true);
          setTimeout(onDone, 600);
        }, 250);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0.6, 1], scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-8 font-display text-2xl tracking-[0.3em] text-cyan text-glow md:text-3xl"
          >
            EVIMERO
          </motion.div>
          <div className="h-px w-48 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mono-label mt-3 text-muted">
            {String(progress).padStart(2, "0")}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
