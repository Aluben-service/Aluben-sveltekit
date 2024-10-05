/**
 * Credits to 3kh0!
 **/
//document.addEventListener("DOMContentLoaded", (event) => {
try {
	let scripts = 5;
	let currentscript = 1;

	function script(text) {
		console.log(
			"%cScript Injection",
			"color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px",
			`Injected script ${currentscript}/${scripts} (${text}) (Credits to 3kh0)`,
		);
		currentscript += 1;
	}

	function isMobileDevice() {
		return /Mobi|Android/i.test(navigator.userAgent);
	}

	const analytics = document.createElement("script");
	analytics.setAttribute("src", "/assets/lib/analytics.js");
	document.head.append(analytics);
	script("Simple Analytics");

	const font = document.createElement("script");
	font.setAttribute("src", "/assets/lib/fontawesome.js");
	font.setAttribute("crossorigin", "anonymous");
	document.head.append(font);
	script("Font awesome");

	const settingsstuff = document.createElement("script");
	settingsstuff.setAttribute("src", "/assets/js/main.js");
	document.head.append(settingsstuff);
	script("Settings stuff");

	const fogNetworkABC = document.createElement("script");
	fogNetworkABC.setAttribute("src", "/assets/lib/ABC.js");
	document.head.append(fogNetworkABC);
	script("ABC(By FogNetwork)");

	const sweetAlerts = document.createElement("script");
	sweetAlerts.setAttribute("src", "/assets/lib/sweetAlerts.js");
	sweetAlerts.setAttribute("onload", "main();");
	document.head.append(sweetAlerts);
	script("SweetAlerts2");

	function main() {
		const main = document.createElement("script");
		main.setAttribute("src", "/assets/js/script.js");
		document.head.append(main);
		script("Main script");
	}

	if (isMobileDevice()) {
		// Create and style the dialog element
		const dialog = document.createElement("dialog");
		dialog.setAttribute("id", "notice");
		dialog.innerHTML =
			"<p>This tool, Aluben, is only meant for computers!</p>";
		document.body.appendChild(dialog);

		// Style the dialog
		const style = document.createElement("style");
		style.textContent = `
			dialog {
				width: 80%;
				max-width: 500px;
				border: none;
				border-radius: 8px;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
				background: white;
				padding: 20px;
				text-align: center;
			}
			dialog::backdrop {
				background: rgba(0, 0, 0, 0.5);
			}
		`;
		document.head.appendChild(style);

		// Show the dialog modal
		dialog.showModal();
	}
} catch (e) {
	console.error("Error: " + e);
}

document.addEventListener("DOMContentLoaded", async () => {
	// Get the saved theme from localStorage
	let savedTheme = await localforage.getItem("theme");

	// If there's a saved theme, set the corresponding option as selected
	if (savedTheme && savedTheme == "Default") {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "/assets/css/styles.scss";
	} else if (savedTheme) {
		let themesDropdown = document.getElementById("themes");
		let themeurl = "/assets/css/themes/" + savedTheme + ".scss";
		themesDropdown.selectedIndex = savedTheme;
	} else {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "/assets/css/styles.scss";
	}
});
