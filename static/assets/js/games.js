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

// Fetch and display games
async function loadGames() {
	try {
		let games = await fixJSON(await (await fetch("assets/json/games.json")).json());
		if (!games) throw new Error("Failed to fix JSON");

		games.sort((a, b) => a.name.localeCompare(b.name));

		games.forEach(async (game) => {
			const gameEl = document.createElement("li");
			const gameDesc = game.desc || "There is no set description";
			const gameCategories = game.categories || "all";
			const gameImg = game.img || "/web.png";
			const gameName = game.name || "Unknown";
			gameEl.innerHTML = `
                <article class="gamecard" data-category="${gameCategories}">
                  <a href="#" onclick='(async () => { await saveGame(${game})}); })();'>
                    <figure>
                      <img loading="lazy"
					   title='${gameName}' src="${gameImg}" class="gameimage" alt="${gameName}"/>
                    </figure>
                  </a>
                  <button onclick="pin('${gameName}');" style="color:white;" aria-label="Pin game">
                    <i class="fa fa-map-pin" style="display:block;" aria-hidden="true"></i>
                  </button>
                  <div class="gameinfo">
                    <header>
                      <h2 class="gamename">${gameName}</h2>
                    </header>
                    <p class="gamedesc">${gameDesc}</p>
                  </div>
                </article>
            `;
			document.querySelector(".gamecontainer").appendChild(gameEl);

			if ((await localforage.getItem(game.name)) === "pinned") document.querySelector(".pinned").appendChild(gameEl.cloneNode(true));
		});
	} catch (error) {
		console.error(error);
	}
}

// Save game data with localforage
function saveGame(game) {
	game = JSON.stringify(game);
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
loadGames();

function searchGames() {
	// Get the search input and convert it to uppercase for case-insensitive search
	var input = document.getElementById("searchInput");
	var filter = input.value.toUpperCase();
	
	// Get all the game cards
	var gameCards = document.querySelectorAll(".gamecard");
	
	// Loop through all game cards and hide those that don't match the search query
	gameCards.forEach(function(card) {
	  var gameName = card.querySelector(".gamename").textContent || card.querySelector(".gamename").innerText;
	  var gameCategory = card.getAttribute("data-category") || "";
  
	  // Check if the game name or category matches the search query
	  if (gameName.toUpperCase().indexOf(filter) > -1 || gameCategory.toUpperCase().indexOf(filter) > -1) {
		card.parentElement.style.display = ""; // Show matching cards
	  } else {
		card.parentElement.style.display = "none"; // Hide non-matching cards
	  }
	});
  }
  