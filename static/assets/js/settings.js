let theme = localStorage.getItem("theme");
let cloak = localStorage.getItem("cloak");

function set_theme() {
	let themes = document.getElementById("themes");
	let selectedTheme = themes.options[themes.selectedIndex].value;
	if (selectedTheme == "custom_theme") {
		let style = prompt("1. Solid 2. Image");
		if (style == 1) {
			let back = prompt("Background color: ");
			let text = prompt("Text color: ");
			localStorage.setItem("theme", {
				style: 1,
				backcolor: back,
				textcolor: text,
			});
		} else if (style == 2) {
			let url = prompt("URL: ");
			localStorage.setItem("theme", { style: 2, image: url });
		}
	} else {
		localStorage.setItem("theme", selectedTheme);
	}
	location.reload();
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
		let themeurl = "/assets/css/themes/" + savedTheme + ".css";
		themesDropdown.selectedIndex = savedTheme;
	} else {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "/assets/css/styles.css";
	}
});
