import { Metric } from "@/types";

// Mirrors the future `metrics` table. verified:false marks numbers that are
// still placeholders pending real, confirmed figures — the UI labels these
// visibly rather than presenting them as fact. Replace values and flip
// verified:true once real numbers are confirmed.
export const metrics: Metric[] = [
  { id: "projects", label: "Projects Built", value: 16, suffix: "+", verified: false },
  { id: "automations", label: "Automations Created", value: 10, suffix: "+", verified: false },
  { id: "stack", label: "Tools & Platforms Mastered", value: 20, suffix: "+", verified: false },
  { id: "years", label: "Years Building", value: 3, suffix: "+", verified: false },
];
