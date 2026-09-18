# Quarters2Crypto

**quarters2crypto.com** — a public builder's notebook by [Flaveon](https://substack.com/@flaveon).

Q2C started as practical crypto field notes and evolved into a casual publishing/lab site:
experiments at the edge of AI, autonomy, computation, crypto, and cosmic daydreaming.
It is the playground sibling of [ConcordiaPax](https://concordiapax.com) (serious systems and business work).

## Stack

Static HTML/CSS/JS on GitHub Pages. No framework, no build step.

- `index.html` — homepage (hero, dispatches, listen/watch, projects, PHASEONE10841, Time Machine slot, sponsor, socials)
- `articles.html` — curated Substack highlights + subscribe CTA
- `projects.html` — the workbench (all experiments)
- `lab.html` — machines under the tarp (Time Machine integration slot, PHASEONE status, finance manager)
- `about.html` — what Q2C is now, and the ConcordiaPax relationship
- `finance_manager/` — synthetic absurdist-ledger demo (noindex)

## Content model

Content lives in small JSON files, editable by hand or via [Pages CMS](https://pagescms.org/) (see `PAGES_CMS.md` and `.pages.yml`):

- `content/site.json` — hero, socials, sponsor module, footer, PHASEONE `live` switch
- `content/dispatches.json` — curated Substack post highlights
- `content/projects.json` — projects/experiments (status, category, featured flag)

Pages ship with static fallback markup; `assets/js/site.js` re-renders lists from the JSON on top. If a fetch fails, the fallback stays.

## Brand

`brand-kit/` is authoritative: design tokens (`cpax-q2c-design-tokens.json`), theme CSS (`cpax-q2c-theme.css`), and the style brief. Dark editorial, bronze/gold, smoky violet, teal signals. Space Grotesk / Source Serif 4 / IBM Plex Mono.

## Deployment

GitHub Pages serves the `main` branch directly (custom domain via `CNAME`). Merging to `main` deploys.

- Preserved: `CNAME` (quarters2crypto.com), HTTPS, `.nojekyll`
- `robots.txt` welcomes crawlers; `sitemap.xml` lists the five canonical pages
- `/finance_manager/` is a synthetic demo and carries `noindex`

## Related properties

- Newsletter: [flaveon.substack.com](https://flaveon.substack.com)
- PHASEONE10841: `phaseone10841.quarters2crypto.com` (launching soon — see `lab.html#phaseone`)
- Sponsor gag: [CPAX General Store](https://www.etsy.com/shop/CpaxGeneralStore)
