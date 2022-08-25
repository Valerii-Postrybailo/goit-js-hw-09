const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector("body")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
  bodyEl.style.backgroundColor = getRandomHexColor()
}

let timerId = null;

startBtn.addEventListener("click", () => {
  if (startBtn.disabled = true) {
    stopBtn.disabled = false
    changeBgColor()
    console.log("start")
    
      timerId = setInterval(() => {
        changeBgColor()
        console.log("Go!")
      }, 1000);
    }
});

stopBtn.addEventListener("click", () => {

  if (stopBtn.disabled = true) {
    clearInterval(timerId);
    startBtn.disabled = false;
    console.log(`Interval with id ${timerId} has stopped!`);
  }
  });