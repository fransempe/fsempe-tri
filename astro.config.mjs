import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// Actualizá `site` con tu dominio al publicar (p. ej. Netlify / Vercel).
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [mdx(), tailwind()]
});