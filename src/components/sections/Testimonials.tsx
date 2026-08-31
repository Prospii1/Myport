import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";

// Hides entirely when there are no real testimonials — never fabricate content.
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionLabel label="What Clients Say" />
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.id} className="border border-line p-8">
              <p className="text-lg leading-relaxed text-white/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div>
                  <p className="text-white">{t.name}</p>
                  <p className="mono-label text-muted">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
