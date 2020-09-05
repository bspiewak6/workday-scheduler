var taskBlock = $("textarea");
var selectedHour = $(".selected-hour");

// localstorage variable
var taskContent = $("textarea").data()
var currentHour = moment().hour();
// Displays the current date and time
$("#currentDay").text(moment().format("llll"));

// function that changes the color of the calendar as the time passes
var hourColor = function() {

    for (var i = 0; i < selectedHour.length; i++) {
        var task = $(selectedHour[i])
        // var timeBlock = task.data("hour");
        
        if (taskBlock < currentHour) { 
        task.addClass("past")
        
        }
        else if (taskBlock === currentHour) {
        task.addClass("present")
        }
        else {
        task.addClass("future")
    }
}
};
hourColor();


// 
