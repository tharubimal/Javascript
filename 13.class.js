//! class - A class is a blueprint for creating objects.
// class class_name{
//     // properties and methods
// }

class User {
  name;
  email;
  // password;
  #password; // private property

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  getName() {
    // console.log("get name");
    return this.name;
  }
  getPassword() {
    return this.#password;
  }
  introduce() {
    console.log(this.name + " this is User class");
  }
}
const Bimal = new User("Bimal", "bimal@example.com", "password123");
console.log(Bimal); // Output: User { name: 'Bimal', email: 'bimal@example.com', #password: 'password123' }
// Bimal.getName(); // Output: get name
console.log(Bimal.name); // Output: Bimal
// console.log(Bimal.#password); //! Output: SyntaxError: Private field '#password' must be declared in an enclosing class

// Bimal.password = "newpassword"; // This will not change the private property #password
// console.log(Bimal.password); // Output: newpassword

console.log(Bimal.getName()); //* Output: Bimal
console.log(Bimal.getPassword()); //* Output: password123

Bimal.introduce(); //* Output: Bimal this is User class

//* encapsulation - it is used to hide the internal details of an object and only expose the necessary parts. In JavaScript, we can achieve encapsulation by using private properties and methods. Private properties and methods are only accessible within the class and cannot be accessed from outside the class. This helps to protect the internal state of an object and prevent it from being modified directly.

//* inheritance - it is used to create a new class from an existing class. The new class is called the subclass (or derived class), and the existing class is called the superclass (or base class). The subclass inherits all the properties and methods of the superclass, and it can also have its own properties and methods. Inheritance allows us to create a new class that is a modified version of an existing class.

//* polymorphism - it is used to override the methods of the superclass in the subclass. It allows us to define methods in the child class that have the same name as the methods in the parent class. When we call the method on an object of the child class, it will call the method defined in the child class, not the one in the parent class.

class Student extends User {
  //? extends keyword is used to create a subclass of a class. The subclass inherits all the properties and methods of the superclass. The subclass can also have its own properties and methods.

  // name; //*we don't need to declare public properties in the class body, we can declare them in the constructor
  // email;
  // #password;
  roll;
  faculty;
  batch;

  constructor(name, email, password, roll, faculty, batch) {
    // this.name = name;
    // this.email = email;
    // this.#password = password;
    super(name, email, password); //* super keyword is used to call the constructor of the superclass. It must be called before using 'this' keyword in the constructor of the subclass.

    this.roll = roll;
    this.faculty = faculty;
    this.batch = batch;
  }
  introduce() {
    console.log(this.name + " this is Student class");
  }
}

const student1 = new Student(
  "Bimal",
  "bimal@gmail.com",
  "123456",
  5,
  "Science",
  2020,
);
console.log(student1);
console.log(student1.getPassword()); //* Output: 123456
student1.introduce(); //* Output: Bimal this is Student class

//! abstraction - it is used to hide the implementation details of a class and only expose the necessary parts. In JavaScript, we can achieve abstraction by using abstract classes and interfaces. An abstract class is a class that cannot be instantiated, but it can be extended by other classes. An interface is a contract that defines the methods that a class must implement.

class Payment {
  pay() {
    console.log("Payment must be implemented");
  }
}

//esewa
class PaymentWithEswa extends Payment {
  pay(amount) {
    this.#sendRequest();
    this.#waitingForResponse();
    this.#connectWithEsewa();
    console.log(`Rs. ${amount} Payment successful`);
  }

  #connectWithEsewa() {
    console.log("Connecting with eSewa...");
  }

  #sendRequest() {
    console.log("Sending request to eSewa...");
  }
  #waitingForResponse() {
    console.log("Waiting for response from eSewa...");
  }
}

const payWithEsewa = new PaymentWithEswa();
payWithEsewa.pay(1000); //* Output: Connecting with eSewa... Rs. 1000 Payment successful

