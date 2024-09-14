<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import Head from "$lib/components/Head.svelte";
	import { onMount } from "svelte";
	import "../../app.css";
	import Swal from "sweetalert2";
	import localforage from "localforage";

	let selectedTheme;
	let currentCloak;

	async function initializeStorage() {
		try {
			await localforage.setDriver([
				localforage.INDEXEDDB, // Use IndexedDB first
				localforage.WEBSQL, // If IndexedDB is unavailable, use WebSQL
				localforage.LOCALSTORAGE, // If both IndexedDB and WebSQL are unavailable, use LocalStorage
			]);

			// Get items from localforage
			const [theme, cloak] = await Promise.all([
				localforage.getItem("theme"),
				localforage.getItem("cloak"),
			]);

			selectedTheme = theme || "N/A";
			currentCloak = cloak === "Custom" ? "N/A" : cloak || "N/A";

			// Use selectedTheme and currentCloak here
		} catch (error) {
			console.error("Error initializing LocalForage:", error);
		}
	}

	async function customcloak(event) {
		await localforage.setItem("cloak", "Custom");
		await localforage.setItem("customcloak", { title: event.target.value });
	}

	async function customcloakfavicon(event) {
		await localforage.setItem("cloak", "Custom");
		const CustomCloak = await localforage.getItem("customcloak");
		CustomCloak.favicon = event.target.value;
		await localforage.setItem("customcloakfavicon", CustomCloak);
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
	});
</script>

<Head />

<Navbar />

<h1>Settings</h1>

<div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
	<div>
		<div class="uk-card uk-card-body uk-card-default">
			<h3 class="uk-card-title">Tab Cloak</h3>
			<p style="font-size: 11px;">
				This will disguise your tabs and make them look like Clever,
				Google Classroom, Schoology, etc.
			</p>
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
			<br />
			<input
				type="text"
				on:input={customcloak}
				placeholder="Enter a custom tab name"
			/>
			<br />
			<input
				type="text"
				on:input={customcloakfavicon}
				placeholder="Enter a custom tab favicon URL"
			/>
		</div>
	</div>
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

<button
	class=".button"
	on:click={() => setEngine("Google", "https://www.google.com/search?q=")}
	>Google (Default)</button
>
<button
	class=".button"
	on:click={() => setEngine("Wikipedia", "https://en.wikipedia.org/wiki/")}
	>Wikipedia</button
>
<button
	class=".button"
	on:click={() =>
		setEngine("Gogoprivate", "https://gogoprivate.com/search?#gsc.q=")}
	>Gogoprivate</button
>
<button
	class=".button"
	on:click={() => setEngine("Bing", "https://www.bing.com/search?q=")}
	>Bing</button
>
<button on:click={set_browser}>Set Search Engine</button>
