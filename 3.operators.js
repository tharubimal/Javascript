//! operators in javascript
//* operators are special symbols that perform operations on operands (values and variables). 
//* In JavaScript, operators can be categorized into several types:arthmetic, assignment, comparison, logical, bitwise, ternary, unary


//!Arithmetic operators - used to perform arithmetic operations on numbers
// +, -, *, /, %,**
let a = 10;
let b = 5;
let c = a + b; // Addition
let d = a - b; // Subtraction
let e = a * b; // Multiplication
let f = a / b; // Division
let g = a % b; // Modulus
let h = a ** b; // Exponentiation
console.log(c, d, e, f, g, h, "Arithmetic operators");

//!Assignment operators - used to assign values to variables
// =, +=, -=, *=, /=, %=, **=
let x = 10;
let y = 5;
x += y; // x = x + y
x += 3; // x = x + 3
console.log(x); // x = 18

//!Comparison operators - used to compare two values and return a boolean value (true or false)
// ==, ===, !=, !==, >, <, >=, <=
let p = 10; // number
let q = "10"; // string
console.log(p == q); // true (loose equality)
console.log(p === q); // false (strict equality)
console.log(p != q); // false
console.log(p !== q); // true
console.log(p > q); // false
console.log(p < q); // false
console.log(p >= q); // true
console.log(p <= q); // true

//! Logical operators - used to combine multiple boolean expressions and return a boolean value
// AND -&&, OR -||, NOT -!    
let r = true;
let s = false;
console.log(r && s); // false
console.log(r || s); // true
console.log(!r); // false

//! unary operators - used to perform operations on a single operand
// increment:post/pre (++), decrement:post/pre (--)
let t = 10;
console.log(t++); // 10 (post-increment) its incremented after the value is returned
console.log(++t); // 12 (pre-increment) its incremented before the value is returned
console.log(t--); // 12 (post-decrement) its decremented after the value is returned
console.log(--t); // 10 (pre-decrement) its decremented before the value is returned
console.log(typeof t); // number its used to check the data type of a variable
console.log(!t); // false its used to check the boolean value of a variable

//! ternary operator - used to evaluate a condition and return one of two values based on the result
// condition ? value_if_true : value_if_false
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes

//! bitwise operators - used to perform operations on binary representations of numbers
// &, |, ^, ~, <<, >>, >>>
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary
console.log(m & n); // 1 (0001 in binary)
console.log(m | n); // 7 (0111 in binary)
console.log(m ^ n); // 6 (0110 in binary)
console.log(~m); // -6 (1010 in binary)
console.log(m << 1); // 10 (1010 in binary)
console.log(m >> 1); // 2 (0010 in binary)
console.log(m >>> 1); // 2 (0010 in binary)


//! typeof operator - used to check the data type of a variable
let z = "hello";
console.log(typeof z); // string
let aa = 10;
console.log(typeof aa); //number

console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number (NaN is a special value that represents "Not-a-Number")
console.log(typeof function(){}); // function
console.log(typeof 1); // number
console.log(typeof true); // boolean

//! instanceof operator - used to check if an object is an instance of a particular class or constructor function
let bb = [1, 2, 3];
console.log(bb instanceof Array); // true
let cc = { name: "John", age: 30 };
console.log(cc instanceof Object); // true

//! todo: type coercion - automatic or implicit conversion of values from one data type to another
// implicit means that the conversion is done automatically by JavaScript without the programmer's intervention
let u = "10";
console.log(u + 5); // 105 (string concatenation)
console.log(u - 5); // 5 (number subtraction)
console.log(u * 5); // 50 (number multiplication)
console.log(u / 5); // 2 (number division)  
console.log("abc" - 5); // NaN (Not-a-Number)
//boolean coercion - automatic conversion of values to boolean
let v = 0;
console.log(Boolean(v)); // false
let w = "hello";
console.log(Boolean(w)); // true

//! type conversion - explicit conversion of values from one data type to another
//explicit means that the programmer is intentionally converting the value to a different data type
console.log(Number("10")); // 10 (string to number)
console.log(String(10)); // "10" (number to string)
console.log(Boolean("hello")); // true (string to boolean)
console.log(Boolean(null)); // false (null to boolean)
console.log(Boolean(0)); // false (number to boolean)
console.log(Number("abc")); // NaN (string to number)

//! truthy and falsy values - values that are considered true or false in a boolean context
//falsy values - false, 0, -0, "", null, undefined, NaN
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(" ")); // true

//truthy values - all other values that are not falsy
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
