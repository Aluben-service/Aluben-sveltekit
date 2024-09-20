<script>
<<<<<<< HEAD
    import { onMount } from "svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import "../../app.css";

    let searchInput = "";
    let pinnedGames = [];
    let allGames = [];

||||||| 60487ca
	import { onMount } from "svelte";
import "../../app.css"
	import Navbar from "$lib/components/Navbar.svelte";

	onMount(() => {

		// Load external scripts
		const script1 = document.createElement("script");
		script1.src = "assets/js/games.js";
		script1.async = true;
		script1.defer = true;
		document.head.appendChild(script1);
=======
	import { onMount } from "svelte";
	import "../../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import GamesHead from "$lib/components/GamesHead.svelte";
	onMount(() => {
		// Load external scripts
		const script1 = document.createElement("script");
		script1.src = "assets/js/games.js";
		script1.async = true;
		script1.defer = true;
		document.head.appendChild(script1);
>>>>>>> stable

    // Function to load external scripts
    onMount(() => {
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

        // Noscript handling (could be kept declarative in the body)
        const noscript = document.createElement("noscript");
        const img = document.createElement("img");
        img.src = "https://queue.simpleanalyticscdn.com/noscript.gif";
        img.alt = "noscript";
        img.referrerPolicy = "no-referrer-when-downgrade";
        noscript.appendChild(img);
        document.body.appendChild(noscript);
    });
</script>

<<<<<<< HEAD
<svelte:head>
    <meta charset="utf-8" />
    <link rel="canonical" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="stylesheet" href="assets/css/gamecard.css" />
    <meta name="description" content="A proxy with custom unblockers and built-in games." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="/assets/lib/fontawesome.js" defer></script>
    <script src="/assets/lib/sweetAlerts.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js" integrity="sha512-+BMamP0e7wn39JGL8nKAZ3yAQT2dL5oaXWr4ZYlTGkKOaoXM/Yj7c4oy50Ngz5yoUutAG17flueD4F6QpTlPng==" crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
	<script src="/assets/js/games.js" defer></script>
    <script src="/assets/js/main.js" defer></script>
	<link rel="manifest" href="manifest.json" />
</svelte:head>

||||||| 60487ca
<svelte:head>
	<meta charset="utf-8" />
	<link rel="canonical" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<link rel="stylesheet" href="assets/css/gamecard.css" />
	<!--<link rel="stylesheet" href="assets/css/styles.css" />-->
	<meta
		name="description"
		content="A good proxy with custom unblockers (that are completely different proxies) and a proxy list built in games it's amazing"
	/>
	<meta name="viewport" content="width=device-width" />
	<title>Error Page | Ebay</title>
	<link
		rel="icon"
		type="image/x-icon"
		href="https://www.ebay.com/favicon.ico"
	/>
	<script src="/assets/lib/fontawesome.js" defer></script>
	<script src="/assets/lib/sweetAlerts.js" defer></script>
	<link rel="manifest" href="manifest.json" />
</svelte:head>

=======
<GamesHead />
<!-- body content -->
>>>>>>> stable
<Navbar />

<<<<<<< HEAD
<!-- Main content -->
<div class="main-content">
    <img style="margin: 0 auto; display: block;" id="logo" src="https://cdn.jsdelivr.net/gh/Aluben-service/Aluben_icons/iceland%20logo.png" alt="iceland logo" />
||||||| 60487ca
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
<button onclick="searchGames();" class="button"
	>Search(For some reason onkeydown wont work)</button
>
<!-- <select id="category" name="category" on:change={showCategory}>
        <option value="all">All</option>
        <option value="2P">Multiplayer</option>
        <option value="sports">Sports</option>
        <option value="flash">Flash</option>
        <option value="local">Local</option>
    </select>-->
=======
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
>>>>>>> stable

    <input
        type="text"
        id="searchInput"
        bind:value={searchInput}
        placeholder="Search For A Game..."
        title="Search for a game"
    />

    <br />

    <button on:click={() => searchGames()} class="button">Search</button>

    <h3>Pinned Games</h3>
    <div class="pinned">
    </div>

    <h3>All Games</h3>
    <div class="gamecontainer">
    </div>

    <p id="copyright">© Aluben Services 2024 inc all rights reserved</p>
</div>

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
