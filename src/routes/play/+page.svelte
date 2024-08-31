<script>
	import { Navbar } from '$lib/components/Navbar.svelte';
  import { onMount } from 'svelte';

  // Function definitions
  function fullscreen() {
    const iframe = document.getElementById("game-frame");
    if (!iframe) return;

    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
    else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
  }

  onMount(() => {
    const iframe = document.getElementById("game-frame");
    const currentGameUrl = localStorage.getItem("currentgame") || "";
    iframe.src = currentGameUrl;

    document.getElementById("gamename").innerText = localStorage.getItem("currentgamename") || "";
    document.getElementById("gamedesc").innerText = localStorage.getItem("currentgamedesc") || "";
/*
    const gameHacks = JSON.parse(localStorage.getItem("hacks")) || [];
    const game = localStorage.getItem("currentgamecheat");

    const gameFunctions = {
      retrobowl: retroBowl,
      vexsix: vexSix,
      templeruntwo: templeRunTwo,
      bobtherobbertwo: bobTheRobberTwo,
      cookie: cookie,
      jetpackjoyride: jetPackJoyride,
      monkeymart: monkeyMart,
      eggycar: eggyCar,
      wordle: Wordle,
      subwaysurfers: subwaySurfers,
    };

    if (gameHacks.includes(game)) {
      const hackButton = document.getElementById("hack");
      hackButton.style.display = "block";
      hackButton.onclick = gameFunctions[game];
    }
copied from old code*/
    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyF") fullscreen();
    });
  });
</script>

<style>
  :global(html) {
    width: 100%;
    height: 100%;
    background-color: black;
    text-align: center;
  }
  
  .container {
    margin-top: 10%;
    font-family: "Comfortaa", sans-serif;
    font-size: 50px;
    color: #6886ed;
  }
  
  .flbtn {
    color: black;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    padding: 12px 0;
    border: 2px solid #0f0f0f;
    border-radius: 0.5rem;
    text-align: center;
    box-shadow: 0px 5px 10px 0px #2e2e2e;
    display: inline-block;
    font-size: 16px;
    padding: 8px 16px;
  }
  
  .flbtn:hover {
    background-color: #2e2e2e;
    color: white;
  }
  
  .flbtn:active {
    background-color: #2e2e2e;
    color: black;
  }
  
  #flbutton {
    position: fixed;
    bottom: 20px;
    left: 6px;
  }
  
  .controls #hack {
    position: relative;
    display: none;
  }
  
  .controls i.hack {
    background-color: #006bcf;
    color: #fff;
    text-shadow: none;
    margin: 0.5vw;
    padding: 0.5vw;
    border-radius: 0.5vw;
    font-size: 16px;
    padding: 8px;
  }
  
  .controls #hack:hover h3 {
    opacity: 1;
    z-index: 9999;
    transition: opacity 0.2s ease;
  }
  
  .controls span h3 {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    transition: opacity 0.2s ease;
    opacity: 0;
    background-color: #292929ee;
    padding: 0.2vw 0.5vw;
    margin-top: -0.2vw;
    border-radius: 0.5vw;
    box-shadow: 0 0 5px #181818;
    font-size: 1vw;
    cursor: pointer;
    width: max-content;
    text-align: center;
  }
  
  #closeButton {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 69420;
    width: 40px;
    height: 40px;
  }
  
  iframe {
    width: 80%;
    height: 600px;
    margin: 0 auto;
    display: block;
    border: 2vw solid black;
    border-radius: 1vw;
  }
</style>

<Navbar/>
<div class="container">
  <!-- svelte-ignore a11y-missing-content -->
  <h1 style="color: white;" id="gamename"></h1>
  <!-- svelte-ignore a11y-missing-content -->
  <h5 style="color: white;" id="gamedesc"></h5>
  <iframe title="Game Frame" id="game-frame" scrolling="yes" frameborder="0" cellspacing="0"></iframe>
  <div class="controls">
    <div id="flbutton">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="flbtn" on:click={() => fullscreen()}><i class="fa-solid fa-expand"></i></a>
    </div>
    <i class="fa-solid fa-code hack"></i>
  </div>
</div>

<!--<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
<noscript>
  <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" />
</noscript>-->
