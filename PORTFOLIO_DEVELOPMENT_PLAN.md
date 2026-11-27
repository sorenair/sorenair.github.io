# Portfolio Redesign Development Plan

The [redesign brief](PORTFOLIO_REDESIGN_BRIEF.md) defines the creative direction. Start with one complete flow from the homepage to Work, into PØRTAL, and back to the same spot in Work. Use the WiFi Transceiver and ØVERCLOCK entries to check that the library works across disciplines.

Use the [design references and integration steps](PORTFOLIO_DESIGN_REFERENCES.md#integration-steps) to sequence the component studies. Review the hero effects alongside the current opening. Prototype Media with a small representative set and review its place in navigation and first-release scope alongside the integrated flow.

## Responsibilities

| Workstream | Owns | Handoff |
| --- | --- | --- |
| Site foundation and visual system | Static build, routes, shared header and footer, responsive layout, and shared styles for type, color, spacing, and focus. | Agreed routes and shared components for the page owners. A local preview and a verified GitHub Pages build. |
| Home and hero | Prototype a screen-wide digital still that resolves into the reel in place. Compare it with the full-width reel and gradient studies using the same copy and footage. | Desktop and phone views with matched poster and video framing, direct playback, reduced motion, and failure fallback. |
| Work library and project pages | Technical and Creative views, project cards, reusable content template, and individual project URLs. Compare ordering by importance and recency using the same entries. | A working library with three samples, one detailed case study, and a documented way to add an entry. Share the content fields with the Home owner. |
| About and Contact | About page using the current material, a direct contact section, and email and social links. Keep employment descriptions within the brief’s publishing boundaries. | An `/about/#contact` destination for the shared footer and a path from the old contact URL. Flag bio facts that need Soren’s update. |
| Motion and interaction | Press and focus feedback, hero motion, and card-to-project navigation with a usable return state. | Motion behavior agreed with the page owners. Verify keyboard, touch, reduced motion, and fallback navigation on the integrated flow. |

## Integration sequence

1. **Agree on shared decisions.** Confirm the initial page structure, visual system, routes, and project entry format. Home and library studies can proceed alongside the static build evaluation. Assign shared files to the foundation owner.
2. **Build and review one complete flow.** Connect Home, Work, and the PØRTAL detail page. Compare the full-width still-to-reel reveal with the existing openings. Judge the first frame, the reveal timing, and the route to Work on desktop and a real phone. Settle playback timing, featured work, and first-release scope in the review. Use the [shared style guide](redesign/SHELL.md#retro-futurist-terminal) to check that the pages feel like the same interface, that the work remains easy to find and read, and that the visual identity holds in reduced motion.
3. **Complete and verify the release.** Add the agreed project entries and About and Contact content. Confirm that visitors can find both categories, open a shared project URL directly, return with their browsing position intact, and get in touch. Check keyboard focus, touch targets, reduced motion, and the video fallback. Verify legacy links, the GitHub Pages preview, and the process for adding a new project.

## Next phase: rollout of the chosen identity

The first review is complete (Home, Work and Media prototypes, plus the identity study). The next phase applies **Artifact with texture** across the site, one workstream per area, branching from `ws1-foundation`:

1. **Foundation.** Promote the study's terminal pieces (status line, corner brackets, glitch, reveal, grain) into shared tokens and components; apply the grid and type scale in the shell; keep the release checklist and deployment ready.
2. **Home, About, Contact.** Apply the direction to the hero with full-frame video behind it, the featured preview, About and the contact section.
3. **Work and Media.** Rebuild the Work library as the Artifact index with hover preview and accent follow, keep return-flow behavior, and apply the direction to project pages and Media.

Review again on desktop and a real phone before the first release.

## Current state (integration branch)

Work holds 21 entries across Technical, Creative and Academic. The Media Featured strip is the WebGL liquid glass lens in `redesign/src/media-lens/` (MIT licence included, loads only on `/media/`), with the CSS carousel as the fallback for touch, small screens, reduced motion and no WebGL. The Media Explore grid eases into its lock-in after a drag. The `three` and `gsap` dependencies are owned by Foundation.
