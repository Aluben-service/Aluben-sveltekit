<script>
	import { onMount } from "svelte";
	import Navbar from "$lib/components/Navbar.svelte"; // Adjust the import path as necessary
	import localforage from "localforage";
	import "../../app.css";

	// Function definitions
	function fullscreen() {
		const iframe = document.getElementById("game-frame");
		if (!iframe) return;

		if (iframe.requestFullscreen) iframe.requestFullscreen();
		else if (iframe.webkitRequestFullscreen)
			iframe.webkitRequestFullscreen();
		else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
		else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
	}

	onMount(async () => {
		try {
			// Set driver explicitly
			await localforage.setDriver([
				localforage.INDEXEDDB,
				localforage.LOCALSTORAGE,
				localforage.WEBSQL,
			]);
			console.log("Driver set to IndexedDB or LocalStorage or WebSQL");

			const game = await localforage.getItem("currentgame");
			if (game) {
				document.getElementById("gamename").textContent =
					game.name || "";
				document.getElementById("gamedesc").textContent =
					game.desc || "";
				document.getElementById("game-frame").src = game.url || "";
			}
		} catch (err) {
			console.error("Error with localForage:", err);
		}

		document.addEventListener("keydown", (event) => {
			if (event.code === "KeyF") fullscreen();
		});
	});
</script>

<!--<Head/>-->
<svelte:head>
	<link rel="canonical" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<link
		rel="icon"
		type="image/x-icon"
		href="https://www.ebay.com/favicon.ico"
	/>
	<title>Error Page | Ebay</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="manifest" href="manifest.json" />
	<meta
		name="description"
		content="A good proxy with custom unblockers(that are completly different proxies) and a proxy list built in games it's amazing"
	/>
</svelte:head>

<Navbar />
<div class="container">
	<h3 style="color: white;" id="gamename"></h3>
	<p style="color: white;" id="gamedesc"></p>
	<iframe
		src=""
		title="Game Frame"
		id="game-frame"
		scrolling="yes"
		frameborder="0"
		cellspacing="0"
	></iframe>
	<div class="controls">
		<div id="flbutton">
			<a href="#" class="flbtn" on:click={() => fullscreen()}
				><i class="fa-solid fa-expand"></i></a
			>
		</div>
		<i class="fa-solid fa-code hack"></i>
	</div>
</div>

<style>
	:global(html) {
		width: 100%;
		height: 100%;
		background-color: black;
		text-align: center;
		font-family: "Montserrat", sans-serif;
		background: rgb(2, 0, 36);
		background: linear-gradient(
			90deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(9, 9, 121, 1) 35%,
			rgba(0, 212, 255, 1) 100%
		);
	}

	.container {
		margin-top: 10%;
		font-family: "Comfortaa", sans-serif;
		font-size: 50px;
		color: #6886ed;
	}

	.flbtn {
		color: black;
		font-family: "Montserrat", sans-serif;
		text-transform: uppercase;
		text-decoration: none;
		padding: 12px 0;
		border: 2px solid #0f0f0f;
		border-radius: 0.5rem;
		text-align: center;
		box-shadow: 0px 5px 10px 0px #2e2e2e;
		display: inline-block;
		font-size: 16px;
		padding: 8px 16px;
		background-color: #2e2e2e; /* Darker background color for normal state */
		color: white;
	}

	.flbtn:hover {
		background-color: #3e3e3e;
		color: white;
	}

	.flbtn:active {
		background-color: #3e3e3e;
		color: black;
	}

	#flbutton {
		position: fixed;
		bottom: 20px;
		left: 6px;
	}

	:global(.controls #hack) {
		position: relative;
		display: none;
	}

	.controls i.hack {
		background-color: #006bcf;
		color: #fff;
		text-shadow: none;
		margin: 0.5vw;
		padding: 0.5vw;
		border-radius: 0.5vw;
		font-size: 16px;
		padding: 8px;
	}

	:global(.controls #hack:hover h3) {
		opacity: 1;
		z-index: 9999;
		transition: opacity 0.2s ease;
	}

	:global(.controls span h3) {
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		transition: opacity 0.2s ease;
		opacity: 0;
		background-color: #292929ee;
		padding: 0.2vw 0.5vw;
		margin-top: -0.2vw;
		border-radius: 0.5vw;
		box-shadow: 0 0 5px #181818;
		font-size: 1vw;
		cursor: pointer;
		width: max-content;
		text-align: center;
	}

	:global(#closeButton) {
		position: absolute;
		right: 15px;
		top: 15px;
		z-index: 69420;
		width: 40px;
		height: 40px;
	}

	iframe {
		width: 80%;
		height: 600px;
		margin: 0 auto;
		display: block;
		border: 2vw solid black;
		border-radius: 1vw;
	}
</style>
