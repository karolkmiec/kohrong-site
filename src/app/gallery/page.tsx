import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koh Rong Photo Stories - Beaches, Sunsets, Daily Life",
  description:
    "A growing collection of photos from Koh Rong island - beaches, sunsets, underwater life, and everyday moments. Captured on the island."
};

const collections = [
  {
    slug: "koh-rong-first-look",
    title: "Koh Rong First Look",
    description: "Twenty personal photos from the island - beaches, sunsets, and daily life."
  },
  {
    slug: "beaches-of-koh-rong",
    title: "Beaches of Koh Rong",
    description: "The coastlines we keep returning to, from long sandy stretches to hidden spots."
  },
  {
    slug: "sunset-spots",
    title: "Sunset Spots",
    description: "Favorite golden-hour views around the island."
  },
  {
    slug: "daily-life",
    title: "Daily Life",
    description: "What mornings, ferry arrivals, and island routines really look like."
  },
  {
    slug: "underwater",
    title: "Underwater",
    description: "Snorkeling and diving moments around Koh Rong."
  }
];

export default function GalleryPage() {
  return (
    <main className="container grid">
      <section className="card">
        <span className="kicker">Photo Stories</span>
        <h1>Koh Rong through the lens</h1>
        <p>
          This section is a growing visual archive of the island - beaches, sunsets, underwater life, and the moments
          in between.
        </p>
        <div className="gallery-collection-grid">
          {collections.map((collection) => (
            <article key={collection.slug} className="news-card">
              <h2>
                <Link href={`/gallery/${collection.slug}`}>{collection.title}</Link>
              </h2>
              <p>{collection.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
