    <script>
        import { onMount } from 'svelte';
        import Navbar from '$lib/components/Navbar.svelte';

        // Function to handle gcloak
        function gcloak() {
        }
    
        onMount(() => {
        gcloak();
        const interval = setInterval(gcloak, 1000);  
        // Load external scripts
        const script1 = document.createElement('script');
        script1.src = 'assets/js/games.js';
        script1.async = true;
        script1.defer = true;
        document.head.appendChild(script1);
    
        const script2 = document.createElement('script');
        script2.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
        script2.async = true;
        script2.defer = true;
        document.head.appendChild(script2);
    
        const noscript = document.createElement('noscript');
        const img = document.createElement('img');
        img.src = 'https://queue.simpleanalyticscdn.com/noscript.gif';
        img.alt = 'noscript';
        img.referrerPolicy = 'no-referrer-when-downgrade';
        noscript.appendChild(img);
        document.body.appendChild(noscript);
        return () => clearInterval(interval);

        });
    </script>
    
    
    <svelte:head>
    <meta charset="utf-8" />
    <link rel="canonical" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="stylesheet" href="assets/css/gamecard.css" />
    <meta name="description" content="A good proxy with custom unblockers (that are completely different proxies) and a proxy list built in games it's amazing" />
    <meta name="viewport" content="width=device-width" />
    <title>Error Page | Ebay</title>
    <link rel="icon" type="image/x-icon" href="https://www.ebay.com/favicon.ico" />
    <link rel="manifest" href="manifest.json">
    </svelte:head>
    <Navbar/>
    
    <br/>
    <a href="#"><img id="logo" src="https://cdn.jsdelivr.net/gh/Aluben-service/Aluben_icons/iceland%20logo.png" alt="iceland logo" /></a>
    <br/>
    <input type="text" id="searchInput" placeholder="Search For A Game..." title="Search for a game" />
    <br/>
    <button onclick='searchGames();'>Search(For some reason onkeydown wont work)</button>
    <!-- <select id="category" name="category" on:change={showCategory}>
        <option value="all">All</option>
        <option value="2P">Multiplayer</option>
        <option value="sports">Sports</option>
        <option value="flash">Flash</option>
        <option value="local">Local</option>
    </select>-->
    
    <h3 style="color: white;">Pinned Games</h3>
    <div class="pinned" id="gamescontainer"></div>
    
    <h3 style="color: white;">All Games</h3>
    <div class="gamecontainer" id="games"></div>
    
    <p id="copyright">© Aluben Services 2024 inc all rights reserved</p>