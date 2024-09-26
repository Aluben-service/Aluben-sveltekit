import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import { partytownVite } from "@builder.io/partytown/utils";

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: fileURLToPath(new URL("static/~partytown", import.meta.url)),
		}),
	],
	build: {
		rollupOptions: {
			external: ["express"], // Add other dependencies here if needed
		},
	},
});
