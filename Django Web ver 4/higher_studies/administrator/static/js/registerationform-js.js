// let allDepartment = JSON.parse(window.localStorage.getItem('allDepartments'));

// get form elements
const fullNameInput = document.getElementById('full-name');
const idNumberInput = document.getElementById('id-number');
const dobInput = document.getElementById('dob');
const universityInput = document.getElementById('university');
const genderSelect = document.getElementById('gender');
const statusSelect = document.getElementById('status');
const departmentSelect = document.getElementById('department');
const course1Select = document.getElementById('course1');
const course2Select = document.getElementById('course2');
const course3Select = document.getElementById('course3');
const submitBtn = document.getElementById('submit-btn');


// define arrays of available courses for each department
// const isCourses = ['IS101', 'IS201', 'IS301', 'IS401'];
// const csCourses = ['CS101', 'CS201', 'CS301', 'CS401'];
// const aiCourses = ['AI101', 'AI201', 'AI301', 'AI401'];
// const itCourses = ['IT101', 'IT201', 'IT301', 'IT401'];
// const dsCourses = ['DS101', 'DS201', 'DS301', 'DS401'];

// define function to populate courses select element based on selected department
// for(dep in allDepartment){
//     const option = document.createElement('option');
//     option.text = dep;
//     option.value = dep;
//     departmentSelect.add(option);
// }


// function populateCourses(departmentSelect, courseSelect1, courseSelect2, courseSelect3) {
//     // get selected department value
//     const department = departmentSelect.value;
//
//     // determine which array of courses to use based on selected department
//     let courses = allDepartment[department];
//
//     // display courses in course select elements
//     courseSelect1.innerHTML = '';
//     courseSelect2.innerHTML = '';
//     courseSelect3.innerHTML = '';
//     for (let i = 0; i < courses.length; i++) {
//         const option = document.createElement('option');
//         option.text = courses[i];
//         option.value = courses[i];
//         courseSelect1.add(option);
//         courseSelect2.add(option.cloneNode(true));
//         courseSelect3.add(option.cloneNode(true));
//     }
// }
function populateCourses(departmentSelect, courseSelect1, courseSelect2, courseSelect3) {
    // get selected department value
    const department = departmentSelect.value;

    // perform a Django query to get the courses for the selected department
    fetch(`/get-courses/${department}`)
        .then(response => response.json())
        .then(data => {
            // display courses in course select elements
            courseSelect1.innerHTML = '';
            courseSelect2.innerHTML = '';
            courseSelect3.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                console.log(data[i])
                const option = document.createElement('option');
                option.text = data[i];
                option.value = data[i];
                courseSelect1.add(option);
                courseSelect2.add(option.cloneNode(true));
                courseSelect3.add(option.cloneNode(true));
            }
        });
}


// populate courses select elements when department is changed
departmentSelect.addEventListener('change', () => {
    populateCourses(departmentSelect, course1Select, course2Select, course3Select);
});

// prevent default form submission behavior, validate form data, and log form data to console
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // validate form data
    if (!fullNameInput.value) {
        alert('Please enter your full name.');
        return;
    }

    if (new Date(dobInput.value).getFullYear() >= new Date(2004, 1, 1).getFullYear()) {
        alert('Please enter valid birth date.');
        return;
    }

    if (!fullNameInput.value.match(/^[a-zA-Z]+(\s[a-zA-Z]+)+$/)) {
        alert('Please enter your full name with at least two separated strings.');
        return;
    }

    if (!idNumberInput.value) {
        alert('Please enter your ID number.');
        return;
    }

    const idRegex = /^(19[0-9]{2}|20[0-2][0-9]|2030)[0-9]{4}$/; // Regex to match valid IDs

    if (!idNumberInput.value.match(idRegex)) {
        alert('Please enter a valid ID number with the format YYYYXXXX.');
        return;
    }


    if (!dobInput.value) {
        alert('Please enter your date of birth.');
        return;
    }

    if (!universityInput.value) {
        alert('Please enter your university.');
        return;
    }
    if (genderSelect.value === '') {
        alert('Please select your gender.');
        return;
    }
    if (statusSelect.value === '') {
        alert('Please select your status.');
        return;
    }

    if (departmentSelect.value === '') {
        alert('Please select a department.');
        return;
    }

    if (course1Select.value === '') {
        alert('Please select a course for Course 1.');
        return;
    }

    if (course2Select.value === '') {
        alert('Please select a course for Course 2.');
        return;
    }

    if (course3Select.value === '') {
        alert('Please select a course for Course 3.');
        return;
    }

    if (course1Select.value === course2Select.value || course1Select.value === course3Select.value || course2Select.value === course3Select.value) {
        alert('Please select three unique courses.');
        return;
    }

    // const formData = {
    //     'Full Name': fullNameInput.value,
    //     'ID': idNumberInput.value,
    //     'Date of Birth': dobInput.value,
    //     'University': universityInput.value,
    //     'Gender': genderSelect.value,
    //     'Status': statusSelect.value,
    //     'Department': departmentSelect.value,
    //     'Course 1': course1Select.value,
    //     'Course 2': course2Select.value,
    //     'Course 3': course3Select.value
    // };
    // save form data in local storage

    // if(!window.localStorage.getItem('studentInfo')){
    //     localStorage.setItem('studentInfo', '{}');
    // }

    // let allStudent = JSON.parse(window.localStorage.getItem('studentInfo'));
    // let zData = {};
    // zData['Name:'] = fullNameInput.value;
    // zData['ID:'] = idNumberInput.value;
    // zData['Date of Birth:'] = dobInput.value;
    // zData['University:'] = universityInput.value;
    // zData['Gender:'] = genderSelect.value;
    // zData['Status:'] = statusSelect.value;
    // zData['Department:'] = departmentSelect.value;
    // zData['Course1:'] = course1Select.value;
    // zData['Course2:'] = course2Select.value;
    // zData['Course3:'] = course3Select.value;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

    xhr.onload = function () {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            if (response.success) {
                alert("Data submitted successfully");

            } else {
                alert("Failed to submit data");
            }
        }
    };

    var data =
        "fullNameInput=" +
        encodeURIComponent(fullNameInput.value) +
        "&idNumberInput=" +
        encodeURIComponent(idNumberInput.value) +
        "&dobInput=" +
        encodeURIComponent(dobInput.value) +
        "&universityInput=" +
        encodeURIComponent(universityInput.value) +
        "&genderSelect=" +
        encodeURIComponent(genderSelect.value) +
        "&statusSelect=" +
        encodeURIComponent(statusSelect.value) +
        "&departmentSelect=" +
        encodeURIComponent(departmentSelect.value) +
        "&course1Select=" +
        encodeURIComponent(course1Select.value) +
        "&course2Select=" +
        encodeURIComponent(course2Select.value) +
        "&course3Select=" +
        encodeURIComponent(course3Select.value);


    xhr.send(data);
});

function mypromise() {
    const myPromis = new Promise((resolveFunction, reject) => {
            resolveFunction(document.getElementById('saved').style.display = 'inline')
        }
    ).then(() => {
            setTimeout(() => {
                document.getElementById('saved').style.display = 'none'
            }, 3000)
        }
    );
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

