import type { ImageMetadata } from 'astro';

const covers = import.meta.glob<ImageMetadata>(
  ['../../images/work/**/*.{avif,gif,jpeg,jpg,png,svg,webp}', '../../images/media/**/*.{avif,gif,jpeg,jpg,png,svg,webp}'],
  { import: 'default' },
);

export function loadProjectCover(src: string) {
  const load = covers[`../..${src}`];
  if (!load) throw new Error(`Project cover file is missing: ${src}`);
  return load();
}
