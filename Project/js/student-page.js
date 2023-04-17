if(!window.localStorage.getItem('studentInfo')){
    window.localStorage.setItem('studentInfo','{}');
}

let studs = JSON.parse(window.localStorage.getItem('studentInfo')); //parsing the local storage to get students
let studarr = [];

let ids = Object.keys(studs); //Object keys to access instances of students

//initializing an array containing all students for future use
for (let i = 0; i < ids.length; i++) {
    studarr.push(studs[ids[i]]);
}

console.log(studs);      //printing students to test

for (let i = 0; i < ids.length; i++) {      //adding all students to page layout
    let stts = [
        "<option selected>Active</option>",
        "<option selected>Inactive</option>",
        "<option>Inactive</option>",
        "<option>Active</option>"
    ];
    let j = 0;
    if (studs[ids[i]]['Status:'] == "Inactive") {      //adding the status value based on student status
        j = 1;
        continue;
    }
    document.getElementById("studT").innerHTML
    += "<div id=\"stud\"><tr><td>"+studs[ids[i]]['Name:'].split(' ')[0]+"</td><td>"+studs[ids[i]]['Name:'].split(' ')[1]+"</td><td id=\"sid\">"+studs[ids[i]]['ID:']+"</td><td id=\"sid\">"+studs[ids[i]]['Department:']+"</td>"+"<td><select class=\"chosen\" >"+stts[j]+stts[j+2]+"</select></td></tr></div>";
}

addEventListener("change", function() {    //updating values in local storage when changing status from dropdown list
    let stds = this.document.getElementsByClassName("chosen");
    let headerArr = document.getElementsByTagName('tr');
    let allStudent = JSON.parse(this.window.localStorage.getItem('studentInfo'));
    for(let i = 0, j = 1; i < ids.length; i++){
        if(j < headerArr.length && headerArr[j].children[2].innerHTML == ids[i]){
            studs[ids[i]]['Status:'] = stds[j-1].value;
            allStudent[ids[i]]['Status:'] = stds[j-1].value;
            j++;
        }
    }
    console.log(studs);
    window.localStorage.setItem("studentInfo", JSON.stringify(allStudent));
    this.window.location.href = 'student-page.html';
})

//________________________________________________
//SEARCH BAR
const searchIn = document.querySelector("[data-search]");
searchIn.addEventListener("input", v => {
    const searchText = (v.target.value).toLowerCase();
    let matchingstud = studarr.filter( stud => {
            const fullName = (stud['Name:'].split(' ')[0] + stud['Name:'].split(' ')[1]).toLowerCase();
            const fullDep = (stud['Department:'].split(' ')[0] + stud['Department:'].split(' ')[1]).toLowerCase()
            return (fullName.includes(searchText)||stud['ID:'].includes(searchText) || fullDep.includes(searchText)) && stud['Status:'] === 'Active';
        }
    );
    console.log(matchingstud);
    document.getElementById("studT").innerHTML = "<table id=\"studT\"><div class=\"tablehead\"><tr><th>First Name</th><th>Last Name</th><th>Student ID</th><th>Department</th><th>Activity Status</th></tr></div></table>";
    displayValid(matchingstud);
})


function displayValid(studarray) {
    for (let i = 0; i < studarray.length; i++) {      //adding all students to page layout
        let stts = [
            "<option selected>Active</option>",
            "<option selected>Inactive</option>",
            "<option>Inactive</option>",
            "<option>Active</option>"
        ];
        let j = 0;
        if (studarray[i]['Status'] == "Inactive") {      //adding the status value based on student status
            j = 1;
            console.log('hi');
            location.reload();
            continue;
        }
        document.getElementById("studT").innerHTML
        += "<div id=\"stud\"><tr><td>"+studarray[i]['Name:'].split(' ')[0]+"</td><td>"+studarray[i]['Name:'].split(' ')[1]+"</td><td id=\"sid\">"+studarray[i]['ID:']+
        "</td><td id=\"sid\">"+studarray[i]['Department:']+"</td>"+"<td><select id=\"chosen\" >"+stts[j]+stts[j+2]+"</select></td></tr></div>";
    }
}