import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

// Legacy URLs from the pre-2026 site (docs/ARCHITECTURE.md#legacy-redirects). Astro emits static redirect pages with a visible link.
const redirects = {
  '/about.html': '/about/',
  '/contact.html': '/about/#contact',
  '/work.html': '/work/',
  '/work_personal.html': '/work/',
  '/work_academic.html': '/work/',
  '/work_professional.html': '/work/',
  '/legacy/projects.html': '/work/',
  '/legacy/work_og.html': '/work/',
};

export default defineConfig({
  redirects,
  site: 'https://sorengabor.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: {
    server: {
      fs: {
        allow: [
          fileURLToPath(new URL('.', import.meta.url)),
          fileURLToPath(new URL('../images/', import.meta.url)),
        ],
      },
    },
  },
});
