import { fileURLToPath } from 'url';
import { join } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils';
import { ChemicalVitePlugin } from 'chemicaljs';

// Get the __dirname equivalent in ES modules
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    sveltekit(),
    partytownVite({
      dest: join(__dirname, 'static', '~partytown'),  // Correctly join the path
    }),
    ChemicalVitePlugin()
  ],
  build: {
    rollupOptions: {
      external: ['express'],  // Optional: external dependencies like express
    },
  },
});
