//! function declaration - function name followed by parentheses and curly braces
function add(a, b){
    console.log(a + b); // returns the sum of a and b
}
add(2, 3); // calling the function with arguments 2 and 3, will return 5


//! function invocation - calling the function
//function_name(); // calling the function using function name followed by parentheses

//! function with input parameters
//! function with parameters & arguments
function greet(name){
    console.log("hello", name);
}

//calling the function
greet("John"); // calling the function with argument "John"

//! default parameters - if no argument is passed, the default value will be used
function greet(name = "Guest"){
    console.log("hello", name);
}

greet(); // calling the function without argument, will use default value "Guest"
greet("John"); // calling the function with argument "John"

//! additional context: function with multiple parameters
function sum(a, b, c){
   const result = a + b + c;
   console.log(result); // returns the sum of a, b and c
}
sum(2, 3, 4); // calling the function with arguments 2, 3 and 4, will return 9

function Name(name = "Guest"){
    //console.log("hello", name);
    let message = "hello" + " " + name;
    return message; // returns the message
}

const result = Name(); // calling the function
console.log(result);
const result1 = Name("Bimal"); // calling the function with argument "Bimal"
console.log(result1);

//! subtract function
function subtract(a, b){
    return a - b; // returns the difference of a and b
}

const result2 = subtract(5, 3); // calling the function with arguments 5 and 3, will return 2
console.log(result2);


//! function expression - function is assigned to a variable
const multiply = function(a, b){
    return a * b; // returns the product of a and b
};
const result3 = multiply(2, 3); // calling the function with arguments 2 and 3, will return 6
console.log(result3);


//! todo: arrow function - function is assigned to a variable using arrow syntax
const divide = (a, b) => {
    return a / b; // returns the quotient of a and b
};
const result4 = divide(10, 2); // calling the function with arguments 10 and 2, will return 5
console.log(result4);
//! if the function has only one statement, we can omit the curly braces and the return keyword
const divide1 = (a, b) => a / b; // returns the quotient of a and b
const result5 = divide1(10, 2);
console.log(result5);

const user = {
    first_name: "Bimal",
    last_name: "Tharu",
    fullname: function(first_name, last_name){
        return first_name + " " + last_name;
    }
};

//! expression function - function is assigned to a variable using function expression syntax

function getFullName(user) {
    return user.fullname(user.first_name, user.last_name);
}
console.log(getFullName(user)); // calling the function with user object, will return "Bimal Tharu"

//! arrow function - function is assigned to a variable using arrow function syntax
const getFullName1 = (user) => {
    return user.fullname("bimal", "tharu");
}
console.log(getFullName1(user)); // calling the function with user object, will return "bimal tharu"

//! function declaration
const getfullName3 = function(user) {
    return user.fullname(user.first_name, user.last_name);
}
console.log(getfullName3(user)); // calling the function with user object, will return "Bimal Tharu"

//! arrow function with implicit return - if the function has only one statement, we can omit the curly braces and the return keyword */
const getFullName2 = (user) => `${user.first_name} ${user.last_name}`; // returns the full name of the user
console.log(getFullName2(user)); // calling the function with user object, will return "Bimal Tharu"

    
//! todo: callback function - function is passed as an argument to another function
const parent = (a) =>{
    console.log("parent");
    a(25); // calling the function passed as an argument
};

const child = (b) =>{
    console.log("child");  
    console.log(b); // calling the function passed as an argument
};
parent(child); // calling the parent function with child function as an argument, will return "parent" and "child"

const anonymous = () => {
    console.log("anonymous function"); // calling the anonymous function passed as an argument
};
parent(anonymous);

//! todo: higher order function - function that takes another function as an argument or returns a function
// 1. take function as input
const hof = (callback) => {
    callback(); // calling the function passed as an argument
};
hof(() => {
    console.log("higher order function"); // calling the function passed as an argument
});

// 2. return function as output
const outer = () => {
    const inner = () => {
        console.log("inner function"); // calling the inner function
    };
    return inner; // returning the inner function
};
const innerFunction = outer(); // calling the outer function, will return the inner function
innerFunction(); // calling the inner function, will return "inner function"

//! 
const calculate = (a, b, operation) => {
    return operation(a, b); // calling the function passed as an argument
};
const add1 = (a, b) => {
    console.log(a + b); // returns the sum of a and b
};
calculate(5, 10, add1); // calling the calculate function with arguments 5, 10 and add1 function, will return 15

//! calculateTotalAmount(amount, callback)
//! festiveDis = 15%
const calculateTotalAmount = (amount, callback) => {
    const discount = callback(amount); // calling the function passed as an argument
    console.log("Discount: " ,discount); // logging the discount
};
const festiveDiscount = (amount) => {
    return amount - amount * 0.15; // returns 15% of the amount
};
const studentDis = (amount) => {
    return amount - amount * 0.10; // returns 10% of the amount
}; 
calculateTotalAmount(1000, festiveDiscount); 
calculateTotalAmount(1000, studentDis);

calculateTotalAmount(1000, (amount) => {
    return amount - amount * 0.20; // returns 20% of the amount
});

//! function factory - function that returns another function
const addition1 = (factor) => {
    const inner = (num) => {
        return num + factor; // returns the sum of num and factor
    };
    return inner; // returning the inner function
};
const add10 = addition1(10); // calling the addition1 function with argument 10, will return the inner function
console.log(add10(5));

const add20 = addition1(20); // calling the addition1 function with argument 20, will return the inner function
console.log(add20(5));
console.log(add10(10)); // calling the inner function with argument 5, will return 15

//! todo: IIFE - Immediately Invoked Function Expression - function that is invoked immediately after it is defined
((a) => {
    console.log("IIFE", a); // calling the IIFE function
})(55); // invoking the IIFE function

//! todo: generator function - function that can be paused and resumed, returns an iterator object
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFunction();
console.log(generator.next().value); // calling the generator function, will return 1
console.log(generator.next().value); // calling the generator function, will return 2
console.log(generator.next()); // calling the generator function, will return 3
console.log(generator.next()); // calling the generator function, will return undefined