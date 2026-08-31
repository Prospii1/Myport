"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04" label="Capabilities" />
        <h2 className="font-display text-[7vw] font-medium leading-[1.05] text-white md:text-[3vw]">
          The Stack Is Just The Tool.
        </h2>
        <p className="mt-4 max-w-lg text-lg text-muted">
          The right technology depends on the problem.
        </p>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {technologies.map((group, gi) => (
            <div key={group.category}>
              <h3 className="mono-label mb-5 text-muted">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (gi * group.items.length + i) * 0.03 }}
                    className="rounded-full border border-line px-4 py-2 text-sm text-white/80 transition-colors hover:border-cyan hover:text-cyan"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
