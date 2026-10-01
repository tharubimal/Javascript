//! 1. Variables & Declaration
//* Declare variables for your name, age, and country.
let name = "Bimal Tharu";
let age = 22;
let country = "Nepal";

//* Swap two variables without manually changing their values.
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;

//* What is the difference between var, let, and const?
// var: can be re declared and reassigned
// let: can be reassigned but not re declared
// const: cannot be reassigned or re declared

//* 1. Predict the output:
let a1 = 10;
a1 = 20;
console.log(a1);
// output: 20

//* 5. Which of these will cause an error and why?
const age1 = 20;
age1 = 25;
// cannot reassign a const variable, so this will cause an error

//! 2. Data Types
//*6. Find the data type of:
let a2 = "Hello";  // string
let b1 = 25; //number
let c = true; //boolean
let d = undefined; //undefined
let e = null; //object

//*Convert "123" into a number.
let str = "123";
let num = Number(str);
console.log(num); // output: 123

//* Convert 500 into a string.
let num1 = 500;
let str1 = String(num1);
console.log(str1); // output: "500"

//* Check whether a variable is an array.
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // output: true

//* 7. What is the difference between null and undefined?
// undefined: variable is declared but not assigned a value
// null: variable is assigned a value of null, which means it has no value

//! 3. Operators
//* Write a program to check whether a number is even or odd.
let number = 5;
if (number % 2 === 0){
    console.log("Even");
} else {
    console.log("Odd");
}

//* Find the largest of two numbers.
let num2 = 10;
let num3 = 20;
if (num2 > num3){
    console.log(num2 + " is larger");
} else{
    console.log(num3 + " is larger");
}

//* Find the largest of three numbers.
let num4 = 10;
let num5 = 20;
let num6 = 15;
if (num4 > num5 && num4 > num6){
    console.log(num4 + " is largest");
} else if (num5 > num4 && num5 > num6){
    console.log(num5 + " is largest");
} else{
    console.log(num6 + " is largest");
}

//* Check if a person is eligible to vote.
let age2 = 18;
if (age2 >= 18){
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//* Calculate the remainder of two numbers.
let num7 = 10;
let num8 = 3;
let remainder = num7 % num8;
console.log(remainder); // output: 1

//* 11. What is the difference between:
// == compares values and can perform type conversion
// === compares both value and type without type conversion

//* 17. Predict:
// console.log(5 == "5"); //? correct output: true
// console.log(5 === "5"); //? correct output: false

//! 4. Control Flow
//* Write a program to check whether a number is positive, negative, or zero.

let num9 = -5;
if (num9 > 0 ){
    console.log("Positive");
} else if (num9 < 0 ){
    console.log("Negative");
} else {
    console.log("Zero");
}

//* 18. Check whether a student passed or failed.
// Marks >= 40 → Pass
// Marks < 40 → Fail
let marks = 35;
if (marks >= 40){
    console.log("Pass");
} else {
    console.log("Fail");
}

//* 20. Create a grade system:
// 90+ → A
// 80+ → B
// 70+ → C
// 60+ → D
// Below 60 → Fail

let marks1 = 85;
if (marks1 >= 90){
    console.log("Grade A");
} else if (marks1 >= 80){
    console.log("Grade B");
} else if (marks1 >= 70){
    console.log("Grade C");
} else if (marks1 >= 60){
    console.log("Grade D");
} else {
    console.log("Fail");
}

//* Check whether a year is a leap year.
let year = 2020;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

//* 21. Create a simple calculator using switch.
// - Addition
// - Subtraction
// - Multiplication
// - Division

let num10 = 10;
let num11 = 5;
let operator = 1;
switch(operator){
    case 1:
        console.log(num10 + num11);
        break;
    case 2:
        console.log(num10 - num11);
        break;
    case 3:
        console.log(num10 * num11);
        break;
    case 4:
        console.log(num10 / num11);
        break;
    default:
        console.log("Invalid operator");
}

