// const userEmail = "decca@gmail.com";

// if(userEmail) console.log('got user email');
// else console.log('no user email');

// falsy value : false , 0 , null , undefined , -0 , BigInt 0n , NaN, ""
// truthy value : everything else falsy value, "0" , 'false' , " ", function () {}, [], 

// check array 
// let arr = [];
// if(arr.length) console.log('array is truthy');
// else console.log('flase');

// const emptyObj = {} ;
// if(Object.keys(emptyObj).length === 0 ) console.log('empty object');
// else console.log('not empty object');

// console.log(false ==0 ,false =="", 0=="");

//Nullish Coalescing Operator (??): null undefined
let val1;
let val2;
let val3;
val1 = 5?? 10;
val2 = null ?? 10
val3 = null ?? null ??"default value"

console.log(val1);
console.log(val2);
console.log(val3);
console.log(null ?? 10 ??"default value");

// Ternary Operator

//condition ? true : false;

const iceTeaPrice = 100 ;
iceTeaPrice <= 80 ? console.log('less than 80'): console.log('more than 80');

