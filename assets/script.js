//allRows is an array of elements, namely, the textareas. So, use it like an array.
var allRows = document.getElementsByClassName("timeStamp");
//The current hour is stored as a number.
var currentHour = moment().hour();
//this array will carry objects. In each one, they will carry an assigned div element(the textarea from each row),
// and a number to represent an hour of the day to be compared to the current hour
var timeBlocks= [0];
//this array will carry the actual information within each block. 
var garage = [0];

timeAllot();
compareHour();
init();


//each timeBlock will tie an hour value to each text block. this is to allow comparisons between the alloted hour and the current hour, then 
//modify the element's class accordingly.
function timeAllot() {
//I don't know why this only works if you iterate over it 25 times rather than 24. Otherwise, the very last block will not work.
    for(var i = 0; i < 25; i++) {
        timeBlocks[i] = {
            element: allRows[i],
            hour: i
        }
    }
}
//This function will change the text block's color via class toggling based on the 
//result of comparing the element's asigned hour to the current hour
function compareHour() {
    for (i = 0; i < timeBlocks.length; i++) {
        if (timeBlocks[i].hour > currentHour) {
            timeBlocks[i].element.classList.add("future");
            timeBlocks[i].element.classList.remove("past");
        }
        else if (timeBlocks[i].hour == currentHour) {
            timeBlocks[i].element.classList.add("present");
            timeBlocks[i].element.classList.remove("past");
        }
        //I thought about adding an else condition whose function is to simply return. But, when I did that, every element became the default past class
    }

}

function saveData() {
    for (i = 0; i < timeBlocks.length; i++) {
        garage[i] = timeBlocks[i].element.value; 
    }
    dataToSave = localStorage.setItem("dataToSave", JSON.stringify(garage));
}

function returnSavedData() {
   returnedData = JSON.parse(localStorage.getItem("dataToSave"));
    for (i = 0; i < returnedData.length; i++) {
        allRows[i].value = returnedData[i];
    }
}

function saveBtn() {
    saveData();
    returnSavedData();
}

function init()  {
    returnSavedData();
}

