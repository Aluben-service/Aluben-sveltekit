document.addEventListener("DOMContentLoaded", async function () {
	const icon = document.getElementById("favicon");
	const name = document.getElementById("title");
  
	try {
	  const selectedValue = await localforage.getItem("cloak");
	  if (selectedValue) {
		switch (selectedValue) {
		  case "Google":
			icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/google.png");
			name.textContent = "Google";
			await localforage.setItem("name", "Google");
			await localforage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/google.png");
			break;
		  case "Drive":
			icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/drive.png");
			name.textContent = "My Drive - Google Drive";
			await localforage.setItem("name", "My Drive - Google Drive");
			await localforage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/drive.png");
			break;
		  case "Classroom":
			icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/classroom.png");
			name.textContent = "Classes";
			await localforage.setItem("name", "Classes");
			await localforage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/classroom.png");
			break;
		  case "Schoology":
			icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/schoology.png");
			name.textContent = "Home | Schoology";
			await localforage.setItem("name", "Home | Schoology");
			await localforage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/schoology.png");
			break;
		  case "Gmail":
			icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/gmail.png");
			name.textContent = "Gmail";
			await localforage.setItem("name", "Gmail");
			await localforage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/gmail.png");
			break;
		  case "Clever":
			icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/clever.png");
			name.textContent = "Clever | Portal";
			await localforage.setItem("name", "Clever | Portal");
			await localforage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/clever.png");
			break;
		  case "Khan":
			icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/khan.png");
			name.textContent = "Dashboard | Khan Academy";
			await localforage.setItem("name", "Dashboard | Khan Academy");
			await localforage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/khan.png");
			break;
		  default:
			break;
		}
	  }
  
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
		  document.body.style.backgroundImage = "url(assets/images/gashopper.jpg)";
		  document.getElementById("grass").style.display = "block";
		  break;
		case "StormyDay":
		  document.body.style.color = "#b0afb1";
		  document.body.style.backgroundImage = "url(assets/images/StormyDay.gif)";
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
  
	  async function say() {
		try {
		  const response = await fetch("assets/json/say.json");
		  const says = await response.json();
		  let randomSplash = says[Math.floor(Math.random() * says.length)];
  
		  if (randomSplash === "%GAMES_NUMBER%") {
			const games = await fetch(location.origin + "assets/json/games.json").json();
			randomSplash = `There are ${games.length} games currently`;
		  } else if (randomSplash === "%SPLASH_NUMBER%") {
			const splashCacheAll = await fetch("assets/json/say.json").json();
			randomSplash = `There are ${splashCacheAll.length} of these messages!`;
		  }
  
		  document.querySelector("#splash").textContent = randomSplash;
		} catch (error) {
		  console.error('Error fetching splash message:', error);
		}
	  }
  
	  say();
	} catch (error) {
	  console.error('Error loading settings:', error);
	}
  });
  
  window.addEventListener("keydown", function (event) {
	console.log("Typed key: " + event.key);
	// Handle panic key event if needed
	// if (event.key === await localforage.getItem("panickey") || "`") window.parent.window.location.replace(await localforage.getItem("panicurl") || "https://google.com");
  });
  
  function handleVisibilityChange() {
	localforage.getItem("clickoff_cloaking").then(clickoffCloaking => {
	  if (clickoffCloaking === "true") {
		if (document.hidden) {
		  document.title = "Google";
		  const originalFavicon = document.querySelector("link[rel*='icon']").href;
		  document.querySelector("link[rel*='icon']").href = "https://raw.githubusercontent.com/whitespider-dev/whitespider/Main/res/google.ico";
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
  