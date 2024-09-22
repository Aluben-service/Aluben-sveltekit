async function fixJSON(json) {
	function bulkRegex(str, callback) {
		return callback && typeof callback === "function"
			? callback(str)
			: callback && Array.isArray(callback)
			? callback.reduce((s, fn) => (fn ? fn(s) : s), str)
			: str;
	}

	if (!json) return false;
	try {
		json = typeof json !== "string" ? JSON.stringify(json) : json;
		json = bulkRegex(json, false, [
			(str) => str.replace(/[\n\t]/g, "").replace(/,\}/g, "}").replace(/,\]/g, "]"),
			(str) =>
				str.split(/(?=[,\}\]])/g).map((s) => {
					if (s.includes(":")) {
						let [k, v] = s.split(/:(.+)/, 2).map((x) => x.trim());
						k = bulkRegex(k, false, (p) => p.replace(/[^A-Za-z0-9\-_]/g, ""));
						v = bulkRegex(v.slice(1, -1), false, [(p) => p.replace(/(["])/g, "\\$1")]);
						s = `"${k}":"${v}"`;
					}
					return s;
				}).join(""),
			(str) => str.replace(/(['"])?([a-zA-Z0-9\-_]+)(['"])?:/g, '"$2":'),
		]);
		return JSON.parse(json);
	} catch {
		return false;
	}
}

// Fetch and display apps
async function loadApps() {
	try {
		let apps = await fixJSON(await (await fetch("assets/json/apps.json")).json());
		if (!apps) throw new Error("Failed to fix JSON");

		apps.sort((a, b) => a.name.localeCompare(b.name));

		apps.forEach(async (app) => {
			const appEl = document.createElement("li");
			const appDesc = app.desc || "There is no set description";
			const appCategories = app.categories || "all";
			const appImg = app.img || "/web.png";
			const appName = app.name || "Unknown";
			appEl.innerHTML = `
                <article class="appcard" data-category="${appCategories}">
                  <a href="#" onclick='(async () => { await saveApp(${app})}); })();'>
                    <figure>
                      <img loading="lazy" title='${appName}' src="${appImg}" class="appimage" alt="${appName}"/>
                    </figure>
                  </a>
                  <button onclick="pin('${appName}');" style="color:white;" aria-label="Pin app">
                    <i class="fa fa-map-pin" style="display:block;" aria-hidden="true"></i>
                  </button>
                  <div class="appinfo">
                    <header>
                      <h2 class="appname">${appName}</h2>
                    </header>
                    <p class="appdesc">${appDesc}</p>
                  </div>
                </article>
            `;
			document.querySelector(".appcontainer").appendChild(appEl);

			if ((await localforage.getItem(app.name)) === "pinned") document.querySelector(".pinned").appendChild(appEl.cloneNode(true));
		});
	} catch (error) {
		console.error(error);
	}
}

// Save app data with localforage
function saveApp(app) {
	app = JSON.stringify(app);
	return localforage
		.setItem("currentapp", app)
		.then(() => {
			window.location.href = "play";
		})
		.catch((error) => {
			console.error("Error saving app:", error);
		});
}

// Show category filter
function showCategory() {
	var selectedCategories = Array.from(
		document.querySelectorAll("#category option:checked"),
	).map((option) => option.value);
	var apps = document.getElementsByClassName("appcard");

	for (var i = 0; i < apps.length; i++) {
		var app = apps[i];
		var categories = app.getAttribute("data-category").split(" ");
		if (
			selectedCategories.length === 0 ||
			selectedCategories.some((category) => categories.includes(category))
		) {
			app.style.display = "block";
		} else {
			app.style.display = "none";
		}
	}
}

// Pin or unpin a app
async function pin(name) {
	const isPinned = (await localforage.getItem(name)) === "pinned";
	async function attemptPin() {
		try {
			await localforage.setItem(name, isPinned ? "" : "pinned");
			const appNotice = await localforage.getItem("appnotice");
			if (appNotice === null || appNotice !== "true") {
				const result = await Swal.fire({
					title: isPinned ? "Unpinned!" : "Pinned!",
					text: `This app has been ${isPinned ? "unpinned" : "pinned"}!`,
					icon: "success",
					confirmButtonColor: "#3085d6",
					confirmButtonText: "Don't show me again.",
				});

				if (result.isConfirmed) {
					await localforage.setItem("appnotice", "true");
					await Swal.fire({
						title: "Success!",
						text: "When you pin a app this won't be shown again.",
						icon: "success",
						confirmButtonColor: "#3085d6",
						confirmButtonText: "Ok",
					});
					location.reload();
				} else {
					location.reload();
				}
			} else {
				location.reload();
			}
		} catch {
			const result = await Swal.fire({
				title: "Error!",
				text: "Something went wrong, please try again.",
				icon: "error",
				confirmButtonColor: "#3085d6",
				confirmButtonText: "Ok",
			});

			if (result.isConfirmed) {
				location.reload();
			}
		}
	}
	await attemptPin();
}
loadApps();

function searchApps() {
	// Get the search input and convert it to uppercase for case-insensitive search
	var input = document.getElementById("searchInput");
	var filter = input.value.toUpperCase();
	
	// Get all the app cards
	var appCards = document.querySelectorAll(".appcard");
	
	// Loop through all app cards and hide those that don't match the search query
	appCards.forEach(function(card) {
	  var appName = card.querySelector(".appname").textContent || card.querySelector(".appname").innerText;
	  var appCategory = card.getAttribute("data-category") || "";
  
	  // Check if the app name or category matches the search query
	  if (appName.toUpperCase().indexOf(filter) > -1 || appCategory.toUpperCase().indexOf(filter) > -1) {
		card.parentElement.style.display = ""; // Show matching cards
	  } else {
		card.parentElement.style.display = "none"; // Hide non-matching cards
	  }
	});
  }
  