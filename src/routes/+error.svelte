<script>
	import Head from "$lib/components/Head.svelte"; // Adjust the import path as necessary
	import Navbar from "$lib/components/Navbar.svelte"; // Adjust the import path as necessary
	import { onMount } from "svelte";
	let showStats = false;

	let fullUrl = "Fetching...";
	let pageTitle = "Fetching...";
	let screenHeight = "Fetching...";
	let screenWidth = "Fetching...";
	let windowHeight = "Fetching...";
	let windowWidth = "Fetching...";
	let cookiesEnabled = "Fetching...";
	let userAgent = "Fetching...";
	let platform = "Fetching...";
	let onlineStatus = "Fetching...";
	let latitude = "Fetching...";
	let longitude = "Fetching...";
	let postal = "Fetching...";
	let timezone = "Fetching...";
	let ipv6 = "Fetching...";
	let ipv4 = "Fetching...";
	let networkIP = "Fetching...";

	onMount(() => {
		fullUrl = window.location.href;
		pageTitle = document.querySelector("title").textContent;
		screenHeight = `${screen.height}px`;
		screenWidth = `${screen.width}px`;
		windowHeight = `${window.innerHeight}px`;
		windowWidth = `${window.innerWidth}px`;
		cookiesEnabled = navigator.cookieEnabled;
		userAgent = navigator.userAgent;
		platform = navigator.platform;
		onlineStatus = navigator.onLine;

		fetch("https://ipapi.co/json/")
			.then((response) => response.json())
			.then((data) => {
				latitude = data.latitude;
				longitude = data.longitude;
				postal = data.postal;
				timezone = data.timezone;
				ipv6 = data.ip;
				networkIP = data.network;
			});

		fetch("https://api.ipify.org/?format=json")
			.then((response) => response.json())
			.then((data) => {
				ipv4 = data.ip;
			});
	});

	function toggleStats() {
		showStats = !showStats;
	}
</script>

<Head />

<Navbar />
<br />
<h1>Error 404</h1>
<p>
	Error 404 Page not found.
	<br />
	<button class="bounce" on:click={() => window.history.back()}
		>Go back</button
	>
	<button class="bounce" on:click={toggleStats}>Stats for nerds</button>
</p>
<br />
<br />
<br />
{#if showStats}
	<div id="sfn" class="message">
		Requested URL: <span>{fullUrl}</span><br />
		Page Title: <span>{pageTitle}</span><br />
		Screen height: <span>{screenHeight}</span><br />
		Screen width: <span>{screenWidth}</span><br />
		Window height: <span>{windowHeight}</span><br />
		Window width: <span>{windowWidth}</span><br />
		Cookies: <span>{cookiesEnabled}</span><br />
		IPv6: <span>{ipv6}</span><br />
		IPv4: <span>{ipv4}</span><br />
		Network IP: <span>{networkIP}</span><br />
		User agent: <span>{userAgent}</span><br />
		OS platform: <span>{platform}</span><br />
		Longitude: <span>{longitude}</span><br />
		Latitude: <span>{latitude}</span><br />
		Postal Code: <span>{postal}</span><br />
		Timezone: <span>{timezone}</span><br />
		Online: <span>{onlineStatus}</span><br />
		Error code: 404<br />
	</div>
{/if}

<!-- 100% privacy-first analytics -->
<noscript
	><img
		src="https://queue.simpleanalyticscdn.com/noscript.gif"
		alt=""
		referrerpolicy="no-referrer-when-downgrade"
	/></noscript
>

<style>
	:global(body) {
		text-align: center;
	}
	h1 {
		position: relative;
		left: 0;
	}
	p {
		font-size: 20px;
		position: relative;
		left: 0;
		top: 20px;
	}
</style>
