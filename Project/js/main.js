function toggleBars() {
  let state = document.getElementsByClassName('bars')[0]
  if(state.classList.contains('inactive')) {
    state.classList.remove('inactive')
    state.classList.add('active')
  } else {
    state.classList.remove('active')
    state.classList.add('inactive')
  }
}

if(window.localStorage.getItem("loggedAdmin") == null){
  window.localStorage.setItem("warnning", "You must login first")
  window.location.href = "../login-page-admin.html";
}