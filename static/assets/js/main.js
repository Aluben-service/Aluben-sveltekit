localforage.setDriver([
	localforage.INDEXEDDB, // Use IndexedDB first
	localforage.WEBSQL, // If IndexedDB is unavailable, use WebSQL
	localforage.LOCALSTORAGE, // If both IndexedDB and WebSQL are unavailable, use LocalStorage
]);


let cloaks;

localforage.getItem("customcloak").then((customCloak) => {
	cloaks = {
		Ebay: {
			favicon: "https://www.ebay.com/favicon.ico",
			title: "Error Page | Ebay",
		},
		Drive: {
			favicon:
				"https://raw.githack.com/Aluben-service/Aluben_icons/main/drive.png",
			title: "My Drive - Google Drive",
		},
		Classroom: {
			favicon:
				"https://raw.githack.com/Aluben-service/Aluben_icons/main/classroom.png",
			title: "Home",
		},
		Schoology: {
			favicon:
				"https://raw.githack.com/Aluben-service/Aluben_icons/main/schoology.png",
			title: "Home | Schoology",
		},
		Gmail: {
			favicon:
				"https://raw.githack.com/Aluben-service/Aluben_icons/main/gmail.png",
			title: "Gmail",
		},
		Clever: {
			favicon:
				"https://raw.githack.com/Aluben-service/Aluben_icons/main/clever.png",
			title: "Clever | Portal",
		},
		Khan: {
			favicon:
				"https://raw.githack.com/Aluben-service/Aluben_icons/main/khan.png",
			title: "Dashboard | Khan Academy",
		},
		Google: {
			favicon:
				"https://raw.githack.com/Aluben-service/Aluben_icons/main/google.png",
			title: "Google",
		},
		Custom: {
			title: customCloak.title || "Google",
			favicon: customCloak.favicon || "https://raw.githack.com/Aluben-service/Aluben_icons/main/google.png"
		},
	};
});

Object.freeze(cloaks);

function changeFavicon(src) {
	try {
		// Check if favicon link already exists
		let faviconLink = document.querySelector("link[rel*='icon']");

		if (!faviconLink) {
			faviconLink = document.createElement("link");
			faviconLink.rel = "icon";
			document.head.appendChild(faviconLink);
		}

		faviconLink.href = src;
	} catch (error) {
		console.error("Error fetching favicon from localforage:", error);
	}
}

(async function () {
	const cloak = await localforage.getItem("cloak");
	const customcloak = await localforage.getItem("customcloak");

	const settings = cloaks[cloak] || customcloak;
	changeFavicon(settings.favicon);
	document.title = settings.title;

	const theme = await localforage.getItem("theme");

	switch (theme) {
		case "Dark":
			document.body.style.backgroundColor = "#000000";
			document.body.style.color = "#ffffff";
			document.body.style.backgroundImage = "none";
			break;
		case "Light":
			document.body.style.color = "#000000";
			document.body.style.backgroundColor = "#ffffff";
			document.body.style.backgroundImage = "none";
			break;
		case "Twilight":
			document.body.style.color = "#c658ca";
			document.body.style.backgroundColor = "#26233a";
			document.body.style.backgroundImage = "none";
			break;
		case "Ocean":
			document.body.style.color = "#00ffff";
			document.body.style.backgroundColor = "#00008B";
			document.body.style.backgroundImage = "none";
			break;
		case "McDonald's":
			document.body.style.color = "#e1ff00";
			document.body.style.backgroundColor = "#ff2600";
			document.body.style.backgroundImage = "none";
			break;
		case "UnderGround":
			document.body.style.color = "#b0afb1";
			document.body.style.backgroundColor = "#673b00";
			document.body.style.backgroundImage = "none";
			break;
		case "SunnyDay":
			document.body.style.color = "#f0ff85";
			document.body.style.backgroundColor = "#93e8ff";
			document.body.style.backgroundImage = "none";
			break;
		case "Grassland":
			document.body.style.color = "#f45faf";
			document.body.style.backgroundImage =
				"url(assets/images/gashopper.jpg)";
			document.getElementById("grass").style.display = "block";
			break;
		case "StormyDay":
			document.body.style.color = "#b0afb1";
			document.body.style.backgroundImage =
				"url(assets/images/StormyDay.gif)";
			break;
		case "custom":
			const customTheme = await localforage.getItem("customTheme");
			if (customTheme.style === 1) {
				document.body.style.backgroundColor = customTheme.backcolor;
				document.body.style.color = customTheme.textcolor;
			} else if (customTheme.style === 2) {
				document.body.style.backgroundImage = `url(${customTheme.image})`;
			}
			break;
		default:
			break;
	}

	const response = await fetch("assets/json/say.json");
	const says = await response.json();
	let randomSplash = says[Math.floor(Math.random() * says.length)];

	if (randomSplash === "%GAMES_NUMBER%") {
		const games = await fetch(
			location.origin + "assets/json/games.json",
		).json();
		randomSplash = `There are ${games.length} games currently`;
	} else if (randomSplash === "%SPLASH_NUMBER%") {
		const splashCacheAll = await fetch("assets/json/say.json").json();
		randomSplash = `There are ${splashCacheAll.length} of these messages!`;
	}

	document.querySelector("#splash").textContent = randomSplash;
})();

window.addEventListener("keydown", function (event) {
	console.log("Typed key: " + event.key);
	// Handle panic key event if needed
	// if (event.key === await localforage.getItem("panickey") || "`") window.parent.window.location.replace(await localforage.getItem("panicurl") || "https://google.com");
});

function handleVisibilityChange() {
	localforage.getItem("clickoff_cloaking").then((clickoffCloaking) => {
		if (clickoffCloaking === "true") {
			if (document.hidden) {
				document.title = "Google";
				const originalFavicon =
					document.querySelector("link[rel*='icon']").href;
				document.querySelector("link[rel*='icon']").href =
					"https://raw.githubusercontent.com/whitespider-dev/whitespider/Main/res/google.ico";
			} else {
				document.title = "Aluben";
				document.getElementById("favicon").href = originalFavicon;
			}
		}
	});
}

document.addEventListener("visibilitychange", handleVisibilityChange);

document.onkeydown = (e) => {
	if (e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
		switch (e.key) {
			default:
				break;
		}
	}
};
