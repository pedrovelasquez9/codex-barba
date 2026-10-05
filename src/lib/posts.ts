import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

const WORDS_PER_MINUTE = 200;
const dateFormatter = new Intl.DateTimeFormat("es-ES", { dateStyle: "long", timeZone: "UTC" });

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime() || a.id.localeCompare(b.id)
  );
}

export function getPostSlug(post: Post): string {
  return post.id.split("/").pop() ?? post.id;
}

export function getPostUrl(post: Post): string {
  return `/${getPostSlug(post)}`;
}

export function getPostThumbnail(post: Post): string | undefined {
  const youtubeId = post.body?.match(/<YouTubeEmbed[^>]*?\bid="([^"]+)"/)?.[1];
  if (post.data.image) return post.data.image;
  return youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : undefined;
}

export function getReadingMinutes(post: Post): number {
  const wordCount = post.body?.split(/\s+/).length ?? 0;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}
