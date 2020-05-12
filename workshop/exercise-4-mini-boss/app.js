const startButton = document.querySelector(".start");
let container = document.querySelector(".container");
let header = document.querySelector(".header");
let body = document.querySelector("body");
let timer = document.querySelector(".timer");
let randomNumber = Math.floor(Math.random() * 10) + 1;
const clickedState = [];

header.style.visibility = "hidden";

function checkArray(arr) {
  return arr.every(function (item) {
    return item;
  });
}

function startGame() {
  header.style.visibility = "visible";
  startButton.remove();
  displayRandomButtons();
  timer.innerText = randomNumber;
  let timeLeft = randomNumber * 1000;
  const countdown = setInterval(function () {
    if (timeLeft < 1) {
      clearInterval(countdown);
      endGame();
    }
    timer.innerText = timeLeft / 1000;
    timeLeft = timeLeft - 1000;
  }, 1000);
}

function endGame() {
  if (checkArray(clickedState)) {
    window.alert("You win!");
  } else {
    window.alert("You lose!");
  }
  for (let i = 1; i <= randomNumber; i++) {
    document.getElementById(`${i}`).removeEventListener("click", toggle);
  }
}

startButton.addEventListener("click", startGame);

function displayRandomButtons() {
  for (let i = 0; i < randomNumber; i++) {
    const button = document.createElement("button");
    button.innerText = i + 1;
    button.setAttribute("id", i + 1);
    button.style.left = Math.floor(Math.random() * 50) + "vw";
    button.style.top = Math.floor(Math.random() * 50) + "vh";
    body.appendChild(button);

    button.addEventListener("click", toggle);
  }
}

function toggle(event) {
  const buttonID = event.target.id;
  document.getElementById(buttonID).classList.toggle("green");
  clickedState[buttonID] = !clickedState[buttonID];
}
