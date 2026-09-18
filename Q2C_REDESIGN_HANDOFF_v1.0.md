# Q2C Redesign Handoff — v1.0

**Date:** 2026-09-17
**Branch:** `redesign/q2c-vNext`
**Source brief:** `Q2C_Redesign.md` v1.0
**Pre-redesign backup:** tag `pre-redesign-backup` (main @ `053b7ae`)

---

## Implemented

Rewrote the site as a multi-page static property (no framework, no build step):

- **Homepage** (`index.html`) — exploratory hero ("Building things to see what happens."), curated Dispatches with sponsor sidebar, Listen/Watch, projects teaser, PHASEONE10841 card, Time Machine teaser, social strip.
- **Articles** (`articles.html`) — full curated dispatch list, Substack subscribe CTA, sponsor sidebar.
- **Projects** (`projects.html`) — browsable experiment list rendered from `content/projects.json` with status pills (active / incubating / paused / shipped / archived).
- **Lab** (`lab.html`) — Time Machine integration slot, PHASEONE10841 status card, Finance Manager entry.
- **About** (`about.html`) — evolved identity and the ConcordiaPax relationship, lightly stated.
- **Finance Manager** (`finance_manager/`) — synthetic absurdist ledger (`noindex`).
- **Content model** — `content/site.json`, `content/dispatches.json`, `content/projects.json` power the editable parts; Pages CMS config (`.pages.yml`) rewritten to match, with a boolean `nav.phaseone.live` switch.
- **SEO/meta** — titles, descriptions, canonical URLs, Open Graph, Twitter cards, favicon, `sitemap.xml` (new), JSON-LD `WebSite` on the homepage. `robots.txt` already pointed at a sitemap that didn't exist; it does now.
- **README.md** — previously a 49 KB inline HTML relic of the "Turn Curiosity Into Coin" era (neon pink/violet, Web3-income framing). Replaced with an accurate repo README.

## Design

- Kept the authoritative brand untouched: `brand-kit/` tokens, theme CSS, logos, and imagery are reused as-is. Every page loads `cpax-q2c-theme.css`; layout CSS (`assets/css/site.css`) only consumes its tokens.
- Dark editorial-first layout: 72 rem container, 44 rem reading measure, generous spacing, restrained borders.
- **PHASEONE brand separation:** PHASEONE cards use a pink/cyan luminous gradient treatment over a violet-indigo ground — another universe bleeding in — without touching Q2C's bronze/gold shell.
- **Sponsor bit:** dashed-border "Today's suspiciously familiar sponsor" module, sticky in the desktop sidebar, flowing inline on mobile. Self-sponsorship joke acknowledged in fine print.
- Typography: Space Grotesk / Source Serif 4 / IBM Plex Mono per brand kit.
- Accessibility: skip link, semantic landmarks, `aria-current` nav, visible gold focus rings, labeled external links, `prefers-reduced-motion` kills all transitions and the Finance Manager ticker, sticky sponsor collapses at ≤56 rem.
- Performance: zero JS frameworks (~120 lines vanilla JS), system of 3 fonts via the existing Google Fonts import, images reused from `media/images/`, no layout-shifting web fonts beyond preconnect hints.

## Preserved

- `CNAME` (`quarters2crypto.com`), `.nojekyll`, GitHub Pages mechanism (serve `main`), HTTPS behavior — untouched.
- All brand assets: `brand-kit/`, `media/images/q2c-*`, `Quarters2Crypto/` picture folder.
- Pages CMS workflow: `.pages.yml` + `PAGES_CMS.md` updated, editing-by-CMS still works.
- Old site was a single page with in-page anchors only — no external routes to preserve. Production snapshot kept as tag `pre-redesign-backup`.

## Integrations

