function addNewCourse() {
	let departmentName = document.getElementById("department").value;
	if (!departmentName) {
		failedToAdd("Please choose a department");
		return;
	}
	let newCourseName = document.getElementsByName("courseName")[0].value;
	if (!newCourseName) {
		failedToAdd("Please enter a course name");
		return;
	}
	let courseHours = parseInt(document.getElementById("courseHours").value);
	let courseDay = parseInt(document.getElementById("courseDay").value);
	let courseHall = parseInt(document.getElementById("courseHall").value);

	if (courseHours > 4 || courseHours < 1) {
		failedToAdd("Course Hourse should be more than 0 and less than 5");
		return;
	}
	if (courseDay > 7 || courseDay < 1) {
		failedToAdd("Course Day should be more than 0 and less than 8");
		return;
	}
	if (courseHall < 1) {
		failedToAdd("Course Hall should be more than 0");
		return;
	}

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

	xhr.onload = function () {
		if (xhr.status === 200) {
			let response = JSON.parse(xhr.responseText);
			if (response.success) {
				successfullyAdding(response.successful_message);
			} else {
				failedToAdd(response.warning_message);
			}
		}
	};

	var data =
		"departmentName=" +
		encodeURIComponent(departmentName) +
		"&newCourseName=" +
		encodeURIComponent(newCourseName) +
		"&courseHours=" +
		encodeURIComponent(courseHours) +
		"&courseDay=" +
		encodeURIComponent(courseDay) +
		"&courseHall=" +
		encodeURIComponent(courseHall);

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

function failedToAdd(paragraph) {
	hideMessage();
	document.getElementsByClassName("message")[0].style.display = "block";
	let warningMessage = document.getElementsByClassName("warning")[0];
	warningMessage.innerHTML = paragraph;
	warningMessage.style.display = "block";
}

function successfullyAdding(paragraph) {
	hideMessage();
	document.getElementsByClassName("message")[0].style.display = "block";
	let successfulMessage = document.getElementsByClassName("successful")[0];
	successfulMessage.innerHTML = paragraph;
	successfulMessage.style.display = "block";
}

function hideMessage() {
	document.getElementsByClassName("message")[0].style.display = "none";
	let successfulMessage = document.getElementsByClassName("successful")[0];
	let warningMessage = document.getElementsByClassName("warning")[0];
	successfulMessage.style.display = "none";
	warningMessage.style.display = "none";
}
