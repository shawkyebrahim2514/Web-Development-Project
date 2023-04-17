if(!window.localStorage.getItem('studentInfo')){
    window.localStorage.setItem('studentInfo','{}');
}
let data = JSON.parse(window.localStorage.getItem('studentInfo'));

mainTable = document.getElementsByClassName("main_table")[0].getElementsByTagName("tbody")[0];

for (const valKey in data) {
    console.log(valKey);
    let newRow = mainTable.insertRow(-1);
    for (const newRowKey in data[valKey]) {
        let newCell = newRow.insertCell();
        newCell.innerHTML = data[valKey][newRowKey];
    }
}

let searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', ()=>{
    window.location.href = "student-page.html";
})


let tableHeaders = document.getElementsByTagName('tr');

// Load Data to the table before move
for(let i = 1; i < tableHeaders.length; ++i){
    tableHeaders[i].addEventListener('click',function(){
        let tableData = tableHeaders[i];
        window.localStorage.setItem('currentID',tableData.children[1].innerHTML);
        const page = window.open('student-profile.html');
        page.addEventListener('DOMContentLoaded', () => {
            // Now we can access the #test element on the other page
            for(let j = 0; j < 10; j++){
                page.document.getElementsByTagName('tr')[j].children[1].innerHTML = tableData.children[j].innerHTML;
            }
        })
    }); 
}