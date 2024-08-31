

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BLr2_Xx-.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/chunks/index.xJD1ZUQl.js"];
export const stylesheets = [];
export const fonts = [];
