    <script>
        import { onMount } from 'svelte';
        import Navbar from '$lib/components/Navbar.svelte';

        // Function to handle gcloak
        function gcloak() {
        }
    
        import Swal from '$lib/utils/sweetAlerts.js'; // Adjust the path as needed
    
    const Byblk = () => open("./byeblock", "_self");
    const discord = () => open("https://discord.gg/sR94jHBU", "_self");
    const games = () => open("/games", "_self");
    const proxylist = () => open("/list", "_self");
    const settings = () => open("/settings", "_self");
    const home = () => open("/index", "_self");
    const calculator = async () => {
        // Prompt the user for input using SweetAlert2
        const { value: calculation } = await Swal.fire({
            title: "Enter a calculation",
            input: "text",
            inputLabel:
                "Calculation (only +, -, *, /, whatever else will be ignored):",
            inputPlaceholder: "e.g., 3 + 5 * (2 - 8)",
            showCancelButton: true,
            confirmButtonText: "Calculate",
            cancelButtonText: "Cancel",
        });

        // Check if the user pressed "Cancel" or entered nothing
        if (calculation !== null && calculation.trim() !== "") {
            // Sanitize the input
            const sanitizedCalculation = calculation.replace(
                /[^-()\d/*+.]/g,
                "",
            );

            // Perform the calculation
            try {
                // Use Function constructor safely
                const result = Function(
                    '"use strict"; return (' + sanitizedCalculation + ")",
                )();
                // Show the result using SweetAlert2
                await Swal.fire({
                    title: "Result",
                    text: `The result is: ${result}`,
                    icon: "info",
                    confirmButtonText: "OK",
                });
            } catch (error) {
                // Handle any errors
                await Swal.fire({
                    title: "Error",
                    text: "There was an error with the calculation.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        }
    };
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
    
    <style>
  :global(html) {
    width: 100%;
    height: 100%;
    background-color: black;
    text-align: center;
  }

        button {
            background-color: black;
            color: white;
            border: 2px solid skyblue;
            border-radius: 5px;
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
        }

        button:hover {
            transition: 1000ms;
            padding: 10px 50px;
            transform: translateY(-0px);
            background-color: #00371e;
            color: skyblue;
            border: solid 4px skyblue;
        }

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
        
        .navbar {
            z-index: 1000;
            text-align: center;
            left: 0%;
            position: fixed;
            width: 100%;
            top: 0px;
        }
        
    </style>
    <svelte:head>
    <meta charset="utf-8" />
    <link rel="canonical" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="stylesheet" href="assets/css/gamecard.css" />
    <!--<link rel="stylesheet" href="assets/css/styles.css" />-->
    <meta name="description" content="A good proxy with custom unblockers (that are completely different proxies) and a proxy list built in games it's amazing" />
    <meta name="viewport" content="width=device-width" />
    <title>Error Page | Ebay</title>
    <link rel="icon" type="image/x-icon" href="https://www.ebay.com/favicon.ico" />
    <link rel="manifest" href="manifest.json">
    </svelte:head>
    
    <div class="navbar" id="navbar">
        <button class="button" type="button" on:click={() => home()}>Home</button>
        <button class="button" type="button" on:click={() => calculator()}
            >Calculator</button
        >
        <button class="button" type="button" on:click={() => Byblk()}
            >Byeblocker</button
        >
        <button class="button" type="button" on:click={() => games()}
            >Iceland games</button
        >
        <button class="button" type="button" on:click={() => proxylist()}
            >Proxy list</button
        >
        <button class="button" type="button" on:click={() => settings()}
            >Settings</button
        >
    </div>
    
    
    <br/>
    <a href="#nothingheretosee"><img id="logo" src="https://cdn.jsdelivr.net/gh/Aluben-service/Aluben_icons/iceland%20logo.png" alt="iceland logo" /></a>
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