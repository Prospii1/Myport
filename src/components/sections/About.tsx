import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { siteSettings } from "@/data/settings";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="05" label="About" />

        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-line">
            {/* Elegant generative placeholder, replace via CMS profile image field. */}
            <ProjectVisual slug="evimero-founder" className="h-full w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan/50 bg-black/60">
                <span className="font-display text-2xl text-cyan">PO</span>
              </div>
              <span className="mono-label text-white/70">Portrait Pending</span>
            </div>
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
