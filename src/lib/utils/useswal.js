import Swal from "sweetalert2";

function fireswal(type, text, callback, confirmtext = "Ok", title) {
	Swal.fire({
		input: type,
		title: title,
		text: text,
		confirmButtonText: confirmtext,
	}).then((result) => {
		callback(result);
	});
}

export { fireswal };
