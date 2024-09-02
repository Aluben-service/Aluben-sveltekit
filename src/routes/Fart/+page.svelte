<script>
    import Head from '$lib/components/Head.svelte'; // Adjust the import path as necessary
    import Navbar from '$lib/components/Navbar.svelte'; // Adjust the import path as necessary
    import { onMount } from 'svelte';
    import Flamethrower from 'flamethrower-router';

  onMount(() => {
    const router = new Flamethrower({
      prefetch: 'all', // or 'hover', 'intent', 'none'
      log: true,         // Enable or disable logging
      pageTransition: false // Enable page transitions
    })});
</script>
<Head/>
<style>
    atag {
        text-align: center;
        background-color: black;
        color: lightskyblue;
    }
    #center {
        text-align: center;
        font-size: 5px;
    }
    #center:hover {
        font-size: 100vh;
    }
</style>

<Navbar/>
<br />
<div id="center">
    <atag>traf</atag>
</div>

<!-- 100% privacy-first analytics -->
<!--<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>-->
<noscript>
    <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" />
</noscript>
