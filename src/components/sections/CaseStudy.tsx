"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectVisual from "@/components/ui/ProjectVisual";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionLabel from "@/components/ui/SectionLabel";
import { Project } from "@/types";

export default function CaseStudy({
  project,
  next,
}: {
  project: Project;
  next?: Project;
}) {
  const cs = project.caseStudy;

  return (
    <article>
      {/* 01 — Overview / hero */}
      <section className="relative flex min-h-[80vh] flex-col justify-end overflow-hidden px-6 pb-20 pt-40 md:px-12">
        <div className="absolute inset-0 opacity-60">
          <ProjectVisual slug={project.slug} className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        <div className="relative z-10">
          <Link
            href="/#work"
            className="mono-label mb-8 inline-flex items-center gap-2 text-muted hover:text-cyan"
          >
            ← Back to Work
          </Link>
          <h1 className="font-display text-[10vw] font-medium leading-[0.95] text-white md:text-[5.5vw]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{project.tagline}</p>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            <Meta label="Year" value={project.year} />
            <Meta label="Type" value={project.type} />
            {project.industry && <Meta label="Industry" value={project.industry} />}
            {project.client && <Meta label="Client" value={project.client} />}
          </div>
        </div>
      </section>

      {!project.hasVerifiedCaseStudy && (
        <div className="border-y border-cyan/20 bg-cyan/5 px-6 py-4 text-center md:px-12">
          <p className="mono-label text-cyan/80">
            Case study details below are placeholders pending final write-up.
          </p>
        </div>
      )}

      <div className="mx-auto max-w-4xl px-6 py-24 md:px-12">
        <CaseSection index="02" label="The Challenge" text={cs.challenge} />
        <CaseSection index="03" label="The Objective" text={cs.objective} />
        <CaseSection index="04" label="My Role" text={cs.role} />
        <CaseSection index="05" label="The Solution" text={cs.solution} />

        {cs.features && cs.features.length > 0 && (
          <section className="mb-24">
            <SectionLabel index="06" label="Key Features" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {cs.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 border border-line p-5 text-white/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-24">
          <SectionLabel index="07" label="Technology" />
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-4 py-2 text-sm text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {cs.process && cs.process.length > 0 && (
          <section className="mb-24">
            <SectionLabel index="08" label="Process" />
            <div className="grid gap-6 sm:grid-cols-4">
              {cs.process.map((step, i) => (
                <div key={step} className="border-t border-cyan/40 pt-4">
                  <span className="mono-label text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {cs.results && cs.results.length > 0 && (
          <section className="mb-24">
            <SectionLabel index="09" label="Results" />
            <ul className="space-y-3">
              {cs.results.map((r) => (
                <li key={r} className="text-lg text-white/80">
                  {r}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(project.liveUrl || project.demoUrl) && (
          <section className="mb-24 flex flex-wrap gap-4">
            {project.liveUrl && (
              <MagneticButton
                as="a"
                href={project.liveUrl}
                cursorLabel="OPEN →"
                className="rounded-full bg-cyan px-7 py-3.5 mono-label text-black hover:opacity-90"
              >
                View Live Site
              </MagneticButton>
            )}
            {project.demoUrl && (
              <MagneticButton
                as="a"
                href={project.demoUrl}
                cursorLabel="OPEN →"
                className="rounded-full border border-white/20 px-7 py-3.5 mono-label text-white hover:border-cyan hover:text-cyan"
              >
                View Demo
              </MagneticButton>
            )}
          </section>
        )}
      </div>

      {next && (
        <Link
          href={`/work/${next.slug}`}
          data-cursor="NEXT →"
          className="group relative flex min-h-[50vh] flex-col items-center justify-center gap-4 border-t border-line px-6 text-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40">
            <ProjectVisual slug={next.slug} className="h-full w-full" />
          </div>
          <div className="relative z-10">
            <span className="mono-label text-muted">Next Project</span>
            <motion.h2 className="mt-4 font-display text-[8vw] font-medium text-white transition-colors group-hover:text-cyan md:text-[4.5vw]">
              {next.title}
            </motion.h2>
          </div>
        </Link>
      )}
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mono-label text-muted">{label}</p>
      <p className="mt-1 text-white">{value}</p>
    </div>
  );
}

function CaseSection({
  index,
  label,
  text,
}: {
  index: string;
  label: string;
  text?: string;
}) {
  if (!text) return null;
  return (
    <section className="mb-24">
      <SectionLabel index={index} label={label} />
      <p className="max-w-2xl text-lg leading-relaxed text-white/80">{text}</p>
    </section>
  );
}
