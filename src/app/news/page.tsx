import Link from "next/link";
import { newsItems } from "@/lib/content";

export default function NewsListPage() {
  const items = [...newsItems].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return (
    <main className="container">
      <section className="card">
        <h1>News & Events</h1>
        {items.map((item) => (
          <article key={item.slug} style={{ marginBottom: 16 }}>
            <h2>
              <Link href={`/news/${item.slug}`}>{item.title}</Link>
            </h2>
            <p>{item.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
