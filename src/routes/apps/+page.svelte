<script>
	import GamesHead from "$lib/components/GamesHead.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import "../../tailwind.css";
	import { onMount } from "svelte";

	onMount(() => {
		const script1 = document.createElement("script");
		script1.src = "assets/js/apps.js";
		script1.async = true;
		script1.defer = true;
		document.head.appendChild(script1);
	});
</script>

<GamesHead />

<!-- Body content -->
<Navbar />

<!-- <input
	type="text"
	on:keyup={() => searchApps()}
	id="searchInput"
	placeholder="Search for an app..."
	title="Search for a app"
/> -->
<!-- <select id="category" name="category" on:change={() => showCategory()}>
	<option value="all">All</option>
</select> -->

<h3>Pinned Apps</h3>
<div class="pinned appscontainer"></div>

<h3>All Apps</h3>
<div class="appcontainer appscontainer"></div>

<p id="copyright">© Aluben Services 2024 inc all rights reserved</p>
