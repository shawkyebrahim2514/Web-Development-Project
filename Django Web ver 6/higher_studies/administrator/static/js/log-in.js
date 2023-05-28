if (window.sessionStorage.getItem("loggedAdmin") != null) {
  window.location.href = "admin-panel.html";
}
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	const idNumberInput = document.getElementById("ID").value;
	const passwordInput = btoa(document.getElementById("Password").value);

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

	xhr.onload = function () {
		if (xhr.status === 200) {
			let response = JSON.parse(xhr.responseText);
			if (response.success) {
				// alert("Data submitted successfully");
				let logged = {'firstName' : response.firstName , 'lastName' : response.lastName}
				window.sessionStorage.setItem("loggedAdmin",JSON.stringify(logged));
				console.log(sessionStorage)
				window.location.href = "../main/admin-panel";
			} else {
				alert("Failed to submit data");
			}
		}
	};

	var data =
		"id=" +
		encodeURIComponent(idNumberInput) +
		"&password=" +
		encodeURIComponent(passwordInput);
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
if(window.sessionStorage.getItem("loggedAdmin")){
	window.location.href = "http://127.0.0.1:8000/main/admin-panel/";
}

