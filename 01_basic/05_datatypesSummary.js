// primitive type 
// 7 types : String , number , Boolean, null , undefined , Symbol, Bigint

// Reference (Non - Primitive)
// 3 types : Object , Array , Function

const total = 100;
const floatTotal = 100.3;
const isAdmin = true;
const balance = null;
let myName;
const symbol = Symbol('mySymbol');   // id = Symbol('3221');
const anotherSymbol = Symbol('mySymbol')
console.log(symbol === anotherSymbol)

const bigInt = 12345678901234567890n; // bigInt = 123
console.log(bigInt); // 12345678901234567890n
console.log(symbol); // Symbol(mySymbol)

console.log(typeof bigInt)

const array = [1,23,2]
console.log(typeof array);
console.log(typeof myName); // undefinedS
console.log(typeof balance); // object
console.log(typeof isAdmin); // boolean
console.log(typeof total); // number
console.log(typeof floatTotal); // number
console.log(typeof symbol); // symbol
console.log(typeof bigInt); // bigint
 
