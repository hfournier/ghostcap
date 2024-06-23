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
    authorId: z.number().optional(),
    categories: z.array(reference("categories")).optional(),
    categoryIds: z.array(z.number()).optional(),
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

const Author = z.object({
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
});

const Category = z.object({
  wpId: z.number(),
  count: z.number(),
  name: z.string(),
  description: z.string(),
  parentId: z.number(),
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
