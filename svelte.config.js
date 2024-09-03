// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

export default {
	preprocess: preprocess(),
	kit: {
		// Configure paths to support both platforms
		paths: {
			base: dev ? '' : '', // You can set a base path if needed
			assets: dev ? '' : '',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null, // If you're using SvelteKit's routing with dynamic pages, consider setting a fallback like 'index.html'
			precompress: false,
			strict: true
		}),
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*'],
		}
	}
};

/*import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		// default options are shown
		adapter: adapter({
			edge: false,

			split: false
		})
	}
};*/