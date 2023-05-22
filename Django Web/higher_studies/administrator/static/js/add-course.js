if (!window.localStorage.getItem("allDepartments")) {
  window.localStorage.setItem("allDepartments", "{}");
}

function loadAllDepartments() {
  let departmentDropList = document.getElementById("department");
  let options = '<option value"">Choose Department</option>';
  let allDepartments = JSON.parse(
    window.localStorage.getItem("allDepartments")
  );
  for (let department in allDepartments) {
    options += '<option value="' + department + '">' + department + "</option>";
  }
  departmentDropList.innerHTML = options;
}

loadAllDepartments();

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
  let allDepartments = JSON.parse(
    window.localStorage.getItem("allDepartments")
  );
  if (allDepartments[departmentName].includes(newCourseName)) {
    failedToAdd(
      `The Course (${newCourseName}) is already exist, Please try again`
    );
    return;
  }
  allDepartments[departmentName].push(newCourseName);
  window.localStorage.setItem("allDepartments", JSON.stringify(allDepartments));
  successfullyAdding();
}

function failedToAdd(paragraph) {
  window.localStorage.setItem("warning", paragraph);
  window.location.href = "add-course.html";
}

function successfullyAdding() {
  window.localStorage.setItem(
    "successful",
    `Successfully Added Course (${
      document.getElementsByName("courseName")[0].value
    })`
  );
  window.location.href = "add-course.html";
}
