import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getNewsBySlug, newsItems } from "@/lib/content";

type NewsPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: NewsPageProps): Metadata {
  const item = getNewsBySlug(params.slug);
  if (!item) {
    return {
      title: "Koh Rong News & Events",
      description: "Island updates from Golden Sun Villa."
    };
  }

  const eventDate = new Date(item.eventDate);
  const monthYear = eventDate.toLocaleString("en-US", { month: "long", year: "numeric" });

  return {
    title: `${item.title} - Koh Rong ${monthYear}`,
    description: item.excerpt
  };
}

export default function NewsPage({ params }: NewsPageProps) {
  const item = getNewsBySlug(params.slug);
  if (!item) notFound();

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: item.title,
    startDate: item.eventDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Koh Rong, Cambodia"
    },
    description: item.body,
    organizer: {
      "@type": "Organization",
      name: "Golden Sun Villa",
      url: "https://kohrong.co"
    }
  };

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      </article>
    </main>
  );
}
