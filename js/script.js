var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().hour();
var taskBlock = $("#textarea");
var selectedHour = $(".selected-hour")

// localstorage variable
var taskContent = $("#textarea").data()

// Displays the current date and time
$("#currentDay").text(moment().format("llll"));

// function that changes the color of the calendar as the time passes
var hourColor = function() {

    for (var i = 0; i < selectedHour.length; i++) {
        var task = $(selectedHour[i])
        var timeBlock = $("#time-block");

    if (timeBlock < currentHour) { 
        task.addClass("past")
    }
    else if (timeBlock === currentHour) {
        task.addClass("present")
    }
    else {
        task.addClass("future")
    }
    }
};

hourColor();
