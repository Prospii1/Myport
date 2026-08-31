"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionLabel index="06" label="Experience & Credentials" />

        <div className="relative border-l border-line pl-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,255,252,0.8)]" />
              <span className="mono-label text-cyan">{item.date}</span>
              <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">
                {item.title}
              </h3>
              {item.organization && (
                <p className="mono-label mt-1 text-muted">{item.organization}</p>
              )}
              <p className="mt-3 max-w-xl text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
