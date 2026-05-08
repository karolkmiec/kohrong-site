# Golden Sun Villa — Website Implementation Brief

**Domain:** kohrong.co
**Stack:** Next.js (existing)
**Hosting:** Vercel (recommended)
**Language:** English only
**Currency:** USD
**Primary goal:** Convert visitors into Golden Sun Villa rental bookings
**Secondary goal:** Build authority and organic traffic via Koh Rong photo stories and local news

---

## Instructions for Cursor AI

This document is a complete implementation brief. Please read it fully before starting.

- Implement phases in order (Phase 1 → 2 → 3 → 4). Each phase has its own goal and deliverables.
- All copy in section "Marketing Copy" is ready to use — copy verbatim into the components, only replace `[BRACKETED_PLACEHOLDERS]` with actual villa data once provided.
- Site is English only. Do NOT add i18n or language switchers.
- All prices/currency in USD.
- Do not add a pricing section yet — villa is not finished. Reserve the spot in the design but leave a placeholder ("Pricing available on request").
- Use Tailwind CSS + shadcn/ui for components.
- Use Next.js App Router conventions (`app/` directory, `generateMetadata()`, `app/sitemap.ts`, `app/robots.ts`).

---

## Site Architecture

```
/                  → Landing page (hero, CTA, mini-gallery, social proof, latest news)
/villa             → Villa detail page (hero, at-a-glance, description, gallery, map, FAQ, CTA)
/gallery           → Photo stories from Koh Rong (collections: beaches, sunsets, daily life, underwater)
/news              → Events and island news (already exists — keep as-is, improve meta tags)
/news/[slug]       → Individual news/event posts
/book              → Booking form + availability calendar
/contact           → Contact, transfers, general questions
```

**Conversion flow:** Landing sells the villa → `/villa` closes the decision → `/gallery` and `/news` build emotion and SEO → `/book` converts.

---

## Phase 1 — Conversion (priority, 3–5 days)

**Goal:** A visitor landing tonight should be able to make a booking decision and inquire.

### 1.1 Build dedicated `/villa` page with sections in this order:

1. **Hero** — full-width villa photo + headline + subheadline + primary CTA
2. **At a glance** — icon row: bedrooms, bathrooms, max guests, pool, Wi-Fi, A/C, distance to beach
3. **Full description** — 2–3 storytelling paragraphs (see Marketing Copy)
4. **Gallery** — full-width photos with captions (master bedroom, pool deck, kitchen, sea view, etc.)
5. **Location** — embedded Google Map + travel context (which beach, walking distance to Kerfuffle/Koh Touch, boat time from Sihanoukville pier)
6. **FAQ** — accordion with 12–15 questions (see Marketing Copy)
7. **CTA box** — "Check availability" → `/book`

### 1.2 Update primary CTA across the site
- Change "Book via Telegram" → **"Check availability"** (links to `/book`)
- Keep Telegram as secondary contact: "Quick questions? Message us on Telegram"

### 1.3 Pricing section (placeholder only)
- Reserve a section on `/villa` titled "Rates"
- Content for now: *"Final rates will be published once the villa is fully completed. Contact us for current availability and a personalized quote."*
- Currency for all future pricing: **USD**, with note "Discounts available for stays of 7+ nights"

### 1.4 Map and geographic context
- Embed Google Maps iframe centered on villa location (use placeholder coordinates until provided)
- Add bullet list: which beach, walking distance to landmarks, boat time from mainland pier

### 1.5 Gallery with descriptive alt text and captions
- Every image must have meaningful `alt` and a visible caption
- Replace generic filenames in alt text. Format: `"[Subject] at Golden Sun Villa, Koh Rong"`
- Examples:
  - alt: "Master bedroom with king bed and ocean view at Golden Sun Villa, Koh Rong"
  - alt: "Private pool deck at sunset, Golden Sun Villa, Koh Rong"
  - alt: "Open-plan kitchen and dining area, Golden Sun Villa, Koh Rong"

