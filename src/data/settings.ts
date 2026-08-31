import { SiteSettings, SocialLink } from "@/types";

// Mirrors the future `site_settings` table. Edit here for now; the admin
// CMS will write to this same shape later.
export const siteSettings: SiteSettings = {
  ownerName: "Prosper Ojiaku",
  brandName: "EVIMERO",
  availableForWork: true,
  availabilityNote: "Available for select projects",
  email: "enwerechristian1@gmail.com",
  heroHeadline: ["A LEAD GOES COLD", "WHILE YOU'RE STILL TYPING."],
  heroSupporting:
    "I build the AI agents, automations and no-code systems that answer, sort and follow up before your business ever notices the gap.",
  positioningStatement: "I DON’T JUST BUILD WEBSITES. I BUILD DIGITAL SYSTEMS.",
  positioningBody:
    "EVIMERO combines product design, automation, AI and modern no-code and full-stack development to build digital experiences and systems that solve real business problems — not just interfaces.",
};

// Mirrors the future `social_links` table.
export const socialLinks: SocialLink[] = [
  { label: "Email", url: "mailto:enwerechristian1@gmail.com" },
  // Add LinkedIn / X / GitHub / Bubble profile here when ready.
];
