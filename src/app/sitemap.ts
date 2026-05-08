import type { MetadataRoute } from "next";
import { newsItems } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kohrong.co";
  const newsRoutes = newsItems.map((item) => ({
    url: `${baseUrl}/news/${item.slug}`,
    lastModified: item.createdAt
  }));
  const staticRoutes = [
    "",
    "/villa",
    "/gallery",
    "/gallery/koh-rong-first-look",
    "/gallery/beaches-of-koh-rong",
    "/gallery/sunset-spots",
    "/gallery/daily-life",
    "/gallery/underwater",
    "/book",
    "/contact",
    "/news"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString()
  }));

  return [
    ...staticRoutes,
    ...newsRoutes
  ];
}
