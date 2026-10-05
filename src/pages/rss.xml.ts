import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPostUrl, getPublishedPosts } from "../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: "Codex Barba",
    description: "Una wiki retro hecha con café, Astro y NES.css por Programación en español.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: getPostUrl(post),
      categories: post.data.tags,
    })),
    customData: "<language>es-es</language>",
  });
}
