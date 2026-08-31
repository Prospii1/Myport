"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/data/services";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" label="What I Build" />

        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
          <ul>
            {services.map((s, i) => (
              <li
                key={s.id}
                onMouseEnter={() => setActive(i)}
                className="group cursor-default border-b border-line py-6 first:border-t"
                data-cursor="VIEW"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className={`font-display text-2xl transition-colors duration-300 md:text-3xl ${
                      active === i ? "text-cyan" : "text-white"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <span className="mono-label text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: active === i ? "auto" : 0,
                    opacity: active === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 max-w-md text-muted">{s.description}</p>
                </motion.div>
              </li>
            ))}
          </ul>

          <div className="relative hidden md:block">
            <div className="sticky top-32 flex min-h-[420px] flex-col justify-between overflow-hidden border border-line bg-black-near p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 select-none font-display text-[220px] font-medium leading-none text-white/[0.03]"
                aria-hidden="true"
              >
                {String(active + 1).padStart(2, "0")}
              </div>

              <motion.div
                key={services[active].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <span className="mono-label text-cyan">Capabilities</span>
                <ul className="mt-6 space-y-4">
                  {services[active].capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 text-lg text-white/80"
                    >
                      <span className="h-px w-6 bg-cyan" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="relative z-10 mt-8 border-t border-line pt-6">
                <p className="mono-label text-muted">
                  {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
