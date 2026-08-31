"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroVisual from "./HeroVisual";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteSettings } from "@/data/settings";

const line = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const char = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function AnimatedLine({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="inline-block"
        variants={line}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: delay }}
      >
        {text.split("").map((c, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span variants={char} className="inline-block">
              {c === " " ? " " : c}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function Hero({ started }: { started: boolean }) {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-16 pt-32 md:px-12 md:pt-36">
      <div className="absolute inset-0">{started && <HeroVisual />}</div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,255,252,0.08),transparent)]" />

      {/* top meta row */}
      <div className="relative z-10 flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: started ? 1 : 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mono-label flex items-center gap-2 text-cyan"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          {siteSettings.availabilityNote}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: started ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mono-label hidden text-right text-muted md:block"
        >
          EVIMERO / 2026
          <br />
          SYSTEMS &amp; PRODUCTS
        </motion.div>
      </div>

      {/* headline anchored bottom for drama */}
      <div className="relative z-10 mt-auto">
        <h1 className="font-display text-[11vw] font-medium leading-[0.92] tracking-tight text-white sm:text-[9vw] md:text-[5.2vw] whitespace-nowrap">
          {siteSettings.heroHeadline.map((l, i) => (
            <AnimatedLine key={i} text={l} delay={started ? 0.3 + i * 0.15 : 0} />
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: started ? 1 : 0, y: started ? 0 : 12 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mono-label max-w-xl text-white/60 md:text-[13px]"
          >
            {siteSettings.heroSupporting}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: started ? 1 : 0, y: started ? 0 : 12 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#work"
              cursorLabel="EXPLORE"
              className="rounded-full bg-cyan px-7 py-3.5 mono-label text-black hover:opacity-90"
            >
              Explore My Work
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              cursorLabel="OPEN →"
              className="rounded-full border border-white/20 px-7 py-3.5 mono-label text-white hover:border-cyan hover:text-cyan"
            >
              Let&rsquo;s Work Together
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <Link
        href="#positioning"
        className="pointer-events-auto absolute bottom-8 right-6 z-10 hidden mono-label text-muted md:flex md:items-center md:gap-2 md:right-12"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="inline-block h-4 w-px bg-cyan"
        />
      </Link>
    </section>
  );
}
