//* async - An asynchronous function is a function that can pause its execution and resume it at a later time, allowing other code to run in the meantime.

//? syncronous - this code executes in a single thread, one line at a time, and each line must finish executing before the next line can start. It can cause blocking and delays in the execution of code, especially when dealing with I/O operations or long-running tasks.
// console.log("Start");
// console.log("processing...");
// console.log("End");


//* setTimeout(callback, timer, ...arguments)
console.log("Start");

setTimeout((a, b) => {
    console.log("processing...", a, b);
}, 2000, "a", 123);

console.log("End");

//it gives the ID of the timeout, which can be used to cancel the timeout using clearTimeout(id)
const id = setTimeout(() => {
    console.log("processing...");
  },2000,);

clearTimeout(id); // it cancels the timeout with the given ID
console.log(id); // Output: 1 (the ID of the timeout)

//! setInterval(callback, timer, ...arguments) - it is used to execute a function repeatedly at a specified interval of time. It returns an ID that can be used to cancel the interval using clearInterval(id)

console.log("Start");
let count = 0;
const intervalId = setInterval(() => {
    // console.log("processing...")  // Output: processing... processing... processing... processing...   like loop
    console.log(count);
    if (count === 10) {
        clearInterval(intervalId); // it cancels the interval with the given ID
    }
    count++;
}, 200);
console.log("end");

//* todo: function countdown(time_in_seconds) => countdown 
// countdown(10)
// HH:MM:SS
// 00:00:10
// 00:00:09
//.
// 00:00:00
const countdown = (seconds) => {
   //3700
   const intervalId = setInterval(() => {//* total hours
   //* total hours
   const hours = Math.floor(seconds / 3600);  // Math.floor in simple words it rounds down the number to the nearest integer. For example, Math.floor(3.7) will return 3, and Math.floor(-3.7) will return -4.
   //* total minutes form remaining seconds
//    const remainingSec = seconds % 3600;
   const minutes = Math.floor((seconds % 3600) / 60);
   //* remaining seconds after hours are calculated
    const remainingSec = seconds % 60;

    //padStart syntax: toString().padStart(targetLength, [padString])
   const format = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSec.toString().padStart(2, '0')}`;
   console.log(format);

   if (seconds === 0) {
       clearInterval(intervalId);
       console.log("Countdown finished!");
   }

   seconds--;
   }, 1000);
};

countdown(20);

//let x = 1;
// console.log(String(x).padStart(2, '0')); // Output: "01"

//* api req
//callback hell in simple words is a situation where multiple nested callbacks are used, making the code difficult to read and maintain. It can lead to a pyramid-like structure of code, where each callback is nested within another callback, resulting in a complex and hard-to-follow flow of execution. This can make it challenging to handle errors, manage state, and understand the overall logic of the code. Callback hell can be mitigated by using techniques such as Promises or async/await, which provide a more structured and readable way to handle asynchronous operations.
const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      _id: 110,
      name: "John Doe",
      email: "john@gmail.com",
    };

    callback(null, {
      message: "user fetched",
      data: user,
    });
    // callback({ message: "user fetch failed" });
  }, 4000);
};

const getPost = (userId, callback) => {
  setTimeout(() => {
    const posts = [
      {
        _id: 1,
        userId: userId,
        title: "Post 1",
      },
      {
        _id: 2,
        userId: userId,
        title: "Post 2",
      },
    ];

    callback(null, {
      message: `posts fetched`,
      data: posts,
    });
    // callback({ message: "post fetch failed" });
  }, 3000);
};

const getComments = (postId, callback) => {
  setTimeout(() => {
    callback(null, {
      message: "comments fetched",
      data: [
        {
          _id: 1,
          postId,
          text: "comment 1",
        },
        {
          _id: 2,
          postId,
          text: "comment 2",
        },
      ],
    });
  }, 2000);
};

getUser((error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
  getPost(data.data._id, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    getComments(data.data[1]._id, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(data);
    });
  });
});

//! callback hell
//* pyramid of doom
//todo: solution promise

// const parent = (cb) => {
//   cb(10);
// };

// const callback = (a) => {
//   console.log("cb", a);
// };

// parent((a) => {
//   console.log("cb", a);
// });
// parent((a) => {
//   console.log("cb", a);
// });