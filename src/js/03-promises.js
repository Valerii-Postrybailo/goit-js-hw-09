const form = document.querySelector(".form")

const firstDelay = document.querySelector('input[name="delay"]')
console.log(firstDelay)

const delayStep = document.querySelector('input[name="step"]')
console.log(delayStep)

const amount = document.querySelector('input[name="amount"]')
console.log(amount)

function addEventListener(someConst) {
  someConst.addEventListener("input", evt => {
    console.log(typeof (evt.currentTarget.value))
    Number(evt.currentTarget.value)
    console.log(typeof (Number(evt.currentTarget.value)))

    return console.log(Number(evt.currentTarget.value))
  });

}

addEventListener(amount)

// for (let i = 0; i <= addEventListener(firstDelay); i += 1) {
1//   console.log(i)
//   function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// }

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

const count = addEventListener(amount);
    for (i = 0; i < count; i++) { 
      alert(count);
      console.log("wow")
}

  
    function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
      } else {
        // Reject
      }
    }
  
}


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });