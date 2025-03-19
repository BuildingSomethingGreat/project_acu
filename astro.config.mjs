import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [tailwindcss()]
  }
});