---

## Phase 2 — SEO and technical foundation (2–3 days)

**Goal:** Get Google sending traffic and make every shared link look professional in social/messaging apps.

### 2.1 Unique meta tags per page
- Use Next.js `generateMetadata()` in each route
- Every page needs unique `<title>` and `<meta description>`
- News post titles must include the event name + "Koh Rong [Month] [Year]"

### 2.2 Open Graph image
- Generate one branded 1200×630 OG image: villa photo + text overlay "Golden Sun Villa · Koh Rong"
- Set as default `og:image` site-wide
- Optionally: per-page OG images for `/villa` and major posts

### 2.3 Favicon and app icons
- Use [realfavicongenerator.net](https://realfavicongenerator.net) to generate full set
- Include `favicon.ico`, `apple-touch-icon.png`, `manifest.json`

### 2.4 sitemap.xml and robots.txt
- Implement `app/sitemap.ts` (dynamic, includes all news posts)
- Implement `app/robots.ts`
- After deployment, submit sitemap to Google Search Console

### 2.5 Structured data (Schema.org JSON-LD)
- `/villa`: `LodgingBusiness` schema with name, address, geo coordinates, image, amenityFeature
- `/news/[slug]`: `Event` schema with name, startDate, location, description
- Landing: `Organization` or `LocalBusiness` schema

### 2.6 Analytics
- Recommended: **Plausible** (~$9/mo, GDPR-friendly, lightweight)
- Free alternative: self-hosted **Umami**
- Skip Google Analytics unless required

---

## Phase 3 — Bookings and trust (1–2 weeks)

**Goal:** Automate inquiries, build credibility, list externally for reach.

### 3.1 Booking form (`/book`)
- Fields: name, email, arrival date, departure date, number of guests, optional message
- MVP: Formspree or custom Next.js API route → email forwarded to `bookings@kohrong.co`
- Production: integrate **Lodgify**, **Hospitable**, or **Smoobu** (~$20+/mo) — includes calendar, channel sync with Airbnb/Booking, automated confirmations

### 3.2 Availability calendar
- Even a simple read-only calendar showing booked weeks builds trust
- Channel manager (Smoobu/Lodgify) handles this automatically once integrated

### 3.3 Testimonials / reviews
- Collect 5–10 quotes from past guests (name + country)
- Display on `/villa` and landing page
- If listed on Airbnb/Booking: show external rating + link

### 3.4 External listings
- List the villa on **Booking.com** and **Airbnb**
- Use them as reach + social proof channels
- Direct-booking incentive on the website: "Book direct and save 10% (no platform fees)"

### 3.5 Payment options (document in FAQ)
- Deposit: 30% to confirm booking
- Methods: PayPal, Wise transfer, bank transfer, cash USD on arrival
- Cancellation policy: clearly stated

---

## Phase 4 — Content and storytelling (ongoing)

**Goal:** Turn the site into the go-to resource for Koh Rong travelers — driving organic traffic that converts to villa bookings.

### 4.1 `/gallery` — Photo stories from the island
Themed collections, each on its own URL with own SEO:

- `/gallery/beaches-of-koh-rong`
- `/gallery/sunset-spots`
- `/gallery/daily-life`
- `/gallery/underwater` (snorkeling / diving)
- `/gallery/long-set-beach-diary`

Each collection = standalone page with intro paragraph + 10–30 photos + captions.

#### 4.1.1 First gallery to launch — Owner's Koh Rong trip (20 photos)

The site owner has **20 personal photos from a Koh Rong trip** ready to upload. This is the first gallery to build — it kicks off the `/gallery` section and gives the site immediate authentic content showing "what Koh Rong actually looks like."

**Implementation:**

- Create route: `/gallery/koh-rong-first-look` (or similar — confirm with owner)
- Route metadata:
  - **Title:** `Koh Rong First Look — 20 Photos from the Island`
  - **Description:** `A personal photo story from Koh Rong, Cambodia — beaches, sunsets, and daily life captured by the owner of Golden Sun Villa.`
- Page structure:
  1. **Intro paragraph** (1–2 sentences, personal voice) — see suggested copy below
  2. **Photo grid** — 20 images, full-width responsive masonry layout, lazy-loaded
  3. **Each photo** has a caption (location/moment) and meaningful alt text
  4. **End CTA** — "Want to see it yourself? → [Stay at Golden Sun Villa](/villa)"
- Image handling:
  - Owner uploads originals to `/public/images/gallery/koh-rong-first-look/`
  - Convert all to WebP, max 200KB each, multiple resolutions via `next/image`
  - Filename convention: `01-long-set-beach-sunset.webp`, `02-koh-touch-pier.webp`, etc. (describe content, not just numbers)
- SEO:
  - Add this page to the sitemap
  - Include in landing page "Latest from the island" section (small grid linking to it)

**Suggested intro copy (placeholder — owner can rewrite in own voice):**

> Twenty photos from a recent trip across Koh Rong — the beaches we kept coming back to, the sunsets, and the small moments that don't make it into travel brochures. No filters, no staging. This is what the island actually looks like.

**Note for owner:** when uploading the 20 photos, also send a short note about each one (where it was taken, what's happening) so the captions are real and personal — not generic. This is what makes the gallery worth visiting. Even one sentence per photo is enough.

### 4.2 Blog — personal posts (not generic guides)
Examples:
- "Why I chose Koh Rong over Koh Phangan"
- "A typical day at Golden Sun Villa"
- "What to pack for Koh Rong (from someone living here)"
- "Best snorkeling spots reachable from Golden Sun Villa"
- "How to get to Koh Rong without stress: full transport guide"

Personal voice = authenticity = trust = bookings.

### 4.3 YouTube + Instagram embeds
- Embed YouTube videos from the existing channel (island content)
- Optional: Instagram feed widget on landing or `/gallery`

### 4.4 Newsletter — "Koh Rong Monthly"
- One email per month: photos, upcoming events, villa availability
- Use **MailerLite** or **Buttondown** (free tier up to 1,000 subscribers)
- Signup form embedded in footer + `/gallery` + `/news`

---

## Tech Stack & Tooling Recommendations

| Area | Recommendation |
|---|---|
| Framework | Next.js (App Router) — already in use |
| UI components | shadcn/ui + Tailwind CSS |
| Content (news/blog) | `next-mdx-remote` or Contentlayer (Markdown files) |
| Images | `next/image` + WebP, max 200KB per image, optimize before commit |
| Image hosting (gallery) | Cloudinary or Bunny CDN (when image library grows) |
| Hosting | Vercel (free tier sufficient initially) |
| Forms | Formspree (MVP) → Smoobu/Lodgify/Hospitable (production) |
| Analytics | Plausible or self-hosted Umami |
| Newsletter | MailerLite or Buttondown |

---

## Implementation Order — Week 1 Sprint

1. **Day 1–2:** Phase 1.1 + 1.2 (build `/villa` page, update CTA)
2. **Day 3–4:** Phase 1.4 + 1.5 (map, gallery captions) + Phase 2.2–2.3 (OG image, favicon)
3. **Day 5:** Phase 2.1 + 2.4 + 2.5 (meta tags, sitemap, JSON-LD)
4. **Week 2:** Phase 3.1 (booking form) + Phase 4.1.1 (first photo gallery — owner has 20 ready-to-upload photos from Koh Rong, this is the first gallery to launch)

---

# Marketing Copy — Ready to Use (English)

> All copy below is final — paste directly into components. Only replace `[BRACKETED_VALUES]` with actual data once available.

---

## Hero Section (`/villa` page)

**Headline (primary option):**
> Wake up to the ocean. Stay at Golden Sun Villa.

**Headline (alternatives):**
> Your private island retreat on Koh Rong.
>
> Golden Sun Villa — Koh Rong's quiet luxury, steps from the sand.

**Subheadline:**
> A private villa for up to [MAX_GUESTS] guests, just minutes from [BEACH_NAME]. Beach lifestyle, island events, and concierge support — all from one trusted base on Koh Rong.

**Primary CTA button:** `Check availability`
**Secondary CTA:** `Message us on Telegram`

---

## Hero Section (Landing page `/`)

**Headline:**
> Discover Koh Rong. Stay at Golden Sun Villa.

**Subheadline:**
> Your trusted guide to the island — beaches, events, and a private villa to come home to.

**Primary CTA:** `See the villa`
**Secondary CTA:** `Read island news`

---

## "At a Glance" Icon Row (`/villa`)

Use icons + short labels. Recommended layout: 6–7 items in a row (responsive grid).

| Icon | Label |
|---|---|
| 🛏️ | [X] Bedrooms |
| 🚿 | [X] Bathrooms |
| 👥 | Sleeps [X] |
| 🏊 | Private Pool |
| 📶 | Fast Wi-Fi |
| ❄️ | Air Conditioning |
| 🏖️ | [X] min to Beach |
| 🍳 | Full Kitchen |

> Note for developer: use Lucide icons (`lucide-react`) instead of emoji for production. Suggested icons: `BedDouble`, `Bath`, `Users`, `Waves`, `Wifi`, `Snowflake`, `Palmtree`, `ChefHat`.

---

## About the Villa — Description (`/villa`)

**Section heading:** A private base on Koh Rong

**Body:**

> Golden Sun Villa was built for the kind of travel that doesn't fit into a hotel room. A private home, just a few minutes from the water, designed for families and small groups who want space, comfort, and the freedom to set their own rhythm on the island.
>
> Days here start slow — coffee on the deck, the sound of waves, no schedule to keep. The villa offers [X] bedrooms, [X] bathrooms, an open-plan living and kitchen area, and a private pool surrounded by tropical greenery. Everything is finished with the things you actually need: strong air conditioning, fast Wi-Fi, hot water, a fully equipped kitchen, and outdoor space designed for long evenings.
>
> What makes Golden Sun Villa different is the support that comes with it. We live on the island. We'll arrange your transfers from the mainland, point you to the beaches worth visiting, book a snorkeling boat for you, recommend where to eat, and handle anything you need during your stay. You get the privacy of a villa with the convenience of a hotel — without the crowd.

---

## Location Section (`/villa`)

**Section heading:** Where you'll be

**Body:**

> Golden Sun Villa is located on [BEACH_NAME / VILLAGE_NAME], on the [west / east / north] side of Koh Rong. The villa sits [X] minutes' walk from the beach and [X] minutes from [LANDMARK — e.g., Kerfuffle Bay / Koh Touch pier / Long Set Beach].
>
> **Getting here:**
> - From Sihanoukville: [X]-minute boat from Serendipity / Koh Rong pier
> - From Phnom Penh: 4-hour bus to Sihanoukville + ferry
> - From Siem Reap: domestic flight to Sihanoukville + ferry
>
> Pier-to-villa transfer can be arranged on request.

> Embed Google Maps iframe below this text.

---

## CTA Box (`/villa` — bottom of page)

**Heading:** Ready to plan your stay?

**Body:**
> Send us your dates and we'll come back with availability and a quote within 24 hours. No booking platform fees — direct contact, direct rates.

**Primary CTA:** `Check availability`
**Secondary CTA:** `Email bookings@kohrong.co`
**Tertiary CTA:** `Telegram: @[handle]`

---

## FAQ Section (`/villa` — accordion, 14 questions)

### 1. Where exactly is Golden Sun Villa located?
The villa is on [BEACH/VILLAGE] on Koh Rong island, Cambodia. It's a [X]-minute walk to the beach and [X] minutes to [NEAREST_LANDMARK]. Full directions and a map are provided after booking.

### 2. How many guests can stay at the villa?
The villa comfortably sleeps up to [MAX_GUESTS] across [X] bedrooms. We can accommodate families, groups of friends, or small private events. Get in touch if your group is larger — we may be able to help.

### 3. How do I get to Koh Rong?
Most guests fly into Sihanoukville (Cambodia) or take a 4-hour bus from Phnom Penh, then board a 45–60 minute ferry from Serendipity Pier to Koh Rong. We can arrange the ferry tickets and pier-to-villa transfer in advance.

### 4. Do you offer airport or pier transfers?
Yes. We arrange transfers from Sihanoukville airport, the bus station, or the pier directly to the villa. Let us know your arrival details and we'll handle the logistics.

### 5. What's included in the stay?
Every stay includes: full villa exclusive use, Wi-Fi, air conditioning in all bedrooms, fully equipped kitchen, daily housekeeping, fresh linens and towels, and concierge support throughout your stay.

### 6. Is breakfast or food included?
Food is not included by default — the villa has a full kitchen so you can self-cater, and there are restaurants and cafes nearby. On request, we can arrange a private chef, grocery delivery, or a welcome breakfast for your first morning.

### 7. Is the villa suitable for families with children?
Yes. The villa is family-friendly. We can provide [extra beds / cots / high chairs] on request — just let us know your children's ages when you book.

### 8. Are pets allowed?
We don't currently host pets. Please contact us if this is essential for your stay and we'll see what we can do.

### 9. What's the check-in and check-out time?
Standard check-in is from 14:00 and check-out is by 11:00. Earlier check-in or later check-out can usually be arranged depending on availability — just ask.

### 10. Is there a minimum stay?
We typically ask for a 3-night minimum. During peak season (December–February) the minimum may be longer. Stays of 7+ nights receive a discount.

### 11. How do I pay and what's the deposit?
A 30% deposit confirms your booking. The remaining balance is due 14 days before arrival. We accept PayPal, Wise transfer, bank transfer, and cash USD on arrival. All prices are quoted in USD.

### 12. What's the cancellation policy?
- Cancellation 30+ days before arrival: full refund minus a small admin fee
- Cancellation 14–29 days before arrival: 50% refund
- Cancellation under 14 days: non-refundable
- We strongly recommend travel insurance for all guests.

### 13. Is the water and electricity reliable?
Yes. The villa runs on a stable electricity supply with backup, and water is filtered. All bathrooms have hot water. Wi-Fi is among the fastest available on the island.

### 14. What should I pack?
Light clothing, swimwear, reef-safe sunscreen, a hat, mosquito repellent, and any prescription medications you may need. Most basics are available on the island, but selection is limited and prices are higher than on the mainland.

---

## Footer Copy

**Tagline:**
> Golden Sun Villa — your private base on Koh Rong. Beach lifestyle, island events, and concierge support, all from one trusted home on the island.

**Contact block:**
- Email: bookings@kohrong.co
- Telegram: +855 69 910 740
- Location: Koh Rong, Cambodia

**Footer links:**
- The Villa → `/villa`
- Photo Stories → `/gallery`
- News & Events → `/news`
- Book Your Stay → `/book`
- Contact → `/contact`

---

## Meta Tags (per page)

### Landing `/`
- **Title:** `Golden Sun Villa — Private Villa Rental on Koh Rong, Cambodia`
- **Description:** `A private villa retreat on Koh Rong island. Beach lifestyle, island events, and concierge support. Book direct with the owner.`

### `/villa`
- **Title:** `The Villa — Golden Sun Villa, Koh Rong`
- **Description:** `Private villa on Koh Rong sleeping up to [X] guests. Pool, Wi-Fi, A/C, full kitchen, minutes from the beach. Direct booking.`

### `/gallery`
- **Title:** `Koh Rong Photo Stories — Beaches, Sunsets, Daily Life`
- **Description:** `A growing collection of photos from Koh Rong island — beaches, sunsets, underwater life, and everyday moments. Captured on the island.`

### `/news`
- **Title:** `Koh Rong News & Events — Parties, Happy Hours, Island Life`
- **Description:** `Upcoming events, parties, and happy hours on Koh Rong island. Updated regularly by Golden Sun Villa.`

### `/book`
- **Title:** `Check Availability — Golden Sun Villa, Koh Rong`
- **Description:** `Send us your dates and we'll respond with availability and a personalized quote within 24 hours.`

### `/contact`
- **Title:** `Contact — Golden Sun Villa, Koh Rong`
- **Description:** `Email, Telegram, and direct contact for Golden Sun Villa on Koh Rong island, Cambodia.`

---

## JSON-LD Structured Data — `/villa`

```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Golden Sun Villa",
  "description": "Private villa rental on Koh Rong island, Cambodia",
  "image": "https://kohrong.co/images/villa/villa-1.jpg",
  "url": "https://kohrong.co/villa",
  "telephone": "+85569910740",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Koh Rong",
    "addressCountry": "KH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[VILLA_LAT]",
    "longitude": "[VILLA_LNG]"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Private Pool", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Full Kitchen", "value": true }
  ]
}
```

---

## Photo Captions — Examples for Gallery

Replace placeholders with actual photo content:

- "Master bedroom with ocean view at Golden Sun Villa"
- "Private pool deck at sunset"
- "Open-plan kitchen and dining area"
- "Living room with tropical garden view"
- "Outdoor terrace and lounge area"
- "Bathroom with rainfall shower"
- "Path from villa to the beach"
- "Surrounding tropical garden"

---

## Notes for Future Phases

- **Pricing:** Section reserved on `/villa` but currently shows "Pricing available on request." Once finalized, populate with seasonal rate table (low / high / peak) in USD with note about 7+ night discount.
- **Reviews:** Once first guests stay, collect testimonials and add to `/villa` and landing page. Aim for 5+ before adding the section.
- **Channel listings:** List on Booking.com and Airbnb after villa is finished. Drive direct-booking conversion with "Book direct and save 10%" message.

---

**End of brief. Build phase 1 first, then iterate.**

---

# Design Inspiration & References

Five reference websites for the visual direction, copywriting tone, and UX patterns. **Goal:** capture the "remote tropical paradise + private villa" vibe. Cursor and the designer should review these before building Phase 1.

> Recommendation: open each in a desktop browser, scroll the full landing page, and click through to their "Stay" / "Rooms" / "Villas" pages. Take screenshots of sections that feel right for kohrong.co.

### 1. Bambu Indah — Ubud, Bali
**URL:** https://www.bambuindah.com

A boutique eco-luxury hotel in the Sayan Valley (Bali). Probably the strongest reference for our project because the tone is intimate, owner-led, and personal — not corporate.

**What to steal:**
- **Copywriting voice** — first-person, warm, slightly poetic, never corporate. Sentences like "Our rooms don't have walls" instantly communicate a unique experience. This is exactly the voice we want for Golden Sun Villa.
- **Storytelling structure** — they don't just describe the rooms, they describe the experience of arriving, walking, discovering.
- **Section "About"** — written as a personal letter from the owners. We can do the same — Golden Sun Villa is owner-led, that's a competitive advantage over Booking.com listings.
- **Earthy color palette** with one accent color used sparingly.

### 2. Nihi Sumba — Sumba Island, Indonesia
**URL:** https://nihi.com

Multi-award-winning private resort on a remote Indonesian island. *Travel + Leisure* "Best Hotel in the World" multiple times. Probably the closest geographic + thematic reference (Indonesian remote island, similar to Koh Rong's positioning).

**What to steal:**
- **Cinematic full-screen video hero** — landing opens with motion, not static photo. Worth doing once we have drone footage of Koh Rong.
- **Photography style** — natural light, no over-saturation, lifestyle shots over architectural shots. People in the photos doing things, not empty rooms.
- **"Experiences" section** — they sell activities, not just accommodation. We should do the same: snorkeling trips, sunset boat, beach hopping.
- **Minimalist navigation** — very few menu items, but each one is rich content.

### 3. Soneva — Maldives & Thailand
**URL:** https://soneva.com

Ultra-luxury island resort group. Reference for tropical luxury aesthetic and how to present multiple "stories" within one site.

**What to steal:**
- **Photo gallery treatment** — large, full-bleed, immersive. Not the cramped 3-column grid most villa sites use.
- **"Stories" section** — perfect model for our `/gallery` photo stories from Koh Rong. They organize content thematically (food, ocean, family, sustainability) rather than chronologically.
- **Booking flow** — the "Plan your stay" CTA opens a clean inquiry form, not a date picker. Good MVP reference for our `/book` page.
- **Typography** — large serif headlines + clean sans-serif body. Conveys premium without being stuffy.

### 4. Aman — Global (incl. Bali & Cambodia)
**URL:** https://www.aman.com

The benchmark for luxury hotel websites. Aman has properties in Bali (Amankila, Amandari, Amanusa) and Cambodia (Amansara in Siem Reap). Worth checking the individual resort pages.

**Specific page to study:** https://www.aman.com/resorts/amankila (Bali, beachfront)

**What to steal:**
- **Restraint** — almost no UI clutter, no popups, no "limited time offer" badges. Just photography and quiet typography. Builds trust through silence.
- **Page structure** — every resort page follows the same order: Hero → Story → Accommodations → Dining → Experiences → Location → Plan Your Stay. We can copy this exact structure for `/villa`.
- **"Plan Your Stay" CTA** — sticky, always visible, single clear action.
- **Map + location section** — beautifully minimal, often hand-drawn style maps as overlay over satellite. Could be a great touch for Koh Rong.

### 5. The Brando — Tetiaroa, French Polynesia
**URL:** https://thebrando.com

Private island resort on Marlon Brando's atoll. Probably the closest emotional reference — "private island in paradise, far from everything." This is the feeling we want kohrong.co to evoke.

**What to steal:**
- **Hero copy** — they sell *the feeling of being on a private island*, not amenities. We need to do the same for Koh Rong, which is still off the mainstream tourist map.
- **"The Island" section** — separate page dedicated to the place itself, not the hotel. We're already doing this with `/gallery` and `/news`, but we can go further: a `/koh-rong` page that's purely about the island as a destination, with the villa as a natural extension.
- **Sustainability + local community story** — they talk about the people of Tetiaroa, the marine reserve, etc. This builds depth. We can do the same with Koh Rong's local fishing community, marine life, conservation.
- **Color palette** — sand, ocean blue, soft white. No black, no harsh contrasts. This is the Koh Rong palette too.

---

## How to Use These References

**For the developer/Cursor AI:**
1. Open each site, scroll the full landing + at least one inner page (their "stay" or "villa" equivalent)
2. Pay attention to: hero composition, typography hierarchy, photo sizes, section spacing, CTA placement, map treatment, footer style
3. Implement Golden Sun Villa with **Bambu Indah's copy voice + Aman's structural restraint + Soneva's gallery treatment + The Brando's emotional positioning + Nihi's cinematic photography**

**Common patterns across all 5:**
- Massive, high-quality photography (full-bleed, never cropped to thumbnails)
- Generous whitespace
- Serif headlines (often italicized) + clean sans-serif body
- Sticky single CTA in header ("Reserve" / "Plan Your Stay" / "Check Availability")
- Footer is minimal — contact + a few links, no sitemap dump
- No hero carousels (they cycle, distract, kill conversion). Just one strong image per section.
- No badges, awards, "as seen in" logos cluttering the hero
- Mobile-first photo treatment — images load fast and look beautiful on a phone

**What NOT to copy:**
- Their pricing models (most don't show prices — we'll handle "Pricing on request" intentionally for now)
- Their booking widgets (these are enterprise systems — we use Formspree/Smoobu)
- Their multi-language switchers (English only for kohrong.co)
