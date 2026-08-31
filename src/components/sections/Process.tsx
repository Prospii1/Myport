"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="03" label="How It Works" />

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-4">
          {process.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative border-t border-cyan/40 pt-6"
            >
              <span className="mono-label text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl text-white md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
