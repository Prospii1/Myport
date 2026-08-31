export interface TechGroup {
  category: string;
  items: string[];
}

// Grouped for the interactive capabilities visualization, not a logo wall.
// The framing is deliberate: the stack is presented as a set of tools
// chosen per problem, not a skills checklist.
export const technologies: TechGroup[] = [
  {
    category: "AI",
    items: ["OpenAI", "Claude", "AI Agents"],
  },
  {
    category: "Automation",
    items: ["n8n", "Make", "Zapier"],
  },
  {
    category: "Product",
    items: ["Bubble", "React", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Supabase", "PostgreSQL"],
  },
  {
    category: "Integration",
    items: ["REST APIs", "Webhooks", "CRM", "Payments"],
  },
];
