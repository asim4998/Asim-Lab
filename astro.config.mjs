import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://asim-lab.vercel.app',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
