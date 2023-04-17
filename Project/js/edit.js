let allDepartment = JSON.parse(window.localStorage.getItem('allDepartments'));

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


// define function to populate courses select element based on selected department
for(dep in allDepartment){
    const option = document.createElement('option');
    option.text = dep;
    option.value = dep;
    departmentSelect.add(option);
}



function populateCourses(departmentSelect, courseSelect1, courseSelect2, courseSelect3) {
    // get selected department value
    const department = departmentSelect.value;

    // determine which array of courses to use based on selected department
    let courses = allDepartment[department];

    // display courses in course select elements
    courseSelect1.innerHTML = '';
    courseSelect2.innerHTML = '';
    courseSelect3.innerHTML = '';
    for (let i = 0; i < courses.length; i++) {
        const option = document.createElement('option');
        option.text = courses[i];
        option.value = courses[i];
        courseSelect1.add(option);
        courseSelect2.add(option.cloneNode(true));
        courseSelect3.add(option.cloneNode(true));
    }
}




// populate courses select elements when department is changed
departmentSelect.addEventListener('change', () => {
    populateCourses(departmentSelect, course1Select, course2Select, course3Select);
});

let currentID = window.localStorage.getItem('currentID');

//Put Default Values  // NEED TO PUT THE RIGHT ID!
let zData = JSON.parse(localStorage.getItem('studentInfo'))[currentID];

// ID CHange to session that is used until now of log in page/!!!
fullNameInput.setAttribute('value',zData['Name:']);
idNumberInput.setAttribute('value',zData['ID:']);
dobInput.setAttribute('value',zData['Date of Birth:']);
universityInput.setAttribute('value',zData['University:']);
genderSelect.value = zData['Gender:'];
statusSelect.value = zData['Status:'];
// departmentSelect.value = zData['Department:'];
// course1Select.value = zData['Course1:'];
// course2Select.value = zData['Course2:'];
// course3Select.value = zData['Course3:'];

// populate courses select elements when department is changed
departmentSelect.addEventListener('change', () => {
    populateCourses(departmentSelect, course1Select, course2Select, course3Select);
});


let deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click',()=>{
    let confirmationMsg = window.prompt('Enter ID for Confirmation','2021xxxx');
    if(confirmationMsg != null){
        if(confirmationMsg == idNumberInput.value){
            let allStudent = JSON.parse(window.localStorage.getItem('studentInfo'));
            delete allStudent[idNumberInput.value];
            localStorage.setItem('studentInfo', JSON.stringify(allStudent));
            location.href = "student-page.html";
        }
        else{
            window.alert('ID is not Correct !');
        }
    }
})


// prevent default form submission behavior, validate form data, and log form data to console
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

   // validate form data
    if (!fullNameInput.value) {
        alert('Please enter your full name.');
        return;
    }


    if(new Date(dobInput.value).getFullYear() >= new Date(2004, 1 ,1).getFullYear()){
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

    zData['Name:'] = fullNameInput.value;
    zData['ID:'] = idNumberInput.value;
    zData['Date of Birth:'] = dobInput.value;
    zData['University:'] = universityInput.value;
    zData['Gender:'] = genderSelect.value;
    zData['Status:']= statusSelect.value;
    zData['Department:'] = departmentSelect.value;
    zData['Course1:'] = course1Select.value;
    zData['Course2:'] = course2Select.value;
    zData['Course3:'] = course3Select.value;
    let allStudent = JSON.parse(localStorage.getItem('studentInfo'));
    allStudent[idNumberInput.value] = zData;
    localStorage.setItem('studentInfo',JSON.stringify(allStudent));
 
    const myPromis = new Promise((resolveFunction,reject)=>{
        resolveFunction(document.getElementById('saved').style.display = 'inline')
    }
    ).then(()=>{
        setTimeout(()=>{
            document.getElementById('saved').style.display = 'none'
        },3000)
        }    
    );
});

let goBackBtn = document.getElementById('go-back-btn');
goBackBtn.addEventListener('click',()=>{
        localStorage.setItem('currentID', currentID); 
        window.location.href = 'student-profile.html';
})