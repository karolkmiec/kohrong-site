import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsBySlug, newsItems } from "@/lib/content";

type NewsPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default function NewsPage({ params }: NewsPageProps) {
  const item = getNewsBySlug(params.slug);
  if (!item) notFound();

  return (
    <main className="container">
      <article className="card article">
        <Link className="article-back" href="/news">
          Back to all news
        </Link>
        <span className="kicker">Event Update</span>
        <h1>{item.title}</h1>
        <div className="news-meta">
          <span>Event date: {item.eventDate}</span>
          <span>Published: {item.createdAt}</span>
        </div>
        <p>{item.body}</p>
        <div className="tag-list">
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p style={{ marginTop: 18 }}>
          <a href="mailto:bookings@kohrong.co">Need help with planning your trip? Contact us.</a>
        </p>
      </article>
    </main>
  );
}
