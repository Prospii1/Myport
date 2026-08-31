export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

// Mirrors a future `process_steps` table (site_settings-adjacent).
export const process: ProcessStep[] = [
  {
    id: "discover",
    title: "Discover",
    description:
      "We map the actual workflow — where leads, data or manual work is getting stuck — before any tool gets chosen.",
  },
  {
    id: "plan",
    title: "Plan",
    description:
      "A clear system architecture: what gets automated, what gets built, and which tools connect where.",
  },
  {
    id: "build",
    title: "Build",
    description:
      "The product, agent or workflow gets built in fast, testable pieces — no black-box handoffs.",
  },
  {
    id: "deliver",
    title: "Deliver",
    description:
      "Shipped, documented and handed over running — with room to extend it as the business grows.",
  },
];
