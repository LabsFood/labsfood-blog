// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { frenchTypoPlugin } from './src/lib/typo.mjs';

// Servi sur https://blog.labsfood.fr/guides (service Railway séparé).
export default defineConfig({
  site: 'https://blog.labsfood.fr',
  base: '/guides',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  // Espaces insécables à la française dans le corps des articles.
  markdown: { processor: satteri({ mdastPlugins: [frenchTypoPlugin] }) },
});
