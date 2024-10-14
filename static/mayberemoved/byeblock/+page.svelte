<script>
	import { onMount } from "svelte";
	import Navbar from "$lib/components/Navbar.svelte"; // Adjust the import path as necessary
	import "../../tailwind.css";

	let stars = [];
	let showMenu = true;

	onMount(() => {
		// Generate stars
		const numStars = 300;
		stars = Array.from({ length: numStars }, () => ({
			width: `${Math.random() * 3}px`,
			height: `${Math.random() * 3}px`,
			left: `${Math.random() * 100}vw`,
			top: `${Math.random() * 100}vh`,
		}));
	});

	function launchByeBlocker() {
		const link = prompt("Url?");
		const proxy = "https://api.codetabs.com/v1/proxy?quest=";

		fetch(proxy + link)
			.then((response) => response.text())
			.then((text) => document.write(text));

		const all = document.getElementsByTagName("*");
		for (let i = 0, max = all.length; i < max; i++) {
			if (all[i].src) {
				all[i].src = new URL(all[i].src, link).href;
				all[i].src = proxy + all[i].src;
			}
		}

		window.onbeforeunload = (e) => {
			e.preventDefault();
			alert(e.toString());
		};

		window.onhashchange = (e) => {
			e.preventDefault();
			alert(e);
			window.location = new URL(e.oldURL, e.newURL).href;
		};
	}

	function closeMenu() {
		showMenu = false;
	}
</script>

<Navbar />
<div id="background">
	{#each stars as star}
		<div
			class="star"
			style="
		  width: {star.width};
		  height: {star.height};
		  left: {star.left};
		  top: {star.top};
		"
		></div>
	{/each}
</div>

<div class="bottom-left">Tacogamerman on github</div>

{#if showMenu}
	<div class="menu">
		<div class="menu-content">
			<button
				type="button"
				class="close-button"
				on:click={closeMenu}
				aria-label="Close">&times;</button
			>
			<button on:click={launchByeBlocker}>Launch ByeBlocker</button>
		</div>
	</div>
{/if}

<style>
	.bottom-left {
		position: fixed;
		bottom: 0;
		left: 0;
		font-family: Arial, sans-serif;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.2);
		padding: 10px;
	}
	:global(body) {
		overflow: hidden;
		font-family: Arial, sans-serif;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	#background {
		position: absolute;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: radial-gradient(circle, rgb(0, 0, 0), rgb(1, 44, 42));
	}
	.star {
		position: absolute;
		background: rgb(57, 255, 215);
		border-radius: 50%;
		animation:
			sparkle 2s infinite,
			drift linear infinite;
	}
	@keyframes sparkle {
		0%,
		100% {
			opacity: 0;
			transform: scale(0);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
	}
	@keyframes drift {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(50px, -50px);
		}
	}
	.menu {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 9999;
		background-color: rgba(0, 255, 255, 0.2);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		border-radius: 5px;
		width: 200px;
	}
	.menu-content {
		padding: 10px;
	}
	.close-button {
		float: right;
		cursor: pointer;
		color: #333;
	}
	button {
		font-family: Arial;
		font-size: 16px;
		color: #fff;
		background-color: #333;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		margin-top: 10px;
		cursor: pointer;
	}
</style>
