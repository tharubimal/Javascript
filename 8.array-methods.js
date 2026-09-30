//* array methods - methods that can be used to manipulate arrays
//! push, pop, unshift, shift, join, slice, splice, ...
//! forEach, map, filter, reduce

const numbers = [34, 56, 78, 90, 12];
//* forEach - executes a provided function once for each array element
// array.forEach(callback)
const callback = () => {
    console.log("callback");
};
numbers.forEach(callback); // will return "callback" 5 times

//!
const callback2 = (value, index, array) => {
    console.log(value, index, array);
}
numbers.forEach(callback2); // will return the value, index and array for each element

//!
numbers.forEach((value, index, array) => {
    console.log(value, index, array);
}); // will return the value, index and array for each element

//! map - creates a new array with the results of calling a provided function on every element in the calling array
// transformation of the array
numbers.map((value) => {
console.log(value);
});

const result = numbers.map((value) => {
    return value * 2;
}); // will return a new array with the values multiplied by 2

console.log(numbers); // will return [34, 56, 78, 90, 12]
console.log(result); // will return [68, 112, 156, 180, 24]

const users = [
    {
        name: "Bimal",
        email:"bimal@example.com",
    },
    {
        name: "Sita",
        email:"sita@example.com",
    },
    {
        name: "Ram",
        email:"ram@example.com",
    },
];

const result2 = users.map((user) => {
    return user.email;
}); // will return a new array with the email of each user

console.log(result2); // will return ["bimal@example.com", "sita@example.com", "ram@example.com"]

//! filter - creates a new array with all elements that pass the test implemented by the provided function
//* return new array
const even = numbers.filter((num) => {
    if (num % 2 === 0) {
        return true;
    }

}); // will return a new array with the even numbers

//* const even = numbers.filter((num) => num % 2 === 0); // will return a new array with the even numbers
//* in filter their is no undefined value, if the condition is not met it will not be included in the new array

console.log(even); // will return [34, 56, 78, 90, 12]


const students = [
    {
        name: "Bimal",
        email:"bimal@example.com",
        marks: 29,
    },
    {
        name: "Sita",
        email:"sita@example.com",
        marks: 92,

    },
    {
        name: "Ram",
        email:"ram@example.com",
        marks: 49,
    },
];

const result3 = students.filter((student) => {
    if (student.marks > 50) {
        return true;
    }
}); // will return a new array with the students who have marks greater than 50

const result4 = students.filter((students) => students.marks < 50); // will return a new array with the students who have marks less than 50

console.log(result3); // will return [{name: "Sita", email:"sita@example.com", marks: 92}]
console.log(result4); // will return [{name: "Bimal", email:"bimal@example.com", marks: 29}, {name: "Ram", email:"ram@example.com", marks: 49}]

//! reduce - executes a reducer function on each element of the array, resulting in a single output value
//* return single value
//? arr.reduce(callback, initialValue)
const total_sum = numbers.reduce((acc, value) => {
    return acc + value;
}, 0); // will return the sum of all the numbers in the array

console.log(total_sum); // will return 270

const total_marks = students.reduce((acc, student) => {
    return acc + student.marks;
}, 0); // will return the sum of all the marks of the students  

console.log(total_marks); // will return 170

const average_marks = students.reduce((acc, student) => {
    return acc + student.marks / students.length;
}, 0); // will return the average marks of the students

console.log(average_marks.toFixed(0)); // will return 56.67
//* tofixed - used to fixed the number of decimal places in a number

//! find - returns the value of the first element in the array that satisfies the provided testing function
// return single value */
const result5 = numbers.find((num) => {
    return num > 50;
}); // will return the first number that is greater than 50

console.log(result5); // will return 56
// if there is no element that satisfies the condition, it will return undefined


//! findIndex - returns the index of the first element in the array that satisfies the provided testing function
const result6 = numbers.findIndex((num) => {
    return num > 50;
}); // will return the index of the first number that is greater than 50

// if there is no element that satisfies the condition, it will return -1
console.log(result6); // will return 1

const result7 = students.find((student) => {
    return student.name === "Sita";
}); // will return the first student object that has marks greater than 50

console.log(result7); // will return {name: "Sita", email:"sita@example.com", marks: 92}

const result8 = students.findIndex((student) => {
    return student.name === "Bimal";
}); // will return the index of the first student object that has marks greater than 50

console.log(result8); // will return 0

//! every - tests whether all elements in the array pass the test implemented by the provided function
const result9 = numbers.every((num) => {
    return num > 10;
}); // will return false because not all numbers are greater than 50

// if all elements pass the test, it will return true
console.log(result9); // will return false

//! some - tests whether at least one element in the array passes the test implemented by the provided function
const result10 = numbers.some((num) => {
    return num > 50;
}); // will return true because at least one number is greater than 50

// if at least one element passes the test, it will return true
console.log(result10); // will return true

const cart = {
    user: 1,
    items: [
        {
            product: {
                id: 1,
                name: "Product 1",
                price: 1000,
            },
            quantity: 2,
        },
        {
            product: {
                id: 2,
                name: "Product 2",
                price: 500,
            },
            quantity: 4,
        },
        {
            product: {
                id: 3,
                name: "Product 3",
                price: 5000,
            },
            quantity: 1,
        },
    ],
};

const total_price = cart.items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
}, 0); // will return the total price of the cart

console.log(total_price); // will return 9000


const products = [
    {
        id: 1,
        name: "Product 1",
        price: 200,
        category: "category_A"
    },
     {
        id: 2,
        name: "Product 2",
        price: 200,
        category: "category_B"
    },
     {
        id: 3,
        name: "Product 3",
        price: 200,
        category: "category_A"
    },
     {
        id: 4,
        name: "Product 4",
        price: 1000,
        category: "category_C"
    },
];

//{category_A: 2, category_B: 1, category_C: 1}
const category_count = products.reduce((acc, product) => {
        if (!acc[product.category]) {
        acc[product.category]=1;
        return acc;
    } 
     acc[product.category] += 1;
    return acc;
}, {});

console.log(category_count); // will return {category_A: 2, category_B: 1, category_C: 1}

const students1 = [
    {
        name: "Bimal",
        email:"bimal@example.com",
        marks: [45, 67, 89, 98, 67],
    },
    {
        name: "Sita",
        email:"sita@example.com",
        marks: [92, 56, 87, 67, 67],

    },
    {
        name: "Ram",
        email:"ram@example.com",
        marks: [57, 65, 56, 60, 67],
    },
    {
        name: "Hari",
        email:"hari@example.com",
        marks: [50, 55, 30, 45, 38],
    }
];

//! calculate average marks of each student
// const average_marks1 = students1.map((student) => {
//     const total_marks = student.marks.reduce((acc, mark) => {
//         return (acc += mark);
//     }, 0)/ student.marks.length;

//     student.avg_mark = total_marks;
//     return student;

// });
// console.log(average_marks1); 

//! filter passed students: avg >= 50 -> passed students
// const passed_students = average_marks1.filter((student) => 
//      student.avg_mark >= 50
// );
// console.log(passed_students); 


//! passed students map to name array => ['Sita', 'Ram']
// const passed_students_names = passed_students.map((student) => student.name);
// console.log(passed_students_names);

const passed_students_names = students1.map((student) => {
    const total_marks = student.marks.reduce((acc, mark) => {
        return (acc += mark);
    }, 0)/ student.marks.length;

    student.avg_mark = total_marks;
    return student;

})
    .filter((student) => student.avg_mark >= 50)
    .map((student) => student.name);

console.log(passed_students_names); // will return ['Sita', 'Ram']

