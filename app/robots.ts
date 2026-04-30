import type { MetadataRoute } from "next";
import { portfolio } from "@/lib/portfolio-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolio.owner.siteUrl}/sitemap.xml`,
  };
}
