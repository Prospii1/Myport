"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "@/components/ui/RevealText";
import { siteSettings } from "@/data/settings";

// Click-to-play YouTube embed: loads only a static thumbnail until the
// visitor presses play, so no YouTube iframe/JS ships on initial page load.
// Uses youtube-nocookie.com to avoid setting tracking cookies until then.
export default function FounderVideo() {
  const [playing, setPlaying] = useState(false);
  const videoId = siteSettings.introVideoId;

  if (!videoId) return null;

  return (
    <section className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-5xl">
        <RevealText className="mono-label mb-6 text-muted">
          Meet the Founder
        </RevealText>
        <RevealText
          as="h2"
          className="font-display text-[8vw] font-medium leading-[1.02] text-white md:text-[3.6vw]"
        >
          A quick introduction, from me to you.
        </RevealText>

        <div className="relative mt-14 aspect-video w-full overflow-hidden border border-line bg-black-near">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={`${siteSettings.ownerName} introduction video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              data-cursor="PLAY"
              className="group absolute inset-0 flex items-center justify-center"
              aria-label={`Play ${siteSettings.ownerName} introduction video`}
            >
              <Image
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt=""
                fill
                sizes="(min-width: 768px) 60rem, 100vw"
                className="object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-cyan/60 bg-black/70 backdrop-blur-sm md:h-24 md:w-24"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-8 w-8 fill-cyan md:h-9 md:w-9"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
