//! control flow - the order in which statements are executed in a program

//! control statements - statments that control ,alter or modify the flow of execution of a program

//! conditional statements - statements that execute a block of code based on a condition
// if 
const age = 18;
if(age >= 18){
    console.log("You are eligible to vote"); // will return "You are eligible to vote"
}

// if else
const marks = 75;
if(marks >= 90){
    console.log("A grade"); // will return "A grade"
}else{
    console.log("B grade"); // will return "B grade"
}

// if else ladder
const score = 85;
if(score >= 90){
    console.log("A+ grade"); // will return "A grade"
} else if (score >= 80){
    console.log("A grade"); // will return "A grade"
}else if (score >= 70){
    console.log("B grade"); // will return "B grade"
} else if (score >= 60){
    console.log("C grade"); // will return "C grade"
} else{
    console.log("D grade"); // will return "D grade"
}

// switch
const day = 8;
switch(day){
    case 1: {
        console.log("Sunday"); // will return "Sunday"
        break;
    }
    case 2: {
        console.log("Monday"); // will return "Monday"
        break;
    }
    case 3: {
        console.log("Tuesday"); // will return "Tuesday"
        break;
    }
    case 4: {
        console.log("Wednesday"); // will return "Wednesday"
        break;
    }
    case 5: {
        console.log("Thursday"); // will return "Thursday"
        break;
    }
    case 6: {
        console.log("Friday"); // will return "Friday"
        break;
    }   
    case 7: {
        console.log("Saturday"); // will return "Saturday"
        break;
    }
    default: {
        console.log("Enter a valid day"); // will return "Invalid day"
    }
}

//! day 1 & 7 - weekend
//! day 2-6 - workday

const day1 = 7;
switch(day1){
    case 1:{
        console.log("Weekend"); // will return "Weekend"
        break;
    }
    case 2:{
        console.log("Workday"); // will return "Workday"
        break;
    }
    case 3:{
        console.log("Workday"); // will return "Workday"
        break;
    }
    case 4:{
        console.log("Workday"); // will return "Workday"
        break;
    }
    case 5:{
        console.log("Workday"); // will return "Workday"
        break;
    }
    case 6:{
        console.log("Workday"); // will return "Workday"
        break;
    }
    case 7:{
        console.log("Weekend"); // will return "Weekend"
        break;
    }
    default:{
        console.log("Enter a valid day"); // will return "Invalid day"
    }
}

//! switch with multiple cases
const day2 = 3;
switch(day2){
    case 1:
    case 7:{
        console.log("Weekend"); // will return "Weekend"
        break;
    }

    case 2:
    case 3:
    case 4:
    case 5:
    case 6:{
        console.log("Workday"); // will return "Workday"
        break;
    }
    default:{
        console.log("Enter a valid day"); // will return "Invalid day"
    }
}



//! iterative / loop - repeat a block of code multiple times
//* while
let i = 1;
console.log("while loop");
while(i <= 10){
    console.log(i);
    i++;
}

//* do while
let j = 1;
console.log("do while loop");
do{
    console.log(j);
    j++;
}while(j <=10);

//* for
console.log("for loop");
for(k = 1; k <= 10; k++){
    console.log(k);
}

//! for in - loop through the properties of an object
//* object
let user = {
    name: "Bimal",
    age: 22,
    city: "Kathmandu"
};
for(let key in user){
    console.log(key,user[key]); // will return "name", "age", "city"
}

//! convert object to array
for(let value of Object.values(user)){
    console.log(value); // will return "Bimal", 22, "Kathmandu"
}

//! convert object to array in key value pair
for(let value of Object.entries(user)){
    console.log(value); // will return "Bimal", 22, "Kathmandu"
}

//! for of - loop through the values of an iterable object
//* array & strings
const numbers = [34, 56, 78, 90, 12];
for (let i =0; i<numbers.length; i++){
    console.log(numbers[i]); // will return 34, 56, 78, 90, 12
}

for (let num of numbers){
    console.log(num); // will return 34, 56, 78, 90, 12
}

//! strings
const str = "Hello World";
for (let value of str){
    console.log(value); // will return H, e, l, l, o,  , W, o, r, l, d
}

//! gives the index of the string
for (let key in str){
    console.log(key, str[key]); // will return 0 H, 1 e, 2 l, 3 l, 4 o, 5  , 6 W, 7 o, 8 r, 9 l, 10 d
}

//!jump keywords - used to jump to a specific part of the code
//*break - used to break out of a loop or switch statement
console.log("break statement");
for(let i = 1; i <= 10; i++){
    if(i === 5){
        break; // will break the loop when i is 5
    }
    console.log(i); // will return 1, 2, 3, 4
}

//* continue - used to skip the current iteration of a loop and continue with the next iteration
console.log("continue statement");
for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue; // will skip the iteration when i is 5
    }
    console.log(i); // will return 1, 2, 3, 4, 6, 7, 8, 9, 10
}

//* return - used to exit from a function and return a value
console.log("return statement");
function add(a, b){
    return a + b; // will return the sum of a and b
}
console.log(add(3, 5)); // will return 8


