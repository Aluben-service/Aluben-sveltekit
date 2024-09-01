import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/css/buttons.css","assets/css/gamecard.css","assets/css/input.css","assets/css/other.css","assets/css/styles.css","assets/css/text.css","assets/css/ultraviolet.css","assets/dynamic/dynamic.client.js","assets/dynamic/dynamic.client.js.map","assets/dynamic/dynamic.config.js","assets/dynamic/dynamic.handler.js","assets/dynamic/dynamic.handler.js.map","assets/dynamic/dynamic.html.js","assets/dynamic/dynamic.html.js.map","assets/dynamic/dynamic.worker.js","assets/dynamic/dynamic.worker.js.map","assets/js/games.js","assets/js/main.js","assets/js/proxies.js","assets/js/script.js","assets/js/scripts.js","assets/js/settings.js","assets/json/games.json","assets/json/rammerhead.json","assets/json/say.json","assets/lib/ABC.js","assets/lib/analytics.js","assets/lib/fontawesome.js","assets/lib/jquery.js","assets/lib/sweetAlerts.js","baremux/BareClient.d.ts","baremux/BareTypes.d.ts","baremux/RemoteClient.d.ts","baremux/Switcher.d.ts","baremux/bare.cjs","baremux/bare.cjs.map","baremux/bare.js","baremux/index.d.ts","baremux/index.js","baremux/index.js.map","baremux/snapshot.d.ts","baremux/webSocket.d.ts","epoxy/index.js","epoxy/module.js","error.js","index.js","manifest.json","register-sw.js","search.js","ultraviolet/sw.js","ultraviolet/uv.bundle.js","ultraviolet/uv.bundle.js.map","ultraviolet/uv.client.js","ultraviolet/uv.client.js.map","ultraviolet/uv.config.js","ultraviolet/uv.handler.js","ultraviolet/uv.handler.js.map","ultraviolet/uv.sw.js","ultraviolet/uv.sw.js.map","web.png"]),
	mimeTypes: {".css":"text/css",".js":"text/javascript",".map":"application/json",".json":"application/json",".ts":"video/mp2t",".cjs":"application/node",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CTlFiwgI.js","app":"_app/immutable/entry/app.BkFSd1W5.js","imports":["_app/immutable/entry/start.CTlFiwgI.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/entry/app.BkFSd1W5.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/chunks/index.xJD1ZUQl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Fart",
				pattern: /^\/Fart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/byeblock",
				pattern: /^\/byeblock\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/games",
				pattern: /^\/games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/play",
				pattern: /^\/play\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
