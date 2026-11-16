import { defineConfig } from 'astro/config';

// The deploy workflow sets SITE_URL and SITE_BASE from GitHub Pages, so the same build serves
// both the preview at the repository's github.io address (under /sequentia-site/) and, once the
// custom domain is set, https://sequentia.io at the root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://sequentia.io',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
});
