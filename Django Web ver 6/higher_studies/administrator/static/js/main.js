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

if(window.sessionStorage.getItem("loggedAdmin") == null){
  window.sessionStorage.setItem("warnning", "You must login first")
  window.location.href = "http://127.0.0.1:8000/main/";
}

