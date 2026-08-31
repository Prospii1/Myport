import { Service } from "@/types";

// Mirrors the future `services` table.
export const services: Service[] = [
  {
    id: "ai-systems",
    title: "AI Systems",
    description:
      "AI agents, assistants and intelligent workflows that can understand information, make decisions and take action.",
    capabilities: ["AI Agents", "LLMs", "OpenAI", "Claude"],
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Connect your tools, eliminate repetitive work and create workflows that run without constant human intervention.",
    capabilities: ["n8n", "Make", "Zapier", "APIs", "Webhooks"],
  },
  {
    id: "digital-products",
    title: "Digital Products",
    description:
      "Turn an idea into a functional product, from MVP to production-ready business platform, with an interface that's intuitive and built to convert.",
    capabilities: ["Bubble", "React", "Next.js", "Supabase"],
  },
  {
    id: "business-systems",
    title: "Business Systems",
    description:
      "CRM platforms, internal tools, management systems and custom applications built around the way your business actually operates.",
    capabilities: ["FastAPI / Python", "PostgreSQL", "Stripe / Paystack", "API Design"],
  },
];
