let myName = "deepak     ";


// console.log(myName.trueLength);

const trueLength = function () {

}




let myHeros = ["thor", "spiderman"];

let heroPower = {
   thor : 'hammer',
   spiderman : 'web',

getSpidermanPower : function () {
   console.log(`spidy power is ${this.spiderman}`)
   
}
}

Object.prototype.deepakUNIVERSAL = function () {
   console.log("I am universal and present in every where *FLG");
};

// myHeros.deepakUNIVERSAL();
// heroPower.deepakUNIVERSAL();


Array.prototype.heyDeepak = function () {
   console.log("I  am deepak and not *FLG");
}

// myHeros.heyDeepak();
// heroPower.heyDeepak();





// inheritance 

const User = {
   name: 'deepak',
   email: 'deepak@google.com'
}

const Teacher = {
   makeVideo : true
}

const TeachingSupport = {
   isAvailable : false
}

const TASupport = {
   makeAssignment : 'js assignment',
   fullTime: true,
   __proto__: TeachingSupport
}

Teacher.__proto__ = User;


// modern syntax 

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength =  function(){
   console.log(`${this}`);
   console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"icetea".trueLength()