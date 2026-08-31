"use client";

import { useState } from "react";
import IntroLoader from "@/components/layout/IntroLoader";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FounderVideo from "@/components/sections/FounderVideo";
import Positioning from "@/components/sections/Positioning";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Technologies from "@/components/sections/Technologies";
import Philosophy from "@/components/sections/Philosophy";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Metrics from "@/components/sections/Metrics";
import Contact from "@/components/sections/Contact";
import { useLenis } from "@/hooks/useLenis";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <>
      <IntroLoader onDone={() => setLoaded(true)} />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero started={loaded} />
        <FounderVideo />
        <Positioning />
        <Work />
        <Services />
        <Process />
        <Technologies />
        <Philosophy />
        <About />
        <Experience />
        <Metrics />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
