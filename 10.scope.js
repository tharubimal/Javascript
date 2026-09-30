//! scope - visibility or accessibility of a variables
// var is function scoped, let and const are block scoped
// in block var  can accessed outside the block but let and const cannot be accessed outside the block
// in function var, let, const cannot be accessed outside the function 

//* global scope - variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.
var global_var = "I am a global variable";
let global_let = "I am a global variable";
const global_const = "I am a global variable";

//* block scope - variables declared inside a block (e.g. inside a function, loop, or if statement) have block scope and can only be accessed within that block.
if (true) {
    console.log("-- Inside block scope --");

    var block_var = "I am a block variable"; 
    let block_let = "I am a block variable";
    const block_const = "I am a block variable"; 


    // console.log(block_var); //? I am a block variable
    // console.log(block_let); //? I am a block variable
    // console.log(block_const); //? I am a block variable


    // global_var = 1000;



    // console.log(global_var); //? I am a global variable
    // console.log(global_let); //? I am a global variable
    // console.log(global_const); //? I am a global variable
}

// console.log(block_var); //? I am a block variable 
// console.log(block_let); //! ReferenceError: block_let is not defined 
// console.log(block_const); //! ReferenceError: block_const is not defined 

//* function scope - variables declared inside a function have function scope and can only be accessed within that function. */
function scope(){
    console.log("-- Inside function scope --");

    // console.log(block_var); //? i am a block variable
    // console.log(block_let); //! ReferenceError: block_let is not defined
    // console.log(block_const); //! ReferenceError: block_const is not defined


    var function_var = "I am a function variable";
    let function_let = "I am a function variable";
    const function_const = "I am a function variable";

    // console.log(global_var); //? I am a global variable
    // console.log(global_let); //? I am a global variable
    // console.log(global_const); //? I am a global variable

    // console.log(function_var); //? I am a function variable
    // console.log(function_let); //? I am a function variable
    // console.log(function_const); //? I am a function variable
}

// console.log(function_var); //! ReferenceError: function_var is not defined
// console.log(function_let); //! ReferenceError: function_let is not defined
// console.log(function_const); //! ReferenceError: function_const is not defined
scope();


//* lexical scope - variables declared in a parent scope can be accessed by child scopes, but not vice versa. This is also known as static scope.
function parent (){
    let y = 20;
    function child(){
        let x = 10;
        console.log(x); //? 10
        console.log(y); //? 20
         function children() {
           console.log(x, y);
         }
         children();
    }
   
    child();
}
parent(); 

const outer = () => {
    let x = 10;
    let y = 20;
    const inner = () => {
        // let y = 20;

        console.log(x); //? 10
        console.log(y); //? 20
        y = 30;
        x = 40;
    };
    inner();
    console.log(x); //? 40
    console.log(y); //? 30
    console.log(y); //? referenceError: y is not defined
}
outer();

let x = 100;
if (true) {
    let x = 20;
    if (true) {
        console.log(x); //? 20
        x = 30;
    }
    console.log(x); //? 30

}
console.log(x); //? 100



//* module scope - variables declared in a module (e.g. using the `export` keyword) have module scope and can only be accessed within that module.



// todo: scope chain - the order in which variables are looked up in the scope hierarchy.
function parent() {
//   let x = 20;
  function child() {
    // let x = 10;
    // console.log(x); //? 10
    // console.log(y); //? 20
    function children() {
        let x = 30;
    //   console.log(x, y);
    // console.log(x); //? 30
    }
    children();
  }

  child();
}
parent(); 


