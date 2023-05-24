function addNewDepartment() {
  let newDepartment = document.getElementsByName("departmentName")[0].value;
  if (!newDepartment) {
    failedToAdd("Please enter a department name");
    return;
  }
  let allDepartments = JSON.parse(
    window.localStorage.getItem("allDepartments")
  );
  if (allDepartments[newDepartment])
    failedToAdd(
      `The Department (${newDepartment}) is already exist, Please try again`
    );
  else {
    allDepartments[newDepartment] = [];
    window.localStorage.setItem(
      "allDepartments",
      JSON.stringify(allDepartments)
    );
    successfullyAdding();
  }
}

function failedToAdd(paragraph) {
  window.localStorage.setItem("warning", paragraph);
  window.location.href = "add-department.html";
}

function successfullyAdding() {
  window.localStorage.setItem(
    "successful",
    `Successfully Added Department (${
      document.getElementsByName("departmentName")[0].value
    })`
  );
  window.location.href = "add-department.html";
}
