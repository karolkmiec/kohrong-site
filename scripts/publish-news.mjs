import fs from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(10),
  excerpt: z.string().min(20),
  body: z.string().min(40),
  eventDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  tags: z.array(z.string()).min(1)
});

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function main() {
  const payloadRaw = process.argv[2];
  if (!payloadRaw) {
    throw new Error(
      "Usage: npm run publish:news -- '{\"title\":\"...\",\"excerpt\":\"...\",\"body\":\"...\",\"eventDate\":\"YYYY-MM-DD\",\"tags\":[\"...\"]}'"
    );
  }

  const parsed = schema.parse(JSON.parse(payloadRaw));
  const filePath = path.join(process.cwd(), "data", "news.json");
  const existing = JSON.parse(await fs.readFile(filePath, "utf8"));

  const item = {
    slug: slugify(parsed.title),
    ...parsed,
    createdAt: new Date().toISOString().slice(0, 10)
  };

  const updated = [item, ...existing];
  await fs.writeFile(filePath, `${JSON.stringify(updated, null, 2)}\n`, "utf8");
  console.log(`Added news item: ${item.slug}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
