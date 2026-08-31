import { MetadataRoute } from "next";
import { getPublishedProjects } from "@/data/projects";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = getPublishedProjects().map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: siteUrl, lastModified: new Date() },
    ...projectRoutes,
  ];
}
