//! datatypes in javascript

//! 1. primitive datatypes - number, string, boolean, null, undefined, symbol,bigint
// * number - represents both integer and floating point numbers
let num = 10; // integer
let floatNum = 10.5; // floating point number

// * string - represents a sequence of characters
let str = "Hello, World!";
//! template literals - ``(backticks) allows for multi-line strings and string interpolation
let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!
let a = "Hello";
console.log(`1. ${a}`); // 1. Hello

//! boolean - represents a logical entity and can have two values: true and false
let isTrue = true;
let isFalse = false;

//! null - represents the intentional absence of any object value
let nullValue = null; // variable is assigned a null value

//! undefined - represents a variable that has been declared but has not yet been assigned a value
let undefinedValue; // variable is declared but not assigned a value

//!undefined & not defined - undefined is a variable that has been declared but has not yet been assigned a value, 
// while not defined is a variable that has not been declared at all. If you try to access a variable that is not defined, you will get a ReferenceError.
// not defined is error but undefined is not error its data type

//! symbol - represents a unique and immutable value that can be used as a key for object properties
const id = "id 1";
const id1 = "id 1";
console.log(id === id1); // true

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false


//! bigint - represents a whole number larger than 2^53 - 1
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, 
// which is the largest number JavaScript can reliably represent with the Number primitive.
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
console.log(9007199254740991 + 3); // 9007199254740992
let bigIntValue = 12n; // BigInt literal
console.log(bigIntValue + 10n); // 22n


//! 2. non-primitive datatypes - object, array, function