// if(condition){
//    // code to be executed if condition is true
// }
// else{
//    // code to be executed if condition is false
// }

// < , > , <= , >= , !=, == , === , !===

// if(2!=='2') console.log(true);
// else console.log(false); 

const balance = 1000 
// if(balance >= 500) console.log('test'),console.log('test2');
// else console.log('test3');

// if(balance >= 500)console.log('less than 600');
// else if(balance >= 1000)  console.log('less than 5000');
// else console.log('test3');  // else if ladder


const userLoggedIn = true;
const isAdmin = true;
const logInFromGoogle = true

if(userLoggedIn && isAdmin) console.log('allow user to edit');
else console.log('access denied'); // logical operators && , || , !

if(logInFromGoogle || userLoggedIn) console.log('allow user to work');


