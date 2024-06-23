const myNums = [1,2,3,4,5,6,7,8,9,10];

// const myNewNum = myNums.map( (num)=> {
// return num +10 ;
// })

const newNums = myNums
.map((num,index ,array) => num* 10 )
.filter((num) => num <= 59)

console.log(newNums);

