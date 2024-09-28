<script>
	import { onMount } from "svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import "../../app.css";
	import GamesHead from "$lib/components/GamesHead.svelte";

	let searchInput = "";
	let pinnedApps = [];
	let allApps = [];

	// Function to load external scripts
	onMount(() => {
		const script1 = document.createElement("script");
		script1.src = "assets/js/apps.js";
		script1.async = true;
		script1.defer = true;
		document.head.appendChild(script1);
	});
</script>

<GamesHead />
<!-- body content -->

<Navbar />

<!-- Main content -->
<input
	type="text"
	on:keyup={() => searchApps()}
	id="searchInput"
	placeholder="Search For A Game..."
	title="Search for a game"
/>
<select id="category" name="category" on:change={() => showCategory()}>
	<option value="all">All</option>
	<option value="2P">Multiplayer</option>
	<option value="sports">Sports</option>
	<option value="flash">Flash</option>
	<option value="local">Local</option>
</select>

<h3>Pinned Apps</h3>
<div class="pinned"></div>

<h3>All Apps</h3>
<div class="gamecontainer"></div>

<p id="copyright">© Aluben Services 2024 inc all rights reserved</p>

<style>
	:global(html) {
		width: 100%;
		height: 100%;
		background-color: black;
		text-align: center;
	}
	/*
    .button {
        background-color: #0b0724;
        color: floralwhite;
        border: 1px dotted rgb(43, 207, 21);
        border-radius: 5px;
        padding: 2px 4px;
        margin: 5px;
        cursor: pointer;
    }

    .button:hover {
        transition: 1000ms;
        padding: 2px 8px;
        transform: translateY(-0px);
        background-color: #0b0724;
        color: floralwhite;
        border: solid 3px rgb(252, 245, 115);
    }
*/
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
	/*

    .game {
        margin: 5px;
        padding: 10px;
        background-color: #333;
        color: white;
        border-radius: 5px;
        width: 100px;
        text-align: center;
    }*/
</style>
