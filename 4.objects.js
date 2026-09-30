//! object - a collection of key-value pairs, where the keys are strings (or symbols) and the values can be any data type

//! new keyword /object constructor - used to create a new object
let obj1 = new Object({
    name: "John",
});
console.log(obj1);

//! object literal - a way to create an object using curly braces {} and defining key-value pairs inside
let user = {
    name: "John",
    email: "john@example.com",
    password: "123456",
    id: 1,
}; 

//! accessing object properties using dot notation
// dot notation - obj_name.key_name
const userName = user.name;
console.log(userName); // John
console.log(user.name); // john
console.log(user.email); // john@example.com
console.log(user.password); // 123456
console.log(user.id); // 1

//! bracket notation - obj_name["key_name"]
console.log(user["name"]);  //static key name // john
console.log(user["email"]); //static key name // john@example.com
console.log(user["password"]); //static key name // 123456
console.log(user["id"]); //static key name // 1

//! dynamic key name - using a variable to access an object property
let key = "name";
console.log(user.key); // dynamic key name // undefined
console.log(user["key"]); // dynamic key name // undefined
console.log(user[key]); // dynamic key name // john

//! adding new properties to an object 
user.age = 30; // dot notation
user.phone = "1234567890"; // dot notation
user["gender"] = "male"; // bracket notation
console.log(user); // { name: 'John', email: 'john@example.com', password: '123456', id: 1, age: 30,phone: '1234567890', gender: 'male' }

user["address"] = "tinkune, kathmandu"; // bracket notation
console.log(user); 

//! modifying existing properties of an object
user.name = "Jane"; // dot notation
user["email"] = "jane@example.com"; // bracket notation
console.log(user); // { name: 'Jane', email: 'jane@example.com', password: '123456', id: 1, age: 30, phone: '1234567890', gender: 'male' }

//! deleting properties from an object
delete user.password;
console.log(user); // { name: 'Jane', email: 'jane@example.com', id: 1, age: 30, phone: '1234567890', gender: 'male' }

//! object methods - functions that are properties of an object
console.log(Object.keys(user)); // returns an array of the keys of the object
console.log(Object.values(user)); // returns an array of the values of the object
console.log(Object.entries(user)); // returns an array of the key-value pairs of the object

//! seal - prevents the addition or removal of properties, but allows modification of existing properties
Object.seal(user);

//! freeze - prevents the addition, removal, or modification of properties
Object.freeze(user);