//! promise
// -> object representing the eventual completion or failure of an asynchronous operation

//* states of promise
// 1. pending
// 2. fulfilled
// 3. rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // change to true to test rejection
    if (error) {
      reject({ message: "something went wrong" });
    } else {
      resolve({ success: "operation completed successfully" });
    }
  }, 2000);
});

// console.log(promise);

//! handling promise
// console.log("before promise");

// promise
//   .then((data) => {
//     console.log("promise resolved");
//     console.log(data); // success
//     console.log(promise); // Promise { <fulfilled>: 'success' } because promise is already resolved
//   })
//   .catch((error) => {
//     console.log("promise rejected");
//     console.log(error); // error
//     console.log(promise); // Promise { <rejected>: 'something went wrong' } because promise is already rejected
//   })
//   .finally(() => {
//     console.log("promise completed finally");
//   });

// console.log("after promise");

//* fetchUser
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = false; // change to true to test rejection
      const error = { message: "user fetch failed" };
      const data = {
        message: "user fetched",
        data: {
          _id: 110,
          name: "John Doe",
          email: "john.doe@example.com",
        },
      };

      if (isError) {
        reject(error);
      } else {
        resolve(data);
      }
    }, 4000);
  });
};

//? handling user promise
// const userPromise = fetchUser();
// userPromise.then()

//*
// fetchUser()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//* fetchPost
const fetchPost = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = false; // change to true to test rejection
      const error = { message: "post fetch failed" };
      const data = {
        message: "posts fetched",
        data: [
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
        ],
      };
      if (isError) {
        reject(error);
      } else {
        resolve(data);
      }
    }, 3000);
  });
};

//? handling post promise
// fetchPost()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//* fetchComments
const fetchComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = false; // change to true to test rejection
      const error = { message: "comments fetch failed" };
      const data = {
        message: "comments fetched",
        data: [
          {
            _id: 1,
            postId: postId,
            text: "Comment 1",
          },
          {
            _id: 2,
            postId: postId,
            text: "Comment 2",
          },
        ],
      };
      if (isError) {
        reject(error);
      } else {
        resolve(data);
      }
    }, 2000);
  });
};

//! promise chaining
// fetchUser()
//   .then((data) => {
//     console.log(data);
//     return fetchPost(data.data._id);
//   })
//   // post is the result of the previous promise (fetchPost)
//   .then((post) => {
//     console.log(post);
//     return fetchComments(post.data[1]._id);
//   })
//   //comments is the result of the previous promise (fetchComments)
//   .then((comments) => {
//     console.log(comments);
//   })
//   //catch is used to handle any error that occurs in any of the promises in the chain
//   .catch((error) => {
//     console.log(error);
//   });

//* fetch API
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//  .then((response) => {
//   // console.log(response);
//   return response.json();
//  })
//  .then((todos) => {
//   console.log(todos);
//  })

//  .catch((error) => {
//   console.log(error);
//  });

//! async await
// async function always returns a promise

async function fetchData() {
  try {
    // try catch is used to handle any error that occurs in the async function
    // its for .then
    const user = await fetchUser();
    console.log(user);
    const post = await fetchPost(user.data._id);
    console.log(post);
  } catch (error) {
    // catch is for .catch
    console.log(error);
  } finally {
    console.log("fetchData completed");
  }
}

fetchData();

//*
const fetchData2 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const todos = await response.json();
    console.log(todos);
  } catch (error) {
    console.log(error);
  }
};
fetchData2();

//! promise.all
// allows you to run multiple promises in parallel and wait for all of them to complete before proceeding
//! promise.allSettled
// allows you to run multiple promises in parallel and wait for all of them to complete, regardless of whether they are fulfilled or rejected
//! promise.race
// allows you to run multiple promises in parallel and wait for the first one to complete before proceeding
//! promise.any
// allows you to run multiple promises in parallel and wait for the first one to be fulfilled before proceeding, ignoring any rejected promises

async function fetchData3() {
  try{
    const userPromise = fetchUser();
    const postPromise = fetchPost(110);
    //const [userPromise, postPromise] = await Promise.all([userPromise, postPromise]);
    // const res = await Promise.allSettled([userPromise, postPromise]);
    // const res = await Promise.race([userPromise, postPromise]);
    const res = await Promise.any([userPromise, postPromise]);
    // console.log(userRes, postRes);
    console.log(res);
    // console.log(userPromise);
        // console.log(postPromise);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("fetchData3 completed");
  }
}
fetchData3();