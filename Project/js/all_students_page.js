let val = JSON.stringify(   //(REMOVE WHEN INTEGRATING)
    {
        "20210485": {
            "id": "20210485", "name": "Youssef Morad", "dateOfBirth": "2000-03-25",
            "gender": "M", "dep": "Computer Science", "status": "A", "course1": "Programming 1", "course2": "Math 1",
            "course3": "Software Engineering"
        },
        "20210056": {
            "id": "20210056", "name": "Shaban Mohsen", "dateOfBirth": "2003-12-13",
            "gender": "M", "dep": "Information System", "status": "I", "course1": "Data Structure",
            "course2": "Data Base 1", "course3": "Management"
        },
        "20210134": {
            "id": "20210534", "name": "Mahmoud Sakr", "dateOfBirth": "2003-06-21",
            "gender": "M", "dep": "Artificial Intelligence", "status": "A", "course1": "Machine Learning",
            "course2": "Algorithms", "course3": "Data Base 2"
        },
    }
);

let data = JSON.parse(val);

mainTable = document.getElementsByClassName("main_table")[0].getElementsByTagName("tbody")[0];

for (const valKey in data) {
    console.log(valKey);
    let newRow = mainTable.insertRow(-1);
    for (const newRowKey in data[valKey]) {
        let newCell = newRow.insertCell();
        if (newRowKey === "gender") {
            if (data[valKey][newRowKey] === "M")
                newCell.innerHTML = "Male";
            else
                newCell.innerHTML = "Female";
        }
        else if(newRowKey === "status"){
            if (data[valKey][newRowKey] === "A")
                newCell.innerHTML = "Active";
            else
                newCell.innerHTML = "Inactive";
        }
        else {
            newCell.innerHTML = data[valKey][newRowKey];
        }
    }
}