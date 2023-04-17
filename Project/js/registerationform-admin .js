// get form elements
const fullNameInput = document.getElementById('full-name');
const idNumberInput = document.getElementById('id-number');
const passwordInput = document.getElementById('password');
const genderSelect = document.getElementById('gender');
const submitBtn = document.getElementById('submit-btn');

// prevent default form submission behavior, validate form data, and log form data to console
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // validate form data
    if (!fullNameInput.value) {
        alert('Please enter your full name.');
        return;
    }

    if(!passwordInput.value){
        alert('Please enter your password');
        return;
    }

    if (!fullNameInput.value.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)) {
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

    if (genderSelect.value === '') {
        alert('Please select your gender.');
        return;
    }

    const formData = {
        'Full Name': fullNameInput.value,
        'ID': idNumberInput.value,
        'Password':passwordInput.value,
        'Gender': genderSelect.value
    };
    // save form data in local storage

    if(!window.localStorage.getItem('admins')){
        localStorage.setItem('admins', '{}');
    }

    let allAdmins = JSON.parse(window.localStorage.getItem('admins'));
    let zData = {};
    zData['firstName'] = fullNameInput.value.split(' ')[0];
    zData['lastName'] = fullNameInput.value.split(' ')[1];
    zData['id'] = idNumberInput.value;
    zData['password'] = btoa(passwordInput.value);
    zData['Gender:'] = genderSelect.value;

    allAdmins[idNumberInput.value] = zData;
    window.localStorage.setItem('admins', JSON.stringify(allAdmins));

    window.location.replace("./main-page.html")

});

