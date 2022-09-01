const refs = {
  form: document.querySelector(".form"),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]')
}

refs.form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  let { delay, step, amount } = readingInputData();
  
  for (let i = 1; i < amount; i++) { 
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })

      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += step;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({position: position, delay: delay});
        } else {
          reject({position: position, delay: delay});
        }
      }, delay);
    })
  }
}

function readingInputData(){ 
  return {
    delay: Number(refs.firstDelay.value), 
    step: Number(refs.delayStep.value), 
    amount: Number(refs.amount.value),
  }
}