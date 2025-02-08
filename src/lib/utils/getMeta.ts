import { render, type CollectionEntry } from "astro:content";

import { SITE } from "../config";
import defaultImage from "~/assets/images/default-image.jpg";
import type { ArticleMeta, Meta } from "../types";
import { capitalizeFirstLetter } from "./letter";

type getMeta = CollectionEntry<"articles" | "views">;

export const getMeta = async (
  collection: getMeta,
  category?: string
): Promise<Meta | ArticleMeta> => {
  try {
    if (collection.collection === "articles") {
      const { remarkPluginFrontmatter } = await render(collection);
      // const authors = authorsHandler.getAuthors(collection.data.authors);

      return {
        title: `${capitalizeFirstLetter(collection.data.title)} - ${
          SITE.title
        }`,
        metaTitle: capitalizeFirstLetter(collection.data.title),
        description: collection.data.description,
        // keywords: collection.data.keywords, // <-- Added keywords here
        keywords: collection.data.keywords ?? "no-keywords-found", // <-- Added keywords here
        ogImage: collection.data.cover.src,
        ogImageAlt: collection.data.covert_alt
          ? collection.data.covert_alt
          : collection.data.title,
        publishedTime: collection.data.publishedTime,
        lastModified: remarkPluginFrontmatter.lastModified,
        // authors: authors.map((author) => ({
        //   name: author.data.name,
        //   link: `${author.id}`,
        // })),
        type: "article",
      };
    }

    if (collection.collection === "views") {
      const title =
        collection.id === "categories" && category
          ? `${capitalizeFirstLetter(category)}  - ${SITE.title}`
          : collection.id === "home"
          ? SITE.title
          : `${capitalizeFirstLetter(collection.data.title)} - ${SITE.title}`;

      return {
        title: title,
        metaTitle: capitalizeFirstLetter(collection.data.title),
        description: collection.data.description,
        keywords: collection.data.keywords ?? "",
        ogImage: defaultImage.src,
        ogImageAlt: SITE.title,
        type: "website",
      };
    }

    throw new Error("Invalid collection");
  } catch (error) {
    console.error("Error generating metadata:", error);
    throw error;
  }
};
