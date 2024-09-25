<script>
	import { onMount } from "svelte";
	import Head from "$lib/components/Head.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import "../app.css";

	onMount(async () => {
		const response = await fetch("assets/json/say.json");
		const says = await response.json();
		let randomSplash = says[Math.floor(Math.random() * says.length)];

		if (randomSplash === "%GAMES_NUMBER%") {
			const games = await fetch(
				location.origin + "assets/json/games.json",
			).json();
			randomSplash = `There are ${games.length} games currently`;
		} else if (randomSplash === "%SPLASH_NUMBER%") {
			const splashCacheAll = await fetch("assets/json/say.json").json();
			randomSplash = `There are ${splashCacheAll.length} of these messages!`;
		}

		document.querySelector("#splash").textContent = randomSplash;
		var currentlink = 1;
		const proxiesContainer = document.getElementById("rammy");

		fetch("assets/json/rammerhead.json")
			.then((res) => res.json())
			.then((proxies) => {
				proxies.forEach((proxy) => {
					const proxyEl = document.createElement("option");
					proxyEl.textContent = "Link " + currentlink.toString();
					proxyEl.value = proxy;
					proxiesContainer.appendChild(proxyEl);
					currentlink++;
				});
			});
	});
	let time;
	// Function to start time and update every second
	function startTime() {
		const today = new Date();
		const h = today.getHours();
		let m = today.getMinutes();
		let s = today.getSeconds();
		m = m < 10 ? `0${m}` : m;
		s = s < 10 ? `0${s}` : s;
		const timeStr = `${h}:${m}:${s}`;
		time = timeStr;
		setTimeout(startTime, 1000);
	}
	startTime();
</script>

<Head />

<!-- Body content -->
<Navbar />

<div id="grass" style="display: none;">
	<p>no world zero</p>
	<h1>touch grass</h1>
</div>
<main id="main" style="display: block;">
	<input
		autofocus
		spellcheck="false"
		autocomplete="off"
		id="search"
		data-frame="web"
		data-auto-https
		data-search-engine="https://www.google.com/search?q=%s"
		placeholder="Search or Enter a URL"
		is="chemical-input"
	/>

	<section id="controls" is="chemical-controls">
		<button on:click={() => chemicalAction("back", "web")}>Back |</button>
		<button on:click={() => chemicalAction("forward", "web")}>
			Forward |</button
		>
		<button on:click={() => open(document.getElementById("web").src)}>
			Open in a new tab |</button
		>
		<button on:click={() => chemicalAction("reload", "web")}>
			Reload |</button
		>
		<button on:click={() => chemicalAction("close", "web")}>
			Close |</button
		>
	</section>

	<iframe
		id="web"
		style="
    width: 100%;
    height: 100%;
	position: fixed;"
		data-controls="controls"
		is="chemical-iframe"
	></iframe>
	<p id="say"></p>

	&copy; Aluben Services 2024 inc all rights reserved

	<div id="timer">
		<div id="txt"></div>
	</div>

	<section>
		<h2>Rammerhead</h2>
		<select id="rammy">
			<option disabled selected value="">Select a Link...</option>
		</select>
		<button
			class="button"
			onclick="window.location = (v => v && v)(document.getElementById('rammy').value);"
			>Go</button
		>
	</section>

	<section>
		<h2>Holy Unblocker</h2>
		<select id="holyub">
			<option disabled selected value="">Select a Link...</option>
			<option value="https://campusdirections.org/">Link 1</option>
			<option value="https://mathematicalsols.org/">Link 2</option>
			<option value="https://historicalanime.org/">Link 3</option>
			<option value="https://mournfully.info/">Link 4</option>
			<option value="https://totalmathway.com/">Link 5</option>
			<option value="https://thechefmethod.com/">Link 6</option>
			<option value="https://livrersurweb.net/">Link 7</option>
			<option value="https://obetenernav.com/">Link 8</option>
			<option value="https://televisionrepair.us/">Link 9</option>
			<option value="https://ur2ndlibrary.com/">Link 10</option>
		</select>
		<button
			class="button"
			onclick="window.location = (v => v && v)(document.getElementById('holyub').value);"
			>Go</button
		>
	</section>

	<p id="s!lol">
		go to the Aluben discord server and go to claim then type "s!lol" for a
		reward
	</p>
	<iframe title="proxied" style="display: none;" id="uv-frame"></iframe>
	<br />
	<p>{time}</p>
</main>

<style>
	/*
	:global(body) {
		background-color: black;
		color: white;
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
	}

	:global(.navbar) {
		flex-shrink: 0;
	}
	#uv-frame {
		width: 100%;
		height: 100%;
		border: none;
		display: none;
	}

	.desc {
		color: red;
		font-weight: bold;
		text-align: center;
	}

	#txt {
		color: red;
		font-weight: bolder;
		text-align: center;
	}

	section {
		margin: 20px;
		text-align: center;
	}
*/
</style>
