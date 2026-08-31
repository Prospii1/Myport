import { Service } from "@/types";

// Mirrors the future `services` table.
export const services: Service[] = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "For businesses losing leads and hours to manual follow-up — AI agents that respond, qualify and route while you're doing anything else.",
    capabilities: ["AI Agents", "OpenAI / Claude Integration", "n8n & Make.com Workflows", "Process Automation"],
  },
  {
    id: "digital-product",
    title: "Digital Product Development",
    description:
      "For founders who need a real, working platform — not a mockup — MVPs and business tools built to launch fast and hold up under real use.",
    capabilities: ["React / Next.js", "FastAPI / Python", "Supabase / PostgreSQL", "Product Architecture"],
  },
  {
    id: "process-automation",
    title: "Business Process Automation",
    description:
      "For teams juggling five disconnected tools — every app, sheet and inbox wired into one system that runs itself.",
    capabilities: ["Webhooks & REST APIs", "CRM Automation", "Zapier / Make / n8n", "Cross-Platform Integration"],
  },
  {
    id: "no-code",
    title: "No-Code / Low-Code Development",
    description:
      "For businesses that can't wait on a dev team — production-ready products built rapidly on Bubble, without cutting corners on quality.",
    capabilities: ["Bubble.io", "Airtable", "Notion Systems", "Rapid MVP Delivery"],
  },
  {
    id: "ui-ux",
    title: "UI/UX & Digital Experiences",
    description:
      "For brands whose product works but doesn't look like it — interfaces that are intuitive, premium and built to convert.",
    capabilities: ["Interface Design", "Design Systems", "Interaction Design", "Conversion-Focused UX"],
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description:
      "For when no-code hits its ceiling — robust custom frontend and backend systems built to scale past it.",
    capabilities: ["Next.js / TypeScript", "PostgreSQL", "Stripe / Paystack", "API Design"],
  },
];
