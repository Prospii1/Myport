import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import { siteSettings } from "@/data/settings";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="05" label="About" />

        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-line bg-black-near">
            <Image
              src="/images/prosper-portrait.png"
              alt={`${siteSettings.ownerName}, founder of ${siteSettings.brandName}`}
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]" />
          </div>

          <div>
            <RevealText
              as="h3"
              className="font-display text-3xl leading-tight text-white md:text-4xl"
            >
              {siteSettings.ownerName} builds the systems behind serious
              digital products.
            </RevealText>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Working across no-code platforms, AI infrastructure and
                full-stack development, {siteSettings.ownerName} designs and
                ships digital products, automated workflows and AI-powered
                systems for businesses that need more than a static website:
                they need something that runs their operations.
              </p>
              <p>
                The approach starts with the business problem, not the
                technology. Whether that means a Bubble application, a
                Claude-powered agent, or an n8n workflow connecting five
                different tools, the goal is the same: build something that
                actually removes friction and moves the business forward.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Bubble Developer", "AI Engineer", "No-Code Developer", "Automation Specialist"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="mono-label rounded-full border border-line px-4 py-2 text-white/70"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
