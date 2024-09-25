"use strict";
/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */
const stockSW = "/ultraviolet/sw.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http://
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
const registerSW = async () => {
	if (!navigator.serviceWorker) {
		if (
			location.protocol !== "https:" &&
			!swAllowedHostnames.includes(location.hostname)
		)
			throw new Error(
				"Service workers cannot be registered without https.",
			);

		throw new Error("Your browser doesn't support service workers.");
	}

	await navigator.serviceWorker.register(stockSW, {
		scope: __uv$config.prefix,
	});

	// This is the line you change to change the wisp server (essential for static hosting ofc)
	//let wispUrl = "wss://phantom.lol/wisp/";
<<<<<<< HEAD
	await fetch("https://wispserver.onrender.com");
	let wispUrl = "https://wispserver.onrender.com/";
=======
	let wispUrl = "wss://wispserver.onrender.com/wisp/";
>>>>>>> 5a6388dbd2c2c861fc3d5009f510a5618c19540f
	BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: wispUrl });
	//BareMux.SetTransport("CurlMod.LibcurlClient", { wisp: wispUrl });
};
