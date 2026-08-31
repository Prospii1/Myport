import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the build root explicitly. Without this, Next.js/Turbopack infers
  // the root by walking up for a lockfile and can pick up an unrelated one
  // in a parent directory (e.g. on a dev machine where the repo isn't at a
  // drive root) — harmless there, but pinning it keeps local dev and
  // Vercel's build resolving the same root deterministically.
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
