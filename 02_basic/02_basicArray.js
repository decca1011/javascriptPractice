const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(...dc_heros)
// marvel_heros.concat(dc_heros) // this does not add to current current obj so we have to assign vairable
//console.log(marvel_heros)


// const all_heros = marvel_heros.concat(...dc_heros) // this method combine two arrays and RETURN new array
 const all_heros =[...marvel_heros, ...dc_heros]
// console.log(all_heros)

const another_array = [1,2,32,3,[2,3,23],[32,42,32,[2,4,24,22,34],3333,222],233,43,454,55,1];
const flat = another_array.flat(Infinity); // Infinity is dept of flat we can put this on our requirement what value we want
// console.log(flat)

console.log(Array.isArray('deepak'));
console.log(Array.from('deepak')); 
console.log(Array.from({name : 'deepak'})) // intresting

let score1 = 200;
let score12 =1000;
let score123 =21111;

console.log(Array.of(score1,score12,score123));

console.log([...Array(10).keys()]); // this will create array of 10 elements with
