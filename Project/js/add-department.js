if (!window.localStorage.getItem('allDepartments')) {
  window.localStorage.setItem('allDepartments', '{}')
}

function addNewDepartment() {
  let newDepartment = document.getElementsByName('departmentName')[0]
  let allDepartments = JSON.parse(window.localStorage.getItem('allDepartments'))
  allDepartments[newDepartment.value] = []
  window.localStorage.setItem('allDepartments', JSON.stringify(allDepartments))
}
