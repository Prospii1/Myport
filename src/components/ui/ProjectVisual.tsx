"use client";

// Abstract, generated visual used in place of real project photography.
// Deterministic per-slug so the same project always renders the same
// pattern. Swap for a real image (thumbnail/coverImage) via the CMS later.

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h << 5) - h + slug.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function ProjectVisual({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const h = hashSlug(slug);
  const rot = (h % 30) - 15;
  const offsetX = (h % 40) - 20;
  const offsetY = ((h >> 3) % 40) - 20;
  const ringCount = 5 + (h % 4);
  const barCount = 6 + (h % 5);
  const seedA = (h % 97) / 97;
  const seedB = ((h >> 5) % 97) / 97;

  return (
    <div
      className={`relative overflow-hidden bg-black-near ${className}`}
      aria-hidden="true"
    >
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,252,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,252,0.09) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* radial glow anchor */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${30 + seedA * 40}% ${30 + seedB * 40}%, rgba(0,255,252,0.16), transparent 55%)`,
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* concentric rotated rings */}
        <g
          transform={`translate(${200 + offsetX} ${150 + offsetY}) rotate(${rot})`}
          fill="none"
          stroke="#00fffc"
          strokeWidth="0.9"
        >
          {Array.from({ length: ringCount }).map((_, i) => {
            const inset = i * (90 / ringCount);
            return (
              <rect
                key={i}
                x={-140 + inset}
                y={-100 + inset * 0.75}
                width={280 - inset * 2}
                height={200 - inset * 1.5}
                opacity={0.55 - i * 0.06}
              />
            );
          })}
        </g>

        {/* data bars along the bottom */}
        <g transform="translate(24 240)">
          {Array.from({ length: barCount }).map((_, i) => {
            const bh = 8 + ((h >> i) % 40);
            return (
              <rect
                key={i}
                x={i * 14}
                y={40 - bh}
                width={7}
                height={bh}
                fill="#00fffc"
                opacity={0.15 + (i % 3) * 0.12}
              />
            );
          })}
        </g>

        {/* nodes */}
        <circle cx={200 + offsetX * -1} cy={150 + offsetY} r="3" fill="#00fffc" />
        <circle
          cx={90 + seedA * 60}
          cy={60 + seedB * 40}
          r="2"
          fill="#00fffc"
          opacity="0.7"
        />
        <circle
          cx={320 - seedB * 50}
          cy={220 - seedA * 30}
          r="2"
          fill="#00fffc"
          opacity="0.5"
        />
        <line
          x1={90 + seedA * 60}
          y1={60 + seedB * 40}
          x2={200 + offsetX * -1}
          y2={150 + offsetY}
          stroke="#00fffc"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1={200 + offsetX * -1}
          y1={150 + offsetY}
          x2={320 - seedB * 50}
          y2={220 - seedA * 30}
          stroke="#00fffc"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]" />
    </div>
  );
}
