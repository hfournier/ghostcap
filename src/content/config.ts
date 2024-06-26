import {
  defineCollection,
  reference,
  z,
  type SchemaContext,
} from "astro:content";

const Content = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    type: z.string(),
    createdAt: z.date(),
    modifiedAt: z.date(),
    author: reference("authors").optional(),
    categories: z.array(reference("categories")).optional(),
    tagIds: z.array(z.number()).optional(),
    featuredMedia: z
      .object({
        id: z.number(),
        src: image(),
        alt: z.string(),
        caption: z.string().optional(),
      })
      .optional(),
  });

const Author = ({ image }: SchemaContext) =>
  z.object({
    wpId: z.number(),
    name: z.string(),
    url: z.string().optional(),
    description: z.string(),
    link: z.string().url().optional(),
    slug: z.string().optional(),
    avatar_urls: z
      .object({
        24: z.string().url(),
        48: z.string().url(),
        96: z.string().url(),
      })
      .optional(),
    social: z
      .object({
        facebook: z.string().url().optional(),
        youtube: z.string().url().optional(),
        twitch: z.string().url().optional(),
        twitter: z.string().url().optional(),
        discord: z.string().url().optional(),
      })
      .optional(),
    featuredMedia: z
      .object({
        src: image(),
        alt: z.string(),
        caption: z.string().optional(),
      })
      .optional(),
  });

const Category = z.object({
  wpId: z.number(),
  count: z.number(),
  name: z.string(),
  description: z.string(),
  parent: reference("categories").optional(),
  slug: z.string().optional(),
});

const Tag = z.object({
  wpId: z.number(),
  count: z.number(),
  name: z.string(),
  description: z.string().optional(),
  slug: z.string().optional(),
});

const postsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: Content,
});

const authorsCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: Author,
});

const categoriesCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: Category,
});

const tagsCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: Tag,
});

export const collections = {
  posts: postsCollection,
  authors: authorsCollection,
  categories: categoriesCollection,
  tags: tagsCollection,
};
