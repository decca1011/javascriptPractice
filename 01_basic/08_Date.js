// console.log(Date.now());

let myDate = new Date();

//  console.log(myDate); // ====>  2024-06-14T14:45:14.829Z
//  console.log(myDate.getFullYear()); //  ===> 2024
// console.log(myDate.toString()); // ===>  Sat Jun 15 2024 14:36:00 GMT+0530 (India Standard Time)
//  console.log(myDate.toLocaleString());// ===>    6/15/2024, 2:36:00 PM
//  console.log(myDate.toDateString()); //===>  Sat Jun 15 2024



let myDate1 = new Date(2023,0 ,23);

let myCreateDate = new Date(2023,0,23,5,3)

// console.log(myCreateDate.toLocaleDateString()); //  ====>  1/23/2023
// console.log(myCreateDate.toLocaleTimeString());//   ====>  5:03:00 AM
// console.log(myCreateDate.getTime());



let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000)); // time in second


let newDate =  new Date();

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


let mydateToday = newDate.toLocaleString('default',{
   weekday: 'long',
   year: 'numeric',
   month: 'long',
   day: 'numeric',
});

console.log(mydateToday)

 
