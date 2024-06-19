// let a = 10;
// const b =30;
// var c = 203;

// console.log(a,b,c);
// console.log(S)
var c =202
let a =2302

{
let a = 10;
const b =30;
var c = 203;
var x = 223;
//console.log(a)

}
// console.log(x)
// console.log(a)
// //console.log(b)
// console.log(c)


function badeLog () {
   const bhik = "muje kuch chaiye";
   function choteLog (){
      const  bihk2 = "muje bojot chahiye"
      var bhik3 = "i need money"
      console.log(bhik);
   }
//console.log(bihk2);
//console.log(bhik3)
choteLog();
}
//badeLog()



if(true) {
   const username = "deepak"
   var x = 92;
      if(username === "deepak"){
         const website = " youtube"
         var letCheck = 'im not block scope im function scope bcoz im var javaaa '
        // console.log(website + username)
      }
     // console.log(letCheck);
      //console.log(website) // o/p ====> website not defined
}
//console.log(x)
//console.log(letCheck);

// +++++++++++++++++++++++++++ interesting  ++++++++++++++++++++++++++

function addOne(num){
   return num + 1
}

addOne(5)
//console.log(addOne(5)) // o/p ====> 6

// addTwo(22) /// o/p  ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
   return num + 2
}

addTwo(22)