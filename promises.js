// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//simple function
function sumNumbers(){
    let result = 1+1;

    if (result == 2) {
        successCallback();
    } else {
        failCallback();
    }
}

//external functions
function successCallback(){
    console.log("Success! Result is: 2");
}

function failCallback(){
    console.log("Failed! Something went wrong!");
}

sumNumbers();

//promise structure
const myPromise = new Promise( (resolve, reject) => {
    //any async work here      
} );


myPromise
    .then(data => {
        //will run when resolve is called
    }).catch( error => {
        //will run when reject is called
    })

//promises
let p = new Promise( (resolve, reject) => {
    let a = 1+1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }   
})

p.then( (message) => {
    console.log('This is in the then ' + message);
}).catch( (err) => {
    console.log('This is the catch ' + err);
})


// another example:
const aPromise = new Promise( (resolve, reject) => {    // here we create a new promise object using the keyword "new" and the constructor "Promise()", when we create a promise it receives a function as an argument, and this function receives two parameters. Here they are called "resolve" and "reject", they could have other names but those are conventions so is recommended to keep it that way.
    const aNumber = 37;
    // resolve(aNumber);   
    reject(aNumber)    // the reject() method also needs to receive a value as an argument, and this value will be received as a parameter for the function inside the catch() method.
    // the resolve() function is the response for when the promise is successfull. If we pass here a parameter for the function resolve(), in this case the variable "aNumber", this value will be received as a parameter for the then() method when we call it
} )

// the then() method is responsible for receiving the success response for the promise, and the method then() also receives a function as an argument. In this case the are declaring a parameter called "value" for the function that goes inside the then() method, and this value in this case is "aNumber" as we declared it in the creation of the promise above.
aPromise    
    .then( value => value )
    .then( (value) => { //it's only possible to nest the then() methods like this because the then() method always returns another promise. So we can nest then() methods any number of times.
        console.log(value)
    })
    .catch( (rejectValue) => {
        console.log({rejectValue})
    } )  // the catch() method also receives a function as an argument. The catch() method deals with the unsuccessfull responses for the promises. The catch() method will only be executed in two situations: 1. when the reject() method in called, 2. when the code inside any of the then() methods throws an error. In this case, in the function inside the catch() method we pass a parameter called "rejectValue", the value for this parameter will be the value passed to the reject() function in the creation of the promise above.