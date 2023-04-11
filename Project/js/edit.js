// define arrays of available courses for each department
const isCourses = ['IS101', 'IS201', 'IS301', 'IS401'];
const csCourses = ['CS101', 'CS201', 'CS301', 'CS401'];
const aiCourses = ['AI101', 'AI201', 'AI301', 'AI401'];
const itCourses = ['IT101', 'IT201', 'IT301', 'IT401'];
const dsCourses = ['DS101', 'DS201', 'DS301', 'DS401'];

// define function to populate courses select element based on selected department
function populateCourses(departmentSelect, courseSelect1, courseSelect2, courseSelect3) {
    // get selected department value
    const department = departmentSelect.value;

    // determine which array of courses to use based on selected department
    let courses = [];
    switch (department) {
        case 'IS':
            courses = isCourses;
            break;
        case 'CS':
            courses = csCourses;
            break;
        case 'AI':
            courses = aiCourses;
            break;
        case 'IT':
            courses = itCourses;
            break;
        case 'DS':
            courses = dsCourses;
            break;
    }

    // remove existing options from course select elements
    const selectedCourses = [courseSelect1.value, courseSelect2.value, courseSelect3.value];
    [courseSelect1, courseSelect2, courseSelect3].forEach((courseSelect) => {
        while (courseSelect.options.length > 0) {
            const option = courseSelect.options[0];
            if (selectedCourses.indexOf(option.value) === -1) {
                courseSelect.remove(0);
            } else {
                selectedCourses.splice(selectedCourses.indexOf(option.value), 1);
            }
        }
    });

    // add new options based on selected department, excluding selected courses
    courses.forEach((course) => {
        if (selectedCourses.indexOf(course) === -1) {
            [courseSelect1, courseSelect2, courseSelect3].forEach((courseSelect) => {
                const option = new Option(course, course);
                courseSelect.add(option);
            });
        }
    });

    // remove selected courses from available courses list
    [courseSelect1, courseSelect2, courseSelect3].forEach((courseSelect) => {
        const selectedCourse = courseSelect.value;
        if (selectedCourse) {
            courses.splice(courses.indexOf(selectedCourse), 1);
        }
    });
}


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

//Put Default Values
let data1 = localStorage.getItem('Name:');
let data2 = localStorage.getItem('ID:');
let data3 = localStorage.getItem('Date of Birth:');
let data4 = localStorage.getItem('University:');
let data5 = localStorage.getItem('Gender:');
let data6 = localStorage.getItem('Department:');
let data7 = localStorage.getItem('Status:');
let data8 = localStorage.getItem('Course1:');
let data9 = localStorage.getItem('Course2:');
let data10 = localStorage.getItem('Course3:');

fullNameInput.setAttribute('value',data1);
idNumberInput.setAttribute('value',data2);
dobInput.setAttribute('value',data3);
universityInput.setAttribute('value',data4);
// genderSelect.setAttribute('value',data5);
// statusSelect.setAttribute('value',data6);
// departmentSelect.setAttribute('value',data7);
// course1Select.setAttribute('value',data8);
// course2Select.setAttribute('value',data9);
// course3Select.setAttribute('value',data10);

// populate courses select elements when department is changed
departmentSelect.addEventListener('change', () => {
    populateCourses(departmentSelect, course1Select, course2Select, course3Select);
});

// prevent default form submission behavior, validate form data, and log form data to console
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // validate form data
    if (!fullNameInput.value || !idNumberInput.value || !dobInput.value || !universityInput.value) {
        alert('Please fill in all required fields.');
        return;
    }

    const formData = {
        'Full Name': fullNameInput.value,
        'ID': idNumberInput.value,
        'Date of Birth': dobInput.value,
        'University': universityInput.value,
        'Gender': genderSelect.value,
        'Status': statusSelect.value,
        'Department': departmentSelect.value,
        'Course 1': course1Select.value,
        'Course 2': course2Select.value,
        'Course 3': course3Select.value
    };
    console.log(formData);
    for(i in formData){
       localStorage.setItem(i,formData[i]);
    }
});