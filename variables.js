/* 
    https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables

    A variable is a container for a value.
    Variables can also contain complex data and even entire functions

    • The difference between var and let:
    Why have var and let?". The reasons are somewhat historical. Back when JavaScript was first created, there was only var. This works basically fine in most cases, but it has some issues in the way it works — its design can sometimes be confusing or downright annoying. So, let was created in modern versions of JavaScript, a new keyword for creating variables that works somewhat differently to var, fixing its issues in the process.

    • When to use var
    There is no reason to use var, unless you need to support old versions of Internet Explorer with your code (it doesn't support let until version 11; the modern Microsoft Edge browser supports let just fine).

    • Constants in JavaScript
    Many programming languages have the concept of a constant — a value that once declared can't be changed. There are many reasons why you'd want to do this, from security (if a third party script changed such values it could cause problems) to debugging and code comprehension (it is harder to accidentally change values that shouldn't be changed and mess things up).
    In the early days of JavaScript, constants didn't exist. In modern JavaScript, we have the keyword const, which lets us store values that can never be changed:

*/

//Declaration:
let myName; //declares the variable myName with no inicial value. Type here would be "undefined"
console.log("variable myName has type: " + typeof(myName)); //returns "undefined"

//Initializing:
myName = "Abraao"; //now the variable has the value "Abraao" and the type string
console.log("variable myName now has type: " + typeof(myName)); //returns "string"

//Declaration and initialization:
let myAge = 25;
console.log("variable myAge has type: " + typeof(myAge)); //returns "number"


//Difference between var and let
anotherName = 'Joao'; //initializing with the value 'Joao'
console.log("variable anotherName has type: " + typeof(anotherName));   //returns "Joao"

var anotherName; //with var its possible to declare a variable AFTER it has been initialized. This works because of hoisting. Hoisting no longer works with let. If we changed var to let in the above example, it would fail with an error. This is a good thing — declaring a variable after you initialize it results in confusing, harder to understand code.

//this works OK
var test = 1;
console.log("variable test first value: " + test);
var test = 2;   //redeclaration works when using var. 
console.log("variable test has been redeclared and now has the value: " + test);

//this does NOT work:
let test2 = 1;
//let test2 = 2;  //now that would NOT work. let does not allow redeclaration for the same variable. And it freezes the console

/*const: stores vavlues that can't be changed 
const works in exactly the same way as let, except that you can't give a const a new value.
*/
const test3 = 1;
//const test3 = 2;    //that would throw and error!


//but it's possible to assign an object or an array as a const, and change the content INSIDE IT! Example:
const myObject = {};    //empty object assigned to const variable "myObject"
myObject.name = "Abraao";   //object property
console.log("myObject.name is: " + myObject.name);  //expected return: "Abraao"
myObject.name = "Maria";    //that WORKS! It's possible to change the CONTENT INSIDE the const object
console.log("now myObject.name is: " + myObject.name + ", it's possible to change one of the properties for this object even though it is a constant. But it would not be possible to change it from an object to another type!");
//myObject = "random text"    //that DOES NOT WORK! It's not possible to change the TYPE of the const variable