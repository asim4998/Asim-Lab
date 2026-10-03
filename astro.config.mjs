import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeLazyImages } from './src/plugins/rehype-lazy-images.mjs';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://asim-lab.vercel.app',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeLazyImages],
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
});
