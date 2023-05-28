mainTable = document.getElementsByClassName("main_table")[0].getElementsByTagName("tbody")[0];

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
