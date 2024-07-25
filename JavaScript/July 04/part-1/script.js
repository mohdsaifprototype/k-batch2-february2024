let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");

let hr = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let s = document.querySelector(".seconds");
let mili = document.querySelector(".mili-seconds");

let miliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function getMiliSeconds() {
  miliSeconds++;
  if (miliSeconds < 10) {
    mili.innerHTML = miliSeconds;
  } else {
    mili.innerHTML = miliSeconds;
  }

  if (miliSeconds > 99) {
    seconds++;
    s.innerHTML = seconds;
    miliSeconds = 0;
  }

  if (seconds > 59) {
    minutes++;
    min.innerHTML = minutes;
    seconds = 0;
  }

  if (minutes > 59) {
    hours++;
    hr.innerHTML = hours;
    minutes = 0;
  }
}

let interval = setInterval(getMiliSeconds, 10);

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  miliSeconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  hr.innerHTML = hours;
  min.innerHTML = minutes;
  s.innerHTML = seconds;
  mili.innerHTML = miliSeconds;
});

// console.log(startBtn);

// setInterval(() => {
//   minutes.innerHTML = increment();
// }, 60000);
