<script lang="ts">
	import { onMount } from "svelte";
	import Head from "$lib/components/Head.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import "../app.css";

	let randomSplash = "";
	let time = "";
	let rammerheadLinks: string[] = [];

	onMount(async () => {
		const response = await fetch("assets/json/say.json");
		const says = await response.json();
		randomSplash = says[Math.floor(Math.random() * says.length)];

		if (randomSplash === "%GAMES_NUMBER%") {
			const games = await fetch(
				`${location.origin}/assets/json/games.json`,
			).then((res) => res.json());
			randomSplash = `There are ${games.length} games currently`;
		} else if (randomSplash === "%SPLASH_NUMBER%") {
			randomSplash = `There are ${says.length} of these messages!`;
		}

		// Fetch Rammerhead links
		const rammerheadResponse = await fetch("assets/json/rammerhead.json");
		rammerheadLinks = await rammerheadResponse.json();

		startTime();
	});

	function startTime() {
		const updateTime = () => {
			const today = new Date();
			const h = today.getHours();
			let m: string | number = today.getMinutes();
			let s: string | number = today.getSeconds();
			m = m < 10 ? `0${m}` : m;
			s = s < 10 ? `0${s}` : s;
			time = `${h}:${m}:${s}`;
			setTimeout(updateTime, 1000);
		};
		updateTime();
	}

	function goToLink(selectId: string) {
		const select = document.getElementById(selectId) as HTMLSelectElement;
		const value = select.value;
		if (value) {
			window.location.href = value;
		}
	}
</script>

<Head />

<Navbar />

<main id="main">
	<input
		spellcheck="false"
		autocomplete="off"
		id="search"
		data-frame="web"
		data-auto-https
		data-search-engine="https://www.google.com/search?q=%s"
		placeholder="Search or Enter a URL"
		is="chemical-input"
	/>

	<iframe
		id="web"
		data-controls="controls"
		is="chemical-iframe"
		title="Web content"
		style="display: none;"
	></iframe>

	<p id="splash">{randomSplash}</p>

	<p>&copy; Aluben Services 2024 inc all rights reserved</p>

	<div id="timer">
		<div id="txt">{time}</div>
	</div>

	<section>
		<h2>Rammerhead</h2>
		<select id="rammy">
			<option disabled selected value="">Select a Link...</option>
			{#each rammerheadLinks as link, index}
				<option value={link}>Link {index + 1}</option>
			{/each}
		</select>
		<button class="button" on:click={() => goToLink("rammy")}>Go</button>
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
		<button class="button" on:click={() => goToLink("holyub")}>Go</button>
	</section>

	<p id="s!lol">
		go to the Aluben discord server and go to claim then type "s!lol" for a
		reward
	</p>
</main>

<style>
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

	main {
		padding: 20px;
	}

	section {
		margin: 20px 0;
		text-align: center;
	}

	#txt {
		color: red;
		font-weight: bolder;
		text-align: center;
	}

	button {
		margin: 0 5px;
	}

	iframe {
		width: 100%;
		height: 500px;
		border: none;
	}
</style>
