# Portfolio Redesign Agent Assignments

Use the [redesign brief](PORTFOLIO_REDESIGN_BRIEF.md) and [shared style guide](redesign/SHELL.md) for design decisions, the [design references](PORTFOLIO_DESIGN_REFERENCES.md) for component studies, the [route map](PORTFOLIO_ROUTE_MAP.md) for URLs, and the [development plan](PORTFOLIO_DEVELOPMENT_PLAN.md) for integration and release checks.

The next phase builds on the video-led Home, About and Contact, and the three-project Work demo. Give the existing flow a coherent retro-futurist terminal treatment and build a small Media prototype for review.

## Agent 1 Site foundation and integration

- Own the static build, GitHub Pages configuration, route map, shared navigation and footer, and responsive page shell. Coordinate `/media/` and review its navigation placement with Agent 3.
- Implement the shared terminal treatment for typography, panel edges, controls, focus, and motion. Provide one shared content-driven accent mechanism and check it with a colorful project and PØRTAL’s monochrome fallback. Share the usage contract with Agents 2 and 3.
- Lead the integrated preview and GitHub Pages build verification. Keep deployment as a separate release decision after the review.

## Agent 2 Home, About, and Contact

- Own Home, hero media and motion, About, and `/about/#contact`. Keep the existing video-led opening available as the comparison.
- Build the next Home study as a screen-wide reel that first appears as a digitally treated still. Use the typing, ASCII, grain, and full-width studies as comparisons. Align the still with the opening video frame and test a short reveal within the same composition. Keep **View work** and **Play reel** visible, make pointer interaction optional, and verify touch, keyboard, reduced motion, and playback fallback.
- Study a small handwritten sign-off near the About bio or Contact if a suitable mark is available. Use the ShaderGradient still as a reference for grain and depth in the hero.

## Agent 3 Work, projects, and Media

- Own the Work index, categories, cards, project content and template, and Work-to-project motion. Keep the filterable grid and apply the quieter shared treatment to Work and PØRTAL. Finish restoring category, scroll position, and card focus on return before testing a cover transition.
- Build the `/media/` prototype as a regular gallery with a representative photo, video, and artwork. Coordinate the route with Agent 1. After the gallery works, study a fisheye Explore view using the same entries and retain the regular gallery as a browsing option.
- Study the Liquid Glass Carousel as an optional featured strip after the Work return flow is reliable. Coordinate with Agent 2 if previewing the strip on Home. Share any project data changes with Agent 2 for homepage previews.

## Handoffs and review milestone

1. The workstreams can proceed in parallel. Agent 1 owns shared files and dependency changes. Agents 2 and 3 own their page implementations and coordinate shared changes through Agent 1.
2. Bring preview URLs and desktop and phone findings to the review. Show the hero beside the existing opening, the Work return flow, and Media’s regular gallery. Keep any graphics-heavy studies optional with a usable static view.
3. Review **Home → Work → PØRTAL → Back** on desktop and a real phone with pointer, touch, keyboard, and reduced motion. Check that the pages feel like one interface, that the route into Work stays clear, and that browsing position and focus survive the return. Use the review to settle which studies, Media navigation, and further content belong in the first release.

## Next phase: apply the Artifact direction

Soren chose **Artifact with texture** from the identity study. Branch from `ws1-foundation` and follow [CONTRACT.md](redesign/CONTRACT.md). Agent 1 first lands shared tokens and components from the study. Agent 2 applies the direction to Home (large full-frame video hero), About and Contact. Agent 3 rebuilds Work as the index with hover preview and accent follow, then Media and project pages. Do not copy Signal's scanline, CRT or glow effects.
