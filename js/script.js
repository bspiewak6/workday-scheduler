// Displays the current date and time
$("#currentDay").text(moment().format("llll"));
var taskBlock = $("#text-area")
var selectedHour = $(".selected-hour");

// function that changes background color as time passes throughout the calendar day
var hourColor = function() {
    var currentHour = (moment().hour());
    //console.log(selectedHour.data().time);

    for (var i = 0; i < selectedHour.length; i++) {
        var task = $(selectedHour[i])
        var taskHour = task.data().time;
       
        if (taskHour < currentHour) { 
        task.addClass("past")
        }
        
        else if (taskHour === currentHour) {
        task.addClass("present")
        }
        
        else {
        task.addClass("future")
    }
};

};
hourColor();

// save to local storage after entering a task and clicking the button

// $(".saveBtn").on("click", function(){
//     var userInput = taskBlock.value
//     localStorage.setItem("taskItem", JSON.stringify(list));

// };



// var userInput = JSON.parse(localStorage.getItem('taskItem')) || [];