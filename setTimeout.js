// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

// setTimeout(): The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. 

// Syntax: 
// var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
// var timeoutID = setTimeout(function[, delay]);
// var timeoutID = setTimeout(code[, delay]);

// Parameters: 
// function (required): A function to be executed after the timer expires.
// code (alternative): An alternative syntax that allows you to include a string instead of a function, which is compiled and executed when the timer expires. This syntax is not recommended for the same reasons that make using eval() a security risk. 
// delay (optional): The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle. Note that in either case, the actual delay may be longer than intended.
// arg1, ..., argN (optional): Additional arguments which are passed through to the function specified by function.

// Return value: The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout. 

// IMPORTANT: It is guaranteed that a timeoutID value will never be reused by a subsequent call to setTimeout() or setInterval() on the same object (a window or a worker). However, different objects use separate pools of IDs.

// IMPORTANT: Timeouts are cancelled using clearTimeout(). To call a function repeatedly (e.g., every N milliseconds), consider using setInterval(). 

// ----------------------------------------------------------------------------------


// Examples:

let randomNumber = 1;

// this function will be executed with a delay of 2000 miliseconds by the Javascript event loop
setTimeout( () => {
    randomNumber += 100
    console.log(randomNumber)
}, 2000)    // asynchronous code, cause it has a delay

console.log(randomNumber);  // synchronous code, THIS WILL BE EXECUTED FIRST

