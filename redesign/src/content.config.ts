import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectImage = z.object({
  src: z.string().regex(/^\/images\/(work|media)\//),
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
    categories: z.array(z.enum(['technical', 'creative', 'academic'])).min(1).max(2),
    summary: z.string(),
    context: z.string().trim().min(1).optional(),
    technologies: z.array(z.string().trim().min(1)).min(1).optional(),
    cover: projectImage,
    date: z.string().regex(/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/).optional(),
    /** End of a span: a date in the same forms as `date`, or `present` for ongoing work. */
    dateEnd: z.union([z.literal('present'), z.string().regex(/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/)]).optional(),
    sections: z.array(projectSection).optional(),
    links: z.array(z.object({ label: z.string().trim().min(1), href: z.httpUrl() })).optional(),
  }),
});

const media = defineCollection({
  loader: glob({ pattern: '*.json', base: '../content/media' }),
  schema: z.object({
    title: z.string().trim().min(1),
    kind: z.enum(['youtube', 'instagram', 'photo', 'artwork', 'video']),
    cover: projectImage.optional(),
    href: z.httpUrl().optional(),
    caption: z.string().trim().min(1).optional(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    featured: z.boolean().optional(),
    project: z.string().optional(),
    description: z.string().optional(),
    src: z.string().startsWith('/').optional(),
    poster: z.string().startsWith('/').optional(),
  }).superRefine((entry, context) => {
    if (entry.kind === 'video' && (!entry.src || !entry.poster)) {
      context.addIssue({ code: 'custom', message: 'A video entry needs src and poster.' });
    }
    if (entry.kind !== 'video' && !entry.cover) {
      context.addIssue({ code: 'custom', message: 'This entry needs a cover image.' });
    }
    if ((entry.kind === 'youtube' || entry.kind === 'instagram') && !entry.href) {
      context.addIssue({ code: 'custom', message: 'YouTube and Instagram entries need an href.' });
    }
  }),
});

export const collections = { projects, media };
