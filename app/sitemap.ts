import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Brazilian site sitemap — root URL only. lastModified omitted to avoid false freshness. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.canonicalDomain}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
