const user = {
   name: 'rumpam',
   price : 99, 

   welcomeMessage: function () {
      console.log(`${this.name} , welcome to website`);
      console.log(this)
   }
}

//user.welcomeMessage()

user.name = "deepak";
// user.welcomeMessage()
// console.log(this)  // {}


function chai (){
   console.log(this)

   let username = 'muje dekho'
   console.log(this.username) //   undefined

}
//chai() // window object



const bhai = function () {
   console.log(this)

   let username = 'muje dekho'
   console.log(this.username) //   undefined

}
 //bhai() // window object

const arrowFun = () => {
   console.log(this) // window object
   let username = 'muje dekho'
   console.log(this.username)  // undefined
}
 //arrowFun();


 const user1 = {
   name: 'rumpam',
   price : 99, 
   welcomeMessage: () => {
      console.log(`${this.name} , welcome to website`);
      console.log(this)
   }
}
//user1.welcomeMessage();
 

