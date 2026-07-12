import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Brazilian site sitemap — root URL only in BR-1. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.canonicalDomain}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
