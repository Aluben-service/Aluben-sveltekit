import { join } from "path";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { partytownVite } from "@builder.io/partytown/utils";
import { ChemicalVitePlugin } from "chemicaljs";

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: join("static", "~partytown"),
		}),
		ChemicalVitePlugin({ meteor: false }),
	],
	// Optional: if you need to specify external dependencies for bundling
	build: {
		rollupOptions: {
			external: ["express"], // Add other dependencies here if needed
		},
	},
});
