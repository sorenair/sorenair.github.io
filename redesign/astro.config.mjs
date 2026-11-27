import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

export default defineConfig({
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
