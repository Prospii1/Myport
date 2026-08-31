import { Testimonial } from "@/types";

// Mirrors the future `testimonials` table. Intentionally empty — never
// fabricate testimonials. The TestimonialsSection component hides itself
// entirely when this array is empty and appears automatically once real
// entries are added here (or, later, in the CMS).
export const testimonials: Testimonial[] = [];
