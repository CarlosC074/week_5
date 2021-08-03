var timeBar = document.getElementById("12:00AM");
var timeSave = document.getElementById("12:00AMSave");

function saveData() {
    data2Save = timeBar.innerHTML;

    localStorage.setItem("data2Save", JSON.stringify(data2Save));
}

function returnSavedData() {
    var savedData = JSON.parse(localStorage.getItem("data2Save"));

    if (savedData !== null) {
        document.getElementById("12:00AM").innerHTML = savedData;
    }
    else {
        return;
    }
}

function saveBtn() {
    saveData();
    returnSavedData();
}

function init()  {
    returnSavedData();
}

init();