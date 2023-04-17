showNavBar();

function showNavBar() {
  let nav = document.createElement("nav");
  let body = document.querySelector("body").append(nav);
  let arr = (document.querySelector("nav").innerHTML = `
    <div class="container">
    <div class="logo">
    <a href="admin-panel.html">
    <img src="svg/logo.svg" alt="logo" height="100%">
    </a>
    </div>
    <div class="bars inactive" onclick="toggleBars()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="links">
      <ul>
        <li class="main-list"><a href="admin-panel.html">Home</a></li>
        <li class="main-list"><a href="add-department.html">Add department</a></li>
        <li class="main-list"><a href="add-course.html">Add Course</a></li>
        <li class="main-list"><a href="registration.html">Add Student</a></li>
        <li class="main-list"><a href="all-students-page.html">View All</a></li>
        <li class="main-list"><a href="student-page.html">Search</a></li>
      </ul>
    </div>
  </div>`);
}
