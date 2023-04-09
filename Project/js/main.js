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
