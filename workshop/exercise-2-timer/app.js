const body = document.querySelector("body");
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let status = "stopped";
let secValue = 0;
let interval;

//function to pad the hour or minute or second with 0 if it is a single digit
function pad(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
}

//section to display current time
function displayTime() {
  let date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  document.querySelector(".current-time").innerText =
    pad(`${hours}`) + ":" + pad(`${minutes}`) + ":" + pad(`${seconds}`);
}
window.setInterval(displayTime, 1000);

// section for stopwatch

function stopwatch() {
  milliseconds++;
  if (milliseconds / 60 === 1) {
    milliseconds = 0;
    seconds++;
    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;
      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }
  }

  document.querySelector("#display").innerText =
    pad(`${hours}`) +
    ":" +
    pad(`${minutes}`) +
    ":" +
    pad(`${seconds}`) +
    ":" +
    pad(`${milliseconds}`);
}

function startStop() {
  if (status === "stopped") {
    status = "started";
    interval = window.setInterval(stopwatch, 10);
    document.querySelector(".startstop").innerText = "Stop";
  } else {
    clearInterval(interval);
    status = "stopped";
    document.querySelector(".startstop").innerText = "Start";
  }
}

function reset() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.querySelector("#display").innerText = "00:00:00:00";
}

document.querySelector(".startstop").addEventListener("click", startStop);
document.querySelector(".reset").addEventListener("click", reset);

//section for countdown timer
let input = document.querySelector(".input");
input.addEventListener("change", function () {
  return (secValue = document.querySelector("#sec-input").value);
});

function countdown() {
  console.log("countdown", secValue);
  secValue--;
  if (secValue === 0) {
    clearInterval(interval);
    status = "stopped";
    document.querySelector(".timerStart").innerText = "Start";
    window.alert("Time's Up");
  }
  document.querySelector("#sec-input").value = `${secValue}`;
}

function startTimer() {
  if (status === "stopped") {
    status = "started";
    interval = window.setInterval(countdown, 1000);
    document.querySelector(".timerStart").innerText = "Stop";
  }
}

function resetTimer() {
  secValue = 0;
  document.querySelector("#sec-input").innerText = "";
}

document.querySelector(".timerStart").addEventListener("click", startTimer);
document.querySelector(".timerReset").addEventListener("click", resetTimer);
