import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectImage = z.object({
  src: z.string().startsWith('/images/work/'),
  alt: z.string().trim().min(1),
});

const projectSection = z.object({
  heading: z.string().trim().min(1),
  paragraphs: z.array(z.string().trim().min(1)).min(1).optional(),
  images: z.array(projectImage.extend({ caption: z.string().trim().min(1).optional() })).min(1).optional(),
}).refine(({ paragraphs, images }) => paragraphs || images, {
  message: 'A project section needs at least one paragraph or image.',
});

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: '../content/projects' }),
  schema: z.object({
    title: z.string(),
    categories: z.array(z.enum(['technical', 'creative'])).min(1).max(2),
    summary: z.string(),
    context: z.string().trim().min(1).optional(),
    technologies: z.array(z.string().trim().min(1)).min(1).optional(),
    cover: projectImage,
    date: z.string().regex(/^\d{4}(?:-\d{2}-\d{2})?$/).optional(),
    sections: z.array(projectSection).optional(),
    links: z.array(z.object({ label: z.string().trim().min(1), href: z.httpUrl() })).optional(),
  }),
});

export const collections = { projects };
