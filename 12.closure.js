//! closure- A closure is a function that has access to its own scope, the outer function's scope, and the global scope. In other words, a closure allows a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared.


//* without class variables which one is used to private variables in JavaScript is closure. A closure is a function that has access to its own scope, the outer function's scope, and the global scope. In other words, a closure allows a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared.


function outer(){
    let x = 10;
    function inner(){
        console.log(x);
    }
    inner();
}

const a = outer(); // Output: 10
// a(); // Output: 10

//*
const counter = () => {
    let count = 0;


    return () => {
        count++;
        console.log(count);

        
    };
};

const increment0 = counter();
const increment1 = counter();
increment0(); // Output: 1
increment1(); // Output: 1
increment0(); // Output: 2
increment1(); // Output: 2
increment0(); // Output: 3
increment1(); // Output: 3
increment1(); // Output: 4

// //*
// const counter2 = () => {
//     let count = 0;

//     const increment = () => {
//         count++;
//         console.log(count);
//     }

//     const decrement = () => {
//         count--;
//         console.log(count);
//     };

//     return { increment, decrement };
// };

// const { increment, decrement } = counter2();
// increment(); // Output: 1
// increment(); // Output: 2
// increment(); // Output: 3
// decrement(); // Output: 2
// decrement(); // Output: 1
// decrement(); // Output: 0

const counter3 = () => {
    let count = 0;

    const increment = () => {
        count++;
        console.log(count);
    }

    const decrement = () => {
        count--;
        console.log(count);
    }

    const object = {
        increment,
        decrement
    };
    return object;
};

const counterObj = counter3();
counterObj.increment(); // Output: 1
counterObj.increment(); // Output: 2
counterObj.decrement(); // Output: 1
counterObj.increment(); // Output: 2

//! function factory - A function factory is a function that returns another function. The returned function can have access to the variables and parameters of the outer function, which allows it to create a new scope and maintain state between calls. Function factories are often used to create closures and can be useful for creating reusable functions with specific behavior.

const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
};

const add5 = add(5);
const add25 = add(25);
console.log(add5(10)); // Output: 15
console.log(add5(20)); // Output: 25
console.log(add25(5)); // Output: 30

//*
const createAccount = (acc_name, initial_blc) => {
    const deposit = (amount = 0) => {
        if (amount < 0) {
            console.log("Invalid amount. Please enter a positive value.");
        } else {
            console.log(`Depositing ${amount}`);
         initial_blc = initial_blc + amount;
        
        console.log("new balnce", initial_blc);
        return initial_blc;
    }
    }
    const withdraw = (amount) => {
        if (amount < 0) {
            console.log("Invalid amount. Please enter a positive value.");
        } else if (amount > initial_blc) {
            console.log("Insufficient balance. Please enter a smaller amount.");
        } else {
            console.log(`Withdrawing ${amount}`);
         initial_blc = initial_blc - amount;
        console.log(`Your current balance is ${initial_blc}`);
        return initial_blc;
        }
    }
    const blc_inquiry = () => {
        console.log(`Your current balance is ${initial_blc}`);
        return initial_blc;
    }
    return {
        deposit,
        withdraw,
        blc_inquiry
    }
};

const account1 = createAccount("Bimal", 1000);
account1.deposit(500);
account1.withdraw(-2000);
account1.blc_inquiry();

//! caching - Caching is a technique used to store frequently accessed data in a temporary storage area, called a cache, so that it can be quickly retrieved when needed. Caching can improve the performance of applications by reducing the time it takes to access data from slower storage mediums, such as databases or remote servers. In JavaScript, caching can be implemented using closures to store data in memory and avoid unnecessary computations or network requests.

const calculate = () => {
    let cache = {};

    return (num) => {
        if (cache[num]) {
            console.log(`Fetching from cache for ${num}`);
            return cache[num];
        }
        console.log("calculating result");
        cache[num] = num * 100;
        return cache[num];
    }
};

const cacheFunc = calculate();
console.log(cacheFunc(1)); // Output: calculating result 100
console.log(cacheFunc(2)); // Output: calculating result 200
console.log(cacheFunc(1)); // Output: Fetching from cache for 1 100
console.log(cacheFunc(3)); // Output: calculating result 300
console.log(cacheFunc(1)); // Output: Fetching from cache for 1 100

