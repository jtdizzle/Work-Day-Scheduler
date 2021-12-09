//add current day at the top of the planner (moment)
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);

//variables for now (as a baseline time, use moment) and HTML time block (to change color relative to now)
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

//function to check each hour block to see if it is past (gray), present (red), or future (green).
$.each(timeBlock, function (i, hour) {
  var hourId = parseInt($(this).attr("id"));
  if (hourId === now) {
    $(this).next().addClass("present");
  } else if (hourId < now) {
    $(this).next().addClass("past");
  } else if (hourId > now) {
    $(this).next().addClass("future");
  }
});

//save button, to local storage

$(".saveBtn").on("click", function () {
  var calendarItem =
    $(this).siblings(".description").val();
  var hour= 
    $(this).parent().attr("id");
  localStorage.setItem(hour, calendarItem);
});

$(document).ready(function () {
  $("#hour-9 > .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 > .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 > .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 > .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 > .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 > .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 > .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 > .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 > .description").val(localStorage.getItem("hour-17"));
});
  