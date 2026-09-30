//! destucturing array

let user = {
    name: "John",
    email: "john@example.com",
    password: "123456",
};
let user2 = {
    name: "Jane",
    email: "jane@example.com",
    password: "654321",
};

// const name = user.name;
// const email = user.email;
// const password = user.password;

// const {name} = user;  // const name = user.name;

// const {name, email, password} = user;
// console.log(name, email, password);

const {name: user2Name, email: user2Email, password: user2Password} = user2;
console.log(user2Name, user2Email, user2Password);

let numbers = [12, 34, 56, 78, 90];
// let [a, b] = numbers; // a = 12, b = 34
// console.log(a, b);


//! rest operator - used to collect the remaining elements into an array
//? ...rest operator is used to collect the remaining elements into an array
const { name, ...rest} = user;
console.log(name);
console.log(rest);

let [a, b, ...c] = numbers; // a = 12, b = 34, c = [56, 78, 90]
console.log(c);

//! rest paramenter - used to collect the remaining arguments into an array
const totalSum = (...numbers) => {
    return numbers.reduce((acc, numbers) => {
        return acc + numbers;
    }, 0);
}
console.log(totalSum(12 + 2)); // will return 14
console.log(totalSum(12, 34, 56, 78, 90)); // will return 270

//todo: spread operator - used to spread the elements of an array or object into a new array or object
// ...
let numbers1 = [12, 34, 56];
let numbers2 = [ ...numbers1, 78, 90, 100,12];
//const numbers2 = new Set([...numbers1, 78, 90, 100,12]); // will remove duplicate values
console.log(numbers2); // [12, 34, 56, 78, 90, 100]


const obj1 = {
    a : 'a',
    b : 'b',
}
const obj2 = {
    ...obj1,
    c: 'c',
    a: '1' // will overwrite the value of a in obj1
}
console.log(obj2); // { a: '1', b: 'b', c: 'c' }



