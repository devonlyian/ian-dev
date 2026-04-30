import type { MetadataRoute } from "next";
import { portfolio, projects } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = portfolio.owner.siteUrl;

  return [
    {
      url: base,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${base}/projects`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ];
}
