import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { readdir } from "node:fs/promises";
import path from "node:path";

export const metadata: Metadata = {
  title: "Koh Rong First Look - 20 Photos from the Island",
  description:
    "A personal photo story from Koh Rong, Cambodia - beaches, sunsets, and daily life captured by the owner of Golden Sun Villa."
};

const curatedCaptions = [
  "Early morning calm before the island wakes up.",
  "Golden hour over the water at the edge of Long Set Beach.",
  "A quiet tropical corner with clear water and soft sand.",
  "Sunlight and palms framing a classic Koh Rong view.",
  "The sea turning glassy just before sunset.",
  "A relaxed beach scene that captures daily island rhythm.",
  "Warm evening light across the shoreline.",
  "A hidden angle of Koh Rong away from the crowds.",
  "Blue water, white sand, and the slow pace we came for.",
  "The kind of view that makes you stay longer than planned.",
  "Palm shadows and salty air in the middle of the day.",
  "A peaceful stretch of beach with almost no one around.",
  "Another sunset moment that feels unreal in person.",
  "Natural colors of Koh Rong with no filters needed.",
  "Small details of island life near the coast.",
  "A bright midday scene with crystal water tones.",
  "Evening atmosphere as the sky starts to soften.",
  "A postcard-like frame from a real day on the island.",
  "Calm sea conditions perfect for swimming and snorkeling.",
  "A favorite stop during our walk along the beach.",
  "Late-afternoon light and deep tropical blues.",
  "A quiet perspective that shows the island's simplicity.",
  "One more sunset frame before heading back.",
  "The final shot from our first-look photo story."
];

const curatedAlts = [
  "Morning beach atmosphere on Koh Rong island",
  "Long Set Beach during sunset on Koh Rong",
  "Tropical shoreline with clear sea on Koh Rong",
  "Palm-framed coastal view on Koh Rong island",
  "Calm sea surface near Koh Rong beach",
  "Daily island beach life scene on Koh Rong",
  "Warm sunset light over Koh Rong coast",
  "Quiet hidden beach spot on Koh Rong",
  "White sand and blue water on Koh Rong",
  "Wide scenic island beach view on Koh Rong",
  "Palm shadows over sand on Koh Rong",
  "Peaceful uncrowded beach section on Koh Rong",
  "Colorful sunset sky above Koh Rong water",
  "Natural tropical color palette on Koh Rong",
  "Coastal details from daily life on Koh Rong",
  "Midday clear water scene on Koh Rong",
  "Evening mood along Koh Rong shoreline",
  "Postcard-style tropical view from Koh Rong",
  "Snorkeling-friendly waters around Koh Rong",
  "Beach walk stop with sea view on Koh Rong",
  "Late-afternoon tropical coastline on Koh Rong",
  "Simple quiet island scenery on Koh Rong",
  "Sunset horizon from Koh Rong beach",
  "Final coastal frame from Koh Rong first look"
];

async function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery", "koh-rong-first-look");
  const files = await readdir(galleryDir);
  const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

  const imageFiles = files
    .filter((file) => allowedExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

  return imageFiles.map((fileName, index) => ({
    id: `${index + 1}`,
    src: `/images/gallery/koh-rong-first-look/${fileName}`,
    caption: curatedCaptions[index] ?? `Photo ${index + 1}: Koh Rong first look`,
    alt: curatedAlts[index] ?? `Koh Rong photo story image ${index + 1}`
  }));
}

export default async function KohRongFirstLookPage() {
  const images = await getGalleryImages();
  return (
    <main className="container grid">
      <section className="card">
        <span className="kicker">Owner Photo Story</span>
        <h1>Koh Rong First Look - 20 photos</h1>
        <p>
          Twenty photos from a recent trip across Koh Rong - the beaches we kept coming back to, the sunsets, and the
          small moments that don't make it into travel brochures. No filters, no staging. This is what the island
          actually looks like.
        </p>
      </section>

      <section className="card">
        <div className="first-look-grid">
          {images.map((item) => (
            <figure key={item.id} className="first-look-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={1200}
                height={800}
                className="villa-gallery-image"
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="card cta-panel">
        <h2>Want to see it yourself?</h2>
        <p>Stay at Golden Sun Villa and use it as your private base to explore Koh Rong.</p>
        <Link className="btn btn-primary" href="/villa">
          Stay at Golden Sun Villa
        </Link>
      </section>
    </main>
  );
}
