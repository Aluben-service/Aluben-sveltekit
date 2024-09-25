import { fileURLToPath } from 'url';
import { join } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils';
import { ChemicalVitePlugin } from 'chemicaljs';

// Convert module URL to path in ES modules
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    sveltekit(),
    partytownVite({
      dest: join(__dirname, 'static', '~partytown'),
    }),
<<<<<<< HEAD
    ChemicalVitePlugin()
=======
    ChemicalVitePlugin({meteor: false})
>>>>>>> 1d870e77f60955671deb4a9f0c66584015a00e42
  ],
  build: {
    rollupOptions: {
      external: ['express'],  // External dependencies
    },
  },
});
