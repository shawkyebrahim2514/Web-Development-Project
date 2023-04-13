function loadAllDepartments() {
  let departmentDropList = document.getElementById('department')
  let options = '<option value"">Choose Department</option>';
  let allDepartments = JSON.parse(window.localStorage.getItem('allDepartments'))
  for (let department in allDepartments) {
    options += '<option value="' + department + '">' + department + '</option>'
  }
  departmentDropList.innerHTML = options
}

loadAllDepartments()

function addNewCourse() {
  let departmentName = document.getElementById('department').value
  let newCourseName = document.getElementsByName('courseName')[0].value
  let allDepartments = JSON.parse(window.localStorage.getItem('allDepartments'))
  allDepartments[departmentName].push(newCourseName)
  window.localStorage.setItem('allDepartments', JSON.stringify(allDepartments))
}
