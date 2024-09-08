// Function to fix JSON string
async function fixJSON(json) {
	function bulkRegex(str, callback) {
		if (callback && typeof callback === "function") {
			return callback(str);
		} else if (callback && Array.isArray(callback)) {
			for (let i = 0; i < callback.length; i++) {
				if (callback[i] && typeof callback[i] === "function") {
					str = callback[i](str);
				} else {
					break;
				}
			}
			return str;
		}
		return str;
	}

	if (json && json !== "") {
		if (typeof json !== "string") {
			try {
				json = JSON.stringify(json);
			} catch (e) {
				return false;
			}
		}
		if (typeof json === "string") {
			json = bulkRegex(json, false, [
				(str) => str.replace(/[\n\t]/gm, ""),
				(str) => str.replace(/,\}/gm, "}"),
				(str) => str.replace(/,\]/gm, "]"),
				(str) => {
					str = str.split(/(?=[,\}\]])/g);
					str = str.map((s) => {
						if (s.includes(":") && s) {
							let strP = s.split(/:(.+)/, 2);
							strP[0] = strP[0].trim();
							if (strP[0]) {
								let firstP = strP[0].split(/([,\{\[])/g);
								firstP[firstP.length - 1] = bulkRegex(
									firstP[firstP.length - 1],
									false,
									(p) => p.replace(/[^A-Za-z0-9\-_]/g, ""),
								);
								strP[0] = firstP.join("");
							}
							let part = strP[1].trim();
							if (
								(part.startsWith('"') && part.endsWith('"')) ||
								(part.startsWith("'") && part.endsWith("'")) ||
								(part.startsWith("`") && part.endsWith("`"))
							) {
								part = part.substr(1, part.length - 2);
							}
							part = bulkRegex(part, false, [
								(p) => p.replace(/(["])/g, "\\$1"),
								(p) => p.replace(/\\'/g, "'"),
								(p) => p.replace(/\\`/g, "`"),
							]);
							strP[1] = ('"' + part + '"').trim();
							s = strP.join(":");
						}
						return s;
					});
					return str.join("");
				},
				(str) =>
					str.replace(/(['"])?([a-zA-Z0-9\-_]+)(['"])?:/g, '"$2":'),
				(str) => {
					str = str.split(/(?=[,\}\]])/g);
					str = str.map((s) => {
						if (s.includes(":") && s) {
							let strP = s.split(/:(.+)/, 2);
							strP[0] = strP[0].trim();
							if (
								strP[1].includes('"') &&
								strP[1].includes(":")
							) {
								let part = strP[1].trim();
								if (
									part.startsWith('"') &&
									part.endsWith('"')
								) {
									part = part.substr(1, part.length - 2);
									part = bulkRegex(part, false, (p) =>
										p.replace(/(?<!\\)"/g, ""),
									);
								}
								strP[1] = ('"' + part + '"').trim();
							}
							s = strP.join(":");
						}
						return s;
					});
					return str.join("");
				},
			]);
			try {
				json = JSON.parse(json);
			} catch (e) {
				return false;
			}
		}
		return json;
	}
	return false;
}

// Fetch and display games
// Fetch and display games
async function loadGames() {
	try {
		const response = await fetch("assets/json/games.json");
		let games = await response.json();
		games = await fixJSON(games);
		if (!games) throw new Error("Failed to fix JSON");

		games.sort((a, b) => a.name.localeCompare(b.name));

		games.forEach(async (game) => {
			const gameEl = document.createElement("li");
			const gameDesc = game.desc || "There is no set description";
			const gameCategories = game.categories || "all";
			const gameImg = game.img || "/web.png";
			gameEl.innerHTML = `
                <div class="gamecard" data-category="${gameCategories}">
                  <a href="#" onclick='(async () => { await saveGame(${JSON.stringify(game)}); })();'>
                    <img title='${game.name}' src="${gameImg}" class="gameimage"/>
                  </a>
                  <i onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
                  <a href="#">
                    <div class="gameinfo">
                      <b>
                        <p class="gamename">${game.name}</p>
                      </b>
                      <p class="gamedesc">${gameDesc}</p>
                    </div>
                  </a>
                </div>
            `;
			document.querySelector(".gamecontainer").appendChild(gameEl);

			if ((await localforage.getItem(game.name)) === "pinned") {
				const pinnedEl = document.createElement("li");
				const pinnedDesc = game.desc || " ";
				const pinnedCategories = game.categories || "all";
				const pinnedImg = game.img || "/web.png";
				pinnedEl.innerHTML = `
                    <div class="gamecard" data-category="${pinnedCategories}">
                      <a href="#" onclick='(async () => { await saveGame(${JSON.stringify(game)}); })();'>
                        <img title='${game.name}' src="${pinnedImg}" class="gameimage"/>
                      </a>
                      <i onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
                      <a href="#">
                        <div class="gameinfo">
                          <b>
                            <p class="gamename">${game.name}</p>
                          </b>
                          <p class="gamedesc">${pinnedDesc}</p>
                        </div>
                      </a>
                    </div>
                `;
				document.querySelector(".pinned").appendChild(pinnedEl);
			}
		});
	} catch (error) {
		console.error(error);
	}
}

// Save game data with localforage
function saveGame(game) {
	return localforage
		.setItem("currentgame", game)
		.then(() => {
			window.location.href = "play";
		})
		.catch((error) => {
			console.error("Error saving game:", error);
		});
}

// Show category filter
function showCategory() {
	var selectedCategories = Array.from(
		document.querySelectorAll("#category option:checked"),
	).map((option) => option.value);
	var games = document.getElementsByClassName("gamecard");

	for (var i = 0; i < games.length; i++) {
		var game = games[i];
		var categories = game.getAttribute("data-category").split(" ");
		if (
			selectedCategories.length === 0 ||
			selectedCategories.some((category) => categories.includes(category))
		) {
			game.style.display = "block";
		} else {
			game.style.display = "none";
		}
	}
}

// Pin or unpin a game
async function pin(name) {
	const isPinned = (await localforage.getItem(name)) === "pinned";
	async function attemptPin() {
		try {
			await localforage.setItem(name, isPinned ? "" : "pinned");
			const gameNotice = await localforage.getItem("gamenotice");
			if (gameNotice === null || gameNotice !== "true") {
				const result = await Swal.fire({
					title: isPinned ? "Unpinned!" : "Pinned!",
					text: `This game has been ${isPinned ? "unpinned" : "pinned"}!`,
					icon: "success",
					confirmButtonColor: "#3085d6",
					confirmButtonText: "Don't show me again.",
				});

				if (result.isConfirmed) {
					await localforage.setItem("gamenotice", "true");
					await Swal.fire({
						title: "Success!",
						text: "When you pin a game this won't be shown again.",
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
				text: `There was an issue with ${isPinned ? "unpinning" : "pinning"} this game.`,
				icon: "error",
				confirmButtonText: "Try Again",
			});

			if (result.isConfirmed) {
				attemptPin();
			}
		}
	}

	attemptPin(); // Start the process
}

// Function to search games
function searchGames() {
	var input = document.getElementById("searchInput");
	var filter = input.value.toUpperCase();
	var container = document.getElementById("games");
	var items = container.getElementsByClassName("gamecard");

	for (var i = 0; i < items.length; i++) {
		var gameName = items[i].getElementsByClassName("gamename")[0].innerText;
		if (gameName.toUpperCase().indexOf(filter) > -1) {
			items[i].style.display = "";
		} else {
			items[i].style.display = "none";
		}
	}
}

// Initialize the game loading
loadGames();