//Khalti
class PaymentWithKhalti extends Payment {
  pay(amount) {
    this.#sendRequest();
    this.#waitingForResponse();
    this.#connectWithKhalti();
    console.log(`Rs. ${amount} Payment successful`);
  }

  #connectWithKhalti() {
    console.log("Connecting with Khalti...");
  }
  #sendRequest() {
    console.log("Sending request to Khalti...");
  }
  #waitingForResponse() {
    console.log("Waiting for response from Khalti...");
  }
}

const payWithKhalti = new PaymentWithKhalti();
payWithKhalti.pay(1000); //* Output: Connecting with Khalti... Rs. 1000 Payment successful

//! getter & setter - it is used to get and set the value of a property. In JavaScript, we can use getter and setter methods to get and set the value of a property. A getter method is used to get the value of a property, and a setter method is used to set the value of a property.

class Circle {
  #radius; // private property
  constructor(radius) {
    this.#radius = radius;
  }
  // getArea(){
  //     return (Math.PI * this.#radius * this.#radius).toFixed(2);   //? toFIxed() for rounding the value to 2 decimal places
  // }
  get area() {
    return (Math.PI * this.#radius * this.#radius).toFixed(2); //? toFIxed() for rounding the value to 2 decimal places
  }

  // setRadius(r){
  //     this.#radius = r;
  // }
  set radius(r) {
    //set has single parameter, it is used to set the value of a property
    this.#radius = r;
  }
}

const circle = new Circle(5);
// console.log(circle.getArea()); //* Output: 78.53981633974483
console.log(circle.area); //* Output: 78.54
// circle.setRadius(10);
circle.radius = 10;
// console.log(circle.getArea()); //* Output: 314.1592653589793
console.log(circle.area); //* Output: 314.16

class User1 {
  name;
  email;
  // password;
  #password; // private property

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  get name() {
    // console.log("get name");
    return this.name;
  }
  get password() {
    return this.#password;
  }
  set password(password) {
    this.#password = password;
  }
}

const user = new User1("Bimal", "bimal@example.com", "password123");
console.log(user.name); // Output: Bimal
console.log(user.password); // Output: password123
user.password = "newpassword";
console.log(user.password); // Output: newpassword

// A, B, C

// c -> inherit A & B - multiple
// A -> B -> C - multi level

//! static method - it is used to define a method that belongs to the class, rather than an instance of the class. A static method can be called without creating an instance of the class. In JavaScript, we can use the static keyword to define a static method.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(5, 10)); //* Output: 15
console.log(MathUtils.add(20, 30)); //* Output: 50

console.log(MathUtils.subtract(10, 5)); //* Output: 5
console.log(MathUtils.subtract(20, 30)); //* Output: -10

console.log(MathUtils.multiply(5, 10)); //* Output: 50
console.log(MathUtils.multiply(20, 30)); //* Output: 600

//*
class CreateAccount {
  #accountName;
  #balance;
  minimumBalance = 500;

  constructor(accountName, initialBalance) {
    this.#accountName = accountName;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid amount. Please enter a positive value.");
    } else {
      console.log(`Depositing ${amount}`);
      this.#balance = this.#balance + amount;

      return `Your new balance is ${this.#balance }`;
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Invalid amount. Please enter a positive value.");
    } else if (this.#balance - amount < this.minimumBalance) {
      console.log("Insufficient balance. Please enter a smaller amount.");
    } else {
      console.log(`Withdrawing ${amount}`);
      this.#balance = this.#balance - amount;
      return `Your new balance is ${this.#balance }`;
    }
  }

  blc_inquiry() {
    console.log(`Your current balance is ${this.#balance}`);
    return `Your current balance is ${this.#balance }`;
  }

  get details() {
    return {
      accountName: this.#accountName,
      balance: this.#balance,
      minimumBalance: this.minimumBalance,
    };
  }
}

const account = new CreateAccount("Bimal", 1000);
console.log(account.deposit(500));
account.withdraw(1300);
account.blc_inquiry();
console.log(account.details);

