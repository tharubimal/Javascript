console.log("Hello, World!");

//!variable declaration
//*var,let, const
var name = "Bimal"; // var is function-scoped
console.log(name);

var x = 10;   // var says that the variable can be reassigned and is function-scoped
console.log(x);
x = 20 + 5; // reassigning value
console.log(x);

// *Let says that the variable can be reassigned but is block-scoped
let a = 10; // let is block-scoped
console.log(a);

// *const says that the variable cannot be reassigned
const b = 20; // const is block-scoped and cannot be reassigned
console.log(b);

//! dynamic typing , interpreted language , single threated language

//!dynamic typing -defined variable can hold any type of value    
//!statically typed language -defined variable can hold only one type of value
let c = 10;
console.log(c); // number
c = "Hello";
console.log(c); // string

//! interpreted language  -code is executed line by line
// “The code is executed when the program runs.”
// example - javascript, python, ruby 


//!compiled language -code is compiled before execution
// “The code is compiled first and then executed.”
// -example - c, c++, java

//! single threaded language -code is executed in a single thread call stack
// A single-threaded language executes one piece of code at a time using a single main thread.
// “JavaScript can execute one task at a time on its main thread.”
//v8 + call stack - call stack is a data structure that keeps track of function calls
//“V8 is the engine that runs JavaScript. Chrome and Node.js use V8.”


//! variable naming conventions
//! camelCase - first word is lowercase, subsequent words are capitalized
let firstName = "Bimal";

//! snake_case - words are separated by underscores
let user_name = "Bimal";

//! PascalCase - first letter of each word is capitalized
let UserName = "Bimal";
