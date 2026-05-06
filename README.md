# Koh Rong Website Setup

Production-ready starter for `kohrong.co` with:
- Next.js marketing site
- News/events content model
- Vercel redirect strategy for multiple domains
- CI workflow
- Content scripts for fast publishing

## 1. Run locally
```bash
npm install
npm run dev
```

## 2. Deploy
1. Create GitHub repository and push this project.
2. Import repository into Vercel.
3. Add domains:
   - primary: `kohrong.co`
   - redirects: `kohrong24.com`, `kohrongtravel.com`, `kohrong.fun`, `kohrong.vip`
4. Set environment variables from `.env.example`.

## 3. Publish a news post quickly
```bash
npm run publish:news -- "{\"title\":\"Koh Rong Beach Concert Weekend\",\"excerpt\":\"Live music event near the main beach.\",\"body\":\"A two-night music event is taking place this weekend with local and guest DJs.\",\"eventDate\":\"2026-06-01\",\"tags\":[\"concert\",\"event\"]}"
```

Commit and push to `main`, then Vercel deploys automatically.

## 4. CMS workflow (Sanity)
- Status lifecycle: `draft -> ready_for_review -> approved -> published`
- On publish, call:
`POST /api/revalidate` with header `Authorization: Bearer <REVALIDATE_TOKEN>`

## 5. Analytics
- Add `GA_MEASUREMENT_ID` in Vercel environment variables.
- Register `kohrong.co` in Google Search Console.

## 6. Content pipeline
Generate topic ideas:
```bash
npm run content:ideas
```

Then publish selected topics through script or CMS.
