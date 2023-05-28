let loggedAdmin = window.sessionStorage.getItem("loggedAdmin");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
firstName.innerHTML = JSON.parse(loggedAdmin).firstName;
lastName.innerHTML = JSON.parse(loggedAdmin).lastName;

console.log(firstName.innerHTML)

console.log(JSON.parse(loggedAdmin).firstName)

function logoutAdmin() {
    window.sessionStorage.removeItem("loggedAdmin");
    window.location.href = "";
}