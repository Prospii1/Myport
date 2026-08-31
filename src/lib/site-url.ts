// Resolves the canonical site URL for metadata, sitemap and robots.
//
// Priority:
// 1. NEXT_PUBLIC_SITE_URL: set this in Vercel once a real/custom domain is
//    attached, so previews and production both report the right URL.
// 2. VERCEL_PROJECT_PRODUCTION_URL: Vercel's own production domain,
//    auto-injected on every deployment (no config needed).
// 3. VERCEL_URL: the current deployment's URL (covers preview deploys).
// 4. Hardcoded fallback: used only for local dev / builds outside Vercel.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const prodUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prodUrl) return `https://${prodUrl}`;

  const previewUrl = process.env.VERCEL_URL;
  if (previewUrl) return `https://${previewUrl}`;

  return "https://evimero.com";
}

export const siteUrl = resolveSiteUrl();
