# Content how-to

All content is data. Edit JSON, drop images in `images/`, run `cd redesign && npm run build`. The build validates everything and tells you exactly which field is wrong. Then follow the deploy steps in the [README](../README.md).

Image paths in JSON are site-root paths such as `/images/work/personal/electronics/portal.png`, and must live under `/images/work/` or `/images/media/`. Every image needs descriptive `alt` text. Use JPG/PNG/WebP; the build makes optimized sizes.

## Work items

One file per item in `content/projects/`. The filename is the slug: lowercase letters, digits, and hyphens. `wifi-transceiver.json` becomes `/work/wifi-transceiver/`. To add one, copy a similar file and edit it.

```json
{
  "title": "PØRTAL",
  "categories": ["technical"],
  "summary": "One short sentence for cards and the list.",
  "context": "Personal project",
  "technologies": ["JavaScript", "Node.js", "Python"],
  "cover": { "src": "/images/work/personal/electronics/portal.png", "alt": "What the image shows." },
  "date": "2025-05",
  "dateEnd": "2025-09",
  "sections": [
    { "heading": "The idea", "paragraphs": ["First paragraph.", "Second."] },
    { "heading": "Photos", "images": [{ "src": "/images/work/...", "alt": "...", "caption": "Optional." }] }
  ],
  "links": [{ "label": "View on GitHub", "href": "https://github.com/..." }]
}
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Keep original spelling and accents. |
| `categories` | yes | Exactly one of `technical`, `creative`, `academic` (academic = coursework). |
| `summary` | yes | One short sentence. |
| `cover` | yes | `{ src, alt }`. Its dominant color becomes the item's accent; monochrome covers fall back to white. |
| `context` | no | Shown under the title and in the list (e.g. "Personal project", "Lockheed Martin"). Falls back to the category name. |
| `technologies` | no | Skill pills on the project page. |
| `date` | no | `YYYY`, `YYYY-MM`, or `YYYY-MM-DD`. |
| `dateEnd` | no | Same forms, or `"present"` for ongoing work. Makes a span. Sorting uses `dateEnd` first (ongoing items on top), then `date`. |
| `termDates` | no | `true` shows year-month dates as Fall/Spring terms. Applied automatically to academic items. |
| `sections` | no | Ordered; each has a `heading` and at least one `paragraphs` or `images` entry. |
| `links` | no | `{ label, href }`, `href` must be http(s). |

Put new artwork under `images/work/<category>/...`. Omit optional fields you don't know rather than guessing.

## Media items

One file per item in `content/media/`; the filename is the id.

```json
{
  "title": "Dakota",
  "kind": "youtube",
  "cover": { "src": "/images/media/youtube/dakota.jpg", "alt": "What the image shows." },
  "href": "https://youtu.be/...",
  "date": "2024-10-25",
  "featured": true
}
```

| Field | Notes |
| --- | --- |
| `title` | Required. |
| `kind` | Required: `youtube`, `instagram`, `photo`, `artwork`, or `video` (a local mp4). |
| `cover` | `{ src, alt }`. Required except for `video`. YouTube thumbnails go in `images/media/youtube/`, Instagram in `images/media/instagram/`. |
| `href` | Required for `youtube` and `instagram`. |
| `date` | `YYYY-MM-DD`. Newest first in Gallery. |
| `featured` | `true` puts it in the Featured strip (max 5 shown; Work covers fill remaining slots). Video entries are not featured. |
| `caption`, `description` | Optional text. |
| `project` | Optional Work slug to link to. |
| `src`, `poster` | For `video` only: site-root mp4 and poster image (put files in `redesign/public/`). |

Tip: Soren drops raw uploads into `media-inbox/` in the shared project folder; they are not part of this repo.

## About page

Edit `redesign/src/pages/about/index.astro`. At the top of the file, `experience`, `awards`, and `activities` are plain arrays of objects (role, organization, period, summary, optional `href`/`link`). Change the text there. The portrait is `images/headshot.webp`; replace the file to change it. Contact links are in the `#contact` section further down the same file.

## Home page

Hero copy and buttons: `redesign/src/components/home/HomeHero.astro`. Reel video and posters: `redesign/public/home/` (keep the file names or update `HomeReel.astro` and `DecodePoster.astro`).

## Optional: resize images

`scripts/image_resizer.py` (needs Pillow): put originals in `originals/`, run it, get 400/800/1600 px versions in `output/`. Astro already optimizes images at build, so use this only for hand-made cover sets.
