const promiseOne = new Promise((resolve,reject )=> {
   // do an async task;
   // DB calls , cryptography , network
   setTimeout(function(){
      resolve('promise resolve')
   },1000)
});
promiseOne.then((r)=>{
   console.log('promise one resolved', r)
})

new Promise(function(resolve,reject){
 
  setTimeout(function () {
   console.log("async task 2")
   resolve()
  }, 1000);    
}).then(function (){
   console.log("async task 2 resolved")
})





const promiseThree = new Promise(function (resolve,reject){
setTimeout(() => {
   resolve({username: 'deepak', email: 'deepakpatil@gmail.com'})
}, 1000);
})
promiseThree.then(function (params) {
   console.log(params)
})


const promiseFour =  new Promise(function(resolve,reject) {
   setTimeout(() => {
      let error = false
      if(!error){
      
         resolve({username: 'deepak', email: 'deepakpatil@gmail.com'})
      }
      else{
         reject('something went wrong')
      }
   }, 1000);
})

promiseFour.then(user => {
console.log(user);
return user.username
}).then( (username)=> {
   console.log('promise four resolved', username)
}).catch((err)=>{
   console.log('promise four rejected', err)
}).finally((final)=>{
   console.log('promise four finally', final)
});



// const promiseFive = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       let error = true
//       if(!error){
      
//          resolve({username: 'VS', pwd: '123'})
//       }
//       else{
//          reject('ERROR: in JS something went wrong')
//       }
//    },1000)

// })


// async function consumePromiseFive(params) {
//    try {
//       const response =  await promiseFive
//       console.log(response)
//    }
//    catch (err) {
//       console.log(err);
//    }
  
   
// }

// consumePromiseFive()


// async function getALLUsers() {
//    try{
//       const response = await fetch("https://reqres.in/api/users")
//       const data = await response.json();
//       console.log(data);
//    }
//    catch (err){
//       console.log(err)
//    }

// }
// getALLUsers()


//   fetch("https://reqres.in/api/users")
//   .then( (response )=> {
//    return response.json()
//   })
//  .then( (data)=> {
//    console.log(data)
//  }).catch((err) => {
//    console.log(err)
//  })