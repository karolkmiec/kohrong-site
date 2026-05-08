import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const collections: Record<string, { title: string; description: string }> = {
  "beaches-of-koh-rong": {
    title: "Beaches of Koh Rong",
    description: "A curated beach collection from around Koh Rong. Full gallery drops soon."
  },
  "sunset-spots": {
    title: "Sunset Spots",
    description: "Favorite sunset viewpoints around the island. Full gallery drops soon."
  },
  "daily-life": {
    title: "Daily Life",
    description: "Daily moments from Koh Rong life. Full gallery drops soon."
  },
  underwater: {
    title: "Underwater",
    description: "Snorkeling and diving moments around Koh Rong. Full gallery drops soon."
  }
};

type GallerySlugPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Object.keys(collections).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: GallerySlugPageProps): Metadata {
  const collection = collections[params.slug];
  if (!collection) {
    return {
      title: "Koh Rong Photo Stories",
      description: "Photo story collection from Koh Rong."
    };
  }

  return {
    title: `${collection.title} - Koh Rong Photo Stories`,
    description: collection.description
  };
}

export default function GallerySlugPage({ params }: GallerySlugPageProps) {
  const collection = collections[params.slug];
  if (!collection) notFound();

  return (
    <main className="container grid">
      <section className="card">
        <span className="kicker">Photo Stories</span>
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
        <p>
          This page structure is ready. Drop photos in the collection folder and captions will be mapped in the next
          pass.
        </p>
        <p>
          <Link href="/gallery">Back to all collections</Link>
        </p>
      </section>
    </main>
  );
}
