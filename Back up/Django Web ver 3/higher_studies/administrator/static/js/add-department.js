function addNewDepartment() {
  let newDepartment = document.getElementsByName("departmentName")[0].value;

  if (!newDepartment) {
	failedToAdd("Please enter a department name")
    return;
  }
  
  let xhr = new XMLHttpRequest();
	xhr.open("POST", "");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

	xhr.onload = function () {
		if (xhr.status === 200) {
			let response = JSON.parse(xhr.responseText);
			hideMessage();
			if (response.success) {
				successfullyAdding(response.successful_message)
			} 
			else {
				failedToAdd(response.warning_message)
			}
		}
	};
	var data =
		"newDepartment=" +
		encodeURIComponent(newDepartment);
	xhr.send(data);
}


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


function hideMessage(){
	document.getElementsByClassName("message")[0].style.display = "none";
	let successfulMessage = document.getElementsByClassName("successful")[0];
	let warningMessage = document.getElementsByClassName("warning")[0];
	successfulMessage.style.display = "none";
	warningMessage.style.display = "none";
  }


function failedToAdd(paragraph) {
	document.getElementsByClassName("message")[0].style.display = "block";
	let warningMessage = document.getElementsByClassName("warning")[0];
	warningMessage.innerHTML = paragraph;
	warningMessage.style.display = "block";
}


function successfullyAdding(paragraph) {
	document.getElementsByClassName("message")[0].style.display = "block";
	let successfulMessage = document.getElementsByClassName("successful")[0];
	successfulMessage.innerHTML = paragraph;
	successfulMessage.style.display = "block";
}
