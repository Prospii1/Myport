import SectionLabel from "@/components/ui/SectionLabel";
import TextReveal3D from "@/components/ui/TextReveal3D";
import RevealText from "@/components/ui/RevealText";
import { siteSettings } from "@/data/settings";

const steps = ["Understand", "Design", "Build", "Automate", "Optimize"];

export default function Philosophy() {
  return (
    <section className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Philosophy" />

        {siteSettings.philosophyStatement.map((line, i) => (
          <TextReveal3D
            key={i}
            as="h2"
            text={line}
            className="font-display text-[10vw] font-medium leading-[0.98] tracking-tight text-white md:text-[4.6vw]"
          />
        ))}

        <RevealText delay={0.15} className="mt-10 max-w-xl">
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            {siteSettings.philosophyBody}
          </p>
        </RevealText>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step} className="border-t border-cyan/40 pt-4">
              <span className="mono-label text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-display text-lg text-white md:text-xl">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
