import type { MetadataRoute } from "next";
import { newsItems } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kohrong.co";
  const newsRoutes = newsItems.map((item) => ({
    url: `${baseUrl}/news/${item.slug}`,
    lastModified: item.createdAt
  }));

  return [
    { url: baseUrl, lastModified: new Date().toISOString() },
    ...newsRoutes
  ];
}
