

//Button Declaration
const buttonEdit = document.getElementById('edit');
const buttonView = document.getElementById('view');
const buttonSearch = document.getElementById('search');

buttonEdit.onclick = function(){
    let data = document.getElementsByTagName('td');
    let header = document.getElementsByTagName('th');
    for(i in data){
        localStorage.setItem(header[i].innerHTML, data[i].innerHTML);
    }
    location.href = "edit-page.html";
};

buttonView.onclick = function(){
    location.href = "all-students-page.html";
};

buttonSearch.onclick = function(){
    location.href = "searching-page.html";
};




//Changing Profile Photo
//------------------------------------------------------
const imgDiv = document.querySelector('.profile-pic');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#upload-btn');


imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
    img.style.opacity = 0.3;
});


imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
    img.style.opacity = 1;
});


file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader();

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});
//------------------------------------------------------

// NEED rechecking 

// localStorage.clear();
// const page = window.open('edit-page.html');
// page.addEventListener('DOMContentLoaded', () => {
//     // Now we can access the #test element on the other page
//     const testDiv = page.document.getElementById('test')
//     testDiv.textContent = 'Hello world!'
//   })
// let data1 = localStorage.getItem('Full Name');
// let data2 = localStorage.getItem('ID');
// let data3 = localStorage.getItem('Date of Birth');
// let data4 = localStorage.getItem('University');
// let data5 = localStorage.getItem('Gender');
// let data6 = localStorage.getItem('Status');
// let data7 = localStorage.getItem('Department');
// let data8 = localStorage.getItem('Course 1');
// let data9 = localStorage.getItem('Course 2');
// let data10 = localStorage.getItem('Course 3');

// let data = document.getElementsByTagName('td');
// for(i in data){
//     data[i].innerHTML = data1;
// }