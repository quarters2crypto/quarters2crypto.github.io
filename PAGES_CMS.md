# Pages CMS Setup

This site is ready for Pages CMS.

## Main edit targets

- `content/site.json`: homepage copy, links, images, roadmap, legal text
- `brand-kit/cpax-q2c-design-tokens.json`: reusable brand tokens
- `brand-kit/cpax-q2c-theme.css`: drop-in theme variables and classes
- `brand-kit/cpax-q2c-style-brief.txt`: prompt-ready style brief
- `index.html`: emergency fallback editor for layout or script changes

## Media folders

- `media/images/`: site images uploaded through Pages CMS
- `media/files/`: downloadable files uploaded through Pages CMS

## How to use

1. Go to `https://pagescms.org/`
2. Sign in with GitHub
3. Open `quarters2crypto/quarters2crypto.github.io`
4. Pages CMS will read `.pages.yml`
5. Edit `Homepage content` for normal nightly updates

## Notes

- The live page keeps static fallback content in `index.html`, then loads `content/site.json` on top of it.
- If `content/site.json` fails to load, the page still renders instead of going blank.
- For layout or behavior changes, use the `Emergency HTML editor` entry in Pages CMS or edit the repo directly.
