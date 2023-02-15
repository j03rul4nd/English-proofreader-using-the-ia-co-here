import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: 'https://j03rul4nd.github.io',
  base: '/English-proofreader-using-the-ia-co-here',
});