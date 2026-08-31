"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";

// Hides entirely when there are no real testimonials. Never fabricate content.
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel label="What Clients Say" />

        <div className="grid gap-6 md:grid-cols-2 md:[grid-auto-flow:dense]">
          {testimonials.map((t, i) => {
            const isLong = t.quote.length > 400;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                className={`flex flex-col border border-line p-8 ${
                  isLong ? "md:col-span-2" : ""
                }`}
              >
                {t.rating && (
                  <div className="mb-4 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <svg
                        key={si}
                        viewBox="0 0 20 20"
                        className="h-4 w-4 fill-cyan"
                        aria-hidden="true"
                      >
                        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
                      </svg>
                    ))}
                  </div>
                )}

                <p
                  className={`leading-relaxed text-white/90 ${
                    isLong ? "text-base md:text-lg md:columns-2 md:gap-8" : "text-lg"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-between pt-2">
                  <div>
                    <p className="text-white">{t.name}</p>
                    {(t.role || t.company || t.location) && (
                      <p className="mono-label text-muted">
                        {[t.role, t.company, t.location].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  {t.date && (
                    <p className="mono-label shrink-0 text-white/30">{t.date}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
