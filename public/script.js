"use strict";
// variables
const daysBox = document.getElementById('days');
const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');
const secondsBox = document.getElementById('seconds');
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timer;
// variable for the date we countdown to
const launchDate = new Date("2024, 04, 21");
// Function and setInterval
function countDown() {
    const today = new Date();
    const timeDiff = launchDate.getTime() - today.getTime();
    // if lauchtime is zero or has passed clear all numbers
    if (timeDiff <= -day) {
        clearInterval(timer);
        return;
    }
    else if (timeDiff <= 0) {
        clearInterval(timer);
        return;
    }
    // time calcul per milliseconds
    const days = Math.floor(timeDiff / day);
    const hours = Math.floor((timeDiff % day) / hour);
    const minutes = Math.floor((timeDiff % hour) / minute);
    const seconds = Math.floor((timeDiff % minute) / second);
    // implementing time values in HTML
    if (daysBox)
        daysBox.innerHTML = days.toString().padStart(2, '0');
    if (hoursBox)
        hoursBox.innerHTML = hours.toString().padStart(2, '0');
    if (minutesBox)
        minutesBox.innerHTML = minutes.toString().padStart(2, '0');
    if (secondsBox)
        secondsBox.innerHTML = seconds.toString().padStart(2, '0');
}
// triggers the function every 1 second
timer = setInterval(countDown, second);
