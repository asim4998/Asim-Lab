import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://asim-lab.vercel.app',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
