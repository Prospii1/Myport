// Shared content types. These shapes mirror the eventual Supabase schema
// (projects, project_images, project_tags, services, experience,
// testimonials, metrics, site_settings, social_links) so the data layer in
// /src/data can be swapped for live DB queries later without touching
// components.

export type ProjectCategory =
  | "AI & Automation"
  | "Web Application"
  | "No-Code / Bubble"
  | "CRM & Business Systems"
  | "Automation & Integration";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  challenge?: string;
  objective?: string;
  role?: string;
  solution?: string;
  features?: string[];
  process?: string[];
  results?: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  industry?: string;
  client?: string;
  type: ProjectCategory;
  technologies: string[];
  thumbnail: string;
  coverImage: string;
  gallery?: ProjectImage[];
  liveUrl?: string;
  demoUrl?: string;
  featured: boolean;
  published: boolean;
  order: number;
  caseStudy: CaseStudy;
  hasVerifiedCaseStudy: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
}

export interface ExperienceItem {
  id: string;
  date: string;
  title: string;
  organization?: string;
  description: string;
  type: "experience" | "certification" | "milestone" | "product";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  photo?: string;
  quote: string;
  project?: string;
  rating?: number;
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  verified: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  handle?: string;
}

export interface SiteSettings {
  ownerName: string;
  brandName: string;
  ownerTitle: string;
  availableForWork: boolean;
  availabilityNote: string;
  email: string;
  heroHeadline: string[];
  heroSupporting: string;
  positioningLabel: string;
  positioningStatement: string;
  positioningBody: string;
  philosophyStatement: string[];
  philosophyBody: string;
  contactStatement: string[];
  contactBody: string;
  introVideoId?: string;
}
