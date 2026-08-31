"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { getPublishedProjects } from "@/data/projects";

export default function Work() {
  const allProjects = getPublishedProjects();
  const featured = allProjects.filter((p) => p.featured);
  const rest = allProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" label="Selected Work" />
        <h2 className="font-display text-[10vw] font-medium leading-[0.95] text-white md:text-[4vw]">
          Systems I&rsquo;ve Built.
        </h2>
        <p className="mt-6 max-w-lg text-lg text-muted">
          Different problems require different systems. Here&rsquo;s a look at
          what I&rsquo;ve designed, built and automated.
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        {featured.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            data-cursor="VIEW CASE STUDY →"
            className="group grid gap-8 border-t border-line py-16 last:border-b md:grid-cols-2 md:items-center md:gap-16 md:py-24"
          >
            <div
              className={`aspect-[4/3] w-full overflow-hidden ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <motion.div
                className="h-full w-full"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectVisual
                  slug={project.slug}
                  className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>
            </div>

            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="mono-label mb-4 flex items-center gap-3 text-muted">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-8 bg-line" />
                <span>{project.year}</span>
                <span className="h-px w-8 bg-line" />
                <span>{project.type}</span>
              </div>
              <h3 className="font-display text-4xl leading-[1.05] text-white transition-colors duration-300 group-hover:text-cyan md:text-5xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-md text-lg text-muted">{project.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="mono-label rounded-full border border-line px-3 py-1.5 text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mono-label mt-8 inline-flex items-center gap-2 text-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View Case Study →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mx-auto mt-20 max-w-6xl">
          <SectionLabel label="More Work" />
          <div className="grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                data-cursor="VIEW →"
                className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-black p-6"
              >
                <div className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70">
                  <ProjectVisual slug={project.slug} className="h-full w-full" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10">
                  <span className="mono-label text-muted">{project.year}</span>
                  <h4 className="mt-1 font-display text-xl text-white transition-colors duration-300 group-hover:text-cyan md:text-2xl">
                    {project.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
