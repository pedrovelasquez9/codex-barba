# Codex Barba

A retro, 8-bit styled wiki by [Programación en español](https://programacion-es.dev), built with **Astro**, **MDX** and **NES.css**. It hosts the articles, diagrams and supporting material for the community's video tutorials.

## Requirements

- Node.js **22.12.0** or newer

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server |
| `npm run build` | Builds the site into `dist/` and indexes it with Pagefind |
| `npm run preview` | Serves `dist/` locally (the search page only works here, after a build) |

## Project structure

```
src/
├── components/        UI components (cards, side menu, YouTube embed, post images…)
├── content/posts/     Articles, one folder per topic (.mdx)
├── content.config.ts  Post schema
├── layouts/           BaseLayout (head, header, side menu, footer)
├── lib/               Post and category helpers
├── pages/             Routes: home, blog, categories, posts, search, RSS, 404
└── styles/global.css  Design tokens and typography
public/
├── diagrams/          Diagrams linked from the articles
└── screenshots/       Screenshots linked from the articles
```

## Writing a post

Create an `.mdx` file inside the topic folder in `src/content/posts/`. The file name becomes the URL (`singleton-pattern.mdx` → `/singleton-pattern`), so it must be unique across all folders.

```mdx
---
title: Patrón Singleton
description: Qué es el patrón Singleton y cuándo usarlo.
publishDate: 2026-10-05
tags: ["patrones de diseño"]
---

import PostImage from "../../../components/PostImage.astro";
import YouTubeEmbed from "../../../components/YoutubeEmbed.astro";

## ¿Cómo funciona?

<YouTubeEmbed id="VIDEO_ID" title="Patrón Singleton" />

<PostImage src="/diagrams/Singleton.png" alt="Diagrama del patrón Singleton" />
```

- The title is rendered by the layout: start the content with `##` headings, not `#`.
- `tags` decide the post's category. Valid tags and their colors live in `src/lib/categories.ts`.
- Add `draft: true` to keep a post out of the build.
- Put images in `public/diagrams` or `public/screenshots` and show them with `<PostImage>`, which reads their real size and lazy-loads them.
- `<YouTubeEmbed>` shows the thumbnail and only loads the player when the reader clicks it.

## Contributing

Fork the repository and open your pull request against the `develop` branch. Keep the NES.css retro style across the interface. Branches, code and commit messages are written in English; the site copy is in Spanish.

## License

MIT
