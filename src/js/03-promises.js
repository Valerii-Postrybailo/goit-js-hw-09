const form = document.querySelector(".form")

const firstDelay = document.querySelector('input[name="delay"]')
console.log(firstDelay)

const delayStep = document.querySelector('input[name="step"]')
console.log(delayStep)

const amount = document.querySelector('input[name="amount"]')
console.log(delayStep)

// form.addEventListener("submit", createPromise(position, delay));

// function submitForm(event) {
//   event.preventDefault();
// }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
