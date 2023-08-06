// Select buttons

let timer = document.getElementById("timerVar");
let startBtn = document.getElementById("start");

let promo = document.getElementById("promo");
let sortBreak = document.getElementById("sBreak");
let longBreak = document.getElementById("lBreak");
let resetBtn = document.getElementById("reset");
let interval;

// Default timer
let i = 0;
let j = 0;
timer.innerHTML = `0${i}:${j}0`;

// start events on buttons

promo.addEventListener("click", (e) => {
  i = 25;
  j = 0;
  timer.innerHTML = `${i}:${j}0`;
  e.target.classList.add("red");
  longBreak.classList.remove("red");
  sortBreak.classList.remove("red");
});
sortBreak.addEventListener("click", (e) => {
  i = 5;
  j = 0;
  timer.innerHTML = `0${i}:${j}0`;
  e.target.classList.add("red");
  promo.classList.remove("red");
  longBreak.classList.remove("red");
});
longBreak.addEventListener("click", (e) => {
  promo.classList.remove("red");
  sortBreak.classList.remove("red");
  longBreak.classList.add("red");
  i = 15;
  j = 0;
  timer.innerHTML = `${i}:${j}0`;
});

// start intervals

startBtn.addEventListener("click", (event) => {
  interval = setInterval(() => {
    if (j <= 0) {
      i--;
      j = 60;
    }
    timer.innerHTML = `${i}:${j}`;

    j--;
  }, 1000);
});

// clear intervals

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  i = 0;
  j = 0;
  timer.innerHTML = `0${i}:${j}0`;
  promo.classList.remove("red");
  sortBreak.classList.remove("red");
  longBreak.classList.remove("red");
});
