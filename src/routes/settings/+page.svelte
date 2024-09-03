<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import Head from "$lib/components/Head.svelte";
	import { onMount } from "svelte";
	import Flamethrower from "flamethrower-router";
	import Swal from "sweetalert2";
	import localforage from "localforage";

	let selectedTheme;
	let currentCloak;
	let selectedEngine;
	let engineDisplay;
	let engineURL;

	async function initializeStorage() {
		try {
			await localforage.setDriver([
				localforage.INDEXEDDB, // Use IndexedDB first
				localforage.WEBSQL, // If IndexedDB is unavailable, use WebSQL
				localforage.LOCALSTORAGE, // If both IndexedDB and WebSQL are unavailable, use LocalStorage
			]);

			// Storage drivers successfully set
			selectedEngine = "Google";
			engineDisplay = "Google (Default)";
			engineURL = "https://www.google.com?igu=1";

			// Get items from localforage
			const [theme, cloak] = await Promise.all([
				localforage.getItem("theme"),
				localforage.getItem("cloak"),
			]);

			selectedTheme = theme || "N/A";
			currentCloak = cloak || "N/A";

			// Use selectedTheme and currentCloak here
		} catch (error) {
			console.error("Error initializing LocalForage:", error);
		}
	}

	async function customcloak(event) {
		await localforage.setItem("cloak", event.target.value);
	}

	function setEngine(name, url) {
		selectedEngine = name;
		engineDisplay = name;
		engineURL = url;
		document.getElementById("dropdownDisplay").innerText = engineDisplay;
		document.getElementById("dropdownContent").style.display = "none";
	}

	async function set_browser() {
		try {
			await localforage.setItem("se", engineURL);
			Swal.fire(`Your search engine is now ${engineDisplay}`);
		} catch (error) {
			console.error("Error setting browser:", error);
		}
	}

	async function set_theme() {
		try {
			await localforage.setItem("theme", selectedTheme);
			Swal.fire({
				text: `Your theme is now ${selectedTheme}`,
				icon: "success",
			});
		} catch (error) {
			console.error("Error setting theme:", error);
		}
	}

	async function set_cloak(event) {
		try {
			await localforage.setItem("cloak", event.target.value);
			location.reload();
		} catch (error) {
			console.error("Error setting cloak:", error);
		}
	}

	async function txtclrpicker(event) {
		await localforage.setItem("theme", "custom");
		await localforage.setItem("customTheme", {
			backcolor: "none",
			textcolor: event,
			style: 1,
		});
		location.reload();
	}

	function toggleDropdown() {
		const dropdown = document.getElementById("dropdownContent");
		dropdown.style.display =
			dropdown.style.display === "block" ? "none" : "block";
	}

	onMount(() => {
		initializeStorage();
		document
			.getElementById("dropdownDisplay")
			.addEventListener("click", toggleDropdown);
		window.onclick = (event) => {
			if (!event.target.matches(".dropdown-display")) {
				document.getElementById("dropdownContent").style.display =
					"none";
			}
		};
		const router = new Flamethrower({
			prefetch: "all", // or 'hover', 'intent', 'none'
			log: true, // Enable or disable logging
			pageTransition: false, // Enable page transitions
		});
	});
</script>

<Head />

<Navbar />

<h1>Settings</h1>

<div class="settings">
	<div class="settings-card">
		<div class="settings-card-header">Tab Cloak</div>
		<h1 class="settings-card-desc">
			This will disguise your tabs and make them look like Clever, Google
			Classroom, Schoology, etc.
		</h1>
		<div class="settings-card-content">
			<div class="settings-item">
				<select bind:value={currentCloak} on:change={set_cloak}>
					<option selected disabled value="N/A">Choose one</option>
					<option value="Google">Google</option>
					<option value="Drive">Drive</option>
					<option value="Classroom">Google Classroom</option>
					<option value="Schoology">Schoology</option>
					<option value="Gmail">Gmail</option>
					<option value="Clever">Clever</option>
					<option value="Khan">Khan Academy</option>
					<option value="Ebay">Ebay</option>
				</select>
				<input
					class="custom-input"
					type="text"
					on:input={customcloak}
					placeholder="Enter a custom tab name"
				/>
			</div>
		</div>
		<button class="settings-save-button">Save Settings</button>
	</div>

	<div class="settings-card">
		<div class="settings-card-header">Settings 2</div>
		<div class="settings-card-content">
			<div class="settings-item">
				<label for="feature4">Enable Feature 4</label>
				<input type="checkbox" id="feature4" class="settings-toggle" />
			</div>
			<div class="settings-item">
				<label for="feature5">Enable Feature 5</label>
				<input type="checkbox" id="feature5" class="settings-toggle" />
			</div>
			<div class="settings-item">
				<label for="feature6">Enable Feature 6</label>
				<input type="checkbox" id="feature6" class="settings-toggle" />
			</div>
		</div>
		<button class="settings-save-button">Save Settings</button>
	</div>
	<!-- Add more cards as needed -->
</div>

<!--
<h3>Themes:</h3>
<select bind:value={selectedTheme} id="themes">
    <option value="N/A">Choose a theme</option>
    <option value="Dark">Dark</option>
    <option value="Light">Light</option>
    <option value="Twilight">Twilight</option>
    <option value="Ocean">Ocean</option>
    <option value="McDonald's">McDonald's</option>
    <option value="UnderGround">Underground</option>
    <option value="SunnyDay">Sunny Day</option>
    <option value="StormyDay">Stormy Day</option>
    <option value="Grassland">Grassland</option>
    <option value="custom_theme">custom</option>
</select>
<button on:click={set_theme}>Save</button>

<div>
	<h3>Text color</h3>
	<input
		type="color"
		id="picker"
		name="picker"
		on:change={(e) => txtclrpicker(e.target.value)}
	/>
	<h5>Hex code:</h5>
	<input
		type="text"
		id="picker"
		name="picker"
		on:change={(e) => txtclrpicker(e.target.value)}
	/>
</div>
<br /><br />
-->

<h3>Panic key/url</h3>
<input id="panickey" placeholder="key..." />
<input id="panicurl" placeholder="url..." />
<button
	on:click={() => {
		localforage.setItem(
			"panicurl",
			"https://" + document.getElementById("panicurl").value,
		);
		localforage.setItem(
			"panickey",
			document.getElementById("panickey").value,
		);
	}}>Save</button
>

<h3>default search engine</h3>
<div class="dropdown">
	<div class="dropdown-display" id="dropdownDisplay">{engineDisplay}</div>
	<div class="dropdown-content" id="dropdownContent">
		<button
			class=".button"
			on:click={() =>
				setEngine("Google", "https://www.google.com/search?q=")}
			>Google (Default)</button
		>
		<button
			class=".button"
			on:click={() =>
				setEngine("Wikipedia", "https://en.wikipedia.org/wiki/")}
			>Wikipedia</button
		>
		<button
			class=".button"
			on:click={() =>
				setEngine(
					"Gogoprivate",
					"https://gogoprivate.com/search?#gsc.q=",
				)}>Gogoprivate</button
		>
		<button
			class=".button"
			on:click={() => setEngine("Bing", "https://www.bing.com/search?q=")}
			>Bing</button
		>
	</div>
</div>
<button on:click={set_browser}>Set Search Engine</button>
