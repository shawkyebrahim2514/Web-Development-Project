// if(!window.localStorage.getItem('studentInfo')){
//     window.localStorage.setItem('studentInfo','{}');
// }
// let data = JSON.parse(window.localStorage.getItem('studentInfo'));

mainTable = document.getElementsByClassName("main_table")[0].getElementsByTagName("tbody")[0];

// for (const valKey in data) {
//     console.log(valKey);
//     let newRow = mainTable.insertRow(-1);
//     for (const newRowKey in data[valKey]) {
//         let newCell = newRow.insertCell();
//         newCell.innerHTML = data[valKey][newRowKey];
//     }
// }

let searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', ()=>{
    window.location.href = "../search";
})

let tableRows = document.getElementsByTagName('tr');

// Load Data to the table before move
for(let i = 1; i < tableRows.length; ++i){
        tableRows[i].addEventListener('click',function(){
            let tableRow = tableRows[i];
            let currentID = parseInt(tableRow.children[1].innerHTML)
            window.location.href = currentID + "/";
            // let xhr = new XMLHttpRequest();
            // xhr.open("POST",currentID + "/");
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
            // xhr.onload = function () {
            //     if (xhr.status === 200) {
            //         window.location.href = xhr.response
            //         // console.log(xhr.response)
            //         // return xhr.response;
            //         // console.log("hi seif")
            //         // let response = JSON.parse(xhr.responseText);
            //         // if (response.success) {
            //         //     window.location.href = '../../../all-students/'
            //         // } else {
            //         //     alert("Failed to submit data");
            //         // }
            //
            //     }
            // };
            // xhr.send();
            // const page = window.open('student-profile.html');
            // page.addEventListener('DOMContentLoaded', () => {
            //     // Now we can access the #test element on the other page
            //     for(let j = 0; j < 10; j++){
            //         page.document.getElementsByTagName('tr')[j].children[1].innerHTML = tableRow.children[j].innerHTML;
            //     }
            // })
    });
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
