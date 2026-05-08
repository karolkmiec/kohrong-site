# Cursor AI Prompt — kohrong.co Full Build

Copy everything between the `---` markers below and paste it into Cursor as your first message in the project.

Make sure `kohrong-co-implementation-brief.md` is added to the project (e.g. in `/docs/`) before sending.

---

You are rebuilding **kohrong.co** — a private villa rental website for Golden Sun Villa on Koh Rong island, Cambodia, plus a content section showcasing the island.

## First, read the full brief

Open and read `/docs/kohrong-co-implementation-brief.md` end-to-end before writing any code. It contains:
- Site architecture (6 pages)
- 4-phase implementation plan
- All marketing copy (hero, descriptions, FAQ, meta tags, JSON-LD) — ready to paste verbatim
- Design references and visual direction

## Build everything in one sprint

I want all phases (1, 2, 3, 4) implemented in this single build — not phased over weeks. Prioritize **visual polish and conversion quality** from day one. This site needs to look like a real luxury villa rental, not an MVP.

## Tech stack

- Next.js (App Router) — already in use, keep it
- Tailwind CSS
- shadcn/ui for components (FAQ accordion, dialogs, forms)
- `next/image` for all images, WebP, lazy load
- Markdown-based content for `/news` posts (existing pattern — keep it)
- Formspree for the booking form MVP (or a simple Next.js API route → email to bookings@kohrong.co)

**Constraints:**
- English only. No i18n, no language switcher.
- Currency USD everywhere prices appear.
- **Do NOT add a pricing section.** The villa is not finished. Use "Pricing available on request" as a placeholder on `/villa`.

## Design vibe — copy from these 5 references

Review these before coding. Take screenshots of sections that match the vibe we want:

1. **https://www.bambuindah.com** — owner-led, warm, personal copywriting voice. This is the tone.
2. **https://nihi.com** — cinematic photography, "experiences" alongside accommodation.
3. **https://soneva.com** — full-bleed gallery treatment, "stories" structure.
4. **https://www.aman.com/resorts/amankila** — page structure, restraint, typography hierarchy.
5. **https://thebrando.com** — emotional positioning of "private island in paradise."

**The recipe:** Bambu Indah's copy voice + Aman's structural restraint + Soneva's gallery treatment + The Brando's emotional positioning + Nihi's cinematic photography.

**Common patterns across all 5 (apply to kohrong.co):**
- Massive full-bleed photography, never cramped thumbnails
- Generous whitespace
- Serif headlines (often italicized) + clean sans-serif body
- Sticky single CTA in header ("Check Availability")
- No hero carousels — one strong image per section
- No badges, no "as seen in" clutter
- Footer minimal — contact + a few links, nothing more

## Pages to build (all of them)

- `/` — landing page (hero, villa teaser, mini-gallery, social proof placeholder, latest news)
- `/villa` — full villa page following the structure in the brief
- `/gallery` — overview page linking to photo collections
- `/gallery/koh-rong-first-look` — placeholder gallery page for 20 personal photos I'll upload next (build the page structure now, leave a placeholder grid)
- `/news` — already exists, improve meta tags and JSON-LD
- `/news/[slug]` — individual post pages
- `/book` — inquiry form (name, email, dates, guests, message → email to me)
- `/contact` — contact info, transfers, general questions

## Marketing copy

Use **all** the ready-to-use English copy from the brief verbatim. Don't paraphrase, don't rewrite. Where the brief has `[BRACKETED_PLACEHOLDERS]` (e.g. `[X] bedrooms`, `[BEACH_NAME]`), keep them as visible placeholders — I'll fill them in once the villa is finished. Just make them obvious in the rendered output, e.g. `[X] Bedrooms` shown as `__ Bedrooms` or similar.

## Photos

- Existing villa photos are in `/public/images/villa/` — re-use them. Add proper descriptive alt text per the brief's gallery section.
- **I will upload 20 personal photos from my Koh Rong trip** for `/gallery/koh-rong-first-look`. For now, build the page structure with placeholder image slots. Once I drop the photos into `/public/images/gallery/koh-rong-first-look/`, you'll add them with captions.
- Generate **one Open Graph image** (1200×630): use one of the villa photos as background, dark overlay, white text "Golden Sun Villa · Koh Rong" in serif. Save as `/public/og-image.jpg`. Use as default `og:image` site-wide.

## Technical must-haves (don't skip)

- Unique `<title>` and `<meta description>` per page using Next.js `generateMetadata()` — exact text from the brief
- `app/sitemap.ts` (dynamic, includes all news posts and gallery pages)
- `app/robots.ts`
- JSON-LD structured data: `LodgingBusiness` on `/villa`, `Event` on each news post
- Favicon set generated from realfavicongenerator.net (or matching set)
- Schema markup, semantic HTML, accessible color contrast
- Mobile-first responsive layout
- Sticky header CTA: **"Check Availability"** → `/book`
- Telegram link demoted to secondary contact ("Quick questions? Telegram us")

## Code quality

- Use TypeScript
- Components in `/components`, pages in `/app`
- Tailwind config: define a small custom palette inspired by Koh Rong (sand, ocean, sunset). Don't use harsh contrasts.
- One serif + one sans-serif font (e.g. via `next/font/google`). Suggested: Cormorant Garamond or Playfair Display for headlines, Inter for body.
- All images optimized — WebP, max 200KB each, multiple `sizes`

## How to work

- **Don't ask me questions during the build.** Make sensible defaults based on the references and brief.
- Document every notable design decision (color choices, fonts, layout calls) in a `/CHANGES.md` file at the repo root, so I can review after the first deploy.
- When you're done with the full build, give me a checklist of what's ready and what needs my input (photos, exact villa specs, Telegram handle, etc.).
- Deploy-ready output: it should run with `pnpm dev` and deploy to Vercel without manual fixes.

Build it like it's launching tomorrow. No "TODO" comments, no half-done sections, no Lorem Ipsum. Real copy from the brief, real images from `/public`, real layouts inspired by the 5 reference sites.

Go.

---
