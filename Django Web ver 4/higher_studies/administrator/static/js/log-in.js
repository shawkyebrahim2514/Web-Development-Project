//get Data
// if (window.localStorage.getItem("admins") == null) {
//   let admins = {
//     20210184: {
//       id: "20210184",
//       password: btoa("admin"),
//       firstName: "Shawky",
//       lastName: "Ebrahim",
//     },
//     20210755: {
//       id: "20210755",
//       password: btoa("admin"),
//       firstName: "Alan",
//       lastName: "Samir",
//     },
//   };
// window.localStorage.setItem("admins", JSON.stringify(admins));
// }

// if (window.localStorage.getItem("warning") != null) {
//   document.getElementsByClassName("message")[0].style.display = "block";
//   let warningMessage = document.getElementsByClassName("warning")[0];
//   warningMessage.innerHTML = window.localStorage.getItem("warning");
//   warningMessage.style.display = "block";
//   window.localStorage.removeItem("warning");
// }


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

// let allAdmins = JSON.parse(window.localStorage.getItem("admins"));
// if (allAdmins[idNumberInput]) {
//   if (atob(allAdmins[idNumberInput].password) == passwordInput) {
//     window.localStorage.setItem(
//       "loggedAdmin",
//       JSON.stringify(allAdmins[idNumberInput])
//     );
//     window.location.href = "admin-panel.html";
//   } else failedLogin();
// } else failedLogin();

// function failedLogin() {
//   window.localStorage.setItem(
//     "warning",
//     "Wrong ID or Password, Please try again"
//   );
// }
