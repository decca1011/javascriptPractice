// // es6

// class User {
//    constructor(username,email, password) {
//       this.username = username;
//       this.email = email;
//       this.password = password;
// }
// encryptPassword(){
//    return this.password = this.password + '1234';
// }
// changeUsername (){
//    return this.username.toUpperCase()

// }

// }

// const chai = new User('chai','chai@gmail.com', '123');

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());



// behind the scene 

function User2 ( username, email, password) {
   this.username = username;
   this.email = email;
   this.password = password;
}

User2.prototype.encryptPassword = function () {
   return this.password = this.password + '1234';
}

const tea = new User2('tea','chai@gmail.com', '123');


console.log(tea);
