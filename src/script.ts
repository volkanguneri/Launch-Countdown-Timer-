// variables

const daysBox = document.getElementById('days') as HTMLDivElement | null;
const hoursBox = document.getElementById('hours') as HTMLDivElement | null;
const minutesBox = document.getElementById('minutes') as HTMLDivElement | null;
const secondsBox = document.getElementById('seconds') as HTMLDivElement | null;

const second: number = 1000;
const minute: number = second * 60;
const hour: number = minute * 60;
const day: number = hour * 24;
let timer: number;

// variable for the date we countdown to
const launchDate: Date = new Date("2025, 04, 21");

// Function and setInterval
function countDown(): void {
    const today: Date = new Date();
    const timeDiff: number = launchDate.getTime() - today.getTime();

    // if lauchtime is zero or has passed clear all numbers
    if (timeDiff <= -day) {
        clearInterval(timer);
        return
    } else if (timeDiff <= 0) {
        clearInterval(timer);
        return
    }

    // time calcul per milliseconds
    const days: number = Math.floor(timeDiff / day);
    const hours: number = Math.floor((timeDiff % day) / hour);
    const minutes: number = Math.floor((timeDiff % hour) / minute);
    const seconds: number = Math.floor((timeDiff % minute) / second);
    // implementing time values in HTML
    if (daysBox) daysBox.innerHTML = days.toString().padStart(2, '0');
    if (hoursBox) hoursBox.innerHTML = hours.toString().padStart(2, '0');
    if (minutesBox) minutesBox.innerHTML = minutes.toString().padStart(2, '0');
    if (secondsBox) secondsBox.innerHTML = seconds.toString().padStart(2, '0');
}
// triggers the function every 1 second
timer = setInterval(countDown, second);


