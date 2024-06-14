const score = 330;
// console.log(score);

const balance = new Number(30.333);
// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));

const otherNumber = 23.422322;

// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000000;
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.99));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.7));

// console.log(Math.random());
// console.log(Math.max(1, 2, 3, 4, 5))
// console.log(Math.min(1, 2, 3, 4, 5))

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

const random = Math.floor(Math.random()* (max-min +1) + min)

console.log(random)