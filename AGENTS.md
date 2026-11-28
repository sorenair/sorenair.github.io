# Agent guide

Static Astro portfolio for sorengabor.com. Read [README.md](README.md) first, then only the doc you need:

- [docs/CONTENT.md](docs/CONTENT.md): add or edit Work items, Media items, About. Most requests are here.
- [docs/DESIGN.md](docs/DESIGN.md): the "Artifact" design system and its rules.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): routes, components, effects, build and deploy.

## Rules

- Work in `redesign/` (app) and `content/` + `images/` (data). Run `npm ci` once, then `npm run build` in `redesign/` before every commit; it must pass.
- Content is JSON validated by `redesign/src/content.config.ts`. Fix the data, not the schema, unless asked.
- Never push to `main` or run the deploy without Soren's approval. Work on a branch and open a PR.
- American spelling in all copy and comments.
- Focus outlines use `:focus-visible` only. No scanlines, CRT, or glow effects.
- Add no new dependencies without asking.
- Keep `prefers-reduced-motion`, keyboard, and no-JS fallbacks working.
