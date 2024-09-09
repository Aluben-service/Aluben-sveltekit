const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.onmouseenter = Swal.stopTimer;
		toast.onmouseleave = Swal.resumeTimer;
	},
});

// Password validation function
typeof validatePassword === "undefined"
	? (validatePassword = function () {
			let enteredPassword =
				document.getElementById("enterPassword").value;
			let storedPassword = localStorage.getItem("passcode");
			if (enteredPassword === storedPassword) {
				document.getElementById("enterPassword").style.display = "none";
			}
		})
	: null;

if (Math.floor(Math.random() * 1000001) === 9933)
	if (document.getElementById("7689"))
		document.getElementById("7689").style.display = "block";
if (Math.floor(Math.random() * 101) === 43)
	if (document.getElementById("traf-say"))
		document.getElementById("traf-say").style.display = "block";

// Function to start time and update every second
function startTime() {
	const today = new Date();
	const h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;
	const timeStr = `${h}:${m}:${s}`;
	document.getElementById("txt").innerHTML = timeStr;
	setTimeout(startTime, 1000);
}

// Function to change passcode with validation
function passcodechange() {
	const oldpasscode = prompt("Enter old passcode");
	const storedPasscode = localStorage.getItem("passcode");
	if (oldpasscode === storedPasscode) {
		const newpasscode = prompt("Enter new passcode");
		localStorage.setItem("passcode", newpasscode);
	} else {
		alert("Incorrect passcode");
	}
}

function passcodeask() {
	Swal.fire({
		title: `${localStorage.getItem("passcode") ? "Enter" : "Set"} your passcode.`,
		input: "password", // Change input type to password
		inputAttributes: {
			autocapitalize: "off",
		},
		showCancelButton: false,
		confirmButtonText: "Ok!",
		showLoaderOnConfirm: true,
		preConfirm: async (login) => {
			try {
				let passcode = localStorage.getItem("passcode");
				if (passcode && passcode == login) {
					Toast.fire({
						icon: "success",
						title: "HAHA YOU CANT READ THIS",
					});
				} else if (passcode && passcode !== login) {
					Swal.fire({
						title: "Failed!",
						text: "Wrong passcode!",
						icon: "error",
					}).then(() => {
						passcodeask(); // Re-prompt the user
					});
				} else if (!localStorage.getItem("passcode")) {
					localStorage.setItem("passcode", login);
					Swal.fire({
						title: "Successful",
						text: "Passcode successfully set!",
						icon: "success",
					});
				}
			} catch (error) {
				Swal.fire({
					title: "Failed!",
					text: `Error: ${error}`,
					icon: "error",
				});
			}
		},
		allowOutsideClick: () => false,
	});
}

passcodeask();
