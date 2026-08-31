"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionLabel from "@/components/ui/SectionLabel";

const projectTypes = [
  "AI / Automation System",
  "Web Application",
  "No-Code / Bubble Build",
  "Business Process Automation",
  "Other",
];

const budgetRanges = ["< $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+"];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.email || !data.message) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email directly.");
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionLabel index="07" label="Contact" />
        <h2 className="font-display text-[10vw] font-medium leading-[0.95] text-white md:text-[4.6vw]">
          Let&rsquo;s Build Something Impossible.
        </h2>
        <p className="mt-6 max-w-lg text-lg text-muted">
          Have a product, process or idea that needs to become reality?
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 border border-cyan/30 bg-cyan/5 p-10"
            >
              <p className="mono-label text-cyan">Transmission Received.</p>
              <p className="mt-3 max-w-md text-white/80">
                Your project brief is now in the system. I&rsquo;ll be in touch soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="mt-16 space-y-8"
              exit={{ opacity: 0 }}
            >
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Timeline" name="timeline" />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <SelectField label="Project Type" name="projectType" options={projectTypes} />
                <SelectField label="Budget Range" name="budget" options={budgetRanges} />
              </div>

              <div>
                <label className="mono-label mb-3 block text-muted">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border-b border-line bg-transparent py-3 text-white outline-none transition-colors focus:border-cyan"
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <MagneticButton
                as="button"
                type="submit"
                cursorLabel="SEND →"
                className="rounded-full bg-cyan px-8 py-4 mono-label text-black hover:opacity-90 disabled:opacity-50"
              >
                {status === "submitting" ? "Sending…" : "Start a Project →"}
              </MagneticButton>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mono-label mb-3 block text-muted">
        {label} {required && "*"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-line bg-transparent py-3 text-white outline-none transition-colors focus:border-cyan"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mono-label mb-3 block text-muted">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full border-b border-line bg-transparent py-3 text-white outline-none transition-colors focus:border-cyan"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-black">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
