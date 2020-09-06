// Displays the current date and time
$("#currentDay").text(moment().format("llll"));
var taskBlock = $("#text-area")
var selectedHour = $(".selected-hour");
var taskInput = JSON.parse(localStorage.getItem("taskItem")) || [];

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

// function when user clicks the save button
$(".saveBtn").on("click", function(event) {
    event.preventDefault();

// Get the task "value" from the textbox and store it as a variable using `.val()` and `.trim()`
    var taskValue = $('#text-area')
    .val()
    .trim();

    var taskID = $(this)
    .closest("div")
    .text();

    console.log(taskID);

// add the new task to my new variable
    taskInput.push( {
        text: taskValue,
        id: taskID
    });

// save the tasks into localStorage
    localStorage.setItem("taskItem", JSON.stringify(taskInput));
});

