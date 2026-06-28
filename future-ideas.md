# Future Ideas

Things deliberately deferred so we can move faster now, with enough detail to
pick back up quickly when there's time.

## Content pages (removed for now, 2026-06-28)

`blog/[slug]`, `characters/[slug]`, and `compare/[pair]` route placeholders
were removed from `frontend/src/app/` to avoid shipping thin/empty pages
while focused on marketing the quiz itself. Each was a Next.js dynamic route
with just a generateMetadata + placeholder body — the pattern to follow is
the same one used for `aesthetics/[slug]` (now built out, see
`frontend/src/lib/aesthetics-content.ts` + `frontend/src/app/aesthetics/[slug]/page.tsx`):
a content map keyed by slug, `generateStaticParams` to pre-render every entry,
`generateMetadata` for per-page SEO, `notFound()` for unknown slugs.

- **`blog/[slug]`** — general style/aesthetic articles (e.g. "how to mix
  aesthetics without looking inconsistent", "dark academia vs light academia").
  Biggest lift of the three since it needs an actual content calendar, not
  just a fixed list of known entities like the others.
- **`characters/[slug]`** — "which character matches this aesthetic" pages
  (fictional characters mapped to one or more of the 21 aesthetics in
  `backend/app/data/aesthetics.py`). Good shareability angle — pairs well
  with fandom search traffic ("what aesthetic is [character]").
- **`compare/[pair]`** — side-by-side pages comparing two adjacent
  aesthetics (e.g. "Coquette vs. Soft Girl: what's the difference"). High
  search intent for these specific comparison queries, and easy to generate
  systematically from the 21 aesthetics already defined.

## Postgres for ML training

See the deploy plan notes — once quiz questions are finalized, add a Render
PostgreSQL instance and persist submissions to train/tune the scoring model.
Not started. (`backend/app/scoring.py`, `backend/app/routers/quiz.py` are
where persistence would hook in.)

## Google AdSense

Blocked on real traffic + a finished application. Legal/info pages are done
(see `frontend/src/app/{about,privacy-policy,terms,contact,affiliate-disclosure,data-deletion}`).
Once there's traffic, apply at google.com/adsense, then wire in the script +
ad slots with the publisher ID.

## Shareable result card

In progress / next up: a shareable image or card on the result page
(`frontend/src/components/ResultClient.tsx`) for posting to
Instagram/TikTok/Pinterest — the main planned traffic driver before AdSense
matters at all.
