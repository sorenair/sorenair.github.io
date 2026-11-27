# Portfolio Redesign Development Plan

The [redesign brief](PORTFOLIO_REDESIGN_BRIEF.md) defines the creative direction. Start with one complete flow from the homepage to Work, into PØRTAL, and back to the same spot in Work. Use the WiFi Transceiver and ØVERCLOCK entries to check that the library works across disciplines.

## Responsibilities

| Workstream | Owns | Handoff |
| --- | --- | --- |
| Site foundation and visual system | Static build, routes, shared header and footer, responsive layout, and shared styles for type, color, spacing, and focus. | Agreed routes and shared components for the page owners. A local preview and a verified GitHub Pages build. |
| Home and hero | Two opening studies using the same identity and sample work. One leads with video, the other with projects. Build the chosen opening with a clear route to Work. | Desktop and phone views, plus the video poster and media behavior. |
| Work library and project pages | Technical and Creative views, project cards, reusable content template, and individual project URLs. Compare ordering by importance and recency using the same entries. | A working library with three samples, one detailed case study, and a documented way to add an entry. Share the content fields with the Home owner. |
| About and Contact | About page using the current material, a direct contact section, and email and social links. Keep employment descriptions within the brief’s publishing boundaries. | An `/about/#contact` destination for the shared footer and a path from the old contact URL. Flag bio facts that need Soren’s update. |
| Motion and interaction | Press and focus feedback, hero motion, and card-to-project navigation with a usable return state. | Motion behavior agreed with the page owners. Verify keyboard, touch, reduced motion, and fallback navigation on the integrated flow. |

## Integration sequence

1. **Agree on shared decisions.** Confirm the initial page structure, visual system, routes, and project entry format. Home and library studies can proceed alongside the static build evaluation. Assign shared files to the foundation owner.
2. **Build and review one complete flow.** Connect Home, Work, and the PØRTAL detail page. Compare homepage studies and library ordering with the same content. Review on desktop and a real phone before settling hero placement, featured work, and first-release scope.
3. **Complete and verify the release.** Add the agreed project entries and About and Contact content. Confirm that visitors can find both categories, open a shared project URL directly, return with their browsing position intact, and get in touch. Check keyboard focus, touch targets, reduced motion, and the video fallback. Verify legacy links, the GitHub Pages preview, and the process for adding a new project.
