let loggedAdmin = window.localStorage.getItem("loggedAdmin");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
firstName.innerHTML = JSON.parse(loggedAdmin).firstName;
lastName.innerHTML = JSON.parse(loggedAdmin).lastName;

function logoutAdmin() {
    window.localStorage.removeItem("loggedAdmin");
    window.location.href = "../login-page-admin.html";
}