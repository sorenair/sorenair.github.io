# Design system: "Artifact"

The site reads like a printed artifact on a visible grid: oversized type, hairline rules, one flood of accent color on the active row, and a light film grain. It is dark, quiet, and typographic. Tokens live at the top of `redesign/src/styles/site.css`; change them there, never inline.

## Principles

- **Oversized type.** Page titles are uppercase Archivo Wide (`--text-title`, up to 7.5rem, tight tracking). Everything else is small and calm by contrast.
- **Visible full-bleed grid.** Pages sit on a module grid (`--module`) with hairline rules (`--color-rule`) drawn edge to edge.
- **Accent row flood.** The active or hovered row in Work (and similar lists) floods with the item's accent color; text flips to dark on the flood. The accent is derived from the cover image (`redesign/src/cover-accent.ts`) or falls back to white.
- **Grain.** A subtle noise overlay (`--grain-opacity`, 0.05) sits over the page.
- **Not allowed:** scanlines, CRT curvature, glow, neon. An early "Signal" direction used them and was rejected.

## Tokens (site.css)

| Token | Value / use |
| --- | --- |
| `--color-background` | `#121212` page |
| `--color-surface` | `#1d1d1d` panels |
| `--color-text` / `--color-muted` | `#f4f4f1` / `#b6b6b2` |
| `--color-rule`, `--color-control-edge` | hairlines and control borders |
| `--color-accent` | set per page or active item; fallback `#ffffff` (monochrome covers like PØRTAL use it) |
| `--font-display` | Archivo, width-locked wide (118%) via the `Archivo Display` face in `SiteLayout.astro` |
| `--font-body` | Inter Variable |
| `--font-mono` | Martian Mono Variable (labels, metadata) |
| `--space-1..5`, `--gutter`, `--site-width` (88rem) | spacing scale |
| `--motion-fast/reveal/project`, `--ease-artifact`, `--ease-out` | motion |

## Components and rules

- **Sticky nav:** the same dark, blurred backing on every page, extended through the iPhone safe area (`viewport-fit=cover`). Links: Work, Media, About; the Ø mark links home.
- **CTA buttons:** inverted white (white fill, dark text). One component: `redesign/src/components/CtaButton.astro`.
- **Focus:** show outlines with `:focus-visible` only, never on mouse or tap. (Soren dislikes ring outlines after clicks.)
- **Accent use:** focus, active links, row flood, interaction feedback. Not decoration.
- **Copy:** American spelling. Titles keep their original spelling and accents (PØRTAL, ØVERCLOCK).
- **Accessibility:** respect `prefers-reduced-motion` (heavy effects fall back to static views), keep keyboard paths, keep essential content visible without JS.
- **Images:** use Astro `<Image>`/`getImage` so sizes and WebP are generated at build; supply meaningful `alt` text.

## Where to change what

| Want to change | Edit |
| --- | --- |
| Colors, type scale, spacing, grain | `:root` in `redesign/src/styles/site.css` |
| Font faces | `redesign/src/layouts/SiteLayout.astro` |
| Nav, footer, page shell | `redesign/src/layouts/SiteLayout.astro` |
| Button look | `redesign/src/components/CtaButton.astro` |
| Page-specific styles | the scoped `<style>` in that page's `.astro` file |
