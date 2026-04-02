import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gydrogames.com',
  image: {
    // Use sharp for image optimization
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
