import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    position: z.number(),
    featured: z.boolean().default(false),
  }),
});

const materials = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/materials" }),
  schema: z.object({
    name: z.string(),
    status: z.literal("preliminary"),
    position: z.number(),
  }),
});

export const collections = { services, materials };
