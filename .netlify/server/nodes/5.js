

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/games/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.4Gl9MqaW.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/chunks/index.xJD1ZUQl.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Navbar.5fWAdbdk.js"];
export const stylesheets = ["_app/immutable/assets/5.CvVg2X6g.css","_app/immutable/assets/Navbar.6Robab-w.css"];
export const fonts = [];
