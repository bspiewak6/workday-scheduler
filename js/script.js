var tasks= $(".selected-hour")
var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentClock = moment().format("h:mm a")
// function to show current day in the top header
$("#currentDay").text(currentDay);
$("#currentTime").text(currentClock);

// function that changes the color of the calendar as the time passes throughout the day
var hourColor = function() {
    var currentHour = moment().hour();    
    
    for (var i = 0; i < tasks.length; i++) {
    var task = $(tasks[i])
    var blockHour = task.data("hour");

    if (blockHour < currentHour) {
        task.addClass("past")
    }
    else if (blockHour === currentHour) {
        task.addClass("present")
    }
    else { 
        task.addClass("future")
    }
    }
};

// function that gets the p
var updateTime = function () {
    // set time = current time
    var timeNow = moment();
    // format the time to show the month, day year
    var displayTime = timeNow.format("LL");
    // set text content equal to the time
    currentDay.text(displayTime);
};

