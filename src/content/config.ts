import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Dev Update', 'Industry News', 'Launch']),
    author: z.string().default('GydroGames'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
