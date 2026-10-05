import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  // Site configuration
  site: 'https://codex-barba.com', // Replace with your actual domain
  
  // Content collections configuration for markdown files
  markdown: {
    shikiConfig: {
      // Choose a theme that matches the retro aesthetic
      theme: 'github-dark-high-contrast',
      // Optional: wrap code blocks to improve readability
      wrap: true,
    },
  },
  
  // In Astro 4+, content collections are stable and enabled by default
  // No need for experimental flags
});
