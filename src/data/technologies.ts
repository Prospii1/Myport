export interface TechGroup {
  category: string;
  items: string[];
}

// Grouped for the interactive capabilities visualization — not a logo wall.
export const technologies: TechGroup[] = [
  {
    category: "No-Code / Product",
    items: ["Bubble.io", "Airtable", "Notion"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "Webhooks"],
  },
  {
    category: "AI & Automation",
    items: ["OpenAI", "Claude", "AI Agents", "n8n", "Make.com", "Zapier"],
  },
  {
    category: "Infrastructure & Payments",
    items: ["Supabase", "Stripe", "Paystack"],
  },
];
