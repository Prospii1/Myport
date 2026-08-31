import RevealText from "@/components/ui/RevealText";
import TextReveal3D from "@/components/ui/TextReveal3D";
import { siteSettings } from "@/data/settings";

export default function Positioning() {
  return (
    <section id="positioning" className="relative px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-5xl">
        <TextReveal3D
          as="h2"
          text={siteSettings.positioningStatement}
          className="font-display text-[9vw] font-medium leading-[1.05] tracking-tight text-white md:text-[4.2vw]"
        />
        <RevealText delay={0.15} className="mt-10 max-w-2xl md:mt-14">
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            {siteSettings.positioningBody}
          </p>
        </RevealText>
      </div>
    </section>
  );
}
