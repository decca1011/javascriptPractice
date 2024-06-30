function SetUsername (username) {
   // console.log(this.username); // undefined 
   //   console.log(this === globalThis);  // false
 //   console.log(this === window);  // false
   console.log(username)
   this.username = username;
}

function createUser(username,email, password){
   SetUsername.call(this,username)
   this.email = email;
   this.password = password

}
const chai = new createUser('deepak',"deep@gmail.com", 123)
 console.log(chai )