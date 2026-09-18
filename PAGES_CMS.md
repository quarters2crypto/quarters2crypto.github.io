# Pages CMS Setup

This site is ready for Pages CMS.

## Main edit targets

- `content/site.json`: hero copy, social links, sponsor module, footer, and the PHASEONE `live` switch
- `content/dispatches.json`: curated Substack post highlights
- `content/projects.json`: the projects/experiments list (toggle `featured` for homepage placement)
- `brand-kit/cpax-q2c-design-tokens.json`: reusable brand tokens
- `brand-kit/cpax-q2c-theme.css`: brand variables and classes (loaded by every page)

## Media folders

- `media/images/`: site images uploaded through Pages CMS
- `media/files/`: downloadable files uploaded through Pages CMS

## How to use

1. Go to `https://pagescms.org/`
2. Sign in with GitHub
3. Open `quarters2crypto/quarters2crypto.github.io`
4. Pages CMS will read `.pages.yml`
5. Use **Site settings**, **Dispatches**, and **Projects** for normal updates

## Notes

- Pages ship with static fallback content; `assets/js/site.js` then loads the JSON files and re-renders the dispatches/projects lists on top.
- If a JSON file fails to load, the page still renders its fallback instead of going blank.
- The per-page "HTML (advanced)" editors are for layout or script changes — prefer the JSON editors for content.
- PHASEONE: set `nav.phaseone.live` to `true` in **Site settings** once `phaseone10841.quarters2crypto.com` actually resolves; cards flip from "Launching Soon" to a real link.
