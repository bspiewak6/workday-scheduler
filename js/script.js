// Displays the current date and time
$("#currentDay").text(moment().format("llll"));

var selectedHour = $(".selected-hour");




// function that changes background color as time passes
var hourColor = function() {
    var currentHour = (moment().hour());

    for (var i = 0; i < selectedHour.length; i++) {
        var task = $(selectedHour[i])
        var taskHour = task.data("hour");
       
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

