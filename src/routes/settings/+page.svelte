<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import Head from "$lib/components/Head.svelte";
	import { onMount } from "svelte";
	import "../../app.css";
	import Swal from "sweetalert2";
	let selectedTheme;
	let currentCloak;
	const initializeStorage = async () => {
		try {
			await localforage.setDriver([
				localforage.INDEXEDDB,
				localforage.WEBSQL,
				localforage.LOCALSTORAGE,
			]);
			const [theme, cloak] = await Promise.all([
				localforage.getItem("theme"),
				localforage.getItem("cloak"),
			]);
			selectedTheme = theme || "N/A";
			currentCloak = cloak === "Custom" ? "N/A" : cloak || "N/A";
		} catch (error) {
			console.error("Error initializing LocalForage:", error);
		}
	};

	const toggleab = async () => {
		const currentAB = localforage.getItem("ab") || false;
		await localforage.setItem("ab", !currentAB);
	};

	const customcloak = async (event) => {
		await localforage.setItem("cloak", "Custom");
		await localforage.setItem("customcloak", { title: event.target.value });
	};

	const customcloakfavicon = async (event) => {
		await localforage.setItem("cloak", "Custom");
		const CustomCloak = await localforage.getItem("customcloak");
		CustomCloak.favicon = event?.target?.value;
		await localforage.setItem("customcloakfavicon", CustomCloak);
	};

	const set_theme = async () => {
		try {
			await localforage.setItem("theme", selectedTheme);
			Swal.fire({
				text: `Your theme is now ${selectedTheme}`,
				icon: "success",
			});
		} catch (error) {
			console.error("Error setting theme:", error);
		}
	};

	const set_cloak = async (event) => {
		try {
			await localforage.setItem("cloak", event.target.value);
			location.reload();
		} catch (error) {
			console.error("Error setting cloak:", error);
		}
	};
	async function txtclrpicker(event) {
		await localforage.setItem("theme", "custom");
		await localforage.setItem("customTheme", {
			backcolor: "none",
			textcolor: event,
			style: 1,
		});
		location.reload();
	}

	onMount(() => {
		initializeStorage();
	});
</script>

<Head />

<Navbar />

<h1 style="font-size: 2em;">Settings</h1>

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

<div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
	<div>
		<div class="uk-card uk-card-body uk-card-default">
			<h3 class="uk-card-title">Passcode</h3>
			<p style="font-size: 11px;">
				Click the button below to change your passcode!
			</p>
			<button class="bounce-light" on:click={passcodechange}
				>Change</button
			>
			<!-- This is a bypass to access the js like we are in HTML because normally js doesnt leak into svelte-->
		</div>
	</div>
</div>

<div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
	<div>
		<div class="uk-card uk-card-body uk-card-default">
			<h3 class="uk-card-title">Themes</h3>
			<p style="font-size: 11px;">Are your eyes hurting?</p>
			<select bind:value={selectedTheme} id="themes">
				<option value="N/A" disabled>Choose a theme</option>
				<option value="Default">Default</option>
				<option value="bannana_split">Bannana Split</option>
			</select>
			<button on:click={set_theme}>Save</button>
		</div>
	</div>
</div>

<div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
	<div>
		<div class="uk-card uk-card-body uk-card-default">
			<h1>WIP doesn't currently work</h1>
			<h3 class="uk-card-title">About Blank</h3>
			<p style="font-size: 11px;">No history?</p>
			<button on:click={toggleab}>Toggle</button>
		</div>
	</div>
</div>

<h3>Panic key/ (no https:// or http://)</h3>
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
<br />
<br />
<br />
<!-- <button class="uk-button uk-button-primary" on:click={passcodechange}>
	change password
</button> -->
<!-- 
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
<button on:click={set_browser}>Set Search Engine</button> -->
