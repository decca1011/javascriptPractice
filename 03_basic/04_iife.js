// Immediately invoked function expression. (iife);

// function chai () {
//    console.log(`db connected`);

// }
// chai();

(function chai () {
   // named IIFE
   console.log(`db connected`);

})(); 

(() => {
   // simple IIFE
   console.log(`db connected`);

})();


(withName = () => {
   console.log(`db connected`);

})();


(function (name){
   // SIMPLE IIFE
   console.log(`db connected ${name}`);

})('decroz');

