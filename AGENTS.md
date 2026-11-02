# World AI Show | Healthcare and Life Sciences | Dubai 2027

> **Start here:** read `HANDOFF.md` in full before changing or deploying anything. This file = standing conventions; `HANDOFF.md` = what is true right now.

## Project

- **Event Title:** World AI Show | Healthcare and Life Sciences | Dubai 2027
- **Date & Venue:** 25 March 2027 · Dubai, UAE · 1-Day Executive Decision Forum (Day 2 of the March Dubai Cluster)
- **Live URL:** https://worldaishow.com/dubai/healthcare/
- **Stack:** Next.js 16 static export (`output: "export"`, `basePath: "/dubai/healthcare"`, `trailingSlash: true`), React 19, Tailwind 4.

## Build & deploy

- Build/dev: `npm ci`, `npm run dev` (dev server serves under `/dubai/healthcare`), `npm run build` -> `out/`.
- Specification Reference: `brand/WAIS_Dubai_Healthcare_Specification.html`

## Conventions and gotchas

- `basePath` is `/dubai/healthcare`: every internal link/asset must start with `/dubai/healthcare/`.
- Official vector lockup SVGs (`viewBox="0 0 422.09 170.0"` with `DUBAI` pill and `HEALTHCARE AND LIFE SCIENCES` subtitle) live at `public/logos/wais-27-healthcare_header.svg` and `public/logos/wais-27-healthcare_footer.svg`.
- HubSpot Portal ID: `2953901` (`region: "na1"`).
- UK English is enforced throughout (`programme`, `personalised`, `organisation`, `maximise`, `analyse`, `standardised`, `modernisation`, `optimisation`, `centre`) with `"Organised by Trescon"`.
- Never display sponsorship pricing on the public website.
