# Project entries

The Work library, project pages, and homepage previews use the same project entries. Each project has one JSON file in this directory. Its filename is the slug. Use lowercase ASCII letters, digits, and hyphens. For example, `wifi-transceiver.json` maps to `/work/wifi-transceiver/` under the portfolio route map.

## Required fields

| Field | Use |
| --- | --- |
| `title` | Public project name, including original spelling and accents. |
| `categories` | Exactly one of `technical`, `creative` or `academic` (academic is reserved for coursework). |
| `summary` | One short sentence for cards and previews. |
| `cover` | An image object with `src` (a site-root path such as `/images/work/example.jpg`) and `alt` (a description of the image). |

Homepage previews use `title`, `summary`, `cover`, and the URL derived from the filename. `categories` is available when the preview needs it.

## Optional fields

| Field | Use |
| --- | --- |
| `date` | Verified project date as `YYYY` or `YYYY-MM-DD`, using the precision available. |
| `sections` | Ordered objects with a `heading` and optional `paragraphs` (strings) and `images`. Use headings such as Role, Process, or Results as the content calls for them. Images use the cover fields and may include a `caption`. Give each section at least one paragraph or image. |
| `links` | Ordered objects with `label` and `href` for related public resources. |

To add a project, copy a sample entry to a new slug, replace its fields, and put any new media under `images/work/`. Check that the image paths match the file names and that the image descriptions match the actual media. Omit optional fields when the information is unavailable.
