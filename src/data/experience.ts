import { ExperienceItem } from "@/types";

// Mirrors the future `experience` table. Ordered newest first.
export const experience: ExperienceItem[] = [
  {
    id: "mcba",
    date: "Certification",
    title: "Million Labs Certified Bubble Associate (MCBA)",
    description: "Professional certification in Bubble.io application development.",
    type: "certification",
  },
  {
    id: "nca",
    date: "Certification",
    title: "No Code Alliance Certification",
    description: "Certified in no-code development practices and standards.",
    type: "certification",
  },
  {
    id: "bubble-training",
    date: "Training",
    title: "Bubble Professional Training",
    description: "Advanced training in Bubble.io application architecture and workflows.",
    type: "certification",
  },
];
