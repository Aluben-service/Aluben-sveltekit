import { fileURLToPath } from "url";
import { join } from "path";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { partytownVite } from "@builder.io/partytown/utils";
import { ChemicalVitePlugin } from "chemicaljs";

// Convert module URL to path in ES modules
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: join(__dirname, "static", "~partytown"),
		}),
		ChemicalVitePlugin({ meteor: false }),
	],
	build: {
		rollupOptions: {
			external: ["express"], // External dependencies
		},
	},
});
