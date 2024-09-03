<script>
	// Import the necessary external scripts (handled outside of Svelte)
	import { onMount } from "svelte";

	import Head from "$lib/components/Head.svelte";
	import Navbar from "$lib/components/Navbar.svelte";

	import Flamethrower from "flamethrower-router";

	onMount(() => {
		const router = new Flamethrower({
			prefetch: "all", // or 'hover', 'intent', 'none'
			log: true, // Enable or disable logging
			pageTransition: false, // Enable page transitions
		});
	});
</script>

<Head />

<!-- Body content -->
<Navbar />

<div id="grass" style="display: none;">
	<p>no world zero</p>
	<h1>touch grass</h1>
</div>

<div id="main" style="display: block;">
	<br />
	<br />
	<form id="uv-form" class="flex-center">
		<input
			id="uv-search-engine"
			value="https://www.google.com/search?q=%s"
			type="hidden"
		/>
		<input
			id="uv-address"
			type="text"
			placeholder="Search the web freely"
		/>
	</form>
	<p id="splash"></p>
	<div class="desc left-margin">
		<p id="uv-error"></p>
		<pre id="uv-error-code"></pre>
	</div>

	<p id="say"></p>

	&copy; Aluben Services 2024 inc all rights reserved

	<div id="timer">
		<div id="txt"></div>
	</div>

	<section>
		<h2>Rammerhead</h2>
		<select id="rammy"></select>
		<button
			onclick="window.location = (v => v && v)(document.getElementById('rammy').value);"
			>Go</button
		>
	</section>

	<section>
		<h2>Holy Unblocker</h2>
		<select id="holyub">
			<option value="">Select a Link...</option>
			<option value="https://www.holyubofficial.net/"
				>Holy Unblocker</option
			>
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
			onclick="window.location = (v => v && v)(document.getElementById('holyub').value);"
			>Go</button
		>
	</section>

	<div id="traf-say">
		<a href="Fart"><span class="stinky">traf</span></a>
	</div>
	<div id="7689" style="display: none;">
		go to the Aluben discord server and go to claim then type "7689" for a
		reward
	</div>
</div>

<iframe title="proxied" style="display: none;" id="uv-frame"></iframe>

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
</style>
