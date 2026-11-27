# Workstream contract

Three workstreams build the redesign in parallel. This file says who owns which files and how shared files change. Workstream 1 (Foundation) maintains it.

## Git flow

- Repo: `sorenair/sorenair.github.io`. Never commit to `main` directly.
- One long-lived branch per workstream: `ws1-foundation`, `ws2-home-about`, `ws3-work-media`. Each opens PRs into `main`, small and often. Rebase on `main` before opening a PR.
- Nothing is pushed or opened as a PR without Soren's go-ahead. Deployment to GitHub Pages is a separate release decision.
- Deleting or moving legacy files or folders needs Soren's approval first.
- Do not commit `redesign/dist/` or `node_modules/`. Workstream 1 adds them to `.gitignore`.

## Ownership

| Area | Owner | Files |
| --- | --- | --- |
| Shell, tokens, nav, footer | WS1 | `src/layouts/SiteLayout.astro`, `src/styles/site.css`, `src/cover-accent.ts`, `public/`, `astro.config.mjs`, `package*.json`, `SHELL.md`, `CONTRACT.md`, route map, legacy redirects, `.github/workflows/`, image optimization |
| Home, About, Contact | WS2 | `src/pages/index.astro`, `src/pages/about/`, `src/pages/studies/`, `src/components/home/` |
| Work, projects, Media | WS3 | `src/pages/work/`, `src/pages/media/`, `src/media-entries.ts`, `src/project-cover.ts`, `src/content.config.ts`, `content/projects/` |

## Changing shared files

- Never edit another workstream's files. Ask in the thread (or message that thread) and describe the change you need.
- Need a shared style or layout change? Message WS1 with the exact change. WS1 lands it in a small PR into `main`; others rebase.
- Page-specific CSS goes in the page or component (`<style>` in `.astro` files, scoped). Use shared tokens (`--color-accent`, `--motion-fast`, `--motion-project`, spacing and type vars) and add no new global classes.
- New dependencies: request through WS1. No one else edits `package.json`.
- Project JSON fields are WS3's. WS2 reads them for Home previews; WS3 announces field changes to WS2.
- New routes: tell WS1 so the route map and redirects stay in sync. `/media/` nav placement is decided by WS1 with WS3.

## Accent contract

Set `--color-accent` once per page or active item (inline style or via the helper in `src/cover-accent.ts`). Fallback is `#ffffff`; monochrome covers such as PØRTAL use the fallback. Use it only for focus, active links and interaction feedback.

## Done checks (every PR)

`cd redesign && npm run build` passes, keyboard focus and reduced motion checked, essential content visible without JS.

## Workflow notes

- `ws1-foundation` is the integration branch for previews. Merge each workstream PR into it, then Soren pulls it and runs `npm run dev` in `redesign/`.
- Install dependencies on local disk with `npm ci`. Shared-mount installs fail.
- Shared study sources live in `src/components/studies/` and `src/pages/studies/`; the identity study there is reference material, not live pages.
- Shared terminal components (status line, brackets, glitch, reveal) are being promoted into `src/components/terminal/` and `site.css` by Foundation. Request changes through Foundation.
