//Button Declaration
const buttonEdit = document.getElementById('edit');
const buttonView = document.getElementById('view');
const buttonSearch = document.getElementById('search');


//Edit button function that reload data to another page
//------------------------------------------------------
buttonEdit.onclick = function(){
    location.href = "edit/";
};

buttonView.onclick = function(){
    location.href = "../../all-students";
};

buttonSearch.onclick = function(){
    location.href = "../../search";
};
//------------------------------------------------------


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
        console.log(reader)
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
            
            //SOOON
            // const formData = new FormData();
            // formData.append('profile_pic', choosedFile);

            // const xhr = new XMLHttpRequest();
            // xhr.open('POST', 'save-photo/', true);
            // xhr.onload = function() {
            //     if (xhr.status === 200) {
            //         // Success message or further actions
            //     } else {
            //         // Error handling
            //     }
            // };
            // xhr.send(formData);
        });
        console.log(choosedFile)
        reader.readAsDataURL(choosedFile);
    }
});
//------------------------------------------------------

// ADD New Data to local storage
// let currentID = localStorage.getItem('currentID');

// if(window.localStorage.getItem('studentInfo')){
//     if(localStorage.getItem('currentID')){
//         let data = document.getElementsByTagName('td');
//         let zData = JSON.parse(localStorage.getItem('studentInfo'))[currentID];

//         data[0].innerHTML = zData['Name:'];
//         data[1].innerHTML = zData['ID:'];
//         data[2].innerHTML = zData['Date of Birth:'];
//         data[3].innerHTML = zData['University:'];
//         data[4].innerHTML = zData['Gender:'];
//         data[5].innerHTML = zData['Status:'];
//         data[6].innerHTML = zData['Department:'];
//         data[7].innerHTML = zData['Course1:'];
//         data[8].innerHTML = zData['Course2:'];
//         data[9].innerHTML = zData['Course3:'];
//     }
// }
