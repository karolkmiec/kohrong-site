import site from "../../data/site.json";
import news from "../../data/news.json";

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  eventDate: string;
  createdAt: string;
  tags: string[];
};

export const siteContent = site;
export const newsItems = news as NewsItem[];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
