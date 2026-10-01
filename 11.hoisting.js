//! hoisting - the process of moving variable and function declarations to the top of their scope before code execution.
//* var
console.log(num); // output: undefined
var num = 123; 
console.log(num); // output: 123

function hoist(){
    console.log(y); // output: undefined
    var y = 456;
    console.log(y); // output: 456
}
hoist();

//! function declarations - function declarations are hoisted to the top of their scope, so they can be called before they are defined.
declaration();

function declaration() {
    console.log("This is a function declaration");
};

//* let & const
// console.log(a); //! ReferenceError: Cannot access 'a' before initialization 
// TDZ (Temporal Dead Zone) - the time between the start of the block and the variable declaration where the variable cannot be accessed.
let a = 10; 
console.log(a); // output: 10

// console.log(b); //! ReferenceError: Cannot access 'b' before initialization
const b = 20;
console.log(b); // output: 20

//! function expressions - function expressions are not hoisted, so they cannot be called before they are defined.
// console.log(expression); // output: undefined

// expression(); //! expression is not a function
var expression = function (){
    console.log("This is a function expression");
}


// console.log(expression2); //! ReferenceError: Cannot access 'expression2' before initialization
// expression2(); // output: TypeError: expression2 is not a function
let expression2 = function (){
    console.log("This is a function expression");
}


// console.log(expression3); //! ReferenceError: Cannot access 'expression3' before initialization
// expression3(); // output: TypeError: expression3 is not a function
const expression3 = function (){
    console.log("This is a function expression");
}

//! callstack - the stack of function calls that are currently being executed. When a function is called, it is added to the call stack, and when it returns, it is removed from the call stack. If a function calls itself recursively, it will be added to the call stack multiple times, which can lead to a stack overflow error if the recursion is too deep.
function z(){
    console.log("a");
    function b(){
        console.log("b");
        function c(){
            console.log("c");
        }
        c();
    }
    b();
}
z();

//! phase of execution - the process of executing code in two phases: memory creation phase and code execution phase. In the memory creation phase, the JavaScript engine scans the code and allocates memory for variables and functions. In the code execution phase, the JavaScript engine executes the code line by line.
//? 1. Memory Creation Phase - the JavaScript engine scans the code and allocates memory for variables and functions. In this phase, the JavaScript engine creates a global execution context and a global object (window in browsers, global in Node.js). The global object is used to store global variables and functions. The JavaScript engine also creates a variable object (VO) for each execution context, which is used to store variables and function declarations. The VO is created in the memory creation phase, but it is not populated with values until the code execution phase.
// memory: {x: undefiednd, a:(){console.log("a")}}
// memory: {x: 100, a:(){console.log("a")}}

//? 2. Code Execution Phase - the JavaScript engine executes the code line by line. In this phase, the JavaScript engine assigns values to variables and executes functions. The JavaScript engine also creates a call stack, which is used to keep track of function calls. When a function is called, it is added to the call stack, and when it returns, it is removed from the call stack. If a function calls itself recursively, it will be added to the call stack multiple times, which can lead to a stack overflow error if the recursion is too deep.

//* cs: GEC AEC
// g-memory: {x;100, a:(){console.log("a")}} // global execution context
// a-memory: {x: 34} // a execution context

console.log(x); // output: undefined

var x = 100;

console.log(x); // output: 100
a(); // output: a,34

function a() {
    var x = 34;
    console.log("a", x);
}

a(); // output: a,34


