import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display font-medium tracking-[0.15em] text-white",
        className
      )}
    >
      EVIME<span className="text-cyan">R</span>O
    </span>
  );
}
