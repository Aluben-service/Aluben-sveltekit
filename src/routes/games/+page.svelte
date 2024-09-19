<script>
	import { onMount } from "svelte";
	import "../../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
 import Head from "$lib/components/Head.svelte";

	onMount(() => {
		// Load external scripts
		const script1 = document.createElement("script");
		script1.src = "assets/js/games.js";
		script1.async = true;
		script1.defer = true;
		document.head.appendChild(script1);

		const script2 = document.createElement("script");
		script2.src = "https://scripts.simpleanalyticscdn.com/latest.js";
		script2.async = true;
		script2.defer = true;
		document.head.appendChild(script2);

		const noscript = document.createElement("noscript");
		const img = document.createElement("img");
		img.src = "https://queue.simpleanalyticscdn.com/noscript.gif";
		img.alt = "noscript";
		img.referrerPolicy = "no-referrer-when-downgrade";
		noscript.appendChild(img);
		document.body.appendChild(noscript);
		return () => clearInterval(interval);
	});
</script>

<Head />

<Navbar />

<br />
<a href="#nothingheretosee"
	><img
		id="logo"
		src="https://cdn.jsdelivr.net/gh/Aluben-service/Aluben_icons/iceland%20logo.png"
		alt="iceland logo"
	/></a
>
<br />
<input
	type="text"
	id="searchInput"
	placeholder="Search For A Game..."
	title="Search for a game"
/>
<br />
<button onclick="searchGames" class="button"
	>Search(For some reason onkeydown wont work)</button
>
<!-- <select id="category" name="category" on:change={showCategory}>
        <option value="all">All</option>
        <option value="2P">Multiplayer</option>
        <option value="sports">Sports</option>
        <option value="flash">Flash</option>
        <option value="local">Local</option>
    </select>-->

<h3 style="color: white;">Pinned Games</h3>
<div class="pinned" id="gamescontainer"></div>

<h3 style="color: white;">All Games</h3>
<div class="gamecontainer" id="games"></div>

<p id="copyright">© Aluben Services 2024 inc all rights reserved</p>

<style>
	:global(html) {
		width: 100%;
		height: 100%;
		background-color: black;
		text-align: center;
	}

	:global(.button) {
		background-color: #0b0724;
		color: floralwhite;
		border: 1px dotted rgb(43, 207, 21);
		border-radius: 5px;
		padding: 2px 4px;
		margin: 5px;
		cursor: pointer;
	}

	:global(.button:hover) {
		transition: 1000ms;
		padding: 2px 8px;
		transform: translateY(-0px);
		background-color: #0b0724;
		color: floralwhite;
		border: solid 3px rgb(252, 245, 115);
	}

	input[type="text"] {
		height: 2px;
		width: 480px;
		padding: 10px;
		border: 2px solid skyblue;
		border-radius: 5px;
	}

	#copyright {
		color: floralwhite;
	}

	#logo {
		width: 400px;
		height: 200px;
	}
</style>
