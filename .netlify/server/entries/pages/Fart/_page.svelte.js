import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Head } from "../../../chunks/Head.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
const css = {
  code: "atag.svelte-lfdrwn{text-align:center;background-color:black;color:lightskyblue}#center.svelte-lfdrwn{text-align:center;font-size:5px}#center.svelte-lfdrwn:hover{font-size:100vh}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import Head from '$lib/components/Head.svelte'; // Adjust the import path as necessary\\n    import Navbar from '$lib/components/Navbar.svelte'; // Adjust the import path as necessary\\n\\n<\/script>\\n<Head/>\\n<style>\\n    atag {\\n        text-align: center;\\n        background-color: black;\\n        color: lightskyblue;\\n    }\\n    #center {\\n        text-align: center;\\n        font-size: 5px;\\n    }\\n    #center:hover {\\n        font-size: 100vh;\\n    }\\n</style>\\n\\n<Navbar/>\\n<br />\\n<div id=\\"center\\">\\n    <atag>traf</atag>\\n</div>\\n\\n<!-- 100% privacy-first analytics -->\\n<!--<script async defer src=\\"https://scripts.simpleanalyticscdn.com/latest.js\\"><\/script>-->\\n<noscript>\\n    <img src=\\"https://queue.simpleanalyticscdn.com/noscript.gif\\" alt=\\"\\" referrerpolicy=\\"no-referrer-when-downgrade\\" />\\n</noscript>\\n"],"names":[],"mappings":"AAOI,kBAAK,CACD,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,YACX,CACA,qBAAQ,CACJ,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,GACf,CACA,qBAAO,MAAO,CACV,SAAS,CAAE,KACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Head, "Head").$$render($$result, {}, {}, {})}  ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <br> <div id="center" class="svelte-lfdrwn" data-svelte-h="svelte-krnuo3"><atag class="svelte-lfdrwn">traf</atag></div>   <noscript data-svelte-h="svelte-13knu6i"><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade"></noscript>`;
});
export {
  Page as default
};
