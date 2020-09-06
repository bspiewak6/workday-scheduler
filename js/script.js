// displays the current date and time
$("#currentDay").text(moment().format("[Today is] dddd, MMMM Do, YYYY"));

// global variables and array for hours
var taskBlock = $(".text-area");
var selectedHour = $(".selected-hour");
var hourArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

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
    }
};

// function when user clicks the save button
$(".saveBtn").on("click", function(event) {
    // event listener to used to track button click and textarea is previous element in div class
    var target = event.currentTarget.previousElementSibling.id;
    var userInput = $("#" + target).val().trim();
    // save the tasks into localStorage
    localStorage.setItem(target, JSON.stringify(userInput));
});

// create function to keep saved events on page when user refreshes
function onLoad() {
    for (var i = 0; i < hourArr.length; i++) {
        var hour = hourArr[i];
        
        // key in localStorage
        var value = JSON.parse(localStorage.getItem("text-area-" + hour));
        // value in localStorage
        $("#text-area-" + hour).val(value);
    }
};

onLoad();
hourColor();
