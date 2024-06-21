const array1 = [1,2,3,4];

const initialValue = 0;
const sumWithInitial = array1.reduce( (acc, curr) => acc + curr, initialValue);
console.log(sumWithInitial); // Output: 10


const course = [
   {
     "courseName": "Introduction to Python",
     "price": 49.99
   },
   {
     "courseName": "Advanced JavaScript",
     "price": 79.99
   },
   {
     "courseName": "Data Structures and Algorithms",
     "price": 59.99
   },
   {
     "courseName": "Web Development Bootcamp",
     "price": 99.99
   },
   {
     "courseName": "Machine Learning Basics",
     "price": 89.99
   }
 ]

 const priceToPay = course.reduce( (acc, curr) => acc + curr.price, 0);

 console.log(priceToPay)