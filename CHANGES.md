# CHANGES

## 2026-05-08 - Full sprint implementation from brief

### Product structure decisions
- Added full conversion flow routes: `/villa`, `/gallery`, `/gallery/koh-rong-first-look`, `/book`, `/contact`.
- Kept `/news` and `/news/[slug]` and upgraded metadata + structured data.
- Added placeholder gallery subroutes for future collections:
  - `/gallery/beaches-of-koh-rong`
  - `/gallery/sunset-spots`
  - `/gallery/daily-life`
  - `/gallery/underwater`

### Visual system decisions
- Kept a warm sand + ocean palette with soft contrast to match the brief and references.
- Used serif headlines (`Cormorant Garamond` fallback stack) + sans body for premium tropical tone.
- Added sticky header with one clear conversion CTA: `Check availability`.
- Preserved restrained footer (contact + essential links), avoiding clutter.

### Conversion and content decisions
- Implemented `/villa` page in the exact narrative order from the brief:
  - Hero -> At a glance -> Description -> Gallery -> Location/map -> Rates placeholder -> FAQ -> CTA panel.
- Added rates placeholder exactly as requested ("Pricing available on request", USD note, 7+ night discount note).
- Added FAQ block with all 14 provided questions/answers.
- Added booking form on `/book` with required fields and Formspree endpoint placeholder.

### SEO/technical decisions
- Added unique page metadata for:
  - `/`
  - `/villa`
  - `/gallery`
  - `/gallery/koh-rong-first-look`
  - `/news`
  - `/book`
  - `/contact`
- Added dynamic `generateMetadata()` for `/news/[slug]` including month/year in title.
- Added `Event` JSON-LD to each news detail page.
- Added `LodgingBusiness` JSON-LD to `/villa`.
- Expanded `sitemap.ts` to include all key static pages + news entries + gallery collections.
- Updated `robots.ts` with explicit host and sitemap.

### Media decisions
- Reused existing villa photos from `/public/images/villa/` with descriptive alt text/captions.
- Built `/gallery/koh-rong-first-look` with 20 upload-ready placeholder slots so owner photos can be dropped in without layout rework.

### Deferred / owner-input items
- Real Telegram handle/link intentionally deferred until confirmed.
- Exact villa stats and geo details remain placeholders:
  - `[MAX_GUESTS]`, `[X]`, `[BEACH_NAME]`, `[VILLA_LAT]`, `[VILLA_LNG]`.
- Custom branded `og-image.jpg` (1200x630) still to be provided/exported from design asset pipeline.
