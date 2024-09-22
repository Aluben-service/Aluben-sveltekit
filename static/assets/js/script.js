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

const passcodePrompt = Swal.mixin({
	input: "password",
	inputAttributes: {
		autocapitalize: "off",
	},
	showCancelButton: false,
	confirmButtonText: "Ok!",
	allowOutsideClick: () => false,
	showLoaderOnConfirm: true,
	preConfirm: async (login) => {
		return login; // Returns the user input (passcode)
	},
});

// Password validation function
let validatePassword = () => {
	let enteredPassword = document.getElementById("enterPassword").value;
	let storedPassword = localStorage.getItem("passcode");
	if (enteredPassword === storedPassword) {
		document.getElementById("enterPassword").style.display = "none";
	}
};

if (Math.floor(Math.random() * 1000001) === 9933)
	if (document.getElementById("7689"))
		document.getElementById("7689").style.display = "block";
if (Math.floor(Math.random() * 101) === 43)
	if (document.getElementById("traf-say"))
		document.getElementById("traf-say").style.display = "block";

// Function to change passcode with validation
function passcodechange() {
	passcodePrompt
		.fire({
			title: "Set your passcode.",
		})
		.then((result) => {
			if (result.isConfirmed) {
				try {
					localStorage.setItem("passcode", result.value);
					Swal.fire({
						title: "Successful",
						text: "Passcode successfully set!",
						icon: "success",
					});
				} catch (error) {
					Swal.fire({
						title: "Failed!",
						text: `Error: ${error}`,
						icon: "error",
					});
				}
			}
		});
}

function passcodeask() {
	const savedPasscode = localStorage.getItem("passcode");
	passcodePrompt
		.fire({
			title: `${savedPasscode ? "Enter" : "Set"} your passcode.`,
		})
		.then((result) => {
			if (result.isConfirmed) {
				try {
					const enteredPasscode = result.value;
					if (savedPasscode) {
						if (enteredPasscode === savedPasscode) {
							Toast.fire({
								icon: "success",
								title: "HAHA YOU CAN'T READ THIS",
							});
						} else {
							Swal.fire({
								title: "Failed!",
								text: "Wrong passcode!",
								icon: "error",
							}).then(() => passcodeask()); // Re-prompt the user on wrong passcode
						}
					} else {
						// If no passcode is set, save the entered passcode
						localStorage.setItem("passcode", enteredPasscode);
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
			}
		});
}

passcodeask();
