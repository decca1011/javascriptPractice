const user = {
   username: 'Patil Deepak',
   age : '24',
   email: 'email',
   loginCount : 9,

   getUserDetail :  function ( ) {
      console.log(`username ${this.username}`)
      
       console.log(this)
   }
};
console.log(user.email);

user.getUserDetail();

console.log(this)

function User (username , loginCount, isLoggedIn){
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;
 this.greeting = function () {
   console.log(`Hello ${this.username}!`);
 }
  return this
}


const userOne = new User ('deepak',23, true);
const userTwo = new User ('decca',29, false);   // if we dont use new keyword then usertwo will not override the userone value.



console.log(userOne.constructor)



// when we use new keyword  ===> empty object is created which is new object is crated and due to this new constructor function call , from this all argument are injected in this AND 4TH STEP IS IT WILL GET.

function Person(name, age) {
   this.name = name;
   this.age = age;

   // Explicit return of an object (optional)
   // return { custom: 'object' };
}

// Adding a method to the prototype
Person.prototype.greet = function() {
   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
// Create a New Object:
// Step 1: Create a new empty object
const newObject = {};
// Link the New Object to a Prototype:
 
// Step 2: Set the prototype
newObject.__proto__ = Person.prototype;
// Bind this to the New Object and Call the Constructor:
 
// Step 3: Call the constructor function with `this` bound to the new object
Person.call(newObject, 'Alice', 30);

// Inside the constructor function, `this` refers to `newObject`
newObject.name = 'Alice';
newObject.age = 30;
// Return the New Object:
 
// Step 4: If the constructor does not explicitly return an object, the new object is returned
const person1 = newObject; // newObject is now referred to as person1




// function User(name, age, active) {
//    this.name = name;
//    this.age = age;
//    this.active = active;
// }

// const user_One = new User('Deepak', 23, true);
// const user_Two = new User('Decca', 29, false);

// console.log(user_One); // User { name: 'Deepak', age: 23, active: true }
// console.log(user_Two); // User { name: 'Decca', age: 29, active: false }


// without new keyword

console.log('without new');
function User(name, age, active) {
   this.name = name;
   this.age = age;
   this.active = active;
}

const user_One = User('Deepak', 23, true); // `this` refers to the global object
const user_Two = User('Decca', 29, false); // `this` refers to the global object

console.log(user_One); // undefined, because the function doesn't return anything
console.log(user_Two); // undefined, because the function doesn't return anything

// Global object properties are modified
console.log(globalThis.name); // 'Decca' (or `window.name` in browsers)
console.log(globalThis.age); // 29 (or `window.age` in browsers)
console.log(globalThis.active); // false (or `window.active` in browsers)



// When User is called without new, this refers to the global object (window in browsers, global in Node.js).
// The properties name, age, and active are set on the global object, not on a new instance.
// userOne and userTwo are undefined because User doesn't return anything.
