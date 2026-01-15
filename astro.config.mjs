import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidefella.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
