function addTwoNumber (number1, number2){   // function definition & parameter
   console.log(number1 + number2)
}
// function addTwoNumber (number1, number2){   // function definition & parameter
//   const result =  (number1 + number2)
//    return result;
// }

//addTwoNumber(5, '233') // arguments 
// output: 238 (string concatenation)

//const result = addTwoNumber(3,5);
//console.log(result); // undefined (because function doesn't return anything)
// output: 8 (logged from function) & undefined (logged from console.log(result))

function loginUserMessage(username ){
   if(!username){
    console.log('Please provide a username');
    return
   }
   return `${username} JUST LOGG IN`
}

// function loginUserMessage(username = "decca"){   // default : is decca 
//    if(!username){
//     console.log('Please provide a username');
//     return
//    }
//    return `${username} JUST LOGG IN`
// }

// console.log(loginUserMessage('johnDoe')) // output: johnDoe JUST LOGG IN
//console.log(loginUserMessage()) // output: undefined JUST LOGG IN

///-------------------------------...rest--------//
function calculateCartPrice(val1,val2 , ...num1){
   return num1
}

//console.log(calculateCartPrice(200,400,500,33,2,233,222))



const user = {
   name: 'John Doe',
   age: 30,
   price:322

}

function handleObject(anyObject) {
 console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
handleObject(user);
handleObject({name:'deepa', price:23});