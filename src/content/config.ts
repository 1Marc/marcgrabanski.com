import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    postTitle: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.string().transform((str) => new Date(str)),
    isDraft: z.boolean(),
    isArchived: z.boolean(),
    layout: z.string(),
  }),
});

export const collections = { articles };
