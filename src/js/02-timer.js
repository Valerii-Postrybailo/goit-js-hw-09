// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startTimerBtn = document.querySelector("button[data-start]")
startTimerBtn.disabled = true

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(new Date())
  

    startTimerBtn.addEventListener
startTimerBtn.addEventListener('click', () => {
    const timer = { 
  start() {
    const startTime = selectedDates[0];

    setInterval(() => { 
      console.log(startTime - convertMs(1000))
    }, 1000)
  }
}
  }
)
    if (selectedDates[0] < new Date()) {
      startTimerBtn.disabled = true
      window.alert("Please choose a date in the future")
    } else {
      startTimerBtn.disabled = false
    }
  },
};

const timePicker = document.querySelector("#datetime-picker")
console.log(timePicker)

flatpickr(timePicker, options)

startTimerBtn.addEventListener('click', () => {
    const timer = { 
  start() {
    const startTime = selectedDates[0];

    setInterval(() => { 
      console.log(startTime - convertMs(1000))
    }, 1000)
  }
}
  }
)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}