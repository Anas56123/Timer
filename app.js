const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let startTime;
let intervalId;
let elapsedMilliseconds = 0;
let running = false;

startButton.addEventListener("click", toggleStart);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

function toggleStart() {
  if (!running) {
    start();
  } else {
    stop();
  }
}

function start() {
  if (!running) {
    startTime = new Date().getTime() - elapsedMilliseconds;
    intervalId = setInterval(updateDisplay, 10); // Update display every 10 milliseconds
    running = true;
    startButton.textContent = "Pause";
  }
}

function stop() {
  if (running) {
    clearInterval(intervalId);
    running = false;
    startButton.textContent = "Start";
  }
}

function reset() {
  clearInterval(intervalId);
  elapsedMilliseconds = 0;
  running = false;
  display.textContent = "0:00.00";
  startButton.textContent = "Start";
}

function updateDisplay() {
  const currentTime = new Date().getTime();
  elapsedMilliseconds = currentTime - startTime;
  const minutes = Math.floor(elapsedMilliseconds / 60000);
  const seconds = Math.floor((elapsedMilliseconds % 60000) / 1000);
  const milliseconds = Math.floor((elapsedMilliseconds % 1000));

  display.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
}
