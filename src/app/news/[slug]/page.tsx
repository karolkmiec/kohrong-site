import { notFound } from "next/navigation";
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
      <article className="card">
        <h1>{item.title}</h1>
        <p>{item.body}</p>
        <p>
          <strong>Event date:</strong> {item.eventDate}
        </p>
        <p>
          <strong>Tags:</strong> {item.tags.join(", ")}
        </p>
      </article>
    </main>
  );
}
