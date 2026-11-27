# Portfolio route map

Step 1 review draft. These are the planned public paths on `sorengabor.com`. Use trailing slashes for directory routes and lowercase, hyphenated ASCII slugs for project URLs. Project titles keep their original spelling.

## Canonical routes

| Path | Destination | Owner |
| --- | --- | --- |
| `/` | Home | Agent 2 |
| `/work/` | Project library with Technical and Creative views | Agent 3 |
| `/work/portal/` | PØRTAL | Agent 3 |
| `/work/wifi-transceiver/` | WiFi Transceiver | Agent 3 |
| `/work/overclock/` | ØVERCLOCK | Agent 3 |
| `/about/` | About | Agent 2 |
| `/about/#contact` | Contact section on About | Agent 2 |

Agent 1 owns the shared header, footer, and legacy URLs. The Ø links to `/`, the header links to `/work/` and `/about/`, and the footer links to `/about/#contact`. Agent 2 provides the `contact` anchor and a direct path from Home into Work. Agent 3 owns category state and the return from a project to its originating card. Technical and Creative share `/work/`.

`/media/` is the proposed route for a gallery of photos, videos, and art. Review its navigation placement with the gallery prototype. [Work and Media design references](PORTFOLIO_DESIGN_REFERENCES.md#work-and-media)

## Legacy paths

| Existing path | Planned destination |
| --- | --- |
| `/index.html` | `/` via the same Home document with `/` as its canonical URL |
| `/about.html` | `/about/` |
| `/contact.html` | `/about/#contact` |
| `/work.html` | `/work/` |
| `/work_personal.html` | `/work/` |
| `/work_academic.html` | `/work/` |
| `/work_professional.html` | `/work/` |
| `/legacy/projects.html` | `/work/` |
| `/legacy/work_og.html` | `/work/` |

The old work groupings combine different types of projects, so their links land on the library without selecting a category. Keep the current pages in place during development. At cutover, publish static redirect pages with visible destination links once their targets are available. Before replacing the old work pages, review any entries that the first release leaves out.
