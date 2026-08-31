import { Testimonial } from "@/types";

// Mirrors the future `testimonials` table. Real client reviews only, never
// fabricate testimonials. The TestimonialsSection component hides itself
// entirely when this array is empty and appears automatically once real
// entries are added here (or, later, in the CMS). Names shown are the
// client's freelance-platform username, as given, with no invented full
// names, roles or companies.
export const testimonials: Testimonial[] = [
  {
    id: "charlesnoah082",
    name: "charlesnoah082",
    location: "United Kingdom",
    quote:
      "Super happy with the work on our Bubble.io project! Evimero was easy to talk to, really understood what I needed, and stayed on top of everything. They delivered right on time, and the quality of the work was spot on. I'd definitely work with Evimero again, great experience all around!",
    rating: 5,
    date: "1 year ago",
  },
  {
    id: "benjaminjarck-1",
    name: "benjaminjarck",
    location: "Cyprus",
    quote:
      "Working with Evimero was a dream come true for my FAQ page project! From our initial conversation, I knew I was working with a true professional, someone who not only knows Bubble.io but is also passionate about providing greatness. Evimero transformed my vision into a sleek, functional, and user-friendly FAQ page in quick time. What impressed me the most was their lightning-fast delivery while maintaining high quality. They foresaw demands that I hadn't considered, ensuring that every detail was excellent. Aside from their technical prowess, Evimero is a pleasure to work with, responsive, patient, and full of innovative solutions. Their communication was clear, and they made the entire process simple and pleasurable. If you require a Bubble.io expert who delivers quickly, flawlessly, and above and beyond expectations, Evimero is your go-to freelancer. I will definitely hire them again for future projects! Thank you, Evimero; you are just the best. Highly, highly recommended!",
    rating: 5,
    date: "11 months ago",
  },
  {
    id: "benjaminjarck-2",
    name: "benjaminjarck",
    location: "Cyprus",
    quote:
      "I'm back for a second review because Evimero has once again delivered an absolutely exceptional experience. His skills are simply unmatched! Beyond the lightning-fast delivery and flawless execution I've come to expect, Evimero demonstrated a level of professionalism that is truly rare. While working on my project, he proactively noticed an issue in a pre-existing workflow that I had completely overlooked. He not only brought it to my attention but fixed it seamlessly, saving me countless hours of future troubleshooting and ensuring the entire system runs perfectly. This isn't just about technical skill; it's about being a true partner in the project. Evimero doesn't just complete the task; he genuinely invests in the success of your entire application. His keen eye for detail and proactive problem-solving make him an invaluable asset. If you're looking for a freelancer who doesn't just follow instructions but goes the extra mile to make your project better than you ever imagined, Evimero is the only choice.",
    rating: 5,
    date: "11 months ago",
  },
  {
    id: "sammy_proj",
    name: "sammy_proj",
    location: "United States",
    quote:
      "Great experience working with Evimero. Fast delivery, high-quality work, and very professional. Highly recommended!",
    rating: 5,
    date: "6 months ago",
  },
  {
    id: "kateemelda",
    name: "kateemelda",
    location: "United States",
    quote:
      "I had an excellent experience working with Evimero. He transformed my initial idea into a fully functional, high-performing page that exceeded my expectations. His professionalism, attention to detail, and timely delivery truly stood out. I look forward to collaborating with him again on future projects.",
    rating: 5,
    date: "6 months ago",
  },
];
