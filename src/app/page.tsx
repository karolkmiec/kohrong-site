import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { newsItems, siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Golden Sun Villa - Private Villa Rental on Koh Rong, Cambodia",
  description:
    "A private villa retreat on Koh Rong island. Beach lifestyle, island events, and concierge support. Book direct with the owner."
};

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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Golden Sun Villa",
    url: "https://kohrong.co",
    sameAs: ["https://kohrong.co/news"]
  };

  return (
    <main className="container grid" style={{ gap: 20 }}>
      <section className="hero">
        <span className="kicker">Koh Rong Island Escape</span>
        <h1>Discover Koh Rong. Stay at Golden Sun Villa.</h1>
        <p>Your trusted guide to the island - beaches, events, and a private villa to come home to.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/villa">
            See the villa
          </Link>
          <Link className="btn btn-secondary" href="/news">
            Read island news
          </Link>
        </div>
        <div className="hero-image-wrap">
          <Image
            src={villaImages[0]}
            alt="Private pool deck at sunset, Golden Sun Villa, Koh Rong"
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
          <p>
            Koh Rong is known for clear waters, white sand beaches, and vibrant nightlife. Use this site to plan
            transport, discover activities, and stay updated on island events.
          </p>
        </article>
        <article className="card">
          <span className="kicker">Private Stay</span>
          <h2>Golden Sun Villa</h2>
          <p>
            Golden Sun Villa offers a private and comfortable base for families and groups. The villa includes modern
            amenities, easy beach access, and concierge-style support for your stay.
          </p>
          <p>
            Contact: <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          </p>
        </article>
      </section>

      <section className="card">
        <span className="kicker">Photo Story</span>
        <h2>Golden Sun Villa Gallery</h2>
        <div className="villa-gallery">
          {villaImages.map((src) => (
            <div key={src} className="villa-gallery-item">
              <Image
                src={src}
                alt={
                  src.includes("villa-1")
                    ? "Master bedroom with ocean view at Golden Sun Villa, Koh Rong"
                    : src.includes("villa-2")
                      ? "Private pool deck at sunset, Golden Sun Villa, Koh Rong"
                      : src.includes("villa-3")
                        ? "Open-plan kitchen and dining area, Golden Sun Villa, Koh Rong"
                        : src.includes("villa-4")
                          ? "Living room with tropical garden view at Golden Sun Villa, Koh Rong"
                          : "Outdoor terrace and lounge area at Golden Sun Villa, Koh Rong"
                }
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
        <span className="kicker">Latest From The Island</span>
        <h2>Koh Rong First Look</h2>
        <p>
          Twenty photos from a recent trip across Koh Rong - the beaches we kept coming back to, the sunsets, and the
          small moments that do not make it into travel brochures.
        </p>
        <p>
          <Link href="/gallery/koh-rong-first-look">View the first photo story</Link>
        </p>
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
