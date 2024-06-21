// for of

// ["","","","",""];
// ["apple","banana","orange","grape","mango"];
//[{},{},{}]

const arr = [1,2,3,4,5,6];

// for (const value of arr) {
//    console.log(value);
   
// }

// const greetings = "Hello World!"
// for(const greet of greetings){
//    console.log(`Each char is ${greet}`);
// };


const map = new Map();
map.set('IN',"India")
map.set('usa',"united state of america")
map.set('fr',"france")
map.set('uae',"united emirates")

// console.log(map)

for(const [key, value] of map){
   console.log(key , '  --   ' ,value);
}

