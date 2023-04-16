//get Data
const idNumberInput = document.getElementById('ID');
const passwordInput = document.getElementById('Password');

let allStudents = JSON.parse(window.localStorage.getItem('studentInfo'));
for(ids in allStudents){
    if(ids == idNumberInput){
        let zData = JSON.parse(localStorage.getItem('studentInfo'))[ids];
        if(zData[''])
    }
}