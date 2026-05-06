# Automation playbook

## Goal
Turn your message like "dodaj aktualność o nowym koncercie" into a published post on `kohrong.co` safely.

## Safe workflow
1. You send event details in chat.
2. AI generates draft payload (title, excerpt, body, date, tags).
3. Validation runs through `scripts/publish-news.mjs` (format + required fields).
4. You confirm with `zatwierdz`.
5. Post is committed to repo and pushed to `main`.
6. Vercel deploy runs automatically.

## Revalidation webhook (CMS mode)
- Endpoint: `POST /api/revalidate`
- Header: `Authorization: Bearer <REVALIDATE_TOKEN>`
- Trigger from Sanity "publish" event.

## Full-auto mode (optional later)
After 2-4 weeks of stable quality:
- allow auto-approve for low-risk categories
- keep manual approval for pricing, legal, and availability updates

## Weekly content rhythm
- Monday: event roundup
- Wednesday: island guide tip
- Friday: villa spotlight or guest story

## Prompt template for fast publishing
Use this command in chat:
"Dodaj aktualność:
Tytuł: ...
Data wydarzenia: YYYY-MM-DD
Opis: ...
Tagi: ..."
