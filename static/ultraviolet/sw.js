//importScripts('/libcurl/index.cjs');
importScripts('/epoxy/index.js');
importScripts('/ultraviolet/uv.bundle.js');
importScripts('/ultraviolet/uv.config.js');
importScripts('/ultraviolet/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));