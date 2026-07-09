import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Central tag vocabulary: a post using a tag not listed here fails the build.
// Tags are matched case-insensitively and stored lowercase.
export const APPROVED_TAGS = [
	// site vocabulary
	"agents",
	"career",
	"harness",
	"inference",
	"infra",
	// demo-content tags — delete alongside the demo posts
	"admonitions",
	"astro",
	"blog",
	"example",
	"image",
	"markdown",
	"social",
	"test",
	"webmentions",
] as const;

const titleSchema = z.string().max(60);

const baseSchema = z.object({
	title: titleSchema,
});

const post = defineCollection({
	// template/ holds the copy-me post skeleton and is excluded from the collection
	loader: glob({ base: "./content/blogs", pattern: ["**/*.{md,mdx}", "!**/template/**"] }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			tags: z
				.array(z.preprocess((val) => String(val).toLowerCase(), z.enum(APPROVED_TAGS)))
				.default([])
				.transform((arr) => [...new Set(arr)]),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			pinned: z.boolean().default(false),
		}),
});

const tag = defineCollection({
	loader: glob({ base: "./content/tags", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: titleSchema.optional(),
		description: z.string().optional(),
	}),
});

export const collections = { post, tag };
