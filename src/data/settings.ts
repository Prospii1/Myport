import { SiteSettings, SocialLink } from "@/types";

// Mirrors the future `site_settings` table. Edit here for now; the admin
// CMS will write to this same shape later.
export const siteSettings: SiteSettings = {
  ownerName: "Prosper Ojiaku",
  brandName: "EVIMERO",
  ownerTitle: "AI & Automation Engineer / Digital Product Builder",
  availableForWork: true,
  availabilityNote: "Available for select projects",
  email: "enwerechristian1@gmail.com",
  heroHeadline: ["I TURN BUSINESS PROBLEMS", "INTO DIGITAL SYSTEMS."],
  heroSupporting:
    "From AI agents and automated workflows to complete business platforms, I design and build systems that make complex operations simpler.",
  positioningLabel: "How I Think / 01",
  positioningStatement: "SOFTWARE ISN'T THE GOAL. THE OUTCOME IS.",
  positioningBody:
    "A beautiful interface means nothing if the process behind it is broken. I work at the intersection of business, automation, AI and product development: understanding what needs to happen, then building the system that makes it happen. From intelligent AI agents and automated workflows to complete digital products, I turn complicated processes into systems people can actually use.",
  philosophyStatement: ["DON'T AUTOMATE", "A BAD PROCESS."],
  philosophyBody:
    "First understand the process. Then find the bottleneck. Then design the system. Then automate what should be automated.",
  contactStatement: ["WHAT SHOULD WE", "BUILD NEXT?"],
  contactBody:
    "Have a business problem, an idea, or a process that needs a better system?",
};

// Mirrors the future `social_links` table.
export const socialLinks: SocialLink[] = [
  { label: "Email", url: "mailto:enwerechristian1@gmail.com" },
  // Add LinkedIn / X / GitHub / Bubble profile here when ready.
];
