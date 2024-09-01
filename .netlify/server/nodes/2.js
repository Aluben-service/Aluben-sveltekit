

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BDOlBfAS.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/chunks/index.xJD1ZUQl.js","_app/immutable/chunks/Head.v6D1ZhHV.js","_app/immutable/chunks/Navbar.5fWAdbdk.js"];
export const stylesheets = ["_app/immutable/assets/2.CfmXOtZ4.css","_app/immutable/assets/Navbar.6Robab-w.css"];
export const fonts = [];
