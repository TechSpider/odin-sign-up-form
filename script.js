function check() {
	var input = document.getElementById("password-confirm-input");
	if (input.value != document.getElementById("password-input").value) {
		input.setCustomValidity("Password Must be Matching.");
	} else {
		input.setCustomValidity("");
	}
}
