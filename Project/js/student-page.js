let val = JSON.stringify(   //(REMOVE WHEN INTEGRATING)
    {
        "20210755" : {"id":"20210755", "fname":"Alan","lname":"Samir", "status":"A"},
        "20210184" : {"id":"20210184", "fname":"Shawky","lname":"Ibrahim", "status":"I"},
        "20210368" : {"id":"20210368", "fname":"Mahmoud","lname":"Sakr", "status":"I"},
        "20210346" : {"id":"20210346", "fname":"Mohamed","lname":"Essam", "status":"A"},
        "20211033" : {"id":"20211033", "fname":"Khaled","lname":"Salah", "status":"A"},
        "20210485" : {"id":"20210485", "fname":"Youssef","lname":"Mourad", "status":"A"},
    }
)

window.localStorage.setItem("Users", val); //adding students to local storage (REMOVE WHEN INTEGRATING)

let studs = JSON.parse(window.localStorage.getItem("Users")); //parsing the local storage to get students
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
        "<option>Active</option>",
        "<option>Inactive</option>",
        "<option selected>Inactive</option>" 
    ];
    let j = 0;
    if (studs[ids[i]].status == "I") {      //adding the status value based on student status
        j = 1;
    }
    document.getElementById("studT").innerHTML
    += "<div id=\"stud\"><tr><td>"+studs[ids[i]].fname+"</td><td>"+studs[ids[i]].lname+"</td><td id=\"sid\">"+studs[ids[i]].id+"</td>"+"<td><select id=\"chosen\" >"+stts[j]+stts[j+2]+"</select></td></tr></div>";
}

addEventListener("change", function() {    //updating values in local storage when changing status from dropdown list
    let st = document.getElementById("chosen").value.charAt(0);
    let id = document.getElementById("sid").innerText;
    studs[id].status = st;
    console.log(studs);
    val = JSON.stringify(studs);
    window.localStorage.removeItem("Users");
    window.localStorage.setItem("Users", val);
})

//________________________________________________
//SEARCH BAR
const searchIn = document.querySelector("[data-search]");
searchIn.addEventListener("input", v => {
    const searchText = (v.target.value).toLowerCase();
    let matchingstud = studarr.filter( stud => {
            const fullName = (stud.fname + stud.lname).toLowerCase();
            return fullName.includes(searchText)||stud.id.includes(searchText);
        }
    );
    document.getElementById("studT").innerHTML = "<table id=\"studT\"><div class=\"tablehead\"><tr><th>First Name</th><th>Last Name</th><th>Student ID</th><th>Activity Status</th></tr></div></table>";
    displayValid(matchingstud);
})


function displayValid(studarray) {
    for (let i = 0; i < studarray.length; i++) {      //adding all students to page layout
        let stts = [
            "<option selected>Active</option>",
            "<option>Active</option>",
            "<option>Inactive</option>",
            "<option selected>Inactive</option>" 
        ];
        let j = 0;
        if (studarray[i].status == "I") {      //adding the status value based on student status
            j = 1;
        }
        document.getElementById("studT").innerHTML
        += "<div id=\"stud\"><tr><td>"+studarray[i].fname+"</td><td>"+studarray[i].lname+"</td><td id=\"sid\">"+studarray[i].id+"</td>"+"<td><select id=\"chosen\" >"+stts[j]+stts[j+2]+"</select></td></tr></div>";
    }
}