- **Substack** — primary subscription destination everywhere. `https://flaveon.substack.com/feed` exists and was used to seed five real recent posts into `content/dispatches.json` (titles/links/dates verified). The feed serves **no CORS header**, so live client-side fetching is impossible from the static site; the curated-JSON approach prescribed in the brief is implemented instead ("maintained by hand, not scraped").
- **YouTube / X / Instagram** — linked in nav-adjacent Listen/Watch and the social strip (clean canonical URLs; the tracking-parameter variants from the brief resolve to the same destinations).
- **Etsy / CPAX General Store** — sponsor module on homepage and articles page.
- **ConcordiaPax** — footer + About references.
- **PHASEONE10841** — `phaseone10841.quarters2crypto.com` **does not resolve in DNS** (verified 2026-09-17). All PHASEONE components render an explicit "Launching Soon" state with no fake door; the nav entry points to the Lab status report instead of a dead link. Flip `nav.phaseone.live: true` in `content/site.json` (or Pages CMS) when the subdomain goes live and the cards become portals.
- **Finance Manager** — no real data source exists (none found in the workspace; none authorized), so `/finance_manager/` is the brief's sanctioned clearly-synthetic demo: a per-visit fictional balance that ticks upward, a purchase queue permanently stuck on "Still thinking about it," and a purchase counter fixed at 0. `noindex`, no network calls, no real data.

## Deferred

- **Time Machine** — **blocker documented.** The Workspace project at `~/Prime Directories/time-machine` is a Godot 4 narrative RPG in *design phase*: briefs, specs, task system, and a code scaffold (`09_code/`) with no playable build. Its only web artifact is `11_outputs/title-screen-v1.html` — an animated title screen, not a playable game. No choose-your-own-adventure mini-game source exists anywhere in the workspace (checked `~/Downloads`, `~/Documents/Projects`, and the site repo). Per the brief, the story was **not** recreated from guesses. **To activate the integration slot on `lab.html#time-machine`:** export a web build (Godot 4 HTML5 export) or otherwise produce a playable web slice, drop it under `lab/time-machine/`, and replace the slot card with an embed.
- **Podcast feed** — no dedicated podcast feed exists anywhere in the workspace or current site; none was invented. Listen/Watch points at YouTube plus Substack's audio-enabled archive.
- **Live Substack feed** — blocked by missing CORS headers on Substack's RSS (see above). Curated list is the durable substitute.

## Validation

- All 17 local routes/assets return HTTP 200 under `python3 -m http.server` (6 pages, 3 JSON, 2 CSS/JS, 3 images, sitemap, robots, CNAME).
- JSON validates (`python3 -m json.tool`); `.pages.yml` parses (PyYAML); `assets/js/site.js` passes `node --check`.
- Internal-link audit: every `href="/…"` resolves to an existing file; both Lab anchors (`#phaseone`, `#time-machine`) exist.
- External-link audit: all outbound URLs match the brief's official destinations (canonical forms).
- Reduced-motion and sidebar-collapse paths reviewed in CSS.

## Deployment

- **Not yet merged.** Work is on `redesign/q2c-vNext`; production (`main`) still serves the old site. Deploy = merge to `main` (GitHub Pages serves `main` directly for `quarters2crypto.com`).

## Follow-Up (top 5)

1. Merge `redesign/q2c-vNext` → `main`, verify production, then set `nav.phaseone.live: true` the day the PHASEONE subdomain resolves.
2. When a playable Time Machine web slice exists, dock it at `lab.html#time-machine`.
3. Periodically refresh `content/dispatches.json` via Pages CMS (or add a tiny GitHub Action that regenerates it from the Substack RSS at build/commit time to remove the manual step without CORS trouble).
4. Convert `media/images/q2c-hero-bg.png` (OG/social preview) to WebP/AVIF and add a dedicated 1200×630 share image.
5. Add a `lab/time-machine/` embed and a real project visual per project once assets exist, so cards stop being type-only.

---

*Definition-of-done note: everything in §22 is satisfied except final production deployment and the Time Machine game itself, both of which are gated as documented above.*
