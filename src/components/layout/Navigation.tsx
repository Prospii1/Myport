"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[999] flex justify-center transition-all duration-500",
          scrolled ? "pt-3" : "pt-6"
        )}
      >
        <nav
          className={cn(
            "flex w-[min(1180px,92vw)] items-center justify-between rounded-full border border-white/10 px-5 py-3 transition-all duration-500",
            scrolled
              ? "bg-black/70 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,252,0.06)]"
              : "bg-transparent border-transparent"
          )}
        >
          <Link href="/" data-cursor="HOME" className="shrink-0">
            <Logo className="text-sm md:text-base" />
          </Link>

          <ul className="hidden items-center gap-6 lg:gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="mono-label text-white/70 transition-colors hover:text-cyan"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton
              as="a"
              href="/#contact"
              cursorLabel="OPEN →"
              className="rounded-full border border-cyan/50 px-5 py-2 mono-label text-cyan hover:bg-cyan hover:text-black"
            >
              Start a Project
            </MagneticButton>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span
              className={cn(
                "h-px w-6 bg-white transition-transform",
                menuOpen && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-white transition-transform",
                menuOpen && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[998] flex flex-col items-center justify-center gap-8 bg-black lg:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-3xl text-white hover:text-cyan"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mono-label mt-4 rounded-full border border-cyan px-6 py-3 text-cyan"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
