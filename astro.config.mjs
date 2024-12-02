import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import react from '@astrojs/react';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug],
    shikiConfig: {
      theme: 'github-light'
    }
  },
  integrations: [react()]
});