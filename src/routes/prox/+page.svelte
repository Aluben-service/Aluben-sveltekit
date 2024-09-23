<script>
    import { onMount } from 'svelte';

    // Import external scripts
    onMount(() => {
      const chemicalScript = document.createElement('script');
      chemicalScript.src = '/chemical.js';
      document.body.appendChild(chemicalScript);
  
      const chemicalComponentsScript = document.createElement('script');
      chemicalComponentsScript.src = '/chemical.components.js';
      document.body.appendChild(chemicalComponentsScript);
    });
  </script>
  
  <svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="This is an example project for Chemical." />
    <title>Chemical Example</title>
  </svelte:head>
  
  <h1>Chemical Example</h1>
  <p>Create your own using 
    <a href="https://github.com/chemicaljs/chemical" target="_blank" rel="noopener noreferrer">
      Chemical!
    </a>
  </p>
  <input autofocus spellcheck="false" autocomplete="off" id="search" data-frame="web" data-auto-https data-search-engine="https://www.google.com/search?q=%s" placeholder="Search or Enter a URL" is="chemical-input">

  
  <section id="controls" is="chemical-controls">
    <button on:click={() => chemicalAction('back', 'web')}>Back</button>
    <button on:click={() => chemicalAction('forward', 'web')}>Forward</button>
    <button on:click={() => chemicalAction('reload', 'web')}>Reload</button>
    <button on:click={() => chemicalAction('close', 'web')}>Close</button>
  </section>
  
  <iframe id="web" data-controls="controls" is="chemical-iframe"></iframe>
  
  <style>
    body {
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #212121;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

#search {
    background: #2f2f2f;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    border: none;
    outline: none;
    padding: 1rem 1rem;
    border-radius: 16px;
    width: 42rem;
    max-width: calc(100% - 2rem);
}

#controls {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 2.5rem;
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 0 0.5rem;
    gap: 0.5rem;
}

#controls button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    user-select: none;
    border-radius: 6px;
    padding: 0.25rem 0.5rem;
}

#web {
    position: fixed;
    top: 2.5rem;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100% - 2.5rem);
    border: none;
    background: #212121;
    user-select: none;
}

h1 {
    margin: 0;
    margin-bottom: 0.25rem;
}

p {
    margin: 0;
    margin-bottom: 2rem;
}

a {
    color: inherit;
}
</style>