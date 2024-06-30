
class User {
   constructor(username) {
      this.username = username;
 
}
encryptPassword(){
console.log(`USERNAME is ${this.username}`);
}
changeUsername (){
   return this.username.toUpperCase()

}

}

class Teacher extends User {
   constructor(username, subject) {
      super(username)
         this.subject = subject;   
   }

   addCourse (){
      console.log(`I teach ${this.subject}`)
   }

}

const chai = new Teacher('chai','math');

chai.addCourse()

console.log(chai instanceof Teacher)
