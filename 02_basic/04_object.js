//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.bio = "I'm a software engineer and a dog lover.";
tinderUser.interests = ["hiking", "reading", "traveling"];
tinderUser.photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];

const regularUser = {
   email: 'some@gmail.com',
   fullname: {
      userfullname: {
         first: 'deepak',
         lastname: 'patil'
      }
   }
}

//console.log(regularUser.fullname.userfullname.first)


const obj1 = {
1: 'a',2: 'b'
}
const obj2 = {3:'d', 4:'e'};

const obj3 = {obj1 ,obj2};
//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'd', '4': 'e' } }

const obj33 = Object.assign({},obj1,obj2);  // {} ==> target so all value will be assign in {};

// console.log(obj1)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true

const object = {...obj1,...obj2}
//console.log(object);
// Expected output: { '1': 'a', '2': 'b', '3': 'd', '4': 'e' }

const users = [
   {
      id: 1,
      email: "deepakpatil@goole.com"
   },
   {
      id: 2,
      email: "patil@goole.com"
   }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));



const  course = {
   coursename: "js in hindi",
   price: 4040,
   rating: 4.5,
   courseInstructor : 'sharpner'
}

// destructring in object
const {courseInstructor:CrsInstr ,coursename} = course;
console.log(CrsInstr,coursename);

// const navbar = ({company}) => {
// }
// navbar(company = "deepak")





co