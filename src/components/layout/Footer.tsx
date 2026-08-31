import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { siteSettings, socialLinks } from "@/data/settings";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div>
            <Logo className="text-lg" />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Digital systems for businesses that need more than a website.
            </p>
            {siteSettings.availableForWork && (
              <div className="mono-label mt-6 flex items-center gap-2 text-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                {siteSettings.availabilityNote}
              </div>
            )}
          </div>

          <div className="flex gap-16">
            <div>
              <p className="mono-label mb-4 text-muted">Navigate</p>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/70 hover:text-cyan">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono-label mb-4 text-muted">Connect</p>
              <ul className="space-y-2">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a href={s.url} className="text-white/70 hover:text-cyan">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteSettings.brandName}. All rights
            reserved.
          </p>
          <p>{siteSettings.ownerName}</p>
        </div>
      </div>
    </footer>
  );
}
