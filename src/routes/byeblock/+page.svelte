<script>
	import { onMount } from "svelte";
	import Navbar from "$lib/components/Navbar.svelte"; // Adjust the import path as necessary
import "../../app.css"
	let stars = [];

	onMount(() => {

		// Generating stars
		const numStars = 300;
		const background = document.getElementById("background");

		for (let i = 0; i < numStars; i++) {
			const star = document.createElement("div");
			star.classList.add("star");
			star.style.width = `${Math.random() * 3}px`;
			star.style.height = star.style.width;
			star.style.left = `${Math.random() * 100}vw`;
			star.style.top = `${Math.random() * 100}vh`;

			background.appendChild(star);
		}

		// Menu script
		(function () {
			const menu = document.createElement("div");
			const menuContent = document.createElement("div");
			const closeButton = document.createElement("span");
			const button = document.createElement("button");

			menu.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                background-color: rgba(0, 255, 255, 0.2); 
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                border-radius: 5px;
                width: 200px;
            `;

			menuContent.style.padding = "10px";

			closeButton.style.cssText = `
                float: right;
                cursor: pointer;
                color: #333;
            `;
			closeButton.innerHTML = "&times;";
			closeButton.onclick = () => menu.remove();

			button.innerHTML = "Launch ByeBlocker";
			button.style.cssText = `
                font-family: Arial;
                font-size: 16px;
                color: #fff;
                background-color: #333;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                margin-top: 10px;
                cursor: pointer;
            `;
			button.onclick = () => {
				const link = prompt("Url?");
				const proxy = "https://api.codetabs.com/v1/proxy?quest=";
				fetch(proxy + link)
					.then((response) => response.text())
					.then((text) => document.write(text));
				const all = document.getElementsByTagName("*");
				for (let i = 0, max = all.length; i < max; i++) {
					if (all[i].src) {
						all[i].src = new URL(all[i].src, link).href;
						all[i].src = proxy + all[i].src;
					}
				}
				window.onbeforeunload = (e) => {
					e.preventDefault();
					alert(e.toString());
				};
				function locationHashChanged(e) {
					e.preventDefault();
					alert(e);
					window.location = new URL(e.oldURL, e.newURL).href;
				}
				window.onhashchange = locationHashChanged;
			};

			menuContent.appendChild(button);
			menuContent.appendChild(closeButton);
			menu.appendChild(menuContent);
			document.body.appendChild(menu);

			let isDragging = false;
			let mouseOffset = { x: 0, y: 0 };

			menuContent.addEventListener("mousedown", (e) => {
				isDragging = true;
				mouseOffset.x = e.pageX - menu.offsetLeft;
				mouseOffset.y = e.pageY - menu.offsetTop;
			});

			document.addEventListener("mousemove", (e) => {
				if (isDragging) {
					menu.style.left = e.pageX - mouseOffset.x + "px";
					menu.style.top = e.pageY - mouseOffset.y + "px";
				}
			});

			document.addEventListener("mouseup", () => {
				isDragging = false;
			});
		})();
	});
</script>

<body>
	<Navbar />
	<div id="background"></div>
	<div class="bottom-left">Tacogamerman on github</div>
	<script
		async
		defer
		src="https://scripts.simpleanalyticscdn.com/latest.js"
	></script>
	<noscript
		><img
			src="https://queue.simpleanalyticscdn.com/noscript.gif"
			alt=""
			referrerpolicy="no-referrer-when-downgrade"
		/></noscript
	>
</body>

<style>
	.bottom-left {
		position: fixed;
		bottom: 0;
		left: 0;
		font-family: Arial, sans-serif;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.2);
		padding: 10px;
	}
	body {
		overflow: hidden;
		font-family: Arial, sans-serif;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	#background {
		position: absolute;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: radial-gradient(circle, rgb(0, 0, 0), rgb(1, 44, 42));
	}
	.star {
		position: absolute;
		background: rgb(57, 255, 215);
		border-radius: 50%;
		transform: scale(0);
		animation:
			sparkle 2s infinite,
			drift linear infinite;
	}
	@keyframes sparkle {
		0%,
		100% {
			opacity: 0;
			transform: scale(0);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
	}
	@keyframes drift {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(50px, -50px);
		}
	}
	input {
		margin-bottom: 10px;
	}
	.image-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.image {
		width: 250px;
		height: 250px;
		border: 2px solid #daf3f1;
		margin: 40px;
		padding: 10px;
		box-sizing: border-box;
		transition: all 0.3s ease;
	}
	.image:hover {
		transform: scale(1.1);
		border-color: #9900ff;
	}
</style>
