var allRows = document.getElementsByClassName("timeStamp");
var currentHour = moment().hour();
//this array will carry objects. In each one, they will carry an assigned div element(the textarea from each row),
// and a number to represent an hour of the day to be compared to the current hour
var timeBlocks= ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];

timeAllot();

//each timeBlock will tie an hour value to each text block. this is to allow comparisons between the alloted hour and the current hour, then 
//modify the element's class accordingly.
function timeAllot() {
    for(var i = 0; i < timeBlocks.length; i++) {
        timeBlocks[i] = {
            element: allRows[i],
            hour: i+1,
        }
    }
}

//This function will change the text block's color via class toggling based on the 
//result of comparing the element's asigned hour to the current hour






/*init();

function saveData() {
    data2Save = timeBar.value;

    localStorage.setItem("data2Save", JSON.stringify(data2Save));
}

function returnSavedData() {
    var savedData = JSON.parse(localStorage.getItem("data2Save"));

    if (savedData !== null) {
        document.getElementById("12:00AM").value = savedData;
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
}*/

