import Link from "next/link";
import { newsItems, siteContent } from "@/lib/content";

export default function HomePage() {
  const latestNews = [...newsItems]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Golden Sun Villa",
    areaServed: "Koh Rong, Cambodia",
    url: "https://kohrong.co",
    telephone: siteContent.contact.whatsapp
  };

  return (
    <main className="container grid" style={{ gap: 20 }}>
      <section className="hero">
        <h1>{siteContent.hero.title}</h1>
        <p>{siteContent.hero.subtitle}</p>
      </section>

      <section className="grid grid-2">
        <article className="card">
          <h2>About Koh Rong</h2>
          <p>{siteContent.aboutIsland}</p>
        </article>
        <article className="card">
          <h2>Golden Sun Villa</h2>
          <p>{siteContent.aboutVilla}</p>
          <p>
            Contact: <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          </p>
        </article>
      </section>

      <section className="card">
        <h2>Latest News & Events</h2>
        <div className="grid">
          {latestNews.map((item) => (
            <article key={item.slug}>
              <h3>
                <Link href={`/news/${item.slug}`}>{item.title}</Link>
              </h3>
              <p>{item.excerpt}</p>
              <small>Event date: {item.eventDate}</small>
            </article>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
