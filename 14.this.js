//! this keyword - it has a different value or nature depending on the context where it is used like in a function, object, class, or global scope. It refers to the object that is executing the current function or code block. The value of this can be determined by how a function is called, and it can also be explicitly set using methods like call(), apply(), or bind().

// it is used to reuse the function in different objects and classes. It is also used to access the properties and methods of the current object or class. It is also used to refer to the current instance of a class or object.

function getName() {
    // console.log("Bimal");
    console.log(this.name);
    console.log(user.name);
}

const user = {
    name: "Bimal",
    // getName() {
    //     console.log(this.name);
    //     console.log(user.name);
    // }
    getName,
};

// user.getName(); // Output: Bimal Bimal

//! loosing context
let fn = user.getName;
fn(); // Output: undefined because the this keyword is not bound to the user object in this case. It is bound to the global object (window in browsers) or undefined in strict mode.

const user1 = {
    name: "John",
    getName,
};

user1.getName(); // Output: John Bimal


const user2 = {
    name: "Jane",
    getName()  {
        const arrowFn = () => {
            console.log(this);
            console.log(this.name);
        };

        // function regularFn() {   //* output: undefined because the this keyword is not bound to the user object in this case. It is bound to the global object (window in browsers) or undefined in strict mode.

        //     console.log(this);
        //     console.log(this.name);
        // }
        arrowFn();
    }
};

user2.getName(); // Output: Jane

//! function object - it is a special type of object that can be called as a function. It has properties and methods like any other object, but it can also be invoked as a function. Functions are first-class objects in JavaScript, which means they can be assigned to variables, passed as arguments to other functions, and returned from functions.
function js(){
    console.log("this is js function");
}

js.language = "JavaScript";
console.log(js.language);
console.log(js.name);

//! apply, call and bind methods
//* apply() - it is a method that is used to call a function with a given this value and arguments provided as an array (or an array-like object). It allows us to invoke a function with a specific context and pass arguments as an array. The syntax of the apply() method is: function.apply(thisArg, [argsArray])

function getName(city, age){
    console.log(this.name);
    console.log(city, age);
}

let user3 = {
    name: "Alice",
    email: "alice@example.com",
};

let user4 = {
    name: "Bob",
    email: "bob@example.com",
};

//* apply() - it is used to call a function with a given this value and arguments provided as an array (or an array-like object). It allows us to invoke a function with a specific context and pass arguments as an array. The syntax of the apply() method is: function.apply(thisArg, [argsArray])

console.log("---apply method---");
getName.apply(user3, ["New York", 25]); // Output: Alice New York 25
getName.apply(user4, ["Los Angeles", 30]); // Output: Bob Los Angeles 30

//* call() - it call immediately invokes the function with a given this value and arguments provided individually. It allows us to invoke a function with a specific context and pass arguments as separate values. The syntax of the call() method is: function.call(thisArg, arg1, arg2, ...)

console.log("---call method---");
getName.call(user3, "Dang", 25); // Output: Alice
getName.call(user4, "Dang", 30); // Output: Bob

//* bind() - it returns a new function that, when called, has its this keyword set to the provided value. It allows us to create a new function with a specific context without immediately invoking it. The syntax of the bind() method is: function.bind(thisArg, arg1, arg2, ...)

console.log("---bind method---");
const fn1 = getName.bind(user3, "ktm", 25);
fn1(); // Output: Alice
const fn2 = getName.bind(user4, "pokhara", 30);
fn2(); // Output: Bob


