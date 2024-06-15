const sampleArray = [0,2,3,4,22,2,2];
const  myBooks = ['rich-dad poor dad', 'the power of postive thought', 'time', 'harry potter'];
const myArray = new Array(1,2,3,4);
const myArray2 = new Array('apple', 'banana', 'orange');
// console.log(sampleArray);
// console.log(myArray[0]);
// console.log(myArray2[1]);


// // Array methods

// myArray.push(8);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift('lets');
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));


const array = [2322,342,222,33444,222,32,9,33];
console.log(`${array}`, array)
console.log(`${array.slice(2,4)} ====> ${array}`)
console.log(`${array.splice(2,4)} ====> ${array}`)
console.log(`The array is: ${JSON.stringify(array)}`);


const newArr = sampleArray.join();
console.log(`my array ==> ${sampleArray} has now newArr ===> ${newArr} & type of newArr is  ${typeof newArr}`) 

