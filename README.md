# sorengabor.com

Soren Gabor's portfolio: an [Astro](https://astro.build) static site in `redesign/`, published to GitHub Pages at <https://sorengabor.com>.

## Quickstart

Requires Node 22.19 or newer. Install dependencies on a local disk, not a network mount.

```bash
cd redesign
npm ci            # install exactly what package-lock.json says
npm run dev       # http://localhost:4321 with hot reload
npm run build     # static build to redesign/dist/ (also validates all content)
npm run preview   # serve the built site
```

`npm run build` is the test suite. It fails on a malformed Work or Media entry, a missing image, or a broken route.

## Repository map

| Path | What it is |
| --- | --- |
| `redesign/` | The Astro app: pages, components, styles, config. |
| `content/projects/*.json` | One file per Work item. |
| `content/media/*.json` | One file per Media item. |
| `images/` | All site images, referenced as `/images/...` from content. |
| `docs/` | Design system, architecture, content how-to. |
| `.github/workflows/` | `deploy.yml` (manual publish) and `redesign.yml` (build check on PRs). |
| `scripts/image_resizer.py` | Optional helper that makes 400/800/1600 px JPEG sizes. |
| `AGENTS.md` | Short entry point for AI agents. |

## Common tasks

- Add or edit a Work item, a Media item, or the About page: [docs/CONTENT.md](docs/CONTENT.md).
- Change colors, type, spacing, or motion: [docs/DESIGN.md](docs/DESIGN.md).
- Understand how a page or effect works: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Deploy

Publishing is manual and deliberate.

1. Merge your change into `main` (open a PR; the `Redesign build` check runs `npm run build`).
2. In GitHub, open **Actions → Deploy to GitHub Pages → Run workflow** on `main`.
3. Type `DEPLOY` in the confirm box and run it. The site updates in about a minute.

Pages **Source** is set to **GitHub Actions** (Settings → Pages). The custom domain comes from `redesign/public/CNAME`.

## Rollback

- Fast: in Actions, re-run an earlier successful **Deploy to GitHub Pages** run (it redeploys that build).
- Revert: `git revert` the bad commit on `main`, then run the deploy again.
- Last resort (old site): the pre-redesign hand-written site was removed from the repo root in the cleanup commit, so switching Pages Source back to the `main` branch root no longer works on current `main`. To use it, check out the commit just before the cleanup (`git log --oneline -- index.html` finds it) on a branch, point Pages at that branch, and accept that this serves the old site.
