import Link from "next/link";
import Image from "next/image";
import { newsItems, siteContent } from "@/lib/content";

export default function HomePage() {
  const villaImages = [
    "/images/villa/villa-1.jpg",
    "/images/villa/villa-2.jpg",
    "/images/villa/villa-3.jpg",
    "/images/villa/villa-4.jpg",
    "/images/villa/villa-5.jpg"
  ];
  const latestNews = [...newsItems]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 3);
  const telegramNumber = siteContent.contact.telegram.replace(/\D/g, "");
  const telegramHref = `https://t.me/+${telegramNumber}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Golden Sun Villa",
    areaServed: "Koh Rong, Cambodia",
    url: "https://kohrong.co",
    telephone: siteContent.contact.telegram
  };

  return (
    <main className="container grid" style={{ gap: 20 }}>
      <section className="hero">
        <span className="kicker">Koh Rong Island Escape</span>
        <h1>{siteContent.hero.title}</h1>
        <p>{siteContent.hero.subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={telegramHref} target="_blank" rel="noreferrer">
            Book via Telegram
          </a>
          <a className="btn btn-secondary" href={`mailto:${siteContent.contact.email}`}>
            Email Concierge
          </a>
        </div>
        <div className="hero-image-wrap">
          <Image
            src={villaImages[0]}
            alt="Golden Sun Villa exterior with private pool"
            width={1200}
            height={675}
            className="hero-image"
            priority
          />
        </div>
      </section>

      <section className="grid grid-2">
        <article className="card">
          <span className="kicker">Island Guide</span>
          <h2>About Koh Rong</h2>
          <p>{siteContent.aboutIsland}</p>
        </article>
        <article className="card">
          <span className="kicker">Private Stay</span>
          <h2>Golden Sun Villa</h2>
          <p>{siteContent.aboutVilla}</p>
          <p>
            Contact: <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          </p>
        </article>
      </section>

      <section className="card">
        <span className="kicker">Photo Story</span>
        <h2>Golden Sun Villa Gallery</h2>
        <div className="villa-gallery">
          {villaImages.map((src, index) => (
            <div key={src} className="villa-gallery-item">
              <Image
                src={src}
                alt={`Golden Sun Villa photo ${index + 1}`}
                width={1200}
                height={800}
                className="villa-gallery-image"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <span className="kicker">Villa Atmosphere</span>
        <h2>Golden Sun Villa Video</h2>
        <p>Take a quick look at the villa atmosphere before your trip.</p>
        <div className="villa-video-wrap">
          <iframe
            src="https://www.youtube.com/embed/E59wAALIFpg"
            title="Golden Sun Villa video tour"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className="card">
        <span className="kicker">On The Island</span>
        <h2>Latest News & Events</h2>
        <div className="news-list">
          {latestNews.map((item) => (
            <article key={item.slug} className="news-card">
              <h3>
                <Link href={`/news/${item.slug}`}>{item.title}</Link>
              </h3>
              <p>{item.excerpt}</p>
              <div className="news-meta">
                <span>Event date: {item.eventDate}</span>
                <span>{item.tags.slice(0, 2).join(" · ")}</span>
              </div>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 14 }}>
          <Link href="/news">See all news and events</Link>
        </p>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
