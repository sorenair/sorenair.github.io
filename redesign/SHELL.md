# Shared portfolio shell

Wrap a page in `src/layouts/SiteLayout.astro` and pass its page title plus a description when available. The layout adds the shared Ø, primary navigation, skip link, main landmark, footer, and canonical URL. The content slot is full width so a page can run media to the edges. Use `.container` to align content with the header and footer and `.page-section` when the page needs the standard vertical spacing.

Use `src/styles/site.css` for shared changes. The shell uses a grayscale interface, system fonts, fluid type and spacing, and a shared maximum width. `.page-title`, `.section-title`, `.lead`, and `.text-link` are available for page content. Use the existing CSS custom properties for related styles and preserve the 44 px minimum target for primary controls.

## Retro-futurist terminal

Use the [design references](../PORTFOLIO_DESIGN_REFERENCES.md) for examples of texture, typography, and interactive media. The shared rules below apply across those studies.

- **Layout and type.** Align media, headings, cards, and reading columns to the shared grid. Use the Ø, strong headings, and fine rules or panel edges to connect the pages visually. Use monospace for compact data such as dates and technical metadata when it helps distinguish them from the main copy. Keep navigation labels and project titles readable at rest.
- **Texture and digital elements.** Try grain, noise, brief glitches, and modulating ASCII as optional treatments on media or in the space around it. Give each view a clear focal point. Home can carry the strongest treatment. Work cards should be easy to scan, and project details and About should provide steady surfaces for longer reading. Keep primary text and controls clear of distortion.
- **Feedback and reuse.** Use shared spacing, color, focus, and motion tokens for controls, card states, and media frames. Tie responsive effects to real actions such as selecting a category or opening a project. Keep feedback immediate for pointer, touch, and keyboard. Share treatments that recur across pages so each instance behaves consistently.
- **Static states.** Keep essential text, links, and project media present while effects initialize or load. Give motion-led treatments a composed still for reduced motion, keep decorative glyphs out of the accessibility tree, and avoid rapid flashing. Focus, selection, and navigation should remain clear in the static state.

## Chosen direction: Artifact with texture

Soren chose the **Artifact** direction from the identity study (`/studies/identity/artifact/`, source in `redesign/src/components/studies/IdentityStudy.astro`), combined with the digital grain and texture from the other studies. The study's Signal direction (scanlines, CRT, phosphor glow, all-mono) is rejected as too much, and Instrument is a fallback reference for quieter surfaces.

- **Type.** Oversized grotesk headlines with tight tracking, on a visible Ø-based module grid. Mono for labels, counters, status lines and readouts.
- **Surfaces.** Grayscale with one accent. The accent floods the active row or control and follows the hovered or focused project. Fine grain over charcoal, posterized or stepped tones on media, sparse glyph fields. No scanlines, glow, or tinted CRT filters.
- **Terminal pieces.** Status line (live clock, node counter), corner brackets on panels and media, Ø marks and an interactive ASCII Ø with a keyboard and touch equivalent.
- **Motion language.** One easing (`cubic-bezier(0.7, 0, 0.2, 1)`), one reveal (clip wipe for text, stepped resolve for media), one glitch (short horizontal tear) reserved for state changes such as filter changes or a new active project.
- **Work index.** Orderly rows with large titles, index numbers, context and discipline. Hover or focus shows a preview and the accent follows the project. On phones each row carries a thumbnail and needs no hover. Index first, editorial project pages second.
- **Home hero.** Stays large and immediately engaging with full-frame video or its treated still behind the hero copy. The identity study had no media behind the hero, which was a regression, so the hero study (still-to-reel reveal) remains the source of truth for Home.

## Content-driven accent

Use one interface accent at a time through `--color-accent`. On a project page, draw the accent from the cover or artwork. On a page with multiple featured projects, let the accent follow the active project. Use the shared yellow-green (`#d9fa80`) when there is no active project or the content is monochrome.

Use the accent for focus, active links, and interaction feedback. Check contrast on the surfaces where it appears. Adjust the content color for legibility or use the shared fallback. Keep focus outlines and active underlines visible as the accent changes.

### Accent usage contract

- **Never set `--color-accent` directly.** It resolves to `--color-active-accent`, then `--color-page-accent`, then `#d9fa80`.
- **Page accent:** pass `accentSource="/images/..."` to `SiteLayout`. Project pages derive it from the project cover automatically. The layout extracts a contrast-checked colour (at least 7:1 on `--color-surface`) and sets `--color-page-accent` on `<html>`. Monochrome artwork such as PØRTAL yields none and falls back to the yellow-green.
- **Active item:** a view with several featured projects sets `--color-active-accent` on `document.documentElement` on selection and removes it when nothing is active. For a colour not already in the page, compute it at build time with `getCoverAccent` from `src/cover-accent.ts` and pass it to the client.
- **Use it for** focus rings, active links and interaction feedback only, never as body text or large fills.

## Motion and navigation

Keep normal links, native scrolling, and direct page entry working. Use `--motion-fast` for short feedback and `--motion-project` for occasional project transitions. Both durations become zero with reduced motion. Gate page-specific motion and video autoplay on the motion preference where applicable. The layout has an optional named `head` slot for page-specific metadata or view-transition opt-in. Agent 3 owns the Work return behavior, including category, scroll, and focus restoration.

Use the project JSON fields documented in [Project entries](../content/projects/README.md) for Home previews and Work. The current Home studies, Work library, and PØRTAL page provide the integration flow for reviewing this visual language. About provides the `contact` anchor used by the footer.
