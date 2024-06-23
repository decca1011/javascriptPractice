# Projects related to DOM

## project link



```javascript



const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e.target);
    // switch (e.target.id) {
    //   case 'grey':
    //     body.style.backgroundColor = e.target.id;
    //     break;
    // }
    if (e.target.id) body.style.backgroundColor = e.target.id;
  });
});

```javascript


## project2 bmi

```javascript

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

 ```javascript


 ## Digital Clock

 ```javascript
 // const clock  = document.getElementById('clock')
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimestring());
  clock.innerHTML = date.toLocaleTimeString();
}, 2000);

````javascript
