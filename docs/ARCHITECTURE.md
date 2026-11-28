# Architecture

## Stack

- **Astro 6**, static output, `trailingSlash: 'always'`, directory-style URLs. Config: `redesign/astro.config.mjs`.
- **Content collections** (`redesign/src/content.config.ts`): `projects` from `content/projects/*.json` and `media` from `content/media/*.json`, validated with zod at build time.
- **three.js + GSAP** power the Liquid Glass carousel (`src/media-lens/engine.js`). **sharp** generates images and cover accents. Fonts come from `@fontsource-variable` packages (Archivo, Inter, Martian Mono).
- No client framework. Pages use scoped `<style>` and inline `<script>` in `.astro` files.

## Routes

| Route | Source |
| --- | --- |
| `/` | `src/pages/index.astro` → `components/home/HomeHero.astro` |
| `/work/` | `src/pages/work/index.astro` (library; filter Technical / Creative / Academic) |
| `/work/<slug>/` | `src/pages/work/[slug].astro`, one per `content/projects/<slug>.json` |
| `/media/` | `src/pages/media/index.astro` (+ `_FeaturedCarousel.astro`) |
| `/about/` | `src/pages/about/index.astro` (contact is the `#contact` section) |
| `404` | `src/pages/404.astro` |

### Legacy redirects

The pre-2026 site's URLs redirect with Astro static redirect pages (visible link, `meta refresh`), defined in `astro.config.mjs`:
`/about.html`→`/about/`, `/contact.html`→`/about/#contact`, `/work.html`, `/work_personal.html`, `/work_academic.html`, `/work_professional.html`, `/legacy/projects.html`, `/legacy/work_og.html`→`/work/`. After a build, check `dist/about.html/index.html` etc. still exist.

## Key pieces

- **Shell** (`layouts/SiteLayout.astro`, `styles/site.css`, `scripts/terminal.ts`): head/meta, fonts, sticky nav, footer, grain, shared controls, text-scramble helper.
- **Home hero** (`components/home/`): a full-frame reel video (`public/home/reel-*.mp4`) with an **ASCII decode effect**: `HeroDecode.astro` draws a canvas glyph field that a diagonal wave resolves into the footage. `HomeReel.astro` handles playback and posters; `DecodePoster.astro` is the still shown first. Disabled for reduced motion.
- **Work** (`pages/work/`): index is a row list with hover preview and accent follow; project pages render JSON sections, tech pills, links, and the date range. Return from a project restores scroll position and focus. `project-cover.ts` loads cover images; `cover-accent.ts` computes the accent color from a cover.
- **Media** (`pages/media/index.astro`): two views, toggled by buttons.
  - **Explore:** a draggable canvas wall with a **fisheye** magnifying lens. Default on pointer devices; reduced motion starts in Gallery.
  - **Gallery:** a chronological **timeline** (newest first) of cards with a dash scrubber rail that follows scroll and can be clicked or dragged.
  - Opening an item shows a detail dialog.
  - **Featured strip** (`_FeaturedCarousel.astro`): up to 5 items, taken from media with `featured: true`, topped up with Work covers listed in `featuredPlaceholderProjects`. It upgrades to the WebGL **Liquid Glass carousel** (`src/media-lens/engine.js`, three.js; tunables in `config.js`) when the device can run it, otherwise stays a plain scroller.
- **About** (`pages/about/index.astro`): experience, awards, and activities are plain arrays in the frontmatter; the portrait is `images/headshot.webp`.

## Build and deploy

- `.github/workflows/redesign.yml`: runs `npm ci && npm run build` on PRs touching the app, content, or images.
- `.github/workflows/deploy.yml`: manual (`workflow_dispatch`, type `DEPLOY`), builds `redesign/` and publishes `redesign/dist` via GitHub Pages. Never triggered by pushes.
- `redesign/public/` is copied as-is (CNAME, favicon, OG image, robots.txt, `home/` reel assets).
- `redesign/dist/`, `.astro/`, and `node_modules/` are gitignored.

## History

The previous hand-written HTML site and the Astro redesign planning docs were removed after launch (November 2026). They remain in git history before the cleanup commit if ever needed.
