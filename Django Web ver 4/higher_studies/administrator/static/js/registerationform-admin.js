// get form elements
const fullNameInput = document.getElementById("full-name");
const idNumberInput = document.getElementById("id-number");
const passwordInput = document.getElementById("password");
const genderSelect = document.getElementById("gender");
const submitBtn = document.getElementById("submit-btn");

// prevent default form submission behavior, validate form data, and log form data to console
submitBtn.addEventListener("click", (event) => {
	event.preventDefault();

	// validate form data
	if (!fullNameInput.value) {
		alert("Please enter your full name.");
		return;
	}

	if (!passwordInput.value) {
		alert("Please enter your password");
		return;
	}

	if (!fullNameInput.value.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)) {
		alert("Please enter your full name with at least two separated strings.");
		return;
	}

	if (!idNumberInput.value) {
		alert("Please enter your ID number.");
		return;
	}

	const idRegex = /^(19[0-9]{2}|20[0-2][0-9]|2030)[0-9]{4}$/; // Regex to match valid IDs

	if (!idNumberInput.value.match(idRegex)) {
		alert("Please enter a valid ID number with the format YYYYXXXX.");
		return;
	}

	if (genderSelect.value === "") {
		alert("Please select your gender.");
		return;
	}

	// const formData = {
	// 	"Full Name": fullNameInput.value,
	// 	ID: idNumberInput.value,
	// 	Password: passwordInput.value,
	// 	Gender: genderSelect.value,
	// };
	// save form data in local storage

	// if (!window.localStorage.getItem("admins")) {
	// 	localStorage.setItem("admins", "{}");
	// }

	let zData = {};
	zData["firstName"] = fullNameInput.value.split(" ")[0];
	zData["lastName"] = fullNameInput.value.split(" ")[1];
	zData["id"] = idNumberInput.value;
	zData["password"] = btoa(passwordInput.value);
	zData["Gender"] = genderSelect.value;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

	xhr.onload = function () {
		if (xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);
			if (response.success) {
				alert("Data submitted successfully");
			} else {
				alert("Failed to submit data, ID Already Used Before !");
			}
		}
	};

	var data =
		"firstName=" +
		encodeURIComponent(zData["firstName"]) +
		"&lastName=" +
		encodeURIComponent(zData["lastName"]) +
		"&id=" +
		encodeURIComponent(zData["id"]) +
		"&password=" +
		encodeURIComponent(zData["password"]) +
		"&Gender=" +
		encodeURIComponent(zData["Gender"]);
	xhr.send(data);
});

function getCookie(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie !== "") {
		var cookies = document.cookie.split(";");
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i].trim();
			if (cookie.substring(0, name.length + 1) === name + "=") {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}

// let allAdmins = JSON.parse(window.localStorage.getItem("admins"));
// let zData = {};
// zData["firstName"] = fullNameInput.value.split(" ")[0];
// zData["lastName"] = fullNameInput.value.split(" ")[1];
// zData["id"] = idNumberInput.value;
// zData["password"] = btoa(passwordInput.value);
// zData["Gender:"] = genderSelect.value;

// allAdmins[idNumberInput.value] = zData;
// window.localStorage.setItem("admins", JSON.stringify(allAdmins));

// window.location.replace("./main-page.html");
