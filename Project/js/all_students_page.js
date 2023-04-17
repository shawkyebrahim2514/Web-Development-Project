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

for(let i = 1; i < tableHeaders.length; ++i){
    tableHeaders[i].addEventListener('click',function(){
        // let tempData = y.children[i];
        // let zData = {};
        let tableData = tableHeaders[i];
        window.localStorage.setItem('currentID',tableData.children[1].innerHTML);
        // zData['Name:'] = tableData.children[0].innerHTML;
        // zData['ID:'] = tableData.children[1].innerHTML;
        // zData['Date of Birth:'] = tableData.children[2].innerHTML;
        // zData['University:'] = tableData.children[3].innerHTML;
        // zData['Gender:'] = tableData.children[4].innerHTML;
        // zData['Status:']= tableData.children[5].innerHTML;
        // zData['Department:'] = tableData.children[6].innerHTML;
        // zData['Course1:'] = tableData.children[7].innerHTML;
        // zData['Course2:'] = tableData.children[8].innerHTML;
        // zData['Course3:'] = tableData.children[9].innerHTML;
        // let allStudent = JSON.parse(window.localStorage.getItem('studentInfo'));
        // allStudent[tableData.children[1].innerHTML] = zData;
        // window.localStorage.setItem('studentInfo',JSON.stringify(allStudent));

        const page = window.open('student-profile.html');
        page.addEventListener('DOMContentLoaded', () => {
            // Now we can access the #test element on the other page
            for(let j = 0; j < 10; j++){
                page.document.getElementsByTagName('tr')[j].children[1].innerHTML = tableData.children[j].innerHTML;
            }
        })
        // alert(this.rowIndex);

        // window.location.href='student-profile.html';
    }); 
}