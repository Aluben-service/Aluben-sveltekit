<script>
    // Import the necessary external scripts (handled outside of Svelte)
    import { onMount } from "svelte";
  
    import Head from '$lib/components/Head.svelte';
    import Navbar from '$lib/components/Navbar.svelte';

    onMount(() => {
      // External scripts will handle logic upon mounting
      // For example, loading the JavaScript code
    });
  </script>
  
  <style>
    body {
      background-color: black;
      color: white;
    }
  
    #txt {
      color: red;
      font-weight: bolder;
    }
  
    .navbar {
      display: flex;
      flex-wrap: wrap;
    }
  
    .button {
      margin: 5px;
      padding: 10px;
      cursor: pointer;
    }
  
    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
    }
  
    .left-margin {
      margin-left: 20px;
    }
  </style>
  
 <Head/>
  
  <!-- Body content -->
  <body style="background-color: black;">
    <Navbar/>
  
    <div id="grass" style="display: none;">
      <p>no world zero</p>
      <h1>touch grass</h1>
    </div>
  
    <div id="main" style="display: block;">
        <br/>
        <br/>
      <form id="ultraviolet-form" class="flex-center">
        <input
          id="ultraviolet-search-engine"
          value="https://www.google.com/search?q=%s"
          type="hidden"
        />
        <input id="ultraviolet-address" type="text" placeholder="Search the web freely" />
      </form>
  
      <div class="desc left-margin">
        <p id="ultraviolet-error"></p>
        <pre id="ultraviolet-error-code"></pre>
      </div>
  
      <p id="say"></p>
  
      &copy; Aluben Services 2024 inc all rights reserved
  
      <div id="timer">
        <div id="txt"></div>
      </div>
  
      <section>
        <h2>Rammerhead</h2>
        <select id="rammy"></select>
        <button onclick='window.location = (v => v && v)(document.getElementById("rammy").value);'>Go</button>
      </section>
  
      <section>
        <h2>Holy Unblocker</h2>
        <select id="holyub">
          <option value="">Select a Link...</option>
          <option value="https://www.holyubofficial.net/">Holy Unblocker</option>
          <option value="https://campusdirections.org/">Link 1</option>
          <option value="https://mathematicalsols.org/">Link 2</option>
          <option value="https://historicalanime.org/">Link 3</option>
          <option value="https://mournfully.info/">Link 4</option>
          <option value="https://totalmathway.com/">Link 5</option>
          <option value="https://thechefmethod.com/">Link 6</option>
          <option value="https://livrersurweb.net/">Link 7</option>
          <option value="https://obetenernav.com/">Link 8</option>
          <option value="https://televisionrepair.us/">Link 9</option>
          <option value="https://ur2ndlibrary.com/">Link 10</option>
        </select>
        <button onclick='window.location = (v => v && v)(document.getElementById("holyub").value);'>Go</button>
      </section>
  
      <div id="traf-say">
        <a href="Fart"><span class="stinky">traf</span></a>
      </div>
      <div id="7689" style="display: none;">
        go to the Aluben discord server and go to claim then type "7689" for a reward
      </div>
    </div>
  
    <!-- Include external JavaScript files -->
    <script src="assets/js/proxies.js" async defer></script>
    <script src="assets/js/settings.js" async defer></script>
    <script src="assets/js/scripts.js"></script>
    <script src="baremux/index.js" defer></script>
    <script src="epoxy/index.js" defer></script>
    <script src="ultraviolet/uv.bundle.js" async defer></script>
    <script src="error.js" async defer></script>
    <script src="index.js" async defer></script>
    <script src="register-sw.js" async defer></script>
    <script src="search.js" async defer></script>
    <script src="assets/lib/jquery.js" async defer></script>
  
    <!-- Privacy-first analytics -->
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
  </body>
  