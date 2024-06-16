// singleton
const mySymbol = Symbol("key1");
// console.log(typeof mySymbol)
      // object litrals 
    const jsUser = {
                  name: 'deepak',
                  [mySymbol]: 'key1',
                  "full name": 'deepak c patil',
                  age: 18 , 
                  location: 'jalgaon',
                  email: "depak@googl.com",
                  isLogin: false, lastLogin: ['monday', "sturday"]
                  };  // this treate name : 'deepak' as ====> "name" : 'deepak'

// console.log(`${jsUser.age} vs ${jsUser['age']} `);
// console.log(jsUser['full name']);
// console.log(jsUser[mySymbol])


// change vale 
jsUser.name = 'vikaram patil';
// console.log(jsUser.name);
// Object.freeze(jsUser);
jsUser.name = 'shreeram patil'; // this line will not override the value of name property bcoz now object is freeze
// console.log(jsUser);


jsUser.greeting = function () {
   console.log(`hello ${this.name}`);
};

console.log(jsUser.greeting());

 console.log(jsUser);