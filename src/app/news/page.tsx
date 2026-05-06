import Link from "next/link";
import { newsItems } from "@/lib/content";

export default function NewsListPage() {
  const items = [...newsItems].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return (
    <main className="container grid">
      <section className="card">
        <span className="kicker">Koh Rong Updates</span>
        <h1>News & Events</h1>
        <p>Latest island events, beach activities, and Golden Sun Villa announcements.</p>
        <div className="news-list">
          {items.map((item) => (
            <article key={item.slug} className="news-card">
              <h2>
                <Link href={`/news/${item.slug}`}>{item.title}</Link>
              </h2>
              <p>{item.excerpt}</p>
              <div className="news-meta">
                <span>Event date: {item.eventDate}</span>
                <span>{item.tags.join(" · ")}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="card">
        <h2>Planning your stay?</h2>
        <p>Contact our team for villa availability, island transfers, and concierge recommendations.</p>
        <p>
          <a href="mailto:bookings@kohrong.co">bookings@kohrong.co</a>
        </p>
      </section>
    </main>
  );
